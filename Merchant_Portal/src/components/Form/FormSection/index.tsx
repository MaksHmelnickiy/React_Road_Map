import React from 'react';
import { KeyPrefix, useTranslation } from 'react-i18next';

import { appReactMemo } from 'hocs';

import { Body, Container, Header, Title } from './styled';

interface IFormSection {
  sectionKey: string;
  children: React.ReactNode;
  keyPrefix: KeyPrefix<'translation'>;
  className?: string;
  customComponent?: React.ReactNode;
}

const FormSection = ({
  className,
  sectionKey,
  children,
  customComponent,
  keyPrefix,
}: IFormSection) => {
  const { t } = useTranslation('translation', {
    keyPrefix,
  });

  return (
    <Container id={sectionKey} className={className}>
      <Header>
        <Title as='h3'>{t(sectionKey as never)}</Title>
        {customComponent}
      </Header>
      <Body>{children}</Body>
    </Container>
  );
};

export default appReactMemo(FormSection);
