import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Typography from 'components/Typography';

export const SelectedItems = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;

export const ItemsCount = styled(Typography)`
  color: ${getPrefixedVar(['components', 'filteredItemsSelected', 'text'])};
`;
