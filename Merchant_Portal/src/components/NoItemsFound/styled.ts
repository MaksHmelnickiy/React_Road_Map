import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Typography from '../Typography';

const prefix = ['components', 'noItemsFound'];

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  max-width: 270px;
`;

export const Title = styled(Typography)`
  color: ${getPrefixedVar(prefix, 'title')};
  margin: 20px 0 0 0;
`;

export const Subtitle = styled(Typography)`
  color: ${getPrefixedVar(prefix, 'message')};
  margin-top: 8px;
`;
