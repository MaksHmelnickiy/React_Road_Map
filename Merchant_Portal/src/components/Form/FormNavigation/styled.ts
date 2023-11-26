import { getBaseThemeProps, getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

const prefix = ['components', 'form', 'navigationItem'];

export const NavList = styled.ul`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const NavLink = styled.a`
  height: 44px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 12px;
  background: ${getPrefixedVar([...prefix, 'base', 'bg'])};
  ${getBaseThemeProps([...prefix, 'base'])}
  transition: all 0.3s ease;

  &:hover {
    background-color: ${getPrefixedVar([...prefix, 'hover', 'bg'])};
    ${getBaseThemeProps([...prefix, 'base'])}
  }
`;
