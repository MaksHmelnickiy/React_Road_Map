import { getBorderBase, getFontBase, getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

const prefix = ['components', 'switchInput'];

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 24px;
  padding: 5px 8px;
  background: ${getPrefixedVar(prefix, 'bg')};
  border-style: solid;
  ${getBorderBase(prefix)};
`;

export const Label = styled.div`
  ${getFontBase(prefix)};
`;

export const Error = styled.div`
  ${getFontBase([...prefix, 'error'])};
  margin-top: 2px;
  min-height: 17px;
`;
