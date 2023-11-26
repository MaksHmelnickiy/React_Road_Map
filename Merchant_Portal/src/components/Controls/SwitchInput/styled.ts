import { getBorderBase, getFontBase, getPrefixedVar } from '@private/payment';
import styled, { css } from 'styled-components';

const prefix = ['components', 'switchInput'];

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 24px;
  border-style: solid;
`;

export const Label = styled.div``;

export const Error = styled.div`
  margin-top: 2px;
  min-height: 17px;
`;

export const Container = styled.div<{ $size: 'sm' | 'lg' }>`
  ${({ $size }) => css`
    ${Body} {
      padding: ${$size === 'sm' ? 5 : 11}px 8px;
      background: ${getPrefixedVar(prefix, $size, 'bg')};
      ${getBorderBase([...prefix, $size])}
    }

    ${Label} {
      ${getFontBase([...prefix, $size])};
    }

    ${Error} {
      ${getFontBase([...prefix, $size, 'error'])};
    }
  `};
`;
