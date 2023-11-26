import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Typography from 'components/Typography';

export const CellData = styled(Typography)<{ flexValue?: number }>`
  color: ${getPrefixedVar(['components', 'dataGrid', 'rowCell', 'text', 'text'])};
  flex: ${({ flexValue }) => (flexValue ? `${flexValue}%` : '1')};
  word-break: break-word;
`;
