import { IRadioSelectProps, RadioSelect, radioSelectClasses } from '@private/components';
import { getBorderBase, getFontBase, getPrefixedVar } from '@private/payment';
import styled, { css } from 'styled-components';

import { ThemedElement } from 'utils/types';

const getRadioStateTheme = (themePrefix: string[]) => {
  return css`
    ${radioSelectClasses.label} {
      ${getFontBase(themePrefix)};
    }

    ${radioSelectClasses.buttonIcon} {
      ${getBorderBase(themePrefix)};
      box-shadow: 0px 0px 0px ${getPrefixedVar(themePrefix, 'boxShadowWidth')}
        ${getPrefixedVar(themePrefix, 'boxShadowColor')};
      background: ${getPrefixedVar(themePrefix, 'bg')};
    }
  `;
};

export const getRadioSelectTheme = (themePrefix: string[]) => {
  return css`
    ${radioSelectClasses.groupLabel} {
      ${getFontBase([...themePrefix, 'groupLabel'])};
    }

    ${radioSelectClasses.radioContainer} {
      ${getRadioStateTheme([...themePrefix, 'notChecked', 'base'])};

      &:hover {
        ${getRadioStateTheme([...themePrefix, 'notChecked', 'hover'])};
      }

      &:active {
        ${getRadioStateTheme([...themePrefix, 'notChecked', 'pressed'])};
      }

      &[data-ischecked='true'] {
        ${getRadioStateTheme([...themePrefix, 'checked', 'base'])};

        &:hover {
          ${getRadioStateTheme([...themePrefix, 'checked', 'hover'])};
        }

        &:active {
          ${getRadioStateTheme([...themePrefix, 'checked', 'pressed'])};
        }
      }
    }

    &[data-is-disabled='true'] {
      ${getRadioStateTheme([...themePrefix, 'notChecked', 'disabled'])};
    }

    &[data-is-disabled='true'] ${radioSelectClasses.radioContainer}[data-ischecked='true'] {
      ${getRadioStateTheme([...themePrefix, 'checked', 'disabled'])};
    }
  `;
};

export default styled(RadioSelect)<ThemedElement<IRadioSelectProps>>`
  ${radioSelectClasses.label} {
    line-height: 144%;
  }

  ${radioSelectClasses.buttonIcon} {
    height: 20px;
    width: 20px;

    &:after {
      display: none;
    }
  }

  ${({ themePrefix = ['components', 'radioSelect'] }) =>
    getRadioSelectTheme(themePrefix)};
`;
