// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only
/* eslint-disable @typescript-eslint/no-unused-vars */

import { stringToU8a } from '@polkadot/util';
import BigNumber from 'bignumber.js';
import { NetworkList } from 'config/networks';
import type { APIConstants, APIContextInterface } from 'contexts/Api/types';

export const consts: APIConstants = {
  bondDuration: new BigNumber(0),
  maxNominations: new BigNumber(0),
  sessionsPerEra: new BigNumber(0),
  maxNominatorRewardedPerValidator: new BigNumber(0),
  historyDepth: new BigNumber(0),
  maxElectingVoters: new BigNumber(0),
  expectedBlockTime: new BigNumber(0),
  epochDuration: new BigNumber(0),
  existentialDeposit: new BigNumber(0),
  poolsPalletId: stringToU8a('0'),
};

export const defaultApiContext: APIContextInterface = {
  switchNetwork: async (n, lc) => {
    await new Promise((resolve) => resolve(null));
  },
  api: null,
  consts,
  chainState: undefined,
  isLightClient: false,
  isReady: false,
  apiStatus: 'disconnected',
  network: NetworkList.polkadot,
};
