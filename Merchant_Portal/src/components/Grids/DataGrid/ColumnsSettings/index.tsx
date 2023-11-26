import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useTranslation } from 'react-i18next';

import { IColumnsSettingsButtonProps } from '@private/data-grid';

import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';

import Button from '../../../Button';

import DraggableSetting from './DraggableSetting';
import {
  ColumnFiltersContainer,
  ColumnsFilterHeader,
  ColumnsFilterTitle,
  StyledPopover,
  StyledSettingsButton,
  TableSettingsContainer,
} from './styled';

const ColumnsSettings = <T,>({
  columns,
  toggleColumn,
  enableAllColumns,
  onColumnOrderChange,
}: IColumnsSettingsButtonProps<T>): React.ReactElement => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);

  const onShowAll = React.useCallback(() => {
    enableAllColumns?.();
  }, [enableAllColumns]);

  const getPopoverBody = () => {
    return (
      <TableSettingsContainer>
        <ColumnsFilterTitle size='lg' variant='bold'>
          {t('common.tableSettings')}
        </ColumnsFilterTitle>
        <ColumnsFilterHeader size='sm' variant='bold'>
          {t('common.columns')}
          <Button
            variant='link'
            size='sm'
            disabled={columns.every((item) => item.visible)}
            onClick={onShowAll}
          >
            {t('common.enableAll')}
          </Button>
        </ColumnsFilterHeader>
        <DndProvider backend={HTML5Backend}>
          <ColumnFiltersContainer>
            {columns.map((item, index) => (
              <DraggableSetting
                key={`${item.dataKey as string}-${item.title}`}
                {...item}
                index={index}
                onToggleColumn={toggleColumn}
                onColumnOrderChange={onColumnOrderChange}
              />
            ))}
          </ColumnFiltersContainer>
        </DndProvider>
      </TableSettingsContainer>
    );
  };

  const onVisibleChange = React.useCallback((isPopoverOpen: boolean) => {
    setIsOpen(isPopoverOpen);
  }, []);

  return (
    <StyledPopover
      placement='bottom-end'
      onChange={onVisibleChange}
      component={getPopoverBody()}
    >
      <StyledSettingsButton
        open={isOpen}
        variant='icon'
        startIcon={<ICONS_MAP.Settings />}
      />
    </StyledPopover>
  );
};

export default appReactMemo(ColumnsSettings);
