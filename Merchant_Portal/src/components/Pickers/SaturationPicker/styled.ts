import { HSLColor } from 'react-color';

import styled from 'styled-components';

import { getHslColor } from 'utils/themeHelpers';

import sliderDot from 'assets/icons/slider-dot.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export const SaturationLine = styled.div<{ hsl: HSLColor }>`
  position: absolute;
  top: 2px;
  left: 0;
  height: 8px;
  width: 100%;
  border-radius: 10px;
  background: ${({ hsl }) => `linear-gradient(to right, #8c8c8c, ${getHslColor(hsl)})`};
  z-index: 1;
`;

export const SaturationLineContainer = styled.div`
  position: relative;
  height: 8px;
`;

export const RangeInput = styled.input`
  appearance: none;
  width: 100%;
  background: transparent;
  outline: none;
  opacity: 1;
  position: absolute;
  z-index: 2;
  transition: all 0.3s ease;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 16px;
    height: 16px;
    border: 0;
    background: url(${sliderDot});
    transform: translateY(-3.5px);
  }
`;
