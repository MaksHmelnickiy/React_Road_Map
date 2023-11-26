import { Tooltip, tooltipClasses } from '@private/components';
import { getBorderBase, getFontBase, getPrefixedVar } from '@private/payment';
import styled, { css } from 'styled-components';

import { ThemedElement } from 'utils/types';

export default styled(Tooltip).attrs(() => ({
  enableArrow: true,
}))<ThemedElement>`
  ${tooltipClasses.message} {
    padding: 12px 10px;
    letter-spacing: 0.4px;
  }

  ${({ themePrefix = ['components', 'tooltip'] }: ThemedElement) => css`
    ${tooltipClasses.message} {
      ${getFontBase(themePrefix)};
      ${getBorderBase(themePrefix)};
      background: ${getPrefixedVar(themePrefix, 'bg')};

      &:after {
        border-color: ${getPrefixedVar(themePrefix, 'bg')};
      }
    }
  `}
`;
