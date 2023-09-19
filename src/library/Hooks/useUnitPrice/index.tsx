// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only
export const useUnitPrice = () => {
  const fetchUnitPrice = async () => {
    return { lastPrice: 0, change: 0 };
  };

  return fetchUnitPrice;
};
