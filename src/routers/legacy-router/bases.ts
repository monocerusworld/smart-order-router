/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Token } from '@uniswap/sdk-core';

import {
  USDC_MAINNET,
  USDC_MANTA,
  USDC_MANTA_TESTNET,
  USDT_MAINNET,
  USDT_MANTA,
  USDT_MANTA_TESTNET,
} from '../../providers/token-provider';
import { ChainId, WRAPPED_NATIVE_CURRENCY } from '../../util/chains';

type ChainTokenList = {
  readonly [chainId in ChainId]: Token[];
};

export const BASES_TO_CHECK_TRADES_AGAINST = (
  _tokenProvider: ITokenProvider
): ChainTokenList => {
  return {
    [ChainId.MAINNET]: [
      WRAPPED_NATIVE_CURRENCY[ChainId.MAINNET]!,
      USDC_MAINNET,
      USDT_MAINNET,
    ],
    [ChainId.MANTA_TESTNET]: [
      WRAPPED_NATIVE_CURRENCY[ChainId.MANTA_TESTNET]!,
      USDC_MANTA_TESTNET,
      USDT_MANTA_TESTNET,],
    [ChainId.MANTA]: [
      WRAPPED_NATIVE_CURRENCY[ChainId.MANTA]!,
      USDC_MANTA,
      USDT_MANTA,],
  };
};

const getBasePairByAddress = async (
  tokenProvider: ITokenProvider,
  _chainId: ChainId,
  fromAddress: string,
  toAddress: string
): Promise<{ [tokenAddress: string]: Token[] }> => {
  const accessor = await tokenProvider.getTokens([toAddress]);
  const toToken: Token | undefined = accessor.getTokenByAddress(toAddress);

  if (!toToken) return {};

  return {
    [fromAddress]: [toToken],
  };
};

export const ADDITIONAL_BASES = async (
  tokenProvider: ITokenProvider
): Promise<{
  [chainId in ChainId]?: { [tokenAddress: string]: Token[] };
}> => {
  return {
    [ChainId.MAINNET]: {
      ...(await getBasePairByAddress(
        tokenProvider,
        ChainId.MAINNET,
        '0xA948E86885e12Fb09AfEF8C52142EBDbDf73cD18',
        '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'
      )),
      ...(await getBasePairByAddress(
        tokenProvider,
        ChainId.MAINNET,
        '0x561a4717537ff4AF5c687328c0f7E90a319705C0',
        '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'
      )),
      ...(await getBasePairByAddress(
        tokenProvider,
        ChainId.MAINNET,
        '0x956F47F50A910163D8BF957Cf5846D573E7f87CA',
        '0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B'
      )),
      ...(await getBasePairByAddress(
        tokenProvider,
        ChainId.MAINNET,
        '0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B',
        '0x956F47F50A910163D8BF957Cf5846D573E7f87CA'
      )),
      ...(await getBasePairByAddress(
        tokenProvider,
        ChainId.MAINNET,
        '0x853d955acef822db058eb8505911ed77f175b99e',
        '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0'
      )),
      ...(await getBasePairByAddress(
        tokenProvider,
        ChainId.MAINNET,
        '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
        '0x853d955acef822db058eb8505911ed77f175b99e'
      )),
      ...(await getBasePairByAddress(
        tokenProvider,
        ChainId.MAINNET,
        '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
        '0xeb4c2781e4eba804ce9a9803c67d0893436bb27d'
      )),
      ...(await getBasePairByAddress(
        tokenProvider,
        ChainId.MAINNET,
        '0xeb4c2781e4eba804ce9a9803c67d0893436bb27d',
        '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
      )),
    },
  };
};

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES = async (
  tokenProvider: ITokenProvider
): Promise<{
  [chainId in ChainId]?: { [tokenAddress: string]: Token[] };
}> => {
  return {
    [ChainId.MAINNET]: {
      ...(await getBasePairByAddress(
        tokenProvider,
        ChainId.MAINNET,
        '0xd46ba6d942050d489dbd938a2c909a5d5039a161',
        DAI_MAINNET.address
      )),
      ...(await getBasePairByAddress(
        tokenProvider,
        ChainId.MAINNET,
        '0xd46ba6d942050d489dbd938a2c909a5d5039a161',
        WRAPPED_NATIVE_CURRENCY[1]!.address
      )),
    },
  };
};
