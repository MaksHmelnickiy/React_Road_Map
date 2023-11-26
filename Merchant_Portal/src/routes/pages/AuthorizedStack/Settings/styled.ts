import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Typography from 'components/Typography';

export const PageHeader = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin-bottom: 36px;
`;

export const Title = styled(Typography)`
  color: ${getPrefixedVar(['settings', 'title'])};
`;

export const PageBody = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;
