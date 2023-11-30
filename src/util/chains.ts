import { Currency, Ether, NativeCurrency, Token } from '@uniswap/sdk-core';

export enum ChainId {
  MAINNET = 1,
  MANTA = 169,
  MANTA_TESTNET = 3441005,
}

// WIP: Gnosis, Moonbeam
export const SUPPORTED_CHAINS: ChainId[] = [
  ChainId.MAINNET,
  ChainId.MANTA,
  ChainId.MANTA_TESTNET
];

export const V2_SUPPORTED = [
  ChainId.MAINNET,
];

export const HAS_L1_FEE = [
  ChainId.MANTA,
  ChainId.MANTA_TESTNET
];

export const NETWORKS_WITH_SAME_UNISWAP_ADDRESSES = [
  ChainId.MAINNET,
];

export const ID_TO_CHAIN_ID = (id: number): ChainId => {
  switch (id) {
    case 1:
      return ChainId.MAINNET;
    case 169:
      return ChainId.MANTA;
    case 3441005:
      return ChainId.MANTA_TESTNET;
    default:
      throw new Error(`Unknown chain id: ${id}`);
  }
};

export enum ChainName {
  MAINNET = 'mainnet',
  MANTA = 'manta',
  MANTA_TESTNET = 'manta-testnet',
}

export enum NativeCurrencyName {
  // Strings match input for CLI
  ETHER = 'ETH',
  MANTA = 'ETH',
  MANTA_TESTNET = 'MANTA',
}
export const NATIVE_NAMES_BY_ID: { [chainId: number]: string[] } = {
  [ChainId.MAINNET]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
  [ChainId.MANTA]: [
    'ETH',
    'ETHER',
    '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  ],
};

export const NATIVE_CURRENCY: { [chainId: number]: NativeCurrencyName } = {
  [ChainId.MAINNET]: NativeCurrencyName.ETHER,
  [ChainId.MANTA]: NativeCurrencyName.ETHER,
  [ChainId.MANTA_TESTNET]: NativeCurrencyName.MANTA_TESTNET,
};

export const ID_TO_NETWORK_NAME = (id: number): ChainName => {
  switch (id) {
    case 1:
      return ChainName.MAINNET;
    case 169:
      return ChainName.MANTA;
    case 3441005:
      return ChainName.MANTA_TESTNET;
    default:
      throw new Error(`Unknown chain id: ${id}`);
  }
};

export const CHAIN_IDS_LIST = Object.values(ChainId).map((c) =>
  c.toString()
) as string[];

export const ID_TO_PROVIDER = (id: ChainId): string => {
  switch (id) {
    case ChainId.MAINNET:
      return process.env.JSON_RPC_PROVIDER!;
    case ChainId.MANTA:
      return process.env.JSON_RPC_PROVIDER_MANTA!;
    case ChainId.MANTA_TESTNET:
      return process.env.JSON_RPC_PROVIDER_MANTA_TESTNET!;
    default:
      throw new Error(`Chain id: ${id} not supported`);
  }
};

export const WRAPPED_NATIVE_CURRENCY: { [chainId in ChainId]: Token } = {
  [ChainId.MAINNET]: new Token(
    1,
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.MANTA]: new Token(
    169,
    '0x0Dc808adcE2099A9F62AA87D9670745AbA741746',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.MANTA_TESTNET]: new Token(
    ChainId.MANTA_TESTNET,
    '0x226E0D9fBDE51708fC36Bb4E5d1af9728A285cF4',
    18,
    'WMANTA',
    'Wrapped MANTA'
  ),
};

function isMantaTestnet(chainId: number): chainId is ChainId.MANTA {
  return chainId === ChainId.MANTA;
}

class MantaTestnetNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isMantaTestnet(this.chainId)) throw new Error('Not Manta Testnet');
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isMantaTestnet(chainId)) throw new Error('Not Manta Testnet');
    super(chainId, 18, 'MANTA', 'MANTA');
  }
}

export class ExtendedEther extends Ether {
  public get wrapped(): Token {
    if (this.chainId in WRAPPED_NATIVE_CURRENCY)
      return WRAPPED_NATIVE_CURRENCY[this.chainId as ChainId];
    throw new Error('Unsupported chain ID');
  }

  private static _cachedExtendedEther: { [chainId: number]: NativeCurrency } =
    {};

  public static onChain(chainId: number): ExtendedEther {
    return (
      this._cachedExtendedEther[chainId] ??
      (this._cachedExtendedEther[chainId] = new ExtendedEther(chainId))
    );
  }
}

const cachedNativeCurrency: { [chainId: number]: NativeCurrency } = {};
export function nativeOnChain(chainId: number): NativeCurrency {
  if (cachedNativeCurrency[chainId] != undefined)
    return cachedNativeCurrency[chainId]!;
  if (isMantaTestnet(chainId))
    cachedNativeCurrency[chainId] = new MantaTestnetNativeCurrency(chainId);
  else cachedNativeCurrency[chainId] = ExtendedEther.onChain(chainId);

  return cachedNativeCurrency[chainId]!;
}
