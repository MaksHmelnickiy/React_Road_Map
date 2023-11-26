import {
  AutocompleteSelect as AutocompleteSelectBase,
  autocompleteSelectClasses,
  highlightedTextClasses,
  IAutocompleteSelectProps,
} from '@private/components';
import { getBorderBase, getFontBase, getPrefixedVar } from '@private/payment';
import styled, { css } from 'styled-components';

import { getDividerTheme } from 'components/Divider';
import { getScrollbarTheme } from 'components/Scrollbar';
import { ThemedElement } from 'utils/types';

export interface IGetSelectThemeProps {
  disabled?: boolean;
  error?: boolean;
  isAnimatedLabel?: boolean;
  fullVisibleOption?: boolean;
}

export interface IAutocompleteSelect extends IAutocompleteSelectProps {
  fullVisibleOption?: boolean;
}

export type ISelectType = ThemedElement<IAutocompleteSelect>;

export const getAutocompleteTheme = (prefix: string[]) => {
  return css<IGetSelectThemeProps>`
    ${autocompleteSelectClasses.labelWrapper} {
      display: flex;
      align-items: flex-start;
      column-gap: 5px;
    }

    ${autocompleteSelectClasses.label} {
      line-height: 143%;
      max-height: 20px;
      overflow: hidden;
      ${getFontBase([...prefix, 'inactive', 'label'])};
    }

    ${autocompleteSelectClasses.root} {
      column-gap: 4px;
      row-gap: 7px;
    }

    ${autocompleteSelectClasses.inputWrapper} {
      padding: 0 8px 0 16px;
      border-style: solid;
      background: ${getPrefixedVar(prefix, 'inactive', 'bg')};

      ${getBorderBase([...prefix, 'inactive'])};
      box-shadow: 0px 0px 0px transparent,
        0px 0px 0px ${getPrefixedVar(prefix, 'inactive', 'outlineWidth')}
          ${getPrefixedVar(prefix, 'inactive', 'outlineColor')};
    }

    ${autocompleteSelectClasses.input} {
      padding: 0;
      ${getFontBase([...prefix, 'inactive'])};
      width: 0;
      min-width: 0;
    }

    ${autocompleteSelectClasses.input}::placeholder {
      ${getFontBase([...prefix, 'inactive', 'placeholder'])};
    }

    ${({ disabled: isDisabled, error: isError }) => {
      if (isDisabled) {
        return css`
          ${autocompleteSelectClasses.label} {
            ${getFontBase([...prefix, 'disabled', 'label'])};
          }

          ${autocompleteSelectClasses.inputWrapper} {
            ${getBorderBase([...prefix, 'disabled'])};
            background: ${getPrefixedVar(prefix, 'disabled', 'bg')};
            box-shadow: 0px 0px 0px transparent,
              0px 0px 0px ${getPrefixedVar(prefix, 'disabled', 'outlineWidth')}
                ${getPrefixedVar(prefix, 'disabled', 'outlineColor')};

            ${autocompleteSelectClasses.input} {
              ${getFontBase([...prefix, 'disabled'])};

              &::placeholder {
                ${getFontBase([...prefix, 'disabled', 'placeholder'])};
              }
            }
          }
        `;
      }

      if (isError) {
        return css`
          ${autocompleteSelectClasses.label} {
            ${getFontBase([...prefix, 'error', 'label'])};
          }

          ${autocompleteSelectClasses.inputWrapper} {
            ${getBorderBase([...prefix, 'error'])};
            background: ${getPrefixedVar(prefix, 'error', 'bg')};
            box-shadow: 0px 0px 0px transparent,
              0px 0px 0px ${getPrefixedVar(prefix, 'error', 'outlineWidth')}
                ${getPrefixedVar(prefix, 'error', 'outlineColor')};

            ${autocompleteSelectClasses.input} {
              ${getFontBase([...prefix, 'error'])};
            }

            ${autocompleteSelectClasses.input}::placeholder {
              ${getFontBase([...prefix, 'error', 'placeholder'])};
            }
          }
        `;
      }

      return css`
        &:hover {
          ${autocompleteSelectClasses.label} {
            ${getFontBase([...prefix, 'error', 'label'])};
          }
        }

        ${autocompleteSelectClasses.inputWrapper}:hover {
          ${getBorderBase([...prefix, 'hover'])};
          background: ${getPrefixedVar(prefix, 'hover', 'bg')};
          box-shadow: 0px 0px 0px transparent,
            0px 0px 0px ${getPrefixedVar(prefix, 'hover', 'outlineWidth')}
              ${getPrefixedVar(prefix, 'hover', 'outlineColor')};

          ${autocompleteSelectClasses.input} {
            ${getFontBase([...prefix, 'hover'])};
          }

          ${autocompleteSelectClasses.input}::placeholder {
            ${getFontBase([...prefix, 'hover', 'placeholder'])};
          }
        }

        ${autocompleteSelectClasses.inputWrapper}[data-is-focused='true'] {
          ${getBorderBase([...prefix, 'focus'])};
          background: ${getPrefixedVar(prefix, 'focus', 'bg')};
          box-shadow: 0px 0px 0px transparent,
            0px 0px 0px ${getPrefixedVar(prefix, 'focus', 'outlineWidth')}
              ${getPrefixedVar(prefix, 'focus', 'outlineColor')};

          ${autocompleteSelectClasses.input} {
            ${getFontBase([...prefix, 'focus'])};
          }
        }
      `;
    }}

    ${autocompleteSelectClasses.inputWrapper} {
      ${autocompleteSelectClasses.input}:focus::placeholder {
        ${getFontBase([...prefix, 'focus', 'placeholder'])};
      }
    }

    ${autocompleteSelectClasses.error} {
      ${getFontBase([...prefix, 'error', 'helpText'])};
      margin-top: 2px;
      min-height: 18px;
      line-height: 133%;
    }

    ${autocompleteSelectClasses.optionsContent} {
      ${getScrollbarTheme([...prefix, 'scrollBar'])};

      li:not(:last-child) ${autocompleteSelectClasses.divider} {
        ${getDividerTheme([...prefix, 'optionsList', 'divider'])};

        width: 95%;
        margin-left: auto;
        margin-right: auto;
        transition: all 0.3s ease;
      }
    }

    ${autocompleteSelectClasses.optionsWrapper} {
      border-style: solid;
      ${getBorderBase([...prefix, 'optionsList'])};
      background: ${getPrefixedVar(prefix, 'optionsList', 'bg')};
      padding: ${getPrefixedVar(prefix, 'optionsList', 'verticalGap')}
        ${getPrefixedVar(prefix, 'optionsList', 'horizontalGap')};
      box-shadow: 0px 7px 20px ${getPrefixedVar(prefix, 'optionsList', 'boxShadowColor')};
      z-index: 100;
    }

    ${autocompleteSelectClasses.option} {
      ${({ fullVisibleOption }) =>
        !fullVisibleOption
          ? css`
              display: block;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            `
          : css`
              word-break: break-word;
            `}

      ${getFontBase([...prefix, 'options', 'base'])};
      background: ${getPrefixedVar(prefix, 'options', 'base', 'bg')};

      &:hover,
      &[data-is-highlighted='true'] {
        ${getFontBase([...prefix, 'options', 'hover'])};
        background: ${getPrefixedVar(prefix, 'options', 'hover', 'bg')};
      }

      &:active {
        ${getFontBase([...prefix, 'options', 'active'])};
        background: ${getPrefixedVar(prefix, 'options', 'active', 'bg')};
      }

      &[data-is-selected='true'] {
        ${getFontBase([...prefix, 'options', 'selected'])};
        background: ${getPrefixedVar(prefix, 'options', 'selected', 'bg')};
      }

      &[data-is-disabled='true'] {
        ${getFontBase([...prefix, 'options', 'disabled'])};
        background: ${getPrefixedVar(prefix, 'options', 'disabled', 'bg')};
      }
    }

    ${autocompleteSelectClasses.loadingBody} {
      height: 50px;
      ${getFontBase([...prefix, 'loadingText'])};
    }

    ${highlightedTextClasses.highlighted} {
      background: ${getPrefixedVar(prefix, 'highlightedSearch')};
    }

    ${autocompleteSelectClasses.removeAllButton} {
      background: ${getPrefixedVar(prefix, 'clearButton', 'base', 'bg')};
      color: ${getPrefixedVar(prefix, 'clearButton', 'base', 'icon')};

      &:hover {
        background: ${getPrefixedVar(prefix, 'clearButton', 'hover', 'bg')};
        color: ${getPrefixedVar(prefix, 'clearButton', 'hover', 'icon')};
      }

      &:active {
        background: ${getPrefixedVar(prefix, 'clearButton', 'active', 'bg')};
        color: ${getPrefixedVar(prefix, 'clearButton', 'active', 'icon')};
      }
    }

    // multiselect restyle

    ${autocompleteSelectClasses.selectedTag} {
      background: ${getPrefixedVar(prefix, 'mulitTags', 'tag', 'bg')};
      border-style: solid;
      ${getBorderBase([...prefix, 'mulitTags', 'tag'])};
      ${getFontBase([...prefix, 'mulitTags', 'totalTag'])};
    }

    ${autocompleteSelectClasses.counterTag} {
      background: ${getPrefixedVar(prefix, 'mulitTags', 'totalTag', 'bg')};
      ${getBorderBase([...prefix, 'mulitTags', 'totalTag'])};
      ${getFontBase([...prefix, 'mulitTags', 'totalTag'])};
    }
  `;
};

const baseProps = (props: ISelectType) => ({
  iconSize: 12,
  popoverGap: 3,
  ...props,
});

export const StyledSm = styled(AutocompleteSelectBase).attrs<ISelectType>(
  baseProps
)<ISelectType>`
  ${autocompleteSelectClasses.inputWrapper} {
    min-height: 32px;
    z-index: 0;
    position: relative;
  }

  ${autocompleteSelectClasses.option} {
    min-height: 32px;
    padding: 6px 35px 6px 14px;
  }

  ${({ themePrefix = ['components', 'autocompleteSelect', 'sm'] }) =>
    getAutocompleteTheme(themePrefix)}
`;

export const StyledLg = styled(AutocompleteSelectBase).attrs<ISelectType>(
  baseProps
)<ISelectType>`
  ${autocompleteSelectClasses.inputWrapper} {
    height: 48px;
  }

  ${autocompleteSelectClasses.option} {
    min-height: 48px;
    padding: ${({ fullVisibleOption }) =>
      fullVisibleOption ? '7px 35px 7px 14px' : '14px 35px 14px 14px'};
  }

  ${({ themePrefix = ['components', 'autocompleteSelect', 'lg'] }) =>
    getAutocompleteTheme(themePrefix)}
`;
