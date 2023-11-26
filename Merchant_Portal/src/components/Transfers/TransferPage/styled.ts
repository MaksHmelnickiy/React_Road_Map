import { getBorderBase, getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Typography from 'components/Typography';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 32px;
  background: ${getPrefixedVar(['components', 'transferPage', 'header', 'bg'])};
  border-left-style: solid;
  ${getBorderBase(['components', 'transferPage', 'header'])}
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Title = styled(Typography)`
  color: ${getPrefixedVar(['components', 'transferPage', 'title'])};
`;

export const Body = styled.div`
  flex: 1 1 auto;
  height: calc(100% - 104px);
  padding: 54px;
`;
