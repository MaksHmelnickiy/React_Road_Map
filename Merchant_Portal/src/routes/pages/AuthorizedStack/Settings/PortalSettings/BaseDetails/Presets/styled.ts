import { getBorderBase, getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Typography from 'components/Typography';

const prefix = ['settings', 'sidebar', 'presets'];

export const Container = styled.div`
  border-bottom-style: solid;
  ${getBorderBase(prefix)}
  padding: 16px;
`;

export const Title = styled(Typography)`
  color: ${getPrefixedVar([...prefix, 'title'])};
  margin-bottom: 16px;
`;

export const SubTitle = styled(Typography)`
  color: ${getPrefixedVar([...prefix, 'subtitle'])};
  margin-top: 10px;
`;
