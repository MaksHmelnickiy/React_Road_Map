import { getPrefixedVar } from '@private/payment';
import styled, { css } from 'styled-components';

import { ThemedElement } from 'utils/types';

export const getDividerTheme = (prefix: string[]) => {
  return css`
    height: ${getPrefixedVar(prefix, 'height')};
    background: ${getPrefixedVar(prefix, 'bg')};
    margin-top: ${getPrefixedVar(prefix, 'verticalGap')};
    margin-bottom: ${getPrefixedVar(prefix, 'verticalGap')};
  `;
};

export default styled.div<ThemedElement>`
  transition: all 0.3s ease;

  ${({ $themePrefix = ['components', 'divider'] }: ThemedElement) =>
    getDividerTheme($themePrefix)};
`;
