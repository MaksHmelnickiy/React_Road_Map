import { getPrefixedVar } from '@private/payment';
import styled, { css } from 'styled-components';

import Typography from 'components/Typography';

const prefix = ['routingRuleset', 'groupEdit'];

export const ItemsList = styled.div`
  flex: 1 1 auto;
  overflow: hidden auto;
`;

export const Title = styled.div<{ $isOpen: boolean }>`
  display: flex;
  cursor: pointer;
  padding: 8px;
  ${({ $isOpen }) =>
    $isOpen &&
    css`
      background: ${getPrefixedVar(prefix, 'group', 'bg')};
    `}
`;

export const IconWrapper = styled.div<{ $isOpen: boolean }>`
  display: flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  color: ${getPrefixedVar(prefix, 'icon')};
  min-width: 24px;
  transition: all 0.3s ease-out;
  ${({ $isOpen }) =>
    $isOpen &&
    css`
      transform: rotate(90deg);
    `}
`;

export const GroupHeader = styled(Typography)`
  color: ${getPrefixedVar(prefix, 'group', 'title')};
`;
