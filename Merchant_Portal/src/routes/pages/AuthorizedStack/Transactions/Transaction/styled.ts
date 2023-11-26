import styled from 'styled-components';

import { Tabs } from 'components/Tabs';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DetailsWrapper = styled.div`
  column-count: 2;
`;

export const TabsContainer = styled(Tabs)`
  margin-bottom: 16px;
`;
