import { getBorderBase, getFontBase, getPrefixedVar } from '@private/payment';
import styled, { css } from 'styled-components';

import Button from 'components/Button';
import Typography from 'components/Typography';

const prefix = ['themeEditor', 'sidebar'];

export const Container = styled.aside<{ $isOpen: boolean }>`
  position: relative;
  flex: 0 0 ${({ $isOpen }) => ($isOpen ? 360 : 50)}px;
  background: ${getPrefixedVar([...prefix, 'bg'])};
  height: 100%;
  transition: all 0.3s ease;
  overflow: hidden;
`;

export const Body = styled.div`
  position: absolute;
  right: 0;
  width: 100%;
  min-width: 346px;
  height: 100%;
`;

export const Header = styled.div`
  position: relative;
`;

export const Content = styled.div<{ $isOpen: boolean }>`
  height: calc(100% - 51px);
  padding-bottom: 24px;
  overflow-y: auto;
  scrollbar-gutter: stable;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition: all 0.3s ease;
`;

export const EditSelect = styled.div`
  position: relative;
  padding-right: 52px;
  height: 56px;
  display: flex;
  align-items: center;
  background: ${getPrefixedVar([...prefix, 'tabs', 'bg'])};
  border-bottom-style: solid;
  ${getBorderBase([...prefix, 'tabs'])}
`;

const tabPrefix = [...prefix, 'tabs', 'tab'];

export const SectionButton = styled.button<{ $isActive: boolean }>`
  flex: 1 1 auto;
  position: relative;
  height: 100%;
  ${getFontBase([...tabPrefix, 'base'])}
  background: ${getPrefixedVar([...tabPrefix, 'base', 'bg'])};
  line-height: 143%;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 0;
    height: 2px;
    background: ${getPrefixedVar([...tabPrefix, 'base', 'activeLine'])};
    transition: all 0.3s ease;
  }

  &:hover {
    background: ${getPrefixedVar([...tabPrefix, 'hover', 'bg'])};
    ${getFontBase(['themeEditor', 'sidebar', 'tabs', 'tab', 'hover'])}
  }

  &:active {
    background: ${getPrefixedVar([...tabPrefix, 'pressed', 'bg'])};
    ${getFontBase(['themeEditor', 'sidebar', 'tabs', 'tab', 'pressed'])}
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      &:after {
        left: 0;
        width: 100%;
      }
    `}
`;

export const CloseButton = styled(Button)<{ $isOpen: boolean }>`
  color: ${getPrefixedVar(prefix, 'closeBarButton')};
  position: absolute;
  right: 12px;
  top: 50%;
  z-index: 1;
  transform: translateY(-50%);

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      transform: rotate(180deg) translateY(50%);
    `}
`;

export const Section = styled.div`
  padding: 16px 20px 20px;
  border-bottom-style: solid;
  ${getBorderBase([...prefix, 'section'])}

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const BlockTitle = styled(Typography)`
  letter-spacing: 0.1px;
  color: ${getPrefixedVar(prefix, 'section', 'title')};
`;

export const Preset = styled.li<{ $bg: string; $isActive: boolean }>`
  width: 42px;
  height: 42px;
  border-style: solid;
  cursor: pointer;
  background: ${({ $bg }) => $bg};
  border-radius: 8px;
  border-width: ${({ $isActive }) => ($isActive ? 4 : 2)}px;
  border-color: ${({ $isActive }) =>
    $isActive ? 'hsla(240, 20%, 96%, 1)' : 'hsla(232, 10%, 60%, 1)'};
  transition: all 0.3s ease;
`;

export const PresetName = styled(Typography)`
  color: ${getPrefixedVar(prefix, 'section', 'subtitle')};
`;
