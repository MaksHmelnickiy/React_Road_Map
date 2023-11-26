import { Tooltip, tooltipClasses } from '@private/components';
import { getBorderBase, getFontBase, getPrefixedVar } from '@private/payment';
import styled, { css } from 'styled-components';

import { ThemedElement } from 'utils/types';

export default styled(Tooltip).attrs(() => ({
  showOnClick: true,
}))<ThemedElement>`
  ${tooltipClasses.message} {
    padding: 0;
    line-height: 150%;
    letter-spacing: 0.5px;

    ${({ themePrefix = ['components', 'popover'] }: ThemedElement) => css`
      ${getFontBase(themePrefix)};
      ${getBorderBase(themePrefix)};
      background: ${getPrefixedVar(themePrefix, 'bg')};
      box-shadow: 0px 4px 22px ${getPrefixedVar(themePrefix, 'boxShadow')};
    `}
  }
`;
