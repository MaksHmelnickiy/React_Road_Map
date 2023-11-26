import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Typography from 'components/Typography';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const SelectedList = styled.div`
  flex: 1 1 auto;
  padding-right: 24px;
`;

export const SelectText = styled(Typography)`
  color: ${getPrefixedVar(['components', 'selectModalEnter', 'selectText'])};
`;
