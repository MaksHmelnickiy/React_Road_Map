import { getBorderBase, getPrefixedVar } from '@private/payment';
import styled, { css } from 'styled-components';

import Typography from 'components/Typography';

const prefix = ['themeEditor', 'sidebar', 'components'];

export const Container = styled.div`
  padding-top: 12px;
`;

export const InnerComponents = styled.div`
  position: relative;
  padding-left: 27px;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 27px;
    width: 1px;
    height: 100%;
    background: ${getPrefixedVar([...prefix, 'innerComponentsList', 'groupLine'])};
  }
`;

export const Title = styled(Typography).attrs(() => ({
  size: 'sm',
}))`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;

export const PropertyBody = styled(Title)<{ $isActive: boolean }>`
  min-height: 40px;
  color: ${({ $isActive }) =>
    getPrefixedVar([...prefix, 'property', $isActive ? 'active' : 'base', 'text'])};
  padding: 2px 20px 2px 55px;
  border-style: solid;
  ${getBorderBase([...prefix, 'property', 'base'])}
  cursor: pointer;
  transition: all 0.3s ease;

  ${({ $isActive }) =>
    $isActive &&
    css`
      border-color: ${getPrefixedVar([...prefix, 'property', 'active', 'borderColor'])};
    `}
`;
