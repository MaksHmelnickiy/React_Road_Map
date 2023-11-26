import { getBorderBase } from '@private/payment';
import styled from 'styled-components';

const prefix = ['components', 'presetsList'];

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export const Preset = styled.li<{ $bg: string; $isActive: boolean }>`
  width: 42px;
  height: 42px;
  border-style: solid;
  cursor: pointer;
  background: ${({ $bg }) => $bg};
  ${({ $isActive }) => getBorderBase([...prefix, $isActive ? 'selected' : 'base'])};
  transition: all 0.3s ease;
`;
