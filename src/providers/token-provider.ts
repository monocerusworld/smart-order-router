import { Token } from '@uniswap/sdk-core';
import _ from 'lodash';

import { IERC20Metadata__factory } from '../types/v3/factories/IERC20Metadata__factory';
import { ChainId, log, WRAPPED_NATIVE_CURRENCY } from '../util';

import { IMulticallProvider } from './multicall-provider';
import { ProviderConfig } from './provider';

/**
 * Provider for getting token data.
 *
 * @export
 * @interface ITokenProvider
 */
export interface ITokenProvider {
  /**
   * Gets the token at each address. Any addresses that are not valid ERC-20 are ignored.
   *
   * @param addresses The token addresses to get.
   * @param [providerConfig] The provider config.
   * @returns A token accessor with methods for accessing the tokens.
   */
  getTokens(
    addresses: string[],
    providerConfig?: ProviderConfig
  ): Promise<TokenAccessor>;
}

export type TokenAccessor = {
  getTokenByAddress(address: string): Token | undefined;
  getTokenBySymbol(symbol: string): Token | undefined;
  getAllTokens: () => Token[];
};

// Some well known tokens on each chain for seeding cache / testing.
export const USDC_MAINNET = new Token(
  ChainId.MAINNET,
  '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  6,
  'USDC',
  'USD//C'
);
export const USDT_MAINNET = new Token(
  ChainId.MAINNET,
  '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  6,
  'USDT',
  'Tether USD'
);

// Manta Testnet Tokens
export const USDC_MANTA_TESTNET = new Token(
  ChainId.MANTA_TESTNET,
  '0x8cDdB93BD8845aE509a6eC1e29836852A9b41b10',
  18,
  'USDC',
  'USD Coin'
);

export const USDT_MANTA_TESTNET = new Token(
  ChainId.MANTA_TESTNET,
  '0xC5a38c67077B713d6f28097B3C10Cc7Cdd3433F9',
  6,
  'USDT',
  'Tether USD'
);

export const WMANTA_MANTA_TESTNET = new Token(
  ChainId.MANTA_TESTNET,
  '0x226E0D9fBDE51708fC36Bb4E5d1af9728A285cF4',
  18,
  'WMANTA',
  'Wrapped MANTA'
);

// Manta Tokens
export const USDT_MANTA = new Token(
  ChainId.MANTA,
  '0xf417F5A458eC102B90352F697D6e2Ac3A3d2851f',
  6,
  'USDT',
  'TetherToken'
);
export const USDC_MANTA = new Token(
  ChainId.MANTA,
  '0xb73603C5d87fA094B7314C74ACE2e64D165016fb',
  6,
  'USDC',
  'USD Coin'
);

export class TokenProvider implements ITokenProvider {
  constructor(
    private chainId: ChainId,
    protected multicall2Provider: IMulticallProvider
  ) { }

  public async getTokens(
    _addresses: string[],
    providerConfig?: ProviderConfig
  ): Promise<TokenAccessor> {
    const addressToToken: { [address: string]: Token } = {};
    const symbolToToken: { [symbol: string]: Token } = {};

    const addresses = _(_addresses)
      .map((address) => address.toLowerCase())
      .uniq()
      .value();

    if (addresses.length > 0) {
      const [symbolsResult, decimalsResult] = await Promise.all([
        this.multicall2Provider.callSameFunctionOnMultipleContracts<
          undefined,
          [string]
        >({
          addresses,
          contractInterface: IERC20Metadata__factory.createInterface(),
          functionName: 'symbol',
          providerConfig,
        }),
        this.multicall2Provider.callSameFunctionOnMultipleContracts<
          undefined,
          [number]
        >({
          addresses,
          contractInterface: IERC20Metadata__factory.createInterface(),
          functionName: 'decimals',
          providerConfig,
        }),
      ]);

      const { results: symbols } = symbolsResult;
      const { results: decimals } = decimalsResult;

      for (let i = 0; i < addresses.length; i++) {
        const address = addresses[i]!;

        const symbolResult = symbols[i];
        const decimalResult = decimals[i];

        if (!symbolResult?.success || !decimalResult?.success) {
          log.info(
            {
              symbolResult,
              decimalResult,
            },
            `Dropping token with address ${address} as symbol or decimal are invalid`
          );
          continue;
        }

        const symbol = symbolResult.result[0]!;
        const decimal = decimalResult.result[0]!;

        addressToToken[address.toLowerCase()] = new Token(
          this.chainId,
          address,
          decimal,
          symbol
        );
        symbolToToken[symbol.toLowerCase()] =
          addressToToken[address.toLowerCase()]!;
      }

      log.info(
        `Got token symbol and decimals for ${Object.values(addressToToken).length
        } out of ${addresses.length} tokens on-chain ${providerConfig ? `as of: ${providerConfig?.blockNumber}` : ''
        }`
      );
    }

    return {
      getTokenByAddress: (address: string): Token | undefined => {
        return addressToToken[address.toLowerCase()];
      },
      getTokenBySymbol: (symbol: string): Token | undefined => {
        return symbolToToken[symbol.toLowerCase()];
      },
      getAllTokens: (): Token[] => {
        return Object.values(addressToToken);
      },
    };
  }
}

export const USDT_ON = (chainId: ChainId): Token => {
  switch (chainId) {
    case ChainId.MAINNET:
      return USDT_MAINNET;
    case ChainId.MANTA_TESTNET:
      return USDT_MANTA_TESTNET;
    case ChainId.MANTA:
      return USDT_MANTA;
    default:
      throw new Error(`Chain id: ${chainId} not supported`);
  }
};

export const USDC_ON = (chainId: ChainId): Token => {
  switch (chainId) {
    case ChainId.MAINNET:
      return USDC_MAINNET;
    case ChainId.MANTA_TESTNET:
      return USDC_MANTA_TESTNET;
    case ChainId.MANTA:
      return USDC_MANTA;
    default:
      throw new Error(`Chain id: ${chainId} not supported`);
  }
};

export const WNATIVE_ON = (chainId: ChainId): Token => {
  return WRAPPED_NATIVE_CURRENCY[chainId];
};
