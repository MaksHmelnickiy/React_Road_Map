import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Typography from 'components/Typography';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 32px 32px 12px 32px;
  background-color: ${getPrefixedVar(['motoCreate', 'sectionBlock', 'bg'])};
  border-radius: ${getPrefixedVar(['motoCreate', 'sectionBlock', 'borderRadius'])};
`;

export const Title = styled(Typography)`
  color: ${getPrefixedVar(['motoCreate', 'sectionBlock', 'text'])};
  margin-bottom: 20px;
`;
