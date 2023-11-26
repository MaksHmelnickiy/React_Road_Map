import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Typography from 'components/Typography';

const prefix = ['components', 'groupEditSidebar'];

export const Container = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  right: ${({ $isOpen }) => ($isOpen ? '0px' : '-360px')};
  top: 0;
  bottom: 0;
  width: 360px;
  height: 100vh;
  z-index: 10;
  transition: all 0.3s ease;

  display: flex;
  flex-direction: column;

  box-shadow: 0px 4px 22px ${getPrefixedVar(prefix, 'shadow')};
  background: ${getPrefixedVar(prefix, 'bg')};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 16px;
  padding: 21px 20px;
`;

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;

export const Title = styled(Typography)`
  color: ${getPrefixedVar(prefix, 'header', 'title')};
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 12px;
  padding: 32px 20px 20px;
`;
