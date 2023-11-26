import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 100%;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
`;

export const SectionDataList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
