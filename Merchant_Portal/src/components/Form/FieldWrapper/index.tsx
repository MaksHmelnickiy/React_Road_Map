import React from 'react';

import { Container, Content, Label, Title } from './styled';

interface IFromBlock {
  title: string;
  children: React.ReactNode;
  component?: React.ReactNode;
  centered?: boolean;
  notInput?: boolean;
}

const FieldWrapper = ({ title, children, component, notInput, centered }: IFromBlock) => {
  return (
    <Container $notInput={notInput}>
      <Label $centered={centered}>
        <Title variant='regular' size='xl'>
          {title}
        </Title>
        {component}
      </Label>
      <Content>{children}</Content>
    </Container>
  );
};

export default FieldWrapper;
