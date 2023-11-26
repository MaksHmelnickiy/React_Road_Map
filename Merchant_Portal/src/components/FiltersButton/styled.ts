import { tooltipClasses } from '@private/components';
import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Popover from 'components/Popover';
import Tag from 'components/Tags/Tag';

import Button from '../Button';
import SwitchInput from '../Controls/SwitchInput';

export const FiltersPopover = styled(Popover)`
  ${tooltipClasses.message} {
    min-width: 760px;
    padding: 24px;
    background: ${getPrefixedVar(['components', 'filtersButton', 'bg'])};
  }
`;

export const StyledTag = styled(Tag)`
  min-height: 19px;
  padding: 0 7px;
  margin-left: 10px;
`;

export const FiltersList = styled.ul<{
  $isScrollable: boolean;
  $scrollBarSize: number;
}>`
  max-height: 534px;
  display: flex;
  flex-direction: column;
  padding-right: ${({ $scrollBarSize, $isScrollable }) =>
    $isScrollable ? 14 - $scrollBarSize : 14}px;
  margin-right: -14px;
  overflow-y: ${({ $isScrollable }) => ($isScrollable ? 'auto' : 'hidden')};

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Filter = styled.div`
  display: flex;
  align-items: flex-start;
  column-gap: 16px;
`;

export const FilterFields = styled.div`
  flex: 1 1 auto;
`;

export const FilterRow = styled.li`
  flex: 1 1 auto;
  display: grid;
  grid-template-columns: 35% 1fr;
  gap: 16px;
`;

export const RemoveButton = styled(Button)`
  margin-top: 24px;
`;

export const FilterDetails = styled.div`
  display: grid;
  grid-template-columns: 45% 55%;
  column-gap: 16px;
`;

export const StyledSwitchInput = styled(SwitchInput)`
  margin-top: 24px;
`;

export const ColumnSelect = styled.div`
  min-width: 0;
`;

export const ColumnStrategy = styled.div`
  min-width: 0;
`;

export const ColumnFilter = styled.div`
  min-width: 0;
`;

export const AddButton = styled(Button)`
  margin-top: 16px;
`;

export const RangeContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;
