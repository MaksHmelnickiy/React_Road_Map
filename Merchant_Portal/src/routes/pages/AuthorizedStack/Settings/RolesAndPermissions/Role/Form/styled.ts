import { getBorderBase, getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Button from 'components/Button';

const prefix = ['rolesPermissions', 'role', 'form', 'header'];

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

export const Header = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 20px;
  padding: 8px 20px 8px 24px;
  border-top-style: solid;
  background: ${getPrefixedVar(prefix, 'bg')};
  ${getBorderBase(prefix)}
`;

export const StyledBack = styled(Button)`
  padding: 5px 20px;
  background: transparent !important;
`;

export const SaveButton = styled(Button)`
  min-width: 110px;
`;
