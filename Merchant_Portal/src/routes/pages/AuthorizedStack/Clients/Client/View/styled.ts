import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Typography from 'components/Typography';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DetailsContainer = styled.div`
  display: flex;
  column-gap: 24px;
`;

export const BlockContainer = styled.div`
  padding: 16px 20px;
  background: ${getPrefixedVar(['gistView', 'block', 'bg'])};
  border-radius: ${getPrefixedVar(['gistView', 'block', 'borderRadius'])};
`;

export const DetailsWrapper = styled.div`
  column-count: 2;
  margin-top: 16px;
`;

export const Wrapper = styled.div`
  flex: 1 1 840px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export const BlockTitle = styled(Typography)`
  color: ${getPrefixedVar(['gistView', 'block', 'title'])};
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;
