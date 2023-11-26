import styled, { css } from 'styled-components';

import Button from 'components/Button';

export const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2px;
  z-index: 2;
  height: 55px;
`;

export const CopyButton = styled(Button)`
  color: inherit;
  padding: 8px;
  min-width: 30px;
  min-height: 30px;
`;

export const TextWrapper = styled.div<{ $isClickable: boolean; $isEllipsis: boolean }>`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ${({ $isEllipsis }) => ($isEllipsis ? 'ellipsis' : 'clip')};

  cursor: ${({ $isClickable }) => ($isClickable ? 'pointer' : 'auto')};
  ${({ $isClickable }) =>
    $isClickable
      ? css`
          &:hover,
          &:active {
            text-decoration: underline;
          }
        `
      : ''}
`;
