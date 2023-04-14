"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CUSTOM_BASES = exports.ADDITIONAL_BASES = exports.BASES_TO_CHECK_TRADES_AGAINST = void 0;
const token_provider_1 = require("../../providers/token-provider");
const chains_1 = require("../../util/chains");
const BASES_TO_CHECK_TRADES_AGAINST = (_tokenProvider) => {
    return {
        [chains_1.ChainId.MAINNET]: [
            chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.MAINNET],
            token_provider_1.DAI_MAINNET,
            token_provider_1.USDC_MAINNET,
            token_provider_1.USDT_MAINNET,
            token_provider_1.WBTC_MAINNET,
        ],
        [chains_1.ChainId.ROPSTEN]: [chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.ROPSTEN]],
        [chains_1.ChainId.RINKEBY]: [chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.RINKEBY]],
        [chains_1.ChainId.GÖRLI]: [chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.GÖRLI]],
        [chains_1.ChainId.KOVAN]: [chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.KOVAN]],
        [chains_1.ChainId.OPTIMISM]: [chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.OPTIMISM]],
        [chains_1.ChainId.OPTIMISM_GOERLI]: [
            chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.OPTIMISM_GOERLI],
        ],
        [chains_1.ChainId.OPTIMISTIC_KOVAN]: [
            chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.OPTIMISTIC_KOVAN],
        ],
        [chains_1.ChainId.ARBITRUM_ONE]: [chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.ARBITRUM_ONE]],
        [chains_1.ChainId.ARBITRUM_RINKEBY]: [
            chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.ARBITRUM_RINKEBY],
        ],
        [chains_1.ChainId.ARBITRUM_GOERLI]: [
            chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.ARBITRUM_GOERLI],
        ],
        [chains_1.ChainId.POLYGON]: [token_provider_1.WMATIC_POLYGON],
        [chains_1.ChainId.POLYGON_MUMBAI]: [token_provider_1.WMATIC_POLYGON_MUMBAI],
        [chains_1.ChainId.CELO]: [chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.CELO]],
        [chains_1.ChainId.CELO_ALFAJORES]: [chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.CELO_ALFAJORES]],
        [chains_1.ChainId.GNOSIS]: [chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.GNOSIS]],
        [chains_1.ChainId.MOONBEAM]: [chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.MOONBEAM]],
        [chains_1.ChainId.BSC]: [
            chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.BSC],
            token_provider_1.BUSD_BSC,
            token_provider_1.DAI_BSC,
            token_provider_1.USDC_BSC,
            token_provider_1.USDT_BSC,
            token_provider_1.BTC_BSC,
        ],
        [chains_1.ChainId.FANTOM]: [
            chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.FANTOM],
            token_provider_1.DAI_FANTOM,
            token_provider_1.USDC_FANTOM,
            token_provider_1.USDT_FANTOM,
            token_provider_1.BTC_FANTOM,
        ],
        [chains_1.ChainId.GNOSIS]: [
            chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.GNOSIS],
            token_provider_1.DAI_GNOSIS,
            token_provider_1.USDC_GNOSIS,
            token_provider_1.USDT_GNOSIS,
            token_provider_1.BTC_GNOSIS,
        ],
        [chains_1.ChainId.KLAYTN]: [
            chains_1.WRAPPED_NATIVE_CURRENCY[chains_1.ChainId.KLAYTN],
            token_provider_1.DAI_KLAYTN,
            token_provider_1.USDC_KLAYTN,
            token_provider_1.USDT_KLAYTN,
            token_provider_1.BTC_KLAYTN,
        ],
    };
};
exports.BASES_TO_CHECK_TRADES_AGAINST = BASES_TO_CHECK_TRADES_AGAINST;
const getBasePairByAddress = async (tokenProvider, _chainId, fromAddress, toAddress) => {
    const accessor = await tokenProvider.getTokens([toAddress]);
    const toToken = accessor.getTokenByAddress(toAddress);
    if (!toToken)
        return {};
    return {
        [fromAddress]: [toToken],
    };
};
const ADDITIONAL_BASES = async (tokenProvider) => {
    return {
        [chains_1.ChainId.MAINNET]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (await getBasePairByAddress(tokenProvider, chains_1.ChainId.MAINNET, '0xA948E86885e12Fb09AfEF8C52142EBDbDf73cD18', '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'))), (await getBasePairByAddress(tokenProvider, chains_1.ChainId.MAINNET, '0x561a4717537ff4AF5c687328c0f7E90a319705C0', '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'))), (await getBasePairByAddress(tokenProvider, chains_1.ChainId.MAINNET, '0x956F47F50A910163D8BF957Cf5846D573E7f87CA', '0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B'))), (await getBasePairByAddress(tokenProvider, chains_1.ChainId.MAINNET, '0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B', '0x956F47F50A910163D8BF957Cf5846D573E7f87CA'))), (await getBasePairByAddress(tokenProvider, chains_1.ChainId.MAINNET, '0x853d955acef822db058eb8505911ed77f175b99e', '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0'))), (await getBasePairByAddress(tokenProvider, chains_1.ChainId.MAINNET, '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0', '0x853d955acef822db058eb8505911ed77f175b99e'))), (await getBasePairByAddress(tokenProvider, chains_1.ChainId.MAINNET, '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599', '0xeb4c2781e4eba804ce9a9803c67d0893436bb27d'))), (await getBasePairByAddress(tokenProvider, chains_1.ChainId.MAINNET, '0xeb4c2781e4eba804ce9a9803c67d0893436bb27d', '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'))),
    };
};
exports.ADDITIONAL_BASES = ADDITIONAL_BASES;
/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
const CUSTOM_BASES = async (tokenProvider) => {
    return {
        [chains_1.ChainId.MAINNET]: Object.assign(Object.assign({}, (await getBasePairByAddress(tokenProvider, chains_1.ChainId.MAINNET, '0xd46ba6d942050d489dbd938a2c909a5d5039a161', token_provider_1.DAI_MAINNET.address))), (await getBasePairByAddress(tokenProvider, chains_1.ChainId.MAINNET, '0xd46ba6d942050d489dbd938a2c909a5d5039a161', chains_1.WRAPPED_NATIVE_CURRENCY[1].address))),
    };
};
exports.CUSTOM_BASES = CUSTOM_BASES;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvcm91dGVycy9sZWdhY3ktcm91dGVyL2Jhc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLG1FQXlCd0M7QUFDeEMsOENBQXFFO0FBTTlELE1BQU0sNkJBQTZCLEdBQUcsQ0FDM0MsY0FBOEIsRUFDZCxFQUFFO0lBQ2xCLE9BQU87UUFDTCxDQUFDLGdCQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDakIsZ0NBQXVCLENBQUMsZ0JBQU8sQ0FBQyxPQUFPLENBQUU7WUFDekMsNEJBQVc7WUFDWCw2QkFBWTtZQUNaLDZCQUFZO1lBQ1osNkJBQVk7U0FDYjtRQUNELENBQUMsZ0JBQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLGdDQUF1QixDQUFDLGdCQUFPLENBQUMsT0FBTyxDQUFFLENBQUM7UUFDOUQsQ0FBQyxnQkFBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsZ0NBQXVCLENBQUMsZ0JBQU8sQ0FBQyxPQUFPLENBQUUsQ0FBQztRQUM5RCxDQUFDLGdCQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxnQ0FBdUIsQ0FBQyxnQkFBTyxDQUFDLEtBQUssQ0FBRSxDQUFDO1FBQzFELENBQUMsZ0JBQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGdDQUF1QixDQUFDLGdCQUFPLENBQUMsS0FBSyxDQUFFLENBQUM7UUFDMUQsQ0FBQyxnQkFBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZ0NBQXVCLENBQUMsZ0JBQU8sQ0FBQyxRQUFRLENBQUUsQ0FBQztRQUNoRSxDQUFDLGdCQUFPLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDekIsZ0NBQXVCLENBQUMsZ0JBQU8sQ0FBQyxlQUFlLENBQUU7U0FDbEQ7UUFDRCxDQUFDLGdCQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUMxQixnQ0FBdUIsQ0FBQyxnQkFBTyxDQUFDLGdCQUFnQixDQUFF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