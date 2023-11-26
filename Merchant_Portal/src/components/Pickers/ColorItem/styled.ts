import { getBorderBase, getPrefixedVar } from '@private/payment';
import styled, { css } from 'styled-components';

import Typography from 'components/Typography';

const prefix = ['components', 'colorItem'];

export const Container = styled.div<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  column-gap: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.3;
      cursor: default;
    `}
`;

export const Color = styled.div<{ $isActive?: boolean; $bg: string }>`
  flex: 0 0 24px;
  height: 24px;
  border-style: solid;
  background: ${({ $bg }) => $bg};
  ${({ $isActive }) =>
    getBorderBase($isActive ? [...prefix, 'active'] : [...prefix, 'base'])};
  transition: all 0.3s ease;
`;

export const TextValue = styled(Typography)<{
  $isUppercase?: boolean;
  $isActive?: boolean;
}>`
  color: ${({ $isActive }) =>
    getPrefixedVar(prefix, $isActive ? 'active' : 'base', 'text')};
  text-transform: ${({ $isUppercase }) => ($isUppercase ? 'uppercase' : 'none')};
  transition: all 0.3s ease;
`;
