import { getBorderBase, getPrefixedVar } from '@private/payment';
import styled, { css } from 'styled-components';

import Button from 'components/Button';

const prefix = ['themeEditor', 'sidebar', 'accordion'];

export const BlockHeader = styled.div<{ $isOpen?: boolean; $isActive?: boolean }>`
  height: 40px;
  flex: 1 1 auto;
  padding: 0 10px;
  display: flex;
  align-items: center;
  column-gap: 10px;

  cursor: pointer;
  border-style: solid;
  ${getBorderBase([...prefix, 'base'])};
  color: ${getPrefixedVar(prefix, 'base', 'text')};
  transition: all 0.3s ease;

  ${({ $isOpen }) =>
    $isOpen
      ? css`
          color: ${getPrefixedVar(prefix, 'opened', 'text')};
          background: ${getPrefixedVar(prefix, 'opened', 'bg')};
        `
      : css`
          color: ${getPrefixedVar(prefix, 'base', 'text')};
          background: ${getPrefixedVar(prefix, 'base', 'bg')};

          &:hover {
            background: ${getPrefixedVar(prefix, 'hover', 'bg')};
          }
        `}

  ${({ $isActive }) =>
    $isActive &&
    css`
      color: ${getPrefixedVar(prefix, 'active', 'text')};
      border-color: ${getPrefixedVar(prefix, 'active', 'borderColor')};
    `}
`;

export const ArrowButton = styled(Button)<{ $isOpen: boolean }>`
  transform: rotate(${({ $isOpen }) => ($isOpen ? 0 : -90)}deg);
`;
