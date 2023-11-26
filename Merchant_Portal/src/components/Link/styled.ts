import { Link } from 'react-router-dom';

import { getFontBase } from '@private/payment';
import styled, { css } from 'styled-components';

import { ThemedElement } from 'utils/types';

interface IProps {
  disabled?: boolean;
  variant: 'regular' | 'bold';
}

const linkStyles = css<ThemedElement<IProps>>`
  line-height: 143%;
  word-break: break-all;
  transition: all 0.3s ease;

  ${({ disabled }) =>
    disabled
      ? css`
          cursor: default;
        `
      : css`
          &:hover,
          &:active {
            text-decoration: underline;
          }
        `}

  ${({ themePrefix, variant }) => {
    const prefix = themePrefix || ['components', 'link', variant];

    return css<IProps>`
      ${({ disabled: isDisabled }) =>
        isDisabled
          ? css`
              ${getFontBase([...prefix, 'unread', 'disabled'])};

              &:visited {
                ${getFontBase([...prefix, 'read', 'disabled'])};
              }
            `
          : css`
              ${getFontBase([...prefix, 'unread', 'base'])};

              &:hover {
                ${getFontBase([...prefix, 'unread', 'hover'])};
              }

              &:active {
                ${getFontBase([...prefix, 'unread', 'pressed'])};
              }

              &:visited {
                ${getFontBase([...prefix, 'read', 'base'])};

                &:hover {
                  ${getFontBase([...prefix, 'read', 'hover'])};
                }

                &:active {
                  ${getFontBase([...prefix, 'read', 'pressed'])};
                }
              }
            `}
    `;
  }};
`;

export const AppLink = styled(Link)<ThemedElement<IProps>>`
  ${linkStyles}
`;

export const GlobalLink = styled.a<ThemedElement<IProps>>`
  ${linkStyles}
`;
