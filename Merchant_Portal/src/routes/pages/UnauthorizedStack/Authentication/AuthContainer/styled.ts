import { getBorderBase, getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

const prefix = ['authentication', 'container'];

export const Container = styled.div`
  flex: 0 0 400px;
  overflow: hidden;
  ${getBorderBase(prefix)}
`;

export const Header = styled.div`
  min-height: 200px;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${getPrefixedVar(prefix, 'header')};
`;

export const Body = styled.div`
  padding: 45px 45px 34px;
  min-height: 426px;
  background: ${getPrefixedVar(prefix, 'body')};
`;
