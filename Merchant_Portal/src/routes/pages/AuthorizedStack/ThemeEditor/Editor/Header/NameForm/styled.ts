import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Button from 'components/Button';
import Input from 'components/Controls/Input';

export const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

export const SaveButton = styled(Button)`
  color: ${getPrefixedVar(['themeEditor', 'header', 'nameEditor', 'saveButton'])};
`;

export const CancelButton = styled(Button)`
  color: ${getPrefixedVar(['themeEditor', 'header', 'nameEditor', 'cancelButton'])};
`;

export const StyledInput = styled(Input)`
  min-width: 300px;
`;
