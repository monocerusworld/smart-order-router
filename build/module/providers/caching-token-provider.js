import { Token } from '@uniswap/sdk-core';
import _ from 'lodash';
import { ChainId, log, WRAPPED_NATIVE_CURRENCY } from '../util';
import { BTC_BSC, BTC_FANTOM, BTC_GNOSIS, BTC_KLAYTN, BUSD_BSC, CELO, CELO_ALFAJORES, CEUR_CELO, CUSD_CELO, CUSD_CELO_ALFAJORES, DAI_ARBITRUM, DAI_ARBITRUM_RINKEBY, DAI_BSC, DAI_CELO, DAI_CELO_ALFAJORES, DAI_FANTOM, DAI_GNOSIS, DAI_KLAYTN, DAI_MAINNET, DAI_MOONBEAM, DAI_OPTIMISM, DAI_OPTIMISM_GOERLI, DAI_OPTIMISTIC_KOVAN, DAI_POLYGON_MUMBAI, DAI_RINKEBY_1, DAI_RINKEBY_2, ETH_BSC, ETH_FANTOM, ETH_GNOSIS, ETH_KLAYTN, UNI_ARBITRUM_RINKEBY, USDC_ARBITRUM, USDC_ARBITRUM_GOERLI, USDC_ARBITRUM_RINKEBY, USDC_BSC, USDC_ETHEREUM_GNOSIS, USDC_FANTOM, USDC_GNOSIS, USDC_KLAYTN, USDC_MAINNET, USDC_MOONBEAM, USDC_OPTIMISM, USDC_OPTIMISM_GOERLI, USDC_OPTIMISTIC_KOVAN, USDC_POLYGON, USDT_ARBITRUM, USDT_ARBITRUM_RINKEBY, USDT_BSC, USDT_FANTOM, USDT_GNOSIS, USDT_KLAYTN, USDT_MAINNET, USDT_OPTIMISM, USDT_OPTIMISM_GOERLI, USDT_OPTIMISTIC_KOVAN, WBTC_ARBITRUM, WBTC_MAINNET, WBTC_MOONBEAM, WBTC_OPTIMISM, WBTC_OPTIMISM_GOERLI, WBTC_OPTIMISTIC_KOVAN, WMATIC_POLYGON, WMATIC_POLYGON_MUMBAI, } from './token-provider';
// These tokens will added to the Token cache on initialization.
export const CACHE_SEED_TOKENS = {
    [ChainId.MAINNET]: {
        WETH: WRAPPED_NATIVE_CURRENCY[ChainId.MAINNET],
        USDC: USDC_MAINNET,
        USDT: USDT_MAINNET,
        WBTC: WBTC_MAINNET,
        DAI: DAI_MAINNET,
        // This token stores its symbol as bytes32, therefore can not be fetched on-chain using
        // our token providers.
        // This workaround adds it to the cache, so we won't try to fetch it on-chain.
        RING: new Token(ChainId.MAINNET, '0x9469D013805bFfB7D3DEBe5E7839237e535ec483', 18, 'RING', 'RING'),
    },
    [ChainId.RINKEBY]: {
        WETH: WRAPPED_NATIVE_CURRENCY[ChainId.RINKEBY],
        DAI_1: DAI_RINKEBY_1,
        DAI_2: DAI_RINKEBY_2,
    },
    [ChainId.OPTIMISM]: {
        USDC: USDC_OPTIMISM,
        USDT: USDT_OPTIMISM,
        WBTC: WBTC_OPTIMISM,
        DAI: DAI_OPTIMISM,
    },
    [ChainId.OPTIMISM_GOERLI]: {
        USDC: USDC_OPTIMISM_GOERLI,
        USDT: USDT_OPTIMISM_GOERLI,
        WBTC: WBTC_OPTIMISM_GOERLI,
        DAI: DAI_OPTIMISM_GOERLI,
    },
    [ChainId.OPTIMISTIC_KOVAN]: {
        USDC: USDC_OPTIMISTIC_KOVAN,
        USDT: USDT_OPTIMISTIC_KOVAN,
        WBTC: WBTC_OPTIMISTIC_KOVAN,
        DAI: DAI_OPTIMISTIC_KOVAN,
    },
    [ChainId.ARBITRUM_ONE]: {
        USDC: USDC_ARBITRUM,
        USDT: USDT_ARBITRUM,
        WBTC: WBTC_ARBITRUM,
        DAI: DAI_ARBITRUM,
    },
    [ChainId.ARBITRUM_RINKEBY]: {
        USDT: USDT_ARBITRUM_RINKEBY,
        UNI: UNI_ARBITRUM_RINKEBY,
        DAI: DAI_ARBITRUM_RINKEBY,
        USDC: USDC_ARBITRUM_RINKEBY,
    },
    [ChainId.ARBITRUM_GOERLI]: {
        USDC: USDC_ARBITRUM_GOERLI,
    },
    [ChainId.POLYGON]: {
        WMATIC: WMATIC_POLYGON,
        USDC: USDC_POLYGON,
    },
    [ChainId.POLYGON_MUMBAI]: {
        WMATIC: WMATIC_POLYGON_MUMBAI,
        DAI: DAI_POLYGON_MUMBAI,
    },
    [ChainId.CELO]: {
        CELO: CELO,
        CUSD: CUSD_CELO,
        CEUR: CEUR_CELO,
        DAI: DAI_CELO,
    },
    [ChainId.CELO_ALFAJORES]: {
        CELO: CELO_ALFAJORES,
        CUSD: CUSD_CELO_ALFAJORES,
        CEUR: CUSD_CELO_ALFAJORES,
        DAI: DAI_CELO_ALFAJORES,
    },
    [ChainId.GNOSIS]: {
        WXDAI: WRAPPED_NATIVE_CURRENCY[ChainId.GNOSIS],
        USDC_ETHEREUM_GNOSIS: USDC_ETHEREUM_GNOSIS,
    },
    [ChainId.MOONBEAM]: {
        USDC: USDC_MOONBEAM,
        DAI: DAI_MOONBEAM,
        WBTC: WBTC_MOONBEAM,
        WGLMR: WRAPPED_NATIVE_CURRENCY[ChainId.MOONBEAM],
    },
    [ChainId.BSC]: {
        USDC: USDC_BSC,
        USDT: USDT_BSC,
        BUSD: BUSD_BSC,
        ETH: ETH_BSC,
        DAI: DAI_BSC,
        BTC: BTC_BSC,
        WBNB: WRAPPED_NATIVE_CURRENCY[ChainId.BSC],
    },
    [ChainId.FANTOM]: {
        WFTM: WRAPPED_NATIVE_CURRENCY[ChainId.FANTOM],
        DAI: DAI_FANTOM,
        USDC: USDC_FANTOM,
        USDT: USDT_FANTOM,
        BTC: BTC_FANTOM,
        ETH: ETH_FANTOM,
    },
    [ChainId.GNOSIS]: {
        WXDAI: WRAPPED_NATIVE_CURRENCY[ChainId.GNOSIS],
        DAI: DAI_GNOSIS,
        USDC: USDC_GNOSIS,
        USDT: USDT_GNOSIS,
        BTC: BTC_GNOSIS,
        ETH: ETH_GNOSIS,
    },
    [ChainId.KLAYTN]: {
        WKLAY: WRAPPED_NATIVE_CURRENCY[ChainId.KLAYTN],
        DAI: DAI_KLAYTN,
        USDC: USDC_KLAYTN,
        USDT: USDT_KLAYTN,
        BTC: BTC_KLAYTN,
        ETH: ETH_KLAYTN,
    },
    // Currently we do not have providers for Moonbeam mainnet or Gnosis testnet
};
/**
 * Provider for getting token metadata that falls back to a different provider
 * in the event of failure.
 *
 * @export
 * @class CachingTokenProviderWithFallback
 */
export class CachingTokenProviderWithFallback {
    constructor(chainId, 
    // Token metadata (e.g. symbol and decimals) don't change so can be cached indefinitely.
    // Constructing a new token object is slow as sdk-core does checksumming.
    tokenCache, primaryTokenProvider, fallbackTokenProvider) {
        this.chainId = chainId;
        this.tokenCache = tokenCache;
        this.primaryTokenProvider = primaryTokenProvider;
        this.fallbackTokenProvider = fallbackTokenProvider;
        this.CACHE_KEY = (chainId, address) => `token-${chainId}-${address}`;
    }
    async getTokens(_addresses) {
        const seedTokens = CACHE_SEED_TOKENS[this.chainId];
        if (seedTokens) {
            for (const token of Object.values(seedTokens)) {
                await this.tokenCache.set(this.CACHE_KEY(this.chainId, token.address.toLowerCase()), token);
            }
        }
        const addressToToken = {};
        const symbolToToken = {};
        const addresses = _(_addresses)
            .map((address) => address.toLowerCase())
            .uniq()
            .value();
        const addressesToFindInPrimary = [];
        const addressesToFindInSecondary = [];
        for (const address of addresses) {
            if (await this.tokenCache.has(this.CACHE_KEY(this.chainId, address))) {
                addressToToken[address.toLowerCase()] = (await this.tokenCache.get(this.CACHE_KEY(this.chainId, address)));
                symbolToToken[addressToToken[address].symbol] =
                    (await this.tokenCache.get(this.CACHE_KEY(this.chainId, address)));
            }
            else {
                addressesToFindInPrimary.push(address);
            }
        }
        log.info({ addressesToFindInPrimary }, `Found ${addresses.length - addressesToFindInPrimary.length} out of ${addresses.length} tokens in local cache. ${addressesToFindInPrimary.length > 0
            ? `Checking primary token provider for ${addressesToFindInPrimary.length} tokens`
            : ``}
      `);
        if (addressesToFindInPrimary.length > 0) {
            const primaryTokenAccessor = await this.primaryTokenProvider.getTokens(addressesToFindInPrimary);
            for (const address of addressesToFindInPrimary) {
                const token = primaryTokenAccessor.getTokenByAddress(address);
                if (token) {
                    addressToToken[address.toLowerCase()] = token;
                    symbolToToken[addressToToken[address].symbol] = token;
                    await this.tokenCache.set(this.CACHE_KEY(this.chainId, address.toLowerCase()), addressToToken[address]);
                }
                else {
                    addressesToFindInSecondary.push(address);
                }
            }
            log.info({ addressesToFindInSecondary }, `Found ${addressesToFindInPrimary.length - addressesToFindInSecondary.length} tokens in primary. ${this.fallbackTokenProvider
                ? `Checking secondary token provider for ${addressesToFindInSecondary.length} tokens`
                : `No fallback token provider specified. About to return.`}`);
        }
        if (this.fallbackTokenProvider && addressesToFindInSecondary.length > 0) {
            const secondaryTokenAccessor = await this.fallbackTokenProvider.getTokens(addressesToFindInSecondary);
            for (const address of addressesToFindInSecondary) {
                const token = secondaryTokenAccessor.getTokenByAddress(address);
                if (token) {
                    addressToToken[address.toLowerCase()] = token;
                    symbolToToken[addressToToken[address].symbol] = token;
                    await this.tokenCache.set(this.CACHE_KEY(this.chainId, address.toLowerCase()), addressToToken[address]);
                }
            }
        }
        return {
            getTokenByAddress: (address) => {
                return addressToToken[address.toLowerCase()];
            },
            getTokenBySymbol: (symbol) => {
                return symbolToToken[symbol.toLowerCase()];
            },
            getAllTokens: () => {
                return Object.values(addressToToken);
            },
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGluZy10b2tlbi1wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcm92aWRlcnMvY2FjaGluZy10b2tlbi1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDMUMsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBR2hFLE9BQU8sRUFDTCxPQUFPLEVBQ1AsVUFBVSxFQUNWLFVBQVUsRUFDVixVQUFVLEVBQ1YsUUFBUSxFQUNSLElBQUksRUFDSixjQUFjLEVBQ2QsU0FBUyxFQUNULFNBQVMsRUFDVCxtQkFBbUIsRUFDbkIsWUFBWSxFQUNaLG9CQUFvQixFQUNwQixPQUFPLEVBQ1AsUUFBUSxFQUNSLGtCQUFrQixFQUNsQixVQUFVLEVBQ1YsVUFBVSxFQUNWLFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUNaLFlBQVksRUFDWixtQkFBbUIsRUFDbkIsb0JBQW9CLEVBQ3BCLGtCQUFrQixFQUNsQixhQUFhLEVBQ2IsYUFBYSxFQUNiLE9BQU8sRUFDUCxVQUFVLEVBQ1YsVUFBVSxFQUNWLFVBQVUsRUFHVixvQkFBb0IsRUFDcEIsYUFBYSxFQUNiLG9CQUFvQixFQUNwQixxQkFBcUIsRUFDckIsUUFBUSxFQUNSLG9CQUFvQixFQUNwQixXQUFXLEVBQ1gsV0FBVyxFQUNYLFdBQVcsRUFDWCxZQUFZLEVBQ1osYUFBYSxFQUNiLGFBQWEsRUFDYixvQkFBb0IsRUFDcEIscUJBQXFCLEVBQ3JCLFlBQVksRUFDWixhQUFhLEVBQ2IscUJBQXFCLEVBQ3JCLFFBQVEsRUFDUixXQUFXLEVBQ1gsV0FBVyxFQUNYLFdBQVcsRUFDWCxZQUFZLEVBQ1osYUFBYSxFQUNiLG9CQUFvQixFQUNwQixxQkFBcUIsRUFDckIsYUFB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