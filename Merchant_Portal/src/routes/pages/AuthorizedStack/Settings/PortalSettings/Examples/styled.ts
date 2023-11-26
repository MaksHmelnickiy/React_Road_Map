import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Typography from 'components/Typography';

const prefix = ['settings', 'examples'];

export const Container = styled.div`
  position: sticky;
  top: 0;
  flex: 1 1 auto;
  padding: 24px 24px 50px;
  border-radius: ${getPrefixedVar([...prefix, 'container', 'borderRadius'])};
  background: ${getPrefixedVar([...prefix, 'container', 'bg'])};
`;

export const Title = styled(Typography)`
  color: ${getPrefixedVar([...prefix, 'title'])};
  margin-bottom: 24px;
`;

export const PreviewElements = styled.div`
  padding-left: 50px;
`;
