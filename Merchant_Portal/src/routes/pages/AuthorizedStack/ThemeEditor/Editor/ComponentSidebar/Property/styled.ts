import { getBorderBase, getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Button from 'components/Button';
import Typography from 'components/Typography';

const prefix = ['themeEditor', 'componentSidebar', 'propertyItem'];

export const Container = styled.div`
  padding: 18px 20px;
  border-bottom-style: solid;
  ${getBorderBase(prefix)}
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Body = styled.div`
  & > * {
    margin-top: 18px;
  }
`;

export const ShowButton = styled(Button)`
  color: ${getPrefixedVar(prefix, 'showButton')};
`;

export const Name = styled(Typography)`
  font-weight: ${getPrefixedVar(prefix, 'fontWeight')};
  color: ${getPrefixedVar(prefix, 'text')};
`;
