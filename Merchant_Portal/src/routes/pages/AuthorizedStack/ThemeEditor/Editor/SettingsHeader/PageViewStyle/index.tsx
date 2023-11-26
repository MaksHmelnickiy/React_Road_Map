import React from 'react';
import { useTranslation } from 'react-i18next';

import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';

import { VIEW_MODE } from '../../types';
import { Setting, SettingName } from '../styled';

import { ModeSwitcher, ViewStyle } from './styled';

interface IPageViewStyle {
  mode: VIEW_MODE;
  changeViewMode: (mode: VIEW_MODE) => void;
}

const PageViewStyle = ({ mode, changeViewMode }: IPageViewStyle) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'themeEditor.settingsHeader',
  });

  const onChange = (newMode: VIEW_MODE) => {
    if (mode !== newMode) {
      changeViewMode(newMode);
    }
  };

  return (
    <Setting>
      <SettingName>{t('viewMode')}</SettingName>
      <ModeSwitcher>
        <ViewStyle
          $isActive={mode === VIEW_MODE.DESKTOP}
          onClick={() => onChange(VIEW_MODE.DESKTOP)}
        >
          <ICONS_MAP.Desktop />
        </ViewStyle>
        <ViewStyle
          $isActive={mode === VIEW_MODE.MOBILE}
          onClick={() => onChange(VIEW_MODE.MOBILE)}
        >
          <ICONS_MAP.Mobile />
        </ViewStyle>
      </ModeSwitcher>
    </Setting>
  );
};

export default appReactMemo(PageViewStyle);
