// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { WellKnownChain } from '@substrate/connect';
import { DefaultParams } from 'consts';
import { ReactComponent as VaraIconSVG } from 'img/vara_icon.svg';
import { ReactComponent as VaraInlineSVG } from 'img/vara_inline.svg';
import { ReactComponent as VaraTokenSVG } from 'img/vara_token.svg';
import { ReactComponent as VaraLogoSVG } from 'img/logo-vara-black.svg';

import type { Networks } from 'types';

export const NetworkList: Networks = {
  vara: {
    name: 'vara',
    endpoints: {
      rpc: 'wss://rpc.vara-network.io',
      lightClient: WellKnownChain.polkadot,
    },
    namespace: 'fe1b4c55fd4d668101126434206571a7',
    colors: {
      primary: {
        light: 'rgb(127, 255, 225)',
        dark: 'rgba(14,211,163,0.8)',
      },
      secondary: {
        light: 'rgb(127, 255, 225)',
        dark: 'rgb(127, 255, 225)',
      },
      stroke: {
        light: 'rgb(127, 255, 225)',
        dark: 'rgb(127, 255, 225)',
      },
      transparent: {
        light: 'rgb(127, 255, 225)',
        dark: 'rgb(127, 255, 225)',
      },
      pending: {
        light: 'rgb(127, 255, 225)',
        dark: 'rgb(127, 255, 225)',
      },
    },
    subscanEndpoint: 'https://vara.api.subscan.io',
    unit: 'VARA',
    units: 12,
    ss58: 137,
    brand: {
      icon: VaraIconSVG,
      token: VaraTokenSVG,
      logo: {
        svg: VaraLogoSVG,
        width: '5.1em',
      },
      inline: {
        svg: VaraInlineSVG,
        size: '0.96em',
      },
    },
    api: {
      unit: 'VARA',
      priceTicker: 'VARAUSDT',
    },
    params: {
      ...DefaultParams,
      stakeTarget: 0.8,
    },
    defaultFeeReserve: 0.1,
  },
};
