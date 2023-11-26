import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { composeTheme } from '@private/payment';

import PreviewApp from 'components/PreviewApp';
import {
  previewComponents,
  settingsPreviewTheme,
} from 'routes/pages/AuthorizedStack/Settings/PortalSettings/Examples/constants';
import Lightness from 'routes/pages/AuthorizedStack/Settings/PortalSettings/Examples/Lightness';
import {
  Container,
  PreviewElements,
  Title,
} from 'routes/pages/AuthorizedStack/Settings/PortalSettings/Examples/styled';
import { useSettingsContext } from 'routes/pages/AuthorizedStack/Settings/PortalSettings/SettingsContext';
import { TRootState } from 'store';
import { IUserState } from 'store/userConfiguration';
import { COMPONENTS_MAPPING } from 'theme/constants';
import { THEMES } from 'theme/theme';

import Components from './Components';

const Examples = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'settings.preview' });

  const { composedPalette, activeColorIndex } = useSettingsContext();

  const { theme } = useSelector<TRootState, IUserState>(
    (state) => state.userConfiguration
  );

  const { variables } = React.useMemo(() => {
    const appTheme = THEMES[theme];
    if (!appTheme) {
      return {};
    }

    const components = previewComponents.reduce<Record<string, unknown>>(
      (prev, componentName) => {
        prev[componentName] =
          appTheme.components[componentName as keyof typeof appTheme.components];
        return prev;
      },
      {}
    );

    const previewTheme = {
      components,
      settings: settingsPreviewTheme,
    };

    return composeTheme({
      theme: previewTheme,
      components: appTheme.components,
      componentsMapping: COMPONENTS_MAPPING,
      palette: composedPalette,
    });
  }, [theme, composedPalette]);

  return (
    <Container style={variables}>
      <Title variant='regular' size='xl'>
        {t('title')}
      </Title>
      <PreviewApp />
      <PreviewElements>
        <Lightness />
        {Number.isFinite(activeColorIndex) && <Components />}
      </PreviewElements>
    </Container>
  );
};

export default Examples;
