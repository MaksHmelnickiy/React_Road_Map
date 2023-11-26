import React from 'react';

import { Container, TStatus } from 'components/Tags/Status/styled';
import { appReactMemo } from 'hocs';

export interface IStatus {
  children: React.ReactNode;
  variant?: TStatus;
  className?: string;
}

const Status = ({ children, variant = 'success', className }: IStatus) => {
  return (
    <Container className={className} colorVariant={variant} size='sm' variant='regular'>
      {children}
    </Container>
  );
};

export default appReactMemo(Status);
