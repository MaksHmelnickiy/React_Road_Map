import { getPrefixedVar } from '@private/payment';
import styled, { keyframes } from 'styled-components';

import { ICONS_MAP } from 'constants/icons';

export const APP_ANIMATION_DURATION = 1500;

const showAnimation = keyframes`
   0%   { 
     transform: scale(1);
     opacity: 1;
   }  
    50%  {
      transform: scale(0.8);
      opacity: 0.8;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
`;

const pulse = () => keyframes`
  0%   {
    background: ${getPrefixedVar(['components', 'appLoader', '0'])};
  }
  50%  {
    background: ${getPrefixedVar(['components', 'appLoader', '50'])};
  }
  70%  {
    background: ${getPrefixedVar(['components', 'appLoader', '70'])};
  }
  98% {
    width: 350px;
    height: 350px;
  }
  100% {
    background: ${getPrefixedVar(['components', 'appLoader', '100'])};
  }
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: ${pulse} ${APP_ANIMATION_DURATION}ms ease infinite;
  }
`;

export const AnimatedLogo = styled(ICONS_MAP.Logo)`
  width: 180px;
  height: 180px;
  position: relative;
  animation: ${showAnimation} ${APP_ANIMATION_DURATION}ms 0s linear infinite forwards;
  z-index: 1;
`;
