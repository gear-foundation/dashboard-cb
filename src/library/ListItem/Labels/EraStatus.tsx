// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { capitalizeFirstLetter, planckToUnit } from '@polkadot-cloud/utils';
import BigNumber from 'bignumber.js';
import { useTranslation } from 'react-i18next';
import { useApi } from 'contexts/Api';
import { useStaking } from 'contexts/Staking';
import { useUi } from 'contexts/UI';
import { ValidatorStatusWrapper } from 'library/ListItem/Wrappers';
import type { MaybeAccount } from 'types';

export const EraStatus = ({ address }: { address: MaybeAccount }) => {
  const { t } = useTranslation('library');
  const {
    network: { unit, units },
  } = useApi();
  const {
    eraStakers: { stakers },
    erasStakersSyncing,
  } = useStaking();
  const { isSyncing } = useUi();

  // is the validator in the active era
  const validatorInEra = stakers.find((s) => s.address === address) || null;

  // flag whether validator is active
  const validatorStatus = isSyncing
    ? 'waiting'
    : validatorInEra
    ? 'active'
    : 'waiting';

  let totalStakePlanck = new BigNumber(0);
  if (validatorInEra) {
    const { others, own } = validatorInEra;
    others.forEach((o: any) => {
      totalStakePlanck = totalStakePlanck.plus(o.value);
    });
    if (own) {
      totalStakePlanck = totalStakePlanck.plus(own);
    }
  }

  const totalStake = planckToUnit(totalStakePlanck, units);

  return (
    <ValidatorStatusWrapper $status={validatorStatus}>
      <h5>
        {isSyncing || erasStakersSyncing
          ? t('syncing')
          : validatorInEra
          ? `${t('listItemActive')} / ${totalStake
              .integerValue()
              .toFormat()} ${unit}`
          : capitalizeFirstLetter(t(`${validatorStatus}`) ?? '')}
      </h5>
    </ValidatorStatusWrapper>
  );
};
