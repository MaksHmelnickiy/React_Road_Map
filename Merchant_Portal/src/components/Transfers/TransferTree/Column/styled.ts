import { getBorderBase, getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

const prefix = ['components', 'transferTree'];

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: calc(100% - 75px);
  border-style: solid;
  ${getBorderBase([...prefix, 'body'])};
  background: ${getPrefixedVar(prefix, 'body', 'bg')};
  padding: 16px;
  margin-top: 22px;
  z-index: 1;
`;

export const TreeList = styled.ul`
  width: 100%;
  margin-top: 24px;
  flex: 1 1 auto;
  overflow-y: auto;
  scrollbar-gutter: stable;
  scroll-behavior: smooth;
`;

export const VirtualList = styled.div`
  position: relative;
  width: 100%;
`;

export const ResultsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
`;
