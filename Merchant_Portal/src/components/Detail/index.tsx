import React from 'react';

import {
  Container,
  IconWrapper,
  Text,
  TextContainer,
  Title,
} from 'components/Detail/styled';
import { appReactMemo } from 'hocs';

interface IDetail {
  title: string;
  text?: React.ReactNode;
  icon?: React.ReactNode;
  small?: boolean;
  enabledIcon?: boolean;
}

const Detail: React.FC<IDetail> = ({ title, text, icon, small, enabledIcon }) => {
  return (
    <Container $isSmall={small}>
      {(icon || enabledIcon) && <IconWrapper>{icon || ''}</IconWrapper>}
      <TextContainer>
        <Title variant='bold' size='xs'>
          {title}
        </Title>
        {React.isValidElement(text) ? (
          text
        ) : (
          <Text variant='regular' size='md'>
            {text || '-'}
          </Text>
        )}
      </TextContainer>
    </Container>
  );
};

export default appReactMemo(Detail);
