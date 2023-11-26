import React from 'react';
import { useTranslation } from 'react-i18next';

import { ICONS_MAP } from 'constants/icons';
import {
  autocompleteItems,
  buttonsPreview,
} from 'routes/pages/AuthorizedStack/Settings/PortalSettings/Examples/Components/constants';
import {
  Container,
  PreviewAutocomplete,
  PreviewButton,
  PreviewCheckbox,
  PreviewInput,
} from 'routes/pages/AuthorizedStack/Settings/PortalSettings/Examples/Components/styled';

const Components = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'settings.preview' });

  return (
    <Container>
      {buttonsPreview.map(({ text, state }) => (
        <PreviewButton key={text} $previewState={state}>
          {t(text as never)}
        </PreviewButton>
      ))}
      <PreviewCheckbox initialChecked label={t('text')} />
      <PreviewInput
        label={t('label')}
        startIcon={<ICONS_MAP.Letter />}
        endIcon={<ICONS_MAP.Calendar />}
        startIconSize={18}
        endIconSize={18}
        isAnimatedLabel
      />
      <PreviewAutocomplete options={autocompleteItems} value={1} />
    </Container>
  );
};

export default Components;
