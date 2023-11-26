import { getBorderBase, getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Typography from 'components/Typography';

export const Content = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
  margin-top: 8px;
`;

export const Message = styled(Typography)`
  color: ${getPrefixedVar(['motoCreate', 'modalMessage'])};
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 16px 24px;
  border-top-style: solid;
  ${getBorderBase(['components', 'modalContainer', 'footer'])};
`;
