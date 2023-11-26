import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Typography from 'components/Typography';

const prefix = ['components', 'groupEditModal'];

export const Content = styled.div`
  text-align: center;
  min-height: 260px;
  padding-bottom: 20px;
`;

export const Title = styled(Typography)`
  margin-top: 14px;
  color: ${getPrefixedVar(prefix, 'title')};
`;

export const Message = styled(Typography)`
  max-width: 350px;
  margin: 32px auto 0;
  color: ${getPrefixedVar(prefix, 'message')};
`;

export const Cancel = styled.span`
  color: ${getPrefixedVar(prefix, 'dangerText')};
`;
