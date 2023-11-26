import { tooltipClasses } from '@private/components';
import { getBorderBase, getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import Popover from 'components/Popover';
import Typography from 'components/Typography';

export const ActionsPopover = styled(Popover)`
  ${tooltipClasses.message} {
    min-width: 520px;
    padding: 20px;
  }
`;

export const PopoverTitle = styled(Typography)`
  color: ${getPrefixedVar(['terminals', 'terminalParameters', 'title'])};
`;

export const List = styled.ul`
  margin-top: 20px;
  max-height: 280px;
  overflow-y: auto;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 15px 0;

  &:not(:last-child) {
    border-bottom-style: solid;
    ${getBorderBase(['terminals', 'terminalParameters', 'item'])};
  }
`;

export const ListItemKey = styled(Typography)`
  text-align: start;
  color: ${getPrefixedVar(['terminals', 'terminalParameters', 'item', 'name'])};
  flex: 0 0 130px;
  max-width: 130px;
`;

export const ListItemValue = styled(Typography)`
  color: ${getPrefixedVar(['terminals', 'terminalParameters', 'item', 'value'])};
  flex: 1 1 auto;
`;
