import { getPrefixedVar } from '@private/payment';
import styled, { css } from 'styled-components';

import Typography from 'components/Typography';
import { ThemedElement } from 'utils/types';

export type TStatus = 'success' | 'primary' | 'warning' | 'error' | 'neutral';

export const Container = styled(Typography)<
  ThemedElement<{
    colorVariant?: TStatus;
  }>
>`
  position: relative;
  padding-left: 14px;

  &:after {
    content: '';
    width: 6px;
    height: 6px;
    position: absolute;
    border-radius: 50%;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  ${({ themePrefix, colorVariant = 'primary' }) => {
    const prefix = themePrefix || ['components', 'status', colorVariant];

    return css`
      color: ${getPrefixedVar(prefix)};

      &:after {
        background: ${getPrefixedVar(prefix)};
      }
    `;
  }}
`;
