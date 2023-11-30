import { Token } from '@uniswap/sdk-core';
import { FACTORY_ADDRESS } from '@uniswap/v3-sdk';
import { ChainId, NETWORKS_WITH_SAME_UNISWAP_ADDRESSES } from './chains';
const MANTA_V3_CORE_FACTORY_ADDRESSES = '0x8d312c2B300239B84c304B5af5A3D00cBF0803F6';
const MANTA_QUOTER_ADDRESSES = '0xe54F76B5fa298784acb3cD59Ee8C8baF2F838Bda';
const MANTA_MULTICALL_ADDRESS = '0x66c4a697D08bBa67adF7d99627d35f9eA584ec5b';
export const MANTA_TICK_LENS_ADDRESS = '0xe4D618Ef1CbBDeC7ECCdb2BF2812433fFd578ba8';
export const MANTA_NONFUNGIBLE_POSITION_MANAGER_ADDRESS = '0x678d43386Df359004c4365080296479a9127Fc22';
export const MANTA_SWAP_ROUTER_02_ADDRESS = '0xc90791fcE2F269caA9a72ac8126E65d3F5f8AD22';
export const MANTA_V3_MIGRATOR_ADDRESS = '0xb6189204D383763577A20F3f98cA5DA0545dd77E';
const MANTA_TESTNET_V3_CORE_FACTORY_ADDRESSES = '0x3B7E491E73eDF4c330b35D0706352B6bb92232E0';
const MANTA_TESTNET_QUOTER_ADDRESSES = '0x3aBD06F1773b2e845C9F37dEc93A9a018fc2fAC8';
const MANTA_TESTNET_MULTICALL_ADDRESS = '0x751fc1884628fc943cb766714a79eC467faefB01';
export const MANTA_TESTNET_TICK_LENS_ADDRESS = '0x4E9a7cF6823E2D8Fc0fE16c321ceF982E49C0a1f';
export const MANTA_TESTNET_NONFUNGIBLE_POSITION_MANAGER_ADDRESS = '0xB6a264a95993Cd4FfF22B9B2d98605964E0f4D86';
export const MANTA_TESTNET_SWAP_ROUTER_02_ADDRESS = '0xF23F011Bd42E08fc32377b4bBf43FDF8a47EaBe3';
export const MANTA_TESTNET_V3_MIGRATOR_ADDRESS = '0x84Ecbb66f32db87A9b0AbFF51fD7fa6E4F633132';
export const V3_CORE_FACTORY_ADDRESSES = {
    ...constructSameAddressMap(FACTORY_ADDRESS),
    [ChainId.MANTA]: MANTA_V3_CORE_FACTORY_ADDRESSES,
    [ChainId.MANTA_TESTNET]: MANTA_TESTNET_V3_CORE_FACTORY_ADDRESSES,
    // TODO: Gnosis + Moonbeam contracts to be deployed
};
export const QUOTER_V2_ADDRESSES = {
    ...constructSameAddressMap('0x61fFE014bA17989E743c5F6cB21bF9697530B21e'),
    [ChainId.MANTA]: MANTA_QUOTER_ADDRESSES,
    [ChainId.MANTA_TESTNET]: MANTA_TESTNET_QUOTER_ADDRESSES,
    // TODO: Gnosis + Moonbeam contracts to be deployed
};
export const MIXED_ROUTE_QUOTER_V1_ADDRESSES = {
    [ChainId.MAINNET]: '0x84E44095eeBfEC7793Cd7d5b57B7e401D7f1cA2E',
};
export const UNISWAP_MULTICALL_ADDRESSES = {
    ...constructSameAddressMap('0x1F98415757620B543A52E61c46B32eB19261F984'),
    [ChainId.MANTA]: MANTA_MULTICALL_ADDRESS,
    [ChainId.MANTA_TESTNET]: MANTA_TESTNET_MULTICALL_ADDRESS,
    // TODO: Gnosis + Moonbeam contracts to be deployed
};
export const SWAP_ROUTER_02_ADDRESSES = (chainId) => {
    if (chainId == ChainId.MANTA) {
        return MANTA_SWAP_ROUTER_02_ADDRESS;
    }
    if (chainId == ChainId.MANTA_TESTNET) {
        return MANTA_TESTNET_SWAP_ROUTER_02_ADDRESS;
    }
    return '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45';
};
export const OVM_GASPRICE_ADDRESS = '0x420000000000000000000000000000000000000F';
export const ARB_GASINFO_ADDRESS = '0x000000000000000000000000000000000000006C';
export const TICK_LENS_ADDRESS = '0x4E9a7cF6823E2D8Fc0fE16c321ceF982E49C0a1f';
export const NONFUNGIBLE_POSITION_MANAGER_ADDRESS = '0xB6a264a95993Cd4FfF22B9B2d98605964E0f4D86';
export const V3_MIGRATOR_ADDRESS = '0x84Ecbb66f32db87A9b0AbFF51fD7fa6E4F633132';
export const MULTICALL2_ADDRESS = '0x751fc1884628fc943cb766714a79eC467faefB01';
export function constructSameAddressMap(address, additionalNetworks = []) {
    return NETWORKS_WITH_SAME_UNISWAP_ADDRESSES.concat(additionalNetworks).reduce((memo, chainId) => {
        memo[chainId] = address;
        return memo;
    }, {});
}
export const WETH9 = {
    [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.MANTA]: new Token(ChainId.MANTA, '0x0Dc808adcE2099A9F62AA87D9670745AbA741746', 18, 'WETH', 'Wrapped Ether'),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzc2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWwvYWRkcmVzc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMxQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUd6RSxNQUFNLCtCQUErQixHQUFHLDRDQUE0QyxDQUFDO0FBQ3JGLE1BQU0sc0JBQXNCLEdBQUcsNENBQTRDLENBQUM7QUFDNUUsTUFBTSx1QkFBdUIsR0FBRyw0Q0FBNEMsQ0FBQztBQUM3RSxNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FDbEMsNENBQTRDLENBQUM7QUFDL0MsTUFBTSxDQUFDLE1BQU0sMENBQTBDLEdBQ3JELDRDQUE0QyxDQUFDO0FBQy9DLE1BQU0sQ0FBQyxNQUFNLDRCQUE0QixHQUN2Qyw0Q0FBNEMsQ0FBQztBQUMvQyxNQUFNLENBQUMsTUFBTSx5QkFBeUIsR0FDcEMsNENBQTRDLENBQUM7QUFHL0MsTUFBTSx1Q0FBdUMsR0FBRyw0Q0FBNEMsQ0FBQztBQUM3RixNQUFNLDhCQUE4QixHQUFHLDRDQUE0QyxDQUFDO0FBQ3BGLE1BQU0sK0JBQStCLEdBQUcsNENBQTRDLENBQUM7QUFDckYsTUFBTSxDQUFDLE1BQU0sK0JBQStCLEdBQzFDLDRDQUE0QyxDQUFDO0FBQy9DLE1BQU0sQ0FBQyxNQUFNLGtEQUFrRCxHQUM3RCw0Q0FBNEMsQ0FBQztBQUMvQyxNQUFNLENBQUMsTUFBTSxvQ0FBb0MsR0FDL0MsNENBQTRDLENBQUM7QUFDL0MsTUFBTSxDQUFDLE1BQU0saUNBQWlDLEdBQzVDLDRDQUE0QyxDQUFDO0FBRy9DLE1BQU0sQ0FBQyxNQUFNLHlCQUF5QixHQUFlO0lBQ25ELEdBQUcsdUJBQXVCLENBQUMsZUFBZSxDQUFD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