import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Typography from 'components/Typography';

const prefix = ['merchantSettings', 'paymentMethods', 'form'];

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 16px;
`;

export const Title = styled(Typography)`
  color: ${getPrefixedVar(prefix, 'title')};
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 16px;
`;

export const Body = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 44px;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
`;

export const PaymentCodeData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Code = styled(Typography)`
  color: ${getPrefixedVar(prefix, 'methodCode')};
`;
