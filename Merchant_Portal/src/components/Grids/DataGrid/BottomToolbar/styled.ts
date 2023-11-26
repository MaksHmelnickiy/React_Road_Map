import { getBorderBase, getFontBase, getPrefixedVar } from '@private/payment';
import styled, { css } from 'styled-components';

import Typography from 'components/Typography';

const prefix = ['components', 'dataGrid', 'customPagination'];

export const Container = styled.div<{ $isHidden: boolean }>`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ $isHidden }) =>
    $isHidden &&
    css`
      opacity: 0;
      visibility: hidden;
    `}
`;

const baseStyle = css`
  display: flex;
  flex: auto;
  align-items: center;
  min-width: 36px;
  min-height: 36px;
  transition: all 0.3s ease;
`;

export const Pagination = styled.div`
  display: flex;
  gap: 4px;
`;

export const PaginationInfo = styled(Typography)`
  ${baseStyle};

  color: ${getPrefixedVar([...prefix, 'itemsCount'])};
`;

export const Ellipsis = styled.div`
  ${baseStyle};

  justify-content: center;
  color: ${getPrefixedVar([...prefix, 'ellipsis'])};
`;

export const Button = styled.div<{ $disabled?: boolean; $isActive?: boolean }>`
  ${baseStyle}
  ${getBorderBase([...prefix, 'button', 'base'])};
  ${getFontBase([...prefix, 'button', 'base'])};
  background: ${getPrefixedVar(prefix, 'button', 'base', 'bg')};
  padding: 0px 4px;
  cursor: pointer;
  justify-content: center;

  ${({ $isActive, $disabled }) =>
    !$isActive &&
    !$disabled &&
    css`
      &:hover {
        background: ${getPrefixedVar(prefix, 'button', 'hover', 'bg')};
      }

      &:active {
        background: ${getPrefixedVar(prefix, 'button', 'pressed', 'bg')};
      }
    `}

  ${({ $isActive }) =>
    $isActive &&
    css`
      background: ${getPrefixedVar(prefix, 'button', 'active', 'bg')};
      color: ${getPrefixedVar(prefix, 'button', 'active', 'text')};
    `}

  ${({ $disabled }) =>
    $disabled &&
    css`
      color: ${getPrefixedVar(prefix, 'button', 'disabled', 'text')};
      background: transparent;
    `}
`;
