import { IInputProps as IInputBaseProps, Input, inputClasses } from '@private/components';
import { getBaseThemeProps, getFontBase, getPrefixedVar } from '@private/payment';
import styled, { css } from 'styled-components';

import { ThemedElement } from 'utils/types';

type IInputThemeProps = Pick<IInputBaseProps, 'startIcon' | 'disabled' | 'error'>;

export interface INewProps {
  isAlignCenter?: boolean;
  disablePasswordIcon?: boolean;
  regExp?: RegExp;
  maxNumber?: number;
  shouldValidate?: boolean;
}

type IThemedInputProps = IInputThemeProps & INewProps;
export type IInputProps = ThemedElement<
  IInputBaseProps &
    INewProps & {
      sizeVariant?: 'lg' | 'sm';
    }
>;
export type IStyledInputProps = ThemedElement<
  IInputBaseProps &
    INewProps & {
      $sizeVariant?: 'lg' | 'sm';
    }
>;

const getInputBaseProps = (prefix: string[]) => css`
  ${getBaseThemeProps(prefix)};
  background: ${getPrefixedVar(prefix, 'bg')};
  box-shadow: 0px 0px 0px transparent,
    0px 0px 0px ${getPrefixedVar(prefix, 'outlineWidth')}
      ${getPrefixedVar(prefix, 'outlineColor')};
`;

export const getInputTheme = (prefix = ['components', 'input', 'lg']) => {
  return css<IThemedInputProps>`
    ${inputClasses.labelPlaceholder} {
      line-height: 133%;
      ${getFontBase([...prefix, 'inactive', 'labelPlaceholder'])};
    }

    ${inputClasses.label} {
      line-height: 143%;
      max-height: 20px;
      overflow: hidden;
      ${getFontBase([...prefix, 'inactive', 'label'])};
    }

    ${({ error: isError }) => {
      return (
        isError &&
        css`
          ${inputClasses.labelPlaceholder} {
            ${getFontBase([...prefix, 'error', 'labelPlaceholder'])};
          }

          ${inputClasses.label} {
            ${getFontBase([...prefix, 'error', 'label'])};
          }

          ${inputClasses.iconWrapper}:first-of-type {
            color: ${getPrefixedVar(prefix, 'error', 'startIcon')};
          }

          ${inputClasses.iconWrapper}:last-of-type {
            color: ${getPrefixedVar(prefix, 'error', 'endIcon')};
          }
        `
      );
    }}

    ${({ disabled: isDisabled }) => {
      return isDisabled
        ? css`
            ${inputClasses.labelPlaceholder} {
              ${getFontBase([...prefix, 'disabled', 'labelPlaceholder'])};
            }
            ${inputClasses.label} {
              ${getFontBase([...prefix, 'disabled', 'label'])};
            }
          `
        : css`
            &:hover {
              ${inputClasses.labelPlaceholder} {
                ${getFontBase([...prefix, 'hover', 'labelPlaceholder'])};
              }
              ${inputClasses.label} {
                ${getFontBase([...prefix, 'hover', 'label'])};
              }
            }
          `;
    }}

    &:focus-within ${inputClasses.labelPlaceholder},
    ${inputClasses.labelPlaceholder}[data-is-active='true'] {
      top: 10px;
      ${getFontBase([...prefix, 'focus', 'labelPlaceholder'])};
    }

    &:focus-within ${inputClasses.label} {
      ${getFontBase([...prefix, 'focus', 'label'])};
    }

    ${({ isAlignCenter }) =>
      isAlignCenter &&
      css`
        ${inputClasses.labelPlaceholder} {
          left: 50%;
          transform: translate(-50%, -50%);
        }

        ${inputClasses.input} {
          text-align: center;
          padding-left: 5px;
          padding-right: 5px;
        }
      `}

    ${inputClasses.iconWrapper}:first-of-type {
      color: ${getPrefixedVar(prefix, 'inactive', 'startIcon')};
      transition: all 0.3s ease;
    }

    ${inputClasses.iconWrapper}:last-of-type {
      color: ${getPrefixedVar(prefix, 'inactive', 'endIcon')};
      transition: all 0.3s ease;
    }

    &:hover ${inputClasses.iconWrapper} {
      &:first-of-type {
        color: ${getPrefixedVar(prefix, 'hover', 'startIcon')};
      }
      &:last-of-type {
        color: ${getPrefixedVar(prefix, 'hover', 'endIcon')};
      }
    }

    ${inputClasses.input}:focus ~ ${inputClasses.iconWrapper} {
      &:first-of-type {
        color: ${getPrefixedVar(prefix, 'focus', 'startIcon')};
      }
      &:last-of-type {
        color: ${getPrefixedVar(prefix, 'focus', 'endIcon')};
      }
    }

    ${inputClasses.input}:disabled ~ ${inputClasses.iconWrapper} {
      &:first-of-type {
        color: ${getPrefixedVar(prefix, 'disabled', 'startIcon')};
      }
      &:last-of-type {
        color: ${getPrefixedVar(prefix, 'disabled', 'endIcon')};
      }
    }

    ${inputClasses.input} {
      line-height: 150%;
      ${getInputBaseProps([...prefix, 'inactive'])};

      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px ${getPrefixedVar(prefix, 'inactive', 'bg')} inset !important;
        -webkit-text-fill-color: ${getPrefixedVar(prefix, 'inactive', 'text')};
      }
    }

    ${inputClasses.input}::placeholder {
      ${getFontBase([...prefix, 'inactive', 'placeholder'])};
    }

    &:hover ${inputClasses.input}:not(:read-only) {
      ${getInputBaseProps([...prefix, 'hover'])};
    }

    &:hover ${inputClasses.input}:not(:read-only)::placeholder {
      ${getFontBase([...prefix, 'hover', 'placeholder'])};
    }

    ${inputClasses.input}:not(:read-only) {
      &:focus {
        ${getInputBaseProps([...prefix, 'focus'])};

        &::placeholder {
          ${getFontBase([...prefix, 'focus', 'placeholder'])};
        }
      }

      &:disabled {
        ${getInputBaseProps([...prefix, 'disabled'])};

        &::placeholder {
          ${getFontBase([...prefix, 'disabled', 'placeholder'])};
        }
      }
    }

    ${({ error: isError }) =>
      isError &&
      css`
        ${inputClasses.input} {
          ${getInputBaseProps([...prefix, 'error'])};
        }

        ${inputClasses.input}::placeholder {
          ${getFontBase([...prefix, 'error', 'placeholder'])};
        }
      `}

    ${inputClasses.input} {
      &:disabled {
        ${getInputBaseProps([...prefix, 'disabled'])};

        &::placeholder {
          ${getFontBase([...prefix, 'disabled', 'placeholder'])};
        }
      }
    }

    ${inputClasses.error} {
      margin-top: 2px;
      min-height: 18px;
      line-height: 133%;
      ${getFontBase([...prefix, 'error', 'helpText'])};
    }

    ${inputClasses.iconButton} {
      color: ${getPrefixedVar(prefix, 'button', 'base', 'icon')};
      background: ${getPrefixedVar(prefix, 'button', 'base', 'bg')};

      &:hover {
        color: ${getPrefixedVar(prefix, 'button', 'hover', 'icon')};
        background: ${getPrefixedVar(prefix, 'button', 'hover', 'bg')};
      }

      &:active {
        color: ${getPrefixedVar(prefix, 'button', 'pressed', 'icon')};
        background: ${getPrefixedVar(prefix, 'button', 'hover', 'bg')};
      }
    }
  `;
};

export const StyledInput = styled(Input).attrs<IStyledInputProps>((props) => ({
  isAnimatedLabel: true,
  iconMargin: 16,
  startIconSize: 19,
  endIconSize: 19,
  ...props,
}))<IInputProps>`
  row-gap: 7px;

  ${inputClasses.labelPlaceholder} {
    ${({ startIcon }) =>
      !startIcon &&
      css`
        left: 16px;
      `};
  }

  ${inputClasses.input} {
    ${({ startIcon, isAnimatedLabel }) =>
      !startIcon &&
      isAnimatedLabel &&
      css`
        padding-left: 16px;
      `};
  }
`;

export const LgInput = styled(StyledInput)<IInputProps>`
  ${({ themePrefix = ['components', 'input'] }) => {
    return css`
      ${getInputTheme([...themePrefix, 'lg'])};

      ${inputClasses.input} {
        height: 48px;
      }
    `;
  }}
`;

export const SmInput = styled(StyledInput)<IInputProps>`
  ${({ themePrefix = ['components', 'input'] }) => {
    return css`
      ${getInputTheme([...themePrefix, 'sm'])};

      ${inputClasses.input} {
        height: 32px;
      }
    `;
  }}
`;
