import { getBorderBase, getPrefixedVar } from '@private/payment';
import styled, { css } from 'styled-components';

import Typography from 'components/Typography';

const prefix = ['components', 'dataGrid', 'columnsFilter'];

export const ColumnSettingItem = styled.div<{ $isDragging?: boolean }>`
  height: 56px;
  display: flex;
  ${getBorderBase([...prefix, 'popover', 'settingItem'])};
  background: ${getPrefixedVar(prefix, 'popover', 'settingItem', 'bg')};
  opacity: ${({ $isDragging }) => ($isDragging ? 0.5 : 1)};
  transform: translate(0, 0);
  overflow: hidden;
  transition: all 0.3s ease;
`;

export const DragController = styled.div`
  flex: 0 0 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${getPrefixedVar(prefix, 'popover', 'settingItem', 'dragController', 'bg')};
  color: ${getPrefixedVar(prefix, 'popover', 'settingItem', 'dragController', 'icon')};
  cursor: grab;
`;

export const ItemContent = styled.div`
  flex: 1 1 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 16px;
`;

export const ColumnName = styled(Typography)`
  color: ${getPrefixedVar(prefix, 'popover', 'settingItem', 'text')};
`;

export const DropZone = styled.div`
  display: flex;
  transition: all 0.3s ease;
`;

export const DropBody = styled.div<{
  $stopAnimation?: boolean;
  $isOver?: boolean;
}>`
  flex: 1 1 auto;
  height: 1px;
  border-style: dashed;
  ${getBorderBase([...prefix, 'popover', 'settingItem', 'dragArea', 'base'])};
  margin: 5px 0;
  border-radius: 8px;

  ${({ $isOver }) =>
    $isOver &&
    css`
      height: 56px;
      margin: 5px 0;
      ${getBorderBase([...prefix, 'popover', 'settingItem', 'dragArea', 'active'])};
      background: ${getPrefixedVar(
        prefix,
        'popover',
        'settingItem',
        'dragArea',
        'active',
        'bg'
      )};
    `};

  transition: all ${({ $stopAnimation }) => ($stopAnimation ? '0' : '0.3s')} ease;
`;
