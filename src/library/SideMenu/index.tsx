// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { capitalizeFirstLetter } from '@polkadot-cloud/utils';
import throttle from 'lodash.throttle';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { SideMenuStickyThreshold } from 'consts';
import { useApi } from 'contexts/Api';
import { useHelp } from 'contexts/Help';
// import { useTheme } from 'contexts/Themes';
import { useUi } from 'contexts/UI';
import type { UIContextInterface } from 'contexts/UI/types';
import { ReactComponent as CogOutlineSVG } from 'img/cog-outline.svg';
import { ReactComponent as InfoSVG } from 'img/info.svg';
// import { ReactComponent as MoonOutlineSVG } from 'img/moon-outline.svg';
// import { ReactComponent as SunnyOutlineSVG } from 'img/sunny-outline.svg';
import { useOutsideAlerter } from 'library/Hooks';
import { useOverlay } from '@polkadot-cloud/react/hooks';
import { Heading } from './Heading/Heading';
import { Main } from './Main';
import { Secondary } from './Secondary';
import { ConnectionSymbol, Separator, Wrapper } from './Wrapper';

export const SideMenu = () => {
  const { t } = useTranslation('base');
  const { network, apiStatus } = useApi();
  // const { mode, toggleTheme } = useTheme();
  const { openModal } = useOverlay().modal;
  const {
    setSideMenu,
    sideMenuMinimised,
    userSideMenuMinimised,
    setUserSideMenuMinimised,
  }: UIContextInterface = useUi();
  const { openHelp } = useHelp();

  // listen to window resize to hide SideMenu
  useEffect(() => {
    window.addEventListener('resize', windowThrottle);
    return () => {
      window.removeEventListener('resize', windowThrottle);
    };
  }, []);

  const throttleCallback = () => {
    if (window.innerWidth >= SideMenuStickyThreshold) {
      setSideMenu(false);
    }
  };
  const windowThrottle = throttle(throttleCallback, 200, {
    trailing: true,
    leading: false,
  });

  const ref = useRef(null);
  useOutsideAlerter(ref, () => {
    setSideMenu(false);
  });

  const apiStatusClass =
    apiStatus === 'connecting'
      ? 'warning'
      : apiStatus === 'connected'
      ? 'success'
      : 'danger';

  return (
    <Wrapper ref={ref} $minimised={sideMenuMinimised}>
      <section>
        <Main />
        <Heading title={t('support')} minimised={sideMenuMinimised} />
        <Secondary
          onClick={() => {
            openHelp(null);
          }}
          name={t('resources')}
          minimised={sideMenuMinimised}
          icon={{
            Svg: InfoSVG,
            size: sideMenuMinimised ? '1.4em' : '1.2em',
          }}
        />
        <Separator />
        <Heading title={t('network')} minimised={sideMenuMinimised} />
        <Secondary
          classes={[apiStatusClass]}
          name={capitalizeFirstLetter(network.name)}
          onClick={() => openModal({ key: 'Networks' })}
          icon={{
            Svg: network.brand.inline.svg,
            size: network.brand.inline.size,
          }}
          minimised={sideMenuMinimised}
          action={
            <ConnectionSymbol
              className={apiStatusClass}
              style={{ opacity: 0.7 }}
            />
          }
        />
      </section>

      <section>
        <button
          type="button"
          onClick={() => setUserSideMenuMinimised(!userSideMenuMinimised)}
        >
          <FontAwesomeIcon
            icon={userSideMenuMinimised ? faExpandAlt : faCompressAlt}
          />
        </button>
        <button type="button" onClick={() => openModal({ key: 'Settings' })}>
          <CogOutlineSVG width="1.3em" height="1.3em" />
        </button>
        {/* {mode === 'dark' ? (
          <button type="button" onClick={() => toggleTheme()}>
            <SunnyOutlineSVG width="1.25em" height="1.25em" />
          </button>
        ) : (
          <button type="button" onClick={() => toggleTheme()}>
            <MoonOutlineSVG width="1.1em" height="1.1em" />
          </button>
        )} */}
      </section>
    </Wrapper>
  );
};
