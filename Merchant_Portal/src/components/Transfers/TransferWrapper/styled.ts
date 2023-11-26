import styled from 'styled-components';

export const Container = styled.div`
  flex: 1 1 auto;
  height: 100%;
  overflow-y: auto;
`;

export const ComponentContainer = styled.div<{ $isVisible: boolean }>`
  display: ${({ $isVisible }) => ($isVisible ? 'block' : 'none')};
`;
