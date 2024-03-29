// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import type { AnyApi, MaybeAccount } from 'types';

export interface UseSubmitExtrinsicProps {
  tx: AnyApi;
  shouldSubmit: boolean;
  callbackSubmit: { (): void };
  callbackInBlock: { (): void };
  from: MaybeAccount;
}

export interface UseSubmitExtrinsic {
  uid: number;
  onSubmit: { (): void };
  submitting: boolean;
  proxySupported: boolean;
  submitAddress: MaybeAccount;
}
