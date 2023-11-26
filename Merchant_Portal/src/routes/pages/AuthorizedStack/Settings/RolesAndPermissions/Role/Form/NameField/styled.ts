import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Button from 'components/Button';
import Input from 'components/Controls/Input';
import Typography from 'components/Typography';

const prefix = ['rolesPermissions', 'role', 'form', 'header'];

export const Container = styled.div<{ $center?: boolean }>`
  display: flex;
  align-items: ${({ $center }) => ($center ? 'center' : 'flex-start')};
  column-gap: 14px;
`;

export const Name = styled(Typography)`
  color: ${getPrefixedVar(prefix, 'name')};
`;

export const StyledInput = styled(Input)`
  min-width: 28vw;
`;

export const StyledSave = styled(Button)`
  color: ${getPrefixedVar(prefix, 'saveNameButton')};
`;

export const StyledCancel = styled(Button)`
  color: ${getPrefixedVar(prefix, 'cancelNameButton')};
`;
