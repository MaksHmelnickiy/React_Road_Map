import React from 'react';

import { Container, TTypeVariant } from 'components/Tags/Type/styled';
import { appReactMemo } from 'hocs';

export interface IStatus {
  children: React.ReactNode;
  variant?: TTypeVariant;
  className?: string;
}

const Type = ({ children, variant = 'primary', className }: IStatus) => {
  return (
    <Container className={className} colorVariant={variant} size='xs' variant='regular'>
      {children}
    </Container>
  );
};

export default appReactMemo(Type);
