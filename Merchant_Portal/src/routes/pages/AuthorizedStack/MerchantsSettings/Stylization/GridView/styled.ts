import styled from 'styled-components';

export const ThemeName = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

export const IconContainer = styled.div<{ $isActive: boolean }>`
  color: ${({ $isActive }) =>
    $isActive ? 'hsla(232, 50%, 50%, 1)' : 'hsla(232, 10%, 60%, 1)'};
`;

export const Name = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
