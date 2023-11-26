import { getPrefixedVar } from '@private/payment';
import styled, { css } from 'styled-components';

import Typography from 'components/Typography';
import { ThemedElement } from 'utils/types';

export type TTypeVariant = 'success' | 'primary' | 'warning' | 'secondary' | 'info';

export const Container = styled(Typography)<
  ThemedElement<{
    colorVariant?: TTypeVariant;
  }>
>`
  ${({ themePrefix, colorVariant = 'primary' }) => {
    const prefix = themePrefix || ['components', 'type', colorVariant];

    return css`
      color: ${getPrefixedVar(prefix)};
    `;
  }}
`;
