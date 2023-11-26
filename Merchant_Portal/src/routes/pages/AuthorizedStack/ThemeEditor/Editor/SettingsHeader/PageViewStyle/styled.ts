import { getBorderBase, getPrefixedVar } from '@private/payment';
import styled, { css } from 'styled-components';

const prefix = ['themeEditor', 'settingsHeader', 'viewModeSwitcher'];

export const ModeSwitcher = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2px;
  padding: 1px;
  border-style: solid;

  background: ${getPrefixedVar(prefix, 'bg')};
  ${getBorderBase(prefix)}
`;

const getItemStyle = (prefix: string[]) => {
  return css`
    background: ${getPrefixedVar(prefix, 'bg')};
    border-radius: ${getPrefixedVar(prefix, 'borderRadius')};
    color: ${getPrefixedVar(prefix, 'icon')};
  `;
};

export const ViewStyle = styled.div<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  cursor: pointer;
  transition: all 0.3s ease;

  ${({ $isActive }) =>
    $isActive
      ? css`
          ${getItemStyle([...prefix, 'modeItem', 'active'])};
        `
      : css`
          ${getItemStyle([...prefix, 'modeItem', 'base'])};

          &:hover {
            ${getItemStyle([...prefix, 'modeItem', 'hover'])};
          }

          &:active {
            ${getItemStyle([...prefix, 'modeItem', 'pressed'])};
          }
        `}
`;
