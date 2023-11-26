import styled from 'styled-components';

export const Palette = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
`;

export const Color = styled.div<{ color: string }>`
  height: 100%;
  flex: 1 1 auto;
  background: ${({ color }) => color};
  transition: all 0.3s ease;
`;
