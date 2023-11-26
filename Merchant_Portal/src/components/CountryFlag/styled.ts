import styled, { css } from 'styled-components';

export const FlagImg = styled.img<{
  $fullWidth?: boolean;
  $fullHeight?: boolean;
}>`
  ${({ $fullHeight }) =>
    $fullHeight &&
    css`
      height: 100%;
    `};
  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `};
`;
