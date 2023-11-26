import styled from 'styled-components';

import { HEADER_HEIGHT } from './Header/styled';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  height: calc(100% - ${HEADER_HEIGHT}px);
`;
