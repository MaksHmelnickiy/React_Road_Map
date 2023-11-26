import { tooltipClasses } from '@private/components';
import { getBorderBase, getPrefixedVar } from '@private/payment';
import styled, { css } from 'styled-components';

import Popover from 'components/Popover';

import Button from '../../../Button';
import Typography from '../../../Typography';

const prefix = ['components', 'dataGrid', 'columnsFilter'];

export const ColumnFiltersContainer = styled.div`
  height: 100%;
  overflow: auto;
`;

export const TableSettingsContainer = styled.div`
  max-height: 480px;
  width: 344px;
  display: flex;
  flex-direction: column;
`;

export const ColumnsFilterTitle = styled(Typography)`
  text-align: start;
  margin-bottom: 28px;
  color: ${getPrefixedVar(prefix, 'popover', 'title')};
`;

export const ColumnsFilterHeader = styled(Typography)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-right: 14px;
  color: ${getPrefixedVar(prefix, 'popover', 'header')};
`;

export const StyledSettingsButton = styled(Button)<{ open: boolean }>`
  ${({ open }) => css`
    color: ${getPrefixedVar(prefix, 'activeSettingButton', 'text')};
    ${open &&
    css`
      background: ${getPrefixedVar(prefix, 'activeSettingButton', 'bg')};
    `};
  `}
`;

export const StyledPopover = styled(Popover)`
  ${tooltipClasses.message} {
    padding: 32px 10px 0 24px;
    min-width: 330px;
    ${getBorderBase([...prefix, 'popover'])};
  }
`;
