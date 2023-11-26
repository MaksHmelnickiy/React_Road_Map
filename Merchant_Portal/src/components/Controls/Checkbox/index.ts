import { Checkbox, checkboxClasses, ICheckboxProps } from '@private/components';
import { getBorderBase, getFontBase, getPrefixedVar } from '@private/payment';
import styled, { css } from 'styled-components';

import { ThemedElement } from 'utils/types';

const getLabelStyles = (prefix: string[]) => {
  return css`
    ${checkboxClasses.label} {
      ${getFontBase([...prefix, 'base'])};
    }

    ${checkboxClasses.checkIcon} {
      ${getBorderBase([...prefix, 'base'])};
    }

    &:hover {
      ${checkboxClasses.label} {
        ${getFontBase([...prefix, 'hover'])};
      }

      ${checkboxClasses.checkIcon} {
        ${getBorderBase([...prefix, 'hover'])};
      }
    }

    &:active {
      ${checkboxClasses.label} {
        ${getFontBase([...prefix, 'pressed'])};
      }

      ${checkboxClasses.checkIcon} {
        ${getBorderBase([...prefix, 'pressed'])};
      }
    }

    &[data-isdisabled='true'] {
      ${checkboxClasses.label} {
        ${getFontBase([...prefix, 'disabled'])};
      }

      ${checkboxClasses.checkIcon} {
        ${getBorderBase([...prefix, 'disabled'])};
      }
    }
  `;
};

const getCheckIconTheme = (prefix: string[]) => {
  return css`
    background: ${getPrefixedVar(prefix, 'bg')};
    border-color: ${getPrefixedVar(prefix, 'borderColor')};
    box-shadow: 0px 0px 0px ${getPrefixedVar(prefix, 'shadowSize')}
      ${getPrefixedVar(prefix, 'shadowColor')};

    &:after {
      // color of check icon
      border-color: ${getPrefixedVar(prefix, 'checkMark')};
    }

    &[data-isindeterminate='true']:after {
      // color of the indeterminate icon
      background: ${getPrefixedVar(prefix, 'checkMark')};
    }
  `;
};

export const getCheckboxTheme = (themePrefix = ['components', 'checkbox']) => {
  return css`
    ${checkboxClasses.label} {
      transition: all 0.3s ease;
    }

    ${checkboxClasses.checkIcon} {
      &[data-isindeterminate='false']:after {
        top: 0px;
        left: 5px;
        width: 7px;
        height: 12px;
      }
      &[data-isindeterminate='true']:after {
        top: 7px;
        left: 3px;
      }
    }

    &[data-ischecked='true'] {
      ${getLabelStyles([...themePrefix, 'checked'])};
    }

    &[data-ischecked='false'] {
      ${getLabelStyles([...themePrefix, 'notChecked'])};
    }

    ${checkboxClasses.checkIcon} {
      ${getCheckIconTheme([...themePrefix, 'notChecked', 'base'])}

      &[data-ischecked='true'] {
        ${getCheckIconTheme([...themePrefix, 'checked', 'base'])}
      }
    }

    // checked and not disabled
    &[data-ischecked='true']:not([data-isdisabled='true']) {
      &:hover {
        ${checkboxClasses.checkIcon} {
          ${getCheckIconTheme([...themePrefix, 'checked', 'hover'])}
        }
      }

      &:active {
        ${checkboxClasses.checkIcon} {
          ${getCheckIconTheme([...themePrefix, 'checked', 'pressed'])}
        }
      }
    }

    // not checked and not disabled
    &[data-ischecked='false']:not([data-isdisabled='true']) {
      &:hover {
        ${checkboxClasses.checkIcon} {
          ${getCheckIconTheme([...themePrefix, 'notChecked', 'hover'])}
        }
      }

      &:active {
        ${checkboxClasses.checkIcon} {
          ${getCheckIconTheme([...themePrefix, 'notChecked', 'pressed'])}
        }
      }
    }

    // checked and disabled
    &[data-ischecked='true']&[data-isdisabled='true'] {
      ${checkboxClasses.checkIcon} {
        ${getCheckIconTheme([...themePrefix, 'checked', 'disabled'])}
      }
    }

    &[data-ischecked='false']&[data-isdisabled='true'] {
      ${checkboxClasses.checkIcon} {
        ${getCheckIconTheme([...themePrefix, 'notChecked', 'disabled'])}
      }
    }
  `;
};

export default styled(Checkbox)<ThemedElement<ICheckboxProps>>`
  ${({ themePrefix = ['components', 'checkbox'] }) => getCheckboxTheme(themePrefix)};
`;
