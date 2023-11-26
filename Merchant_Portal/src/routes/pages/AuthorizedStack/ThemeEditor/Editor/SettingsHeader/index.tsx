import React from 'react';
import { useTranslation } from 'react-i18next';

import { TSelectValue } from '@private/components';
import { PAGE_TYPES_KEYS } from '@private/payment';

import Switch from 'components/Controls/Switch';
import { appReactMemo } from 'hocs';

import { changeSettingCallback, IViewSettings, VIEW_MODE } from '../types';

import PageViewStyle from './PageViewStyle';
import { Container, Setting, SettingName, StyledAutocompleteSelect } from './styled';

interface ISettingsHeader {
  settings: IViewSettings;
  changeViewSetting: changeSettingCallback;
}

const SettingsHeader = ({ settings, changeViewSetting }: ISettingsHeader) => {
  const { t } = useTranslation('translation', { keyPrefix: 'themeEditor' });

  const pageOptions = React.useMemo(() => {
    const translations = t('paymentPages', { returnObjects: true });

    return Object.entries<string>(translations || {}).map(([pageKey, pageName]) => ({
      label: pageName,
      value: pageKey,
    }));
  }, []);

  const { page, showLogo, mode } = settings;

  const changePage = React.useCallback((value: TSelectValue) => {
    changeViewSetting('page', value as PAGE_TYPES_KEYS);
  }, []);

  const changeViewMode = React.useCallback((value: VIEW_MODE) => {
    changeViewSetting('mode', value);
  }, []);

  const logoHandler = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    changeViewSetting('showLogo', checked);
  }, []);

  return (
    <Container>
      <Setting>
        <SettingName>{t('settingsHeader.page')}</SettingName>
        <StyledAutocompleteSelect
          options={pageOptions}
          value={page}
          onChange={changePage}
          size='sm'
          enableRemoveButton={false}
        />
      </Setting>
      <PageViewStyle mode={mode} changeViewMode={changeViewMode} />
      <Setting>
        <SettingName>{t('settingsHeader.brandLogo')}</SettingName>
        <Switch checked={showLogo} onChange={logoHandler} />
      </Setting>
    </Container>
  );
};

export default appReactMemo(SettingsHeader);
