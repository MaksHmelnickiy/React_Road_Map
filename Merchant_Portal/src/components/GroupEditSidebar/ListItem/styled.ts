import { getBorderBase, getPrefixedVar } from '@private/payment';
import styled, { css } from 'styled-components';

import Typography from 'components/Typography';

const prefix = ['components', 'groupEditListItem'];

export const Item = styled.div`
  padding: 18px 10px 18px 20px;
  border-bottom-style: solid;
  ${getBorderBase(prefix)}
`;

export const Name = styled(Typography)`
  color: ${getPrefixedVar(prefix, 'text')};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Body = styled.div<{ height?: number | null }>`
  ${({ height }) =>
    height === null
      ? css`
          height: auto;
        `
      : css`
          height: ${height}px;
        `};

  ${({ height }) =>
    !height
      ? css`
          opacity: 0;
          visibility: hidden;
        `
      : css`
          opacity: 1;
          visibility: visible;
        `};

  display: flex;
  align-items: flex-end;

  & > * {
    flex: 1 1 auto;
  }

  overflow: hidden;
  transition: all 0.12s ease, height 0.3s ease;
`;
