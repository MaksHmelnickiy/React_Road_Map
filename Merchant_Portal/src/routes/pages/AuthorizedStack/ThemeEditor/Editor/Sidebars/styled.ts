import styled from 'styled-components';

import { EDITOR_HEADER_HEIGHT } from '../Header/styled';

export const Container = styled.div`
  flex: 1 1 auto;
  height: calc(100vh - ${EDITOR_HEADER_HEIGHT}px);
  display: flex;
  align-items: flex-start;
  overflow: hidden;

  & > * {
    height: 100%;
  }
`;
