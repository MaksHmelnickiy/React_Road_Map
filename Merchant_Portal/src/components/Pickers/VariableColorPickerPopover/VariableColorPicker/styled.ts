import styled, { css } from 'styled-components';

export const Container = styled.div<{ isSingleVariant: boolean }>`
  display: flex;
  flex-direction: column;

  ${({ isSingleVariant }) =>
    isSingleVariant &&
    css`
      padding-top: 24px;
    `}
`;

export const GradientTypes = styled.div`
  display: flex;
  align-items: flex-start;
  column-gap: 16px;
  margin-bottom: 16px;
`;

export const VariantContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
