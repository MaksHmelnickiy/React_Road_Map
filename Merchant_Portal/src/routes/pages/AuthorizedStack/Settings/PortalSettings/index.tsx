import React from 'react';
import { useTranslation } from 'react-i18next';

import { generatePalette } from '@private/payment';
import { useAppContext } from 'AppContext';

import { IUserPaletteColor, IUserTheme } from 'api/portalUser/types';
import Button from 'components/Button';
import { basePermanentConfig } from 'constants/defaultPalette';
import { useUpdateUserTheme } from 'queries/portalUser';
import BaseDetails from 'routes/pages/AuthorizedStack/Settings/PortalSettings/BaseDetails';
import Examples from 'routes/pages/AuthorizedStack/Settings/PortalSettings/Examples';
import { settingsPalette } from 'routes/pages/AuthorizedStack/Settings/PortalSettings/palette';
import { SettingsProvider } from 'routes/pages/AuthorizedStack/Settings/PortalSettings/SettingsContext';
import {
  PageBody,
  PageHeader,
  Title,
} from 'routes/pages/AuthorizedStack/Settings/styled';
import { PageContainer } from 'routes/pages/AuthorizedStack/styled';
import { TPalette } from 'utils/types';

const defaultUserSettings = {
  id: Math.random().toString(),
  palette: 'Royal Blue', // string or obj
  permanentPalette: basePermanentConfig, // always obj
  createdAt: new Date().toString(),
  updatedAt: new Date().toString(),
};

const Settings = () => {
  const { t } = useTranslation();

  const [userTheme, setUserTheme] = React.useState<IUserTheme>(defaultUserSettings);
  const [activeColorIndex, setActiveColorIndex] = React.useState<number | null>(null);
  const [isEdited, setIsEdited] = React.useState(false);
  const [isSaved, setIsSaved] = React.useState(false);

  const { mutate: saveUserTheme, isLoading } = useUpdateUserTheme();
  const { updateAppPalette } = useAppContext();

  // palette from preset (array of palette colors)
  const userPalette = React.useMemo(() => {
    if (typeof userTheme.palette === 'string') {
      const preset =
        settingsPalette.find((preset) => preset.name === userTheme.palette) ||
        settingsPalette[0];

      return preset.palette;
    }
    return userTheme.palette as IUserPaletteColor[];
  }, [userTheme.palette]);

  // palette obj to use colors
  const composedPalette = React.useMemo(() => {
    return userPalette.reduce<TPalette>((prev, { name, hue, saturation, config }) => {
      prev[name] = generatePalette({
        hue,
        saturation,
        lightnessConfig: config,
      });
      return prev;
    }, structuredClone(basePermanentConfig));
  }, [userPalette]);

  const updateUserTheme = React.useCallback((theme: IUserTheme) => {
    setUserTheme(theme);
    setIsEdited(true);
    setIsSaved(false);
  }, []);

  const onApplyTheme = React.useCallback(() => {
    updateAppPalette(userPalette);
    saveUserTheme({
      userId: '1',
      theme: userTheme,
    });
  }, [userTheme, userPalette]);

  const settingsContext = React.useMemo(
    () => ({
      userTheme,
      userPalette,
      composedPalette,
      updateUserTheme,
      activeColorIndex,
      onSelectPaletteColor: setActiveColorIndex,
    }),
    [userTheme, userPalette, composedPalette, activeColorIndex]
  );

  return (
    <PageContainer>
      <PageHeader>
        <Title as='h1'>{t('settings.title')}</Title>
        <Button
          variant='primary'
          onClick={onApplyTheme}
          disabled={!isEdited || isSaved || isLoading}
        >
          {t('common.save')}
        </Button>
      </PageHeader>
      <PageBody>
        <SettingsProvider value={settingsContext}>
          <BaseDetails />
          <Examples />
        </SettingsProvider>
      </PageBody>
    </PageContainer>
  );
};

export default Settings;
