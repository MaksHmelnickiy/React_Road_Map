import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Typography from 'components/Typography';

const prefix = ['components', 'form', 'section'];

export const Container = styled.div`
  padding: 32px 32px 12px 32px;
  background-color: ${getPrefixedVar([...prefix, 'bg'])};
  border-radius: ${getPrefixedVar([...prefix, 'borderRadius'])};
`;

export const Title = styled(Typography)`
  color: ${getPrefixedVar([...prefix, 'text'])};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Body = styled.div``;
