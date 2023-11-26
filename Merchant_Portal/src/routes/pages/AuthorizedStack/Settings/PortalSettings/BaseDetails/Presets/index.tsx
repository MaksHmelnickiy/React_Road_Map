import React from 'react';
import { useTranslation } from 'react-i18next';

import { IPalettePreset } from 'api/merchantTerminalThemes/types';
import PresetsList from 'components/PresetsList';
import { appReactMemo } from 'hocs';
import {
  Container,
  SubTitle,
  Title,
} from 'routes/pages/AuthorizedStack/Settings/PortalSettings/BaseDetails/Presets/styled';
import { settingsPalette } from 'routes/pages/AuthorizedStack/Settings/PortalSettings/palette';
import { useSettingsContext } from 'routes/pages/AuthorizedStack/Settings/PortalSettings/SettingsContext';

const Presets = () => {
  const { t } = useTranslation();

  const { userTheme, updateUserTheme } = useSettingsContext();

  const selectedPresetName: string =
    typeof userTheme.palette === 'string' ? userTheme.palette : t('common.custom');

  const onSelectPreset = React.useCallback(
    (palettePreset: IPalettePreset) => () => {
      updateUserTheme({
        ...userTheme,
        palette: palettePreset.name,
      });
    },
    [userTheme]
  );

  return (
    <Container>
      <Title variant='bold' size='sm'>
        {t('themeEditor.preset')}
      </Title>
      <PresetsList
        list={settingsPalette}
        selected={selectedPresetName}
        onSelect={onSelectPreset}
      />
      <SubTitle variant='regular' size='sm'>
        {selectedPresetName}
      </SubTitle>
    </Container>
  );
};

export default appReactMemo(Presets);
