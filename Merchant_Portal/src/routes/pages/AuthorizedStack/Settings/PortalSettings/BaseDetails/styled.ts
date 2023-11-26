import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Typography from 'components/Typography';

export const Container = styled.div`
  flex: 0 0 330px;
  background: ${getPrefixedVar(['settings', 'sidebar', 'bg'])};
  border-radius: ${getPrefixedVar(['settings', 'sidebar', 'borderRadius'])};
  padding: 16px 0px;
`;

export const Title = styled(Typography)`
  color: ${getPrefixedVar(['settings', 'sidebar', 'title'])};
  padding: 0 16px;
  margin-bottom: 16px;
`;
