import React from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from 'components/Logo';

import { BrandWrapper, Container } from './styled';

const MainHeader = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <Container>
      <BrandWrapper onClick={goHome}>
        <Logo />
      </BrandWrapper>
    </Container>
  );
};

export default MainHeader;
