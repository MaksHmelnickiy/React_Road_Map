import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 991px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
