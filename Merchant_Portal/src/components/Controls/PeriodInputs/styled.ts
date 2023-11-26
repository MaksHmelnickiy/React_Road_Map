import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Typography from '../../Typography';

const prefix = ['components', 'periodInputs'];
export const Label = styled(Typography)`
  min-height: 20px;
  color: ${getPrefixedVar(prefix, 'label')};
`;

export const TimeFields = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
  margin-top: 4px;
`;

export const FiledColumn = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 8px;
`;

export const HintText = styled(Typography)`
  white-space: nowrap;
  color: ${getPrefixedVar(prefix, 'hint')};
  margin-bottom: 6px;
`;
