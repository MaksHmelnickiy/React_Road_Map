import React from 'react';
import { useTranslation } from 'react-i18next';

import PresetColorPicker from 'routes/pages/AuthorizedStack/Settings/PortalSettings/BaseDetails/PresetColorPicker';
import Presets from 'routes/pages/AuthorizedStack/Settings/PortalSettings/BaseDetails/Presets';
import {
  Container,
  Title,
} from 'routes/pages/AuthorizedStack/Settings/PortalSettings/BaseDetails/styled';

const BaseDetails = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'settings.baseDetails' });

  return (
    <Container>
      <Title variant='regular' size='xl'>
        {t('title')}
      </Title>
      <Presets />
      <PresetColorPicker />
    </Container>
  );
};

export default BaseDetails;
