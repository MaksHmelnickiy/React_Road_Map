import { getPrefixedVar } from '@private/payment';
import { css } from 'styled-components';

export const getScrollbarTheme = (prefix: string[]) => {
  return css`
    &::-webkit-scrollbar {
      width: ${getPrefixedVar(prefix, 'width')};
      height: 14px;
      background: ${getPrefixedVar(prefix, 'bg')};
      border-left: 1px solid ${getPrefixedVar(prefix, 'separatorColor')};
    }

    &::-webkit-scrollbar-thumb {
      min-height: 30px;
      height: 5px;
      border: ${getPrefixedVar(prefix, 'borderWidth')} solid
        ${getPrefixedVar(prefix, 'borderColor')};
      background-clip: padding-box;
      background-color: ${getPrefixedVar(prefix, 'thumb')};
      border-radius: ${getPrefixedVar(prefix, 'borderRadius')};
    }

    &::-webkit-scrollbar-button {
      display: none;
      width: 0;
      height: 0;
    }

    &::-webkit-scrollbar-corner {
      background: ${getPrefixedVar(prefix, 'borderColor')};
    }
  `;
};
