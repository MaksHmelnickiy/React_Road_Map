import React from 'react';
import { useTranslation } from 'react-i18next';

import { Body, Container, CustomButton, Text, Title, Wrapper } from './styled';

interface IPageLayout {
  onClick?: () => void;
  icon: React.ReactElement;
  title: string;
  subtitle: string;
  buttonText?: string;
  children?: React.ReactNode;
  className?: string;
}

const WrongPageLayout: React.FC<IPageLayout> = ({
  onClick,
  icon,
  title,
  subtitle,
  buttonText,
  children,
  className,
}) => {
  const { t } = useTranslation();

  return (
    <Wrapper className={className}>
      <Container>
        <Body>
          {icon}
          <Title variant='regular' size='xxl'>
            {title}
          </Title>
          <Text variant='regular' size='sm'>
            {subtitle}
          </Text>
          {children || (
            <CustomButton variant='primary' onClick={onClick}>
              {buttonText || t('common.goHomeButton')}
            </CustomButton>
          )}
        </Body>
      </Container>
    </Wrapper>
  );
};

export default WrongPageLayout;
