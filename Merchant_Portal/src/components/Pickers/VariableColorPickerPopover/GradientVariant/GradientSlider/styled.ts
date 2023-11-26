import { getBorderBase, getPrefixedVar } from '@private/payment';
import styled, { css } from 'styled-components';

import { getHslColor, IHsl } from 'utils/themeHelpers';

const THUMB_HEIGHT = 52;
const SLIDER_HEIGHT = 21;
const ARROW_HEIGHT = 4;
const ARROW_GAP = 3;
const BORDER_WIDTH = 5;

const prefix = ['components', 'variableColorPicker', 'gradientControl', 'thumb'];

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  height: ${SLIDER_HEIGHT + THUMB_HEIGHT + ARROW_GAP + BORDER_WIDTH}px;
`;

export const Slider = styled.div<{ bg: string }>`
  width: 100%;
  position: relative;
  height: ${SLIDER_HEIGHT}px;
  background: ${({ bg }) => bg};
`;

interface IThumbProps {
  $bg: IHsl;
  $isActive: boolean;
  $position: number;
}

const thumbStyles = css<IThumbProps>`
  position: absolute;
  top: 0;
  transform: translateY(calc(-100% - ${ARROW_HEIGHT}px - ${ARROW_GAP}px));

  width: ${THUMB_HEIGHT}px;
  height: ${THUMB_HEIGHT}px;
  border-style: solid;
  border-radius: 8px;
  ${({ $isActive }) => getBorderBase([...prefix, $isActive ? 'active' : 'base'])};
  border-width: ${BORDER_WIDTH}px;
  background: ${({ $bg }) => getHslColor($bg)};
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    bottom: -${ARROW_HEIGHT * 2 + BORDER_WIDTH}px;
    left: 50%;
    border-style: solid;
    border-color: ${({ $isActive }) =>
        getPrefixedVar(prefix, $isActive ? 'active' : 'base', 'borderColor')}
      transparent transparent;
    border-width: ${ARROW_HEIGHT}px;
    transform: translateX(-50%);
    transition: border-color 0.3s ease;
  }
`;

export const StartThumb = styled.div<IThumbProps>`
  ${thumbStyles};
  left: ${({ $position }) => $position}px;
`;

export const EndThumb = styled.div<IThumbProps>`
  ${thumbStyles};
  left: ${({ $position }) => $position}px;
`;
