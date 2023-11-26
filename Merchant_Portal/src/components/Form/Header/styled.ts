import { getBorderBase, getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Button from 'components/Button';

const prefix = ['components', 'formHeader'];

export const Container = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 20px;
  padding: 8px 20px 8px 24px;
  border-top-style: solid;
  background: ${getPrefixedVar(prefix, 'bg')};
  ${getBorderBase(prefix)}

  & > * {
    flex: 1 1 33.333%;
  }
`;

export const StyledBack = styled(Button)`
  padding: 5px 20px;
  background: transparent !important;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SaveButton = styled(Button)`
  min-width: 110px;
`;
