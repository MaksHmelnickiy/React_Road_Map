import { getPrefixedVar } from '@private/payment';
import styled, { css } from 'styled-components';

import Button from 'components/Button';
import Typography from 'components/Typography';

const HEADER_HEIGHT = 56;

const prefix = ['themeEditor', 'componentSidebar'];

export const Container = styled.div<{ $isOpen: boolean }>`
  position: relative;
  flex: 0 0 ${({ $isOpen }) => ($isOpen ? 320 : 46)}px;
  background: ${getPrefixedVar(prefix, 'bg')};
  transition: all 0.3s ease;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px 0 50px;
  height: ${HEADER_HEIGHT}px;
  border-bottom: 1px solid rgba(230, 225, 229, 0.16);
`;

export const PropertyName = styled(Typography)`
  color: ${getPrefixedVar(prefix, 'propertyPath')};
  width: 255px;
`;

export const Content = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  height: calc(100% - ${HEADER_HEIGHT}px);
  width: 320px;
  left: ${({ $isOpen }) => ($isOpen ? 0 : 56)}px;
  padding-bottom: 24px;
  overflow-y: auto;
  scrollbar-gutter: stable;
`;

export const CloseButton = styled(Button)<{ $isOpen: boolean }>`
  position: absolute;
  color: ${getPrefixedVar(prefix, 'openButton')};
  left: 8px;
  top: 13px;
  z-index: 1;

  ${({ $isOpen }) =>
    !$isOpen &&
    css`
      transform: rotate(180deg);
    `}
`;
