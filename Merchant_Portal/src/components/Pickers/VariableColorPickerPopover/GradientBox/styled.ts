import { getBorderBase } from '@private/payment';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 112px;
`;

export const GradientPointer = styled.div`
  width: 12px;
  height: 12px;
  border-style: solid;
  ${getBorderBase(['components', 'variableColorPicker', 'saturationBox', 'pointer'])}
  transform: translate(-8px, -8px);
`;
