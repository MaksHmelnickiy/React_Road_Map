import React from 'react';
import { useTranslation } from 'react-i18next';

import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';

import { Container, Title } from './styled';

const Logo = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <ICONS_MAP.Logo />
      <Title as='h3'>{t('logo')}</Title>
    </Container>
  );
};

export default appReactMemo(Logo);
