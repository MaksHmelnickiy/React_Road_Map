import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Button from 'components/Button';
import Typography from 'components/Typography';

export const Title = styled(Typography)`
  color: ${getPrefixedVar(['authentication', 'forgotPassword', 'title'])};
  text-align: center;
  margin-bottom: 32px;
`;

export const SignInButton = styled(Button)`
  width: 100%;
  margin-top: 24px;
`;

export const BackButton = styled(Button)`
  width: 100%;
  margin-top: 14px;
  border-radius: 6px !important;
`;

export const SubTitle = styled(Typography)`
  color: ${getPrefixedVar(['authentication', 'forgotPassword', 'subtitle'])};
  margin-bottom: 20px;
`;
