import styled from 'styled-components';

export const Header = styled.div`
  margin-bottom: 40px;
`;

export const Content = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;

  &:not(:last-child) {
    margin-bottom: 6px;
  }

  & > * {
    flex: 1 1 50%;
  }
`;
