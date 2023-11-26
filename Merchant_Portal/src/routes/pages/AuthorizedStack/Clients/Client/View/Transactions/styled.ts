import { getPrefixedVar } from '@private/payment';
import styled, { css } from 'styled-components';

import { ICONS_MAP } from 'constants/icons';

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
`;

export const IconWrapper = styled(ICONS_MAP.ArrowDown)<{ $isOpen: boolean }>`
  display: flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  min-width: 24px;
  color: ${getPrefixedVar(['gistView', 'block', 'title'])};
  transition: all 0.3s ease;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      transform: scale(1, -1);
    `}
`;

export const Title = styled.div`
  display: flex;
  column-gap: 14px;
  cursor: pointer;
`;
