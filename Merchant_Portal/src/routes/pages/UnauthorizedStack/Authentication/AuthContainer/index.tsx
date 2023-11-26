import React from 'react';

import Logo from 'components/Logo';

import { Wrapper } from '../../styled';

import { Body, Container, Header } from './styled';

interface IAuthContainer {
  children: React.ReactNode;
}

const AuthContainer = ({ children }: IAuthContainer) => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <Logo />
        </Header>
        <Body>{children}</Body>
      </Container>
    </Wrapper>
  );
};

export default AuthContainer;
