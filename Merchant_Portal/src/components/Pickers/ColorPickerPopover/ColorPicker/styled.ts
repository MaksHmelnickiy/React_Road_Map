import { HSLColor } from 'react-color';

import { getBorderBase } from '@private/payment';
import styled from 'styled-components';

import { getHslColor } from 'utils/themeHelpers';

const prefix = ['components', 'colorPicker'];

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export const ColorSquare = styled.div<{ hsl: HSLColor }>`
  width: 76px;
  height: 76px;
  background: ${({ hsl }) => getHslColor(hsl)};
  border-style: solid;
  ${getBorderBase([...prefix, 'previewSquare'])}
`;
