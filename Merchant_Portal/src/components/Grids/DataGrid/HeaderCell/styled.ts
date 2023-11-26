import { getFontBase, getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Button from 'components/Button';
import { ICONS_MAP } from 'constants/icons';

const prefix = ['components', 'dataGrid', 'headerCell'];

export const Container = styled.div<{ $center?: boolean }>`
  ${getFontBase(prefix)};
  min-height: 60px;
  display: flex;
  align-items: center;
  gap: 5px;
  height: 100%;
  padding: 5px 16px;
  line-height: 143%;

  background: ${getPrefixedVar(prefix, 'bg')};
  color: ${getPrefixedVar(prefix, 'text')};
  border-bottom: ${getPrefixedVar(prefix, 'borderWidth')} solid
    ${getPrefixedVar(prefix, 'borderColor')};

  text-align: ${({ $center }) => ($center ? 'center' : 'start')};
  justify-content: ${({ $center }) => ($center ? 'center' : 'start')};
`;

export const StyledIconButton = styled(Button)`
  min-height: 22px;
  min-width: 22px;
  padding: 2px;
`;

export const StyledArrow = styled(ICONS_MAP.LongArrowDown)<{ $up: boolean }>`
  transform: ${({ $up }) => `rotate(${$up ? 180 : 0}deg)`};
`;
