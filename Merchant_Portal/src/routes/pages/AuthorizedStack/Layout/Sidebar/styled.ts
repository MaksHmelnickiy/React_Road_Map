import { NavLink } from 'react-router-dom';

import { getBorderBase, getFontBase, getPrefixedVar } from '@private/payment';
import styled, { css } from 'styled-components';

import Button from 'components/Button';
import { getButtonTheme } from 'components/Button/styled';
import Typography from 'components/Typography';

const OPEN_SIDE_BAR_WIDTH = 290;
const CLOSED_SIDE_BAR_WIDTH = 72;

export const Container = styled.div<{ $isOpen: boolean }>`
  position: relative;
  height: 100%;
  min-width: ${({ $isOpen }) =>
    $isOpen ? `${OPEN_SIDE_BAR_WIDTH}px` : `${CLOSED_SIDE_BAR_WIDTH}px`};
  width: ${({ $isOpen }) =>
    $isOpen ? `${OPEN_SIDE_BAR_WIDTH}px` : `${CLOSED_SIDE_BAR_WIDTH}px`};
  padding: 40px 0;
  background: ${getPrefixedVar(['navigationBar', 'container'])};
  transition: all 0.3s;
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden auto;
`;

export const OpenButton = styled(Button)<{ $isOpen: boolean }>`
  ${getButtonTheme(['navigationBar', 'openButton'])}
  position: absolute;
  top: 28px;
  right: -18px;
  padding: 0;
  min-height: 36px;
  height: 36px;
  min-width: 36px;
  z-index: 49;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      transform: rotate(180deg);
    `}

  &:hover {
    min-width: 48px;
    right: -24px;
  }
`;

export const NavigationList = styled.div``;

const itemPrefix = ['navigationBar', 'navigationItem'];

const getNavigationLinkTheme = (prefix: string[]) => {
  return css`
    ${getFontBase(prefix)};
    ${getBorderBase(prefix)};
    background: ${getPrefixedVar(prefix, 'bg')};
  `;
};

interface ILinkProps {
  $isActive?: boolean;
  $isSubFolder?: boolean;
  $isOpen?: boolean;
  $isOpenBar: boolean;
}

const navigationItemStyle = css<ILinkProps>`
  display: flex;
  align-items: center;
  column-gap: ${({ $isOpenBar }) => ($isOpenBar ? 10 : 30)}px;
  height: 72px;
  padding: 20px 21px;
  line-height: 150%;
  border-left-style: solid;
  transition: all 0.3s ease;
  ${getNavigationLinkTheme([...itemPrefix, 'base'])};

  ${({ $isActive }) =>
    $isActive
      ? getNavigationLinkTheme([...itemPrefix, 'active'])
      : css`
          &:hover {
            ${getNavigationLinkTheme([...itemPrefix, 'hover'])};
          }
        `}

  ${({ $isSubFolder }) =>
    $isSubFolder &&
    css`
      padding-left: 60px;
      border-left-color: transparent;
    `}

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      background: ${getPrefixedVar(itemPrefix, 'active', 'bg')};
    `}
`;

export const LinkItem = styled(NavLink)`
  ${navigationItemStyle};
`;

export const NavigationItem = styled.div`
  ${navigationItemStyle};
  cursor: pointer;
`;

export const Text = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  border-left-style: solid;
`;

export const AccordionHeader = styled(NavigationItem)`
  justify-content: space-between;
`;

export const AccordionContent = styled.div<{ $isOpenBar: boolean }>`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  column-gap: ${({ $isOpenBar }) => ($isOpenBar ? 16 : 30)}px;
  transition: all 0.3s ease;
`;

export const IconWrapper = styled.div<{ $isOpen?: boolean }>`
  flex: 0 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      transform: scaleY(-1);
    `}
`;

export const LogoutMessage = styled(Typography)`
  text-align: center;
  color: ${getPrefixedVar(['navigationBar', 'logoutModalMessage'])};
`;
