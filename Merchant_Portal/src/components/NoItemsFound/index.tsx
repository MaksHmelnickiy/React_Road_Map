import React from 'react';
import { useTranslation } from 'react-i18next';

import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';

import { Container, Subtitle, Title } from './styled';

export interface INoItemsFoundProps {
  className?: string;
  title?: string;
  subtitle?: string;
}

const NoItemsFound: React.FC<INoItemsFoundProps> = ({ className, title, subtitle }) => {
  const { t } = useTranslation();

  return (
    <Container className={className}>
      <ICONS_MAP.EmptySearch />
      <Title variant='regular' size='xxl'>
        {title || t('common.noItemsFound')}
      </Title>
      {subtitle && (
        <Subtitle variant='regular' size='sm'>
          {subtitle}
        </Subtitle>
      )}
    </Container>
  );
};

export default appReactMemo(NoItemsFound);
