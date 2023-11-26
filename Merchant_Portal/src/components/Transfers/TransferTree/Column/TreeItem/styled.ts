import { getBorderBase, getFontBase, getPrefixedVar } from '@private/payment';
import styled, { css } from 'styled-components';

import HighlightedText from 'components/HighlightedText';
import { ICONS_MAP } from 'constants/icons';

const prefix = ['components', 'transferTree', 'body', 'item'];

export const Name = styled(HighlightedText)`
  ${getFontBase([...prefix, 'base'])};
  transition: all 0.3s ease;
`;

interface IContainerProps {
  $isChild: boolean;
  $isSelected: boolean;
}

export const Container = styled.li<IContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 3px 10px;
  ${getBorderBase([...prefix, 'base'])};
  color: ${getPrefixedVar(prefix, 'base', 'text')};
  background: ${getPrefixedVar(prefix, 'base', 'bg')};
  cursor: pointer;
  transition: background, color 0.3s ease;

  ${({ $isChild }) =>
    $isChild &&
    css`
      margin-left: 30px;
      width: calc(100% - 30px);

      &:before {
        content: '';
        position: absolute;
        height: 115%;
        width: ${getPrefixedVar(prefix, 'connectLineWidth')};
        left: -12px;
        background: ${getPrefixedVar(prefix, 'connectLine')};
      }
    `}

  &:hover {
    color: ${getPrefixedVar(prefix, 'hover', 'text')};
    background: ${getPrefixedVar(prefix, 'hover', 'bg')};
    ${getBorderBase([...prefix, 'hover'])};

    ${Name} {
      ${getFontBase([...prefix, 'hover'])};
    }
  }

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      color: ${getPrefixedVar(prefix, 'active', 'text')};
      background: ${getPrefixedVar(prefix, 'active', 'bg')};
      ${getBorderBase([...prefix, 'active'])};

      ${Name} {
        ${getFontBase([...prefix, 'active'])};
      }
    `}
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

export const ArrowIcon = styled(ICONS_MAP.ArrowDown)<{ $isOpen: boolean }>`
  transition: all 0.3s ease;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      transform: scaleY(-1);
    `}
`;
