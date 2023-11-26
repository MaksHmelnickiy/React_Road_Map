import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Typography from 'components/Typography';

export const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

export const Title = styled(Typography)`
  color: ${getPrefixedVar(['components', 'logo', 'title'])};
`;
