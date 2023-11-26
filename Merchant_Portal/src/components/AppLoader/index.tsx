import React from 'react';

import { AnimatedLogo, Container, Wrapper } from './styled';

const AppLoader: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <AnimatedLogo />
      </Wrapper>
    </Container>
  );
};

export default AppLoader;
