import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { IColumn, IColumnSetting } from '@private/data-grid';

import Switch from 'components/Controls/Switch';
import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';

import {
  ColumnName,
  ColumnSettingItem,
  DragController,
  DropBody,
  DropZone,
  ItemContent,
} from './styled';

export interface IColumnChangeProps {
  dropColumnIndex: number;
  newIndex: number;
}

interface ISettingItem<T> extends IColumnSetting<T> {
  index: number;
  onToggleColumn?: (dataKey: IColumn<T>['dataKey']) => void;
  onColumnOrderChange: (data: IColumnChangeProps) => void;
}
const SETTING_KEY = 'COLUMN_SETTING';

const DraggableSetting = <T,>({
  index,
  dataKey,
  title,
  visible,
  onToggleColumn,
  onColumnOrderChange,
}: ISettingItem<T>) => {
  const [{ isDragging }, drag, dragPreview] = useDrag(
    () => ({
      type: SETTING_KEY,
      item: {
        dropColumnIndex: index,
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [index]
  );

  const [{ isOver: topIsOver, dropItem: topDropItem }, topDrop] = useDrop(
    {
      accept: SETTING_KEY,
      drop({ dropColumnIndex }: { dropColumnIndex: number }) {
        onColumnOrderChange({
          dropColumnIndex,
          newIndex: 0,
        });
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        dropItem: monitor.getItem(),
      }),
    },
    [onColumnOrderChange, index]
  );

  const [{ isOver: bottomIsOver, dropItem: bottomDropItem }, bottomDrop] = useDrop(
    {
      accept: SETTING_KEY,
      drop({ dropColumnIndex }: { dropColumnIndex: number }) {
        onColumnOrderChange({
          dropColumnIndex,
          newIndex: index > dropColumnIndex ? index : index + 1,
        });
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        dropItem: monitor.getItem(),
      }),
    },
    [onColumnOrderChange, index]
  );

  const onToggle = React.useCallback(
    () => onToggleColumn?.(dataKey),
    [onToggleColumn, dataKey]
  );

  return (
    <>
      {!index && (
        <DropZone ref={topDrop}>
          <DropBody $stopAnimation={!topIsOver && !topDropItem} $isOver={topIsOver} />
        </DropZone>
      )}
      <ColumnSettingItem ref={dragPreview} $isDragging={isDragging}>
        <DragController ref={drag}>
          <ICONS_MAP.DragDots />
        </DragController>
        <ItemContent>
          <ColumnName size='sm' variant='regular'>
            {title}
          </ColumnName>
          <Switch checked={visible} onChange={onToggle} />
        </ItemContent>
      </ColumnSettingItem>
      <DropZone ref={bottomDrop}>
        <DropBody
          $stopAnimation={!bottomIsOver && !bottomDropItem}
          $isOver={
            bottomIsOver &&
            bottomDropItem.dropColumnIndex !== index &&
            index !== bottomDropItem.dropColumnIndex - 1
          }
        />
      </DropZone>
    </>
  );
};

export default appReactMemo(DraggableSetting);
