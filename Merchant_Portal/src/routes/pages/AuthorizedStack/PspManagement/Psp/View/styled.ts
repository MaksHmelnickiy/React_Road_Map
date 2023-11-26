import styled from 'styled-components';

export const SectionDataList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: start;
`;

export const OperationsContainer = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
`;
