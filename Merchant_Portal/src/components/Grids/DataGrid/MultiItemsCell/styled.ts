import { Tags, tooltipClasses } from '@private/components';
import { getBorderBase, getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import { Text } from 'components/Grids/DataGrid/RowCell/styled';
import Popover from 'components/Popover';

const prefix = ['components', 'dataGrid', 'multiItemsCell'];

export const CellName = styled(Text)`
  max-width: 80%;
`;

export const TagsBody = styled(Tags)`
  max-height: 174px;
  max-width: 400px;
  overflow: auto;
  margin-bottom: 0;
`;

export const StyledPopover = styled(Popover)`
  ${tooltipClasses.message} {
    ${getBorderBase(prefix)};
    background: ${getPrefixedVar(prefix, 'bg')};
    padding: 20px 10px 20px 20px;
  }
`;
