import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Typography from 'components/Typography';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export const Label = styled(Typography)`
  color: ${getPrefixedVar(['components', 'colorPicker', 'text'])};
`;
