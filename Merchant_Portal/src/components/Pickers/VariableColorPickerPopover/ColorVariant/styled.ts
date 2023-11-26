import { getBorderBase, getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Typography from 'components/Typography';

const prefix = ['components', 'variableColorPicker', 'colorPreview'];

export const ColorPreview = styled.div<{ color: string; $isActive: boolean }>`
  width: 72px;
  height: 72px;
  ${({ $isActive }) =>
    getBorderBase($isActive ? [...prefix, 'active'] : [...prefix, 'base'])};
  background: ${({ color }) => color};
  margin-bottom: 16px;
  cursor: pointer;
`;

export const Name = styled(Typography)<{ $isActive: boolean }>`
  color: ${({ $isActive }) =>
    getPrefixedVar(prefix, $isActive ? 'active' : 'base', 'text')};
  transition: all 0.3s ease;
`;
