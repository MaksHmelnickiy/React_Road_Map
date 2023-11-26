import React from 'react';
import { useTranslation } from 'react-i18next';

import { appReactMemo } from 'hocs';

import { Container, Title } from './styled';

interface ISection {
  headerIntl: string;
  children: React.ReactNode;
}

const Section = ({ headerIntl, children }: ISection) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'manualTransaction.sections',
  });

  return (
    <Container id={headerIntl}>
      <Title as='h3'>{t(headerIntl as never)}</Title>
      {children}
    </Container>
  );
};

export default appReactMemo(Section);
