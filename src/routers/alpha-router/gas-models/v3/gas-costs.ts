import { BigNumber } from '@ethersproject/bignumber';

import { ChainId } from '../../../..';

// Cost for crossing an uninitialized tick.
export const COST_PER_UNINIT_TICK = BigNumber.from(0);

//l2 execution fee on Manta is roughly the same as mainnet
export const BASE_SWAP_COST = (id: ChainId): BigNumber => {
  switch (id) {
    case ChainId.MAINNET:
    case ChainId.MANTA:
    case ChainId.MANTA_TESTNET:
      return BigNumber.from(2000);
  }
};
export const COST_PER_INIT_TICK = (id: ChainId): BigNumber => {
  switch (id) {
    case ChainId.MAINNET:
    case ChainId.MANTA:
    case ChainId.MANTA_TESTNET:
      return BigNumber.from(31000);
  }
};

export const COST_PER_HOP = (id: ChainId): BigNumber => {
  switch (id) {
    case ChainId.MAINNET:
    case ChainId.MANTA:
    case ChainId.MANTA_TESTNET:
      return BigNumber.from(80000);
  }
};
