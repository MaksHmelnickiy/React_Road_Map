import styled from 'styled-components';

export const ContentContainer = styled.div<{
  $height: number | null;
  $animFinished: boolean;
}>`
  height: ${({ $height }) => ($height === null ? 'auto' : `${$height}px`)};
  overflow: ${({ $height, $animFinished }) =>
    $height && $animFinished ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
`;

export const Header = styled.div`
  cursor: pointer;
`;
