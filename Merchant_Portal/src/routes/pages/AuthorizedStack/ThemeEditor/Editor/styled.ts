import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const HiddenPreview = styled.div`
  position: absolute;
  left: -10000px;
  top: -10000px;
  width: 1700px;
  height: 1200px;
  transform: scale(0.3);
  z-index: -1000;
`;

export const LayoutContainer = styled.div`
  height: 100%;
  flex: 1 1 auto;
  transition: all 0.3s ease;
`;

export const FlexContainer = styled.div`
  width: 100%;
  height: calc(100% - 56px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ViewContainer = styled.div<{ $isMobile: boolean }>`
  ${({ $isMobile }) =>
    $isMobile
      ? css`
          width: 375px;
          height: 667px;
          min-height: 667px;
          border-radius: 10px;
          overflow: hidden;
        `
      : css`
          width: 100%;
          height: 100%;
        `}
`;
