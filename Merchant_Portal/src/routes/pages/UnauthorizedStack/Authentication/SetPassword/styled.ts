import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Button from 'components/Button';
import FormikInput from 'components/Form/FormikInput';
import Typography from 'components/Typography';

export const ConfirmPasswordInput = styled(FormikInput)`
  margin: 8px 0 64px;
`;

export const Title = styled(Typography)`
  color: ${getPrefixedVar(['authentication', 'forgotPassword', 'title'])};
  text-align: center;
  margin-bottom: 40px;
`;

export const SetButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
`;
