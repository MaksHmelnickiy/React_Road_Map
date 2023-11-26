import styled from 'styled-components';

export const PageBody = styled.div`
  display: block;
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
