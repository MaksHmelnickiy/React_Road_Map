import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

export const AppContainer = styled.div`
  min-height: 100vh;
  height: 100vh;
  background: ${getPrefixedVar(['main', 'bg'])};
`;

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
