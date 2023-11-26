import { Button, IButtonProps as IBaseButtonProps } from '@private/components';
import { getBaseThemeProps, getPrefixedVar } from '@private/payment';
import styled, { css } from 'styled-components';

import { ThemedElement } from 'utils/types';

export enum BUTTON_PREVIEW_STATE {
  BASE = 'BASE',
  HOVERED = 'HOVERED',
  FOCUSED = 'FOCUSED',
  PRESSED = 'PRESSED',
  DISABLED = 'DISABLED',
}

interface INewProps {
  $isLoading?: boolean;
  $enableShowFocus?: boolean;
  $isActive?: boolean;
  tooltipText?: string;
}

export interface IButtonProps
  extends IBaseButtonProps,
    Omit<INewProps, '$isLoading' | '$isActive' | '$enableShowFocus'> {
  isLoading?: boolean;
  isActive?: boolean;
  loaderSize?: number;
  enableShowFocus?: boolean;
  $previewState?: BUTTON_PREVIEW_STATE;
  enableCopyToClipboard?: boolean;
  copyText?: string;
}

export const getBaseButtonProps = (prefix: string[]) => {
  return css`
    ${getBaseThemeProps(prefix)};

    background: ${getPrefixedVar(prefix, 'bg')};
    box-shadow: 0px 0px 0px transparent,
      0px 0px 0px ${getPrefixedVar(prefix, 'outlineWidth')}
        ${getPrefixedVar(prefix, 'outlineColor')},
      0px 5px 10px ${getPrefixedVar(prefix, 'boxShadow')};
  `;
};

export const getButtonTheme = <T extends INewProps>(prefix: string[]) => {
  return css<T>`
    ${getBaseButtonProps([...prefix, 'base'])};

    ${({ $isActive }) =>
      $isActive &&
      css`
        ${getBaseButtonProps([...prefix, 'focus'])};
      `}

    &:focus${({ $enableShowFocus }) => !$enableShowFocus && '-visible'} {
      ${getBaseButtonProps([...prefix, 'focus'])};
    }

    &:hover {
      ${getBaseButtonProps([...prefix, 'hover'])};
    }

    &:active {
      ${getBaseButtonProps([...prefix, 'pressed'])};
    }

    &:disabled {
      opacity: 1;
      ${getBaseButtonProps([...prefix, 'disabled'])};
    }

    ${({ $isLoading }) =>
      $isLoading &&
      css`
        svg * {
          fill: ${getPrefixedVar(prefix, 'base', 'bg')};
        }
      `}
  `;
};

export const StyledButton = styled(Button)<ThemedElement>`
  border-style: solid;
  min-height: 48px;
  line-height: 150%;

  svg {
    color: inherit;
  }

  ${({ size }) => {
    switch (size) {
      case 'xs':
        return css`
          min-height: 32px;
          min-width: 32px;
          padding: 0 10px;
        `;
      case 'sm':
        return css`
          min-height: 36px;
          min-width: 36px;
          padding: 0 12px;
        `;
      case 'md':
        return css`
          min-height: 40px;
          min-width: 40px;
          padding: 0 15px;
        `;
      case 'lg':
        return css`
          min-height: 48px;
          min-width: 48px;
          padding: 0 20px;
        `;
      default:
        return css`
          min-height: 48px;
          min-width: 48px;
          padding: 0 20px;
        `;
    }
  }};

  ${({ variant }) => {
    if (variant === 'link') {
      return css`
        min-height: 24px;
        padding: 0px 10px;
      `;
    }
  }}

  ${({ variant }) => {
    if (variant === 'icon') {
      return css`
        padding: 0px;
      `;
    }
  }}
  
  ${({ themePrefix, variant = 'primary', $previewState }: ThemedElement) => {
    const prefix = themePrefix || ['components', 'button', variant as string];

    if ($previewState) {
      const primaryPrefix = ['components', 'button', 'primary'];

      switch ($previewState) {
        case BUTTON_PREVIEW_STATE.BASE:
          return css`
            ${getBaseButtonProps([...primaryPrefix, 'base'])};

            &:hover,
            &:active,
            &:focus {
              ${getBaseButtonProps([...primaryPrefix, 'base'])};
            }
          `;
        case BUTTON_PREVIEW_STATE.HOVERED:
          return css`
            ${getBaseButtonProps([...primaryPrefix, 'hover'])}

            &:hover, &:active, &:focus {
              ${getBaseButtonProps([...primaryPrefix, 'hover'])}
            }
          `;
        case BUTTON_PREVIEW_STATE.FOCUSED:
          return css`
            ${getBaseButtonProps([...primaryPrefix, 'focus'])};

            &:hover,
            &:active,
            &:focus {
              ${getBaseButtonProps([...primaryPrefix, 'focus'])};
            }
          `;
        case BUTTON_PREVIEW_STATE.PRESSED:
          return css`
            ${getBaseButtonProps([...primaryPrefix, 'pressed'])};

            &:hover,
            &:active,
            &:focus {
              ${getBaseButtonProps([...primaryPrefix, 'pressed'])};
            }
          `;
        case BUTTON_PREVIEW_STATE.DISABLED:
          return css`
            ${getBaseButtonProps([...primaryPrefix, 'disabled'])};

            &:hover,
            &:active,
            &:focus {
              ${getBaseButtonProps([...primaryPrefix, 'disabled'])};
            }
          `;
        default:
          return;
      }
    }

    return getButtonTheme(prefix);
  }}
`;
