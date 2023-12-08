import { Token } from '@uniswap/sdk-core';
import { FACTORY_ADDRESS } from '@uniswap/v3-sdk';

import { ChainId, NETWORKS_WITH_SAME_UNISWAP_ADDRESSES } from './chains';


const MANTA_V3_CORE_FACTORY_ADDRESSES = '0x481F4b658d1447A9559B220640Fb79C2B993032A';
const MANTA_QUOTER_ADDRESSES = '0xD82dA8F3e942ef8E5fe88AbF896659159A502E6f';
const MANTA_MULTICALL_ADDRESS = '0xcBA11549A0206432af38B78C29171573b89D2ac3';
export const MANTA_TICK_LENS_ADDRESS =
  '0x0D9CBCA9c0e3517aB9d414A09ABAAa8257e70E51';
export const MANTA_NONFUNGIBLE_POSITION_MANAGER_ADDRESS =
  '0xE0836a2DFd8Ba6C63786803EA75DF801383af68C';
export const MANTA_SWAP_ROUTER_02_ADDRESS =
  '0xC9D4926c1241cb83339c42ee24fb7e8a8637D6Ad';
export const MANTA_V3_MIGRATOR_ADDRESS =
  '0xE810cAca8a86907ffEEfC7Ee4787559dcdf698B9';


const MANTA_TESTNET_V3_CORE_FACTORY_ADDRESSES = '0x3B7E491E73eDF4c330b35D0706352B6bb92232E0';
const MANTA_TESTNET_QUOTER_ADDRESSES = '0x3aBD06F1773b2e845C9F37dEc93A9a018fc2fAC8';
const MANTA_TESTNET_MULTICALL_ADDRESS = '0x751fc1884628fc943cb766714a79eC467faefB01';
export const MANTA_TESTNET_TICK_LENS_ADDRESS =
  '0x4E9a7cF6823E2D8Fc0fE16c321ceF982E49C0a1f';
export const MANTA_TESTNET_NONFUNGIBLE_POSITION_MANAGER_ADDRESS =
  '0xB6a264a95993Cd4FfF22B9B2d98605964E0f4D86';
export const MANTA_TESTNET_SWAP_ROUTER_02_ADDRESS =
  '0xF23F011Bd42E08fc32377b4bBf43FDF8a47EaBe3';
export const MANTA_TESTNET_V3_MIGRATOR_ADDRESS =
  '0x84Ecbb66f32db87A9b0AbFF51fD7fa6E4F633132';


export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  ...constructSameAddressMap(FACTORY_ADDRESS),
  [ChainId.MANTA]: MANTA_V3_CORE_FACTORY_ADDRESSES,
  [ChainId.MANTA_TESTNET]: MANTA_TESTNET_V3_CORE_FACTORY_ADDRESSES,
  // TODO: Gnosis + Moonbeam contracts to be deployed
};

export const QUOTER_V2_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0x61fFE014bA17989E743c5F6cB21bF9697530B21e'),
  [ChainId.MANTA]: MANTA_QUOTER_ADDRESSES,
  [ChainId.MANTA_TESTNET]: MANTA_TESTNET_QUOTER_ADDRESSES,
  // TODO: Gnosis + Moonbeam contracts to be deployed
};

export const MIXED_ROUTE_QUOTER_V1_ADDRESSES: AddressMap = {
  [ChainId.MAINNET]: '0x84E44095eeBfEC7793Cd7d5b57B7e401D7f1cA2E',
};

export const UNISWAP_MULTICALL_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0x1F98415757620B543A52E61c46B32eB19261F984'),
  [ChainId.MANTA]: MANTA_MULTICALL_ADDRESS,
  [ChainId.MANTA_TESTNET]: MANTA_TESTNET_MULTICALL_ADDRESS,
  // TODO: Gnosis + Moonbeam contracts to be deployed
};

export const SWAP_ROUTER_02_ADDRESSES = (chainId: number) => {
  if (chainId == ChainId.MANTA) {
    return MANTA_SWAP_ROUTER_02_ADDRESS;
  }
  if (chainId == ChainId.MANTA_TESTNET) {
    return MANTA_TESTNET_SWAP_ROUTER_02_ADDRESS;
  }
  return '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45';
};

export const OVM_GASPRICE_ADDRESS =
  '0x420000000000000000000000000000000000000F';
export const ARB_GASINFO_ADDRESS = '0x000000000000000000000000000000000000006C';
export const TICK_LENS_ADDRESS = '0x4E9a7cF6823E2D8Fc0fE16c321ceF982E49C0a1f';
export const NONFUNGIBLE_POSITION_MANAGER_ADDRESS =
  '0xB6a264a95993Cd4FfF22B9B2d98605964E0f4D86';
export const V3_MIGRATOR_ADDRESS = '0x84Ecbb66f32db87A9b0AbFF51fD7fa6E4F633132';
export const MULTICALL2_ADDRESS = '0x751fc1884628fc943cb766714a79eC467faefB01';

export type AddressMap = { [chainId: number]: string };

export function constructSameAddressMap<T extends string>(
  address: T,
  additionalNetworks: ChainId[] = []
): { [chainId: number]: T } {
  return NETWORKS_WITH_SAME_UNISWAP_ADDRESSES.concat(
    additionalNetworks
  ).reduce<{
    [chainId: number]: T;
  }>((memo, chainId) => {
    memo[chainId] = address;
    return memo;
  }, {});
}

export const WETH9: {
  [chainId in Exclude<
    ChainId,
    | ChainId.MANTA_TESTNET
  >]: Token;
} = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    18,
    'WETH',
    'Wrapped Ether'
  ),
  [ChainId.MANTA]: new Token(
    ChainId.MANTA,
    '0x0Dc808adcE2099A9F62AA87D9670745AbA741746',
    18,
    'WETH',
    'Wrapped Ether'
  ),
};
