import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Button from 'components/Button';
import Input from 'components/Controls/Input';
import Typography from 'components/Typography';

export const Title = styled(Typography)`
  text-align: center;
  margin-bottom: 36px;
  color: ${getPrefixedVar(['authentication', 'signIn', 'title'])};
`;

export const FormikInput = styled(Input)`
  &:not(:last-child) {
    margin-bottom: 6px;
  }
`;

export const LoginFormikInput = styled(Input)`
  margin-bottom: 22px;
`;

export const Error = styled(Typography)`
  height: 16px;
  color: ${getPrefixedVar(['authentication', 'signIn', 'error'])};
`;

export const RememberBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;

export const SignInButton = styled(Button)`
  width: 100%;
  margin-top: 36px;
`;
