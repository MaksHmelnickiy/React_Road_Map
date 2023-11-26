import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Typography from 'components/Typography';

export const BlockHeader = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
  padding: 8px 16px 0px 16px;
`;

export const BlockData = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
  padding: 8px 16px;
`;

export const CellHeader = styled(Typography)<{ flexValue?: number }>`
  color: ${getPrefixedVar(['components', 'dataGrid', 'headerCell', 'text'])};
  flex: ${({ flexValue }) => (flexValue ? `${flexValue}%` : '1')};
`;

export const NoItemsContainer = styled.div`
  padding: 30px 0;
`;
