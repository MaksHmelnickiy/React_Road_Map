import { Player } from '@lottiefiles/react-lottie-player';
import { getPrefixedVar } from '@private/payment';
import styled, { css, keyframes } from 'styled-components';

import { ThemedElement } from 'utils/types';

export const loaderTheme = {
  content: 'palette.primary.20',
};

const showAnimation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div<ThemedElement<{ width: number; height: number }>>`
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: ${({ width }) => `${width}px`};
    height: ${({ height }) => `${height}px`};
    animation: ${showAnimation} 0.75s 0s linear infinite;
  }

  ${({ themePrefix = ['components', 'loader'] }) => css`
    svg * {
      fill: ${getPrefixedVar(themePrefix, 'content')};
    }
  `}
`;

export const StyledPlayer = styled(Player)<{ size: number }>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size / 2}px`};
  display: flex;
  align-content: center;
  justify-content: center;
`;
