import styled from 'styled-components';

export const PageBody = styled.div`
  display: grid;
  align-items: start;
  grid-template-columns: 160px 1fr;
  grid-gap: 80px;
  max-width: 960px;
  margin: 0 auto;
`;

export const FormContainer = styled.div`
  display: grid;
  grid-gap: 4px 30px;
`;

export const DoubleColumn = styled(FormContainer)`
  grid-template-columns: 1fr 1fr;
`;

export const SectionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;
