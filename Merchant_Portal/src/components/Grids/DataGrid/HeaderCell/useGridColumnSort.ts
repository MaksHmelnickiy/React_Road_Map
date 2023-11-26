import React from 'react';
import { useTranslation } from 'react-i18next';

import { IColumn } from '@private/data-grid';
import { NOTIF_TYPES } from '@private/notifications';

import { getSortingCallback } from 'utils/common';
import { notificationService } from 'utils/notificationService';
import { IOrdersType, ISortingCallback, TSortDirection } from 'utils/types';

import { useDataGridContext } from '../DataGridContext';

const SORTING_ORDER = [null, 'ASC', 'DESC'];

interface IUseGridColumnSort<T> {
  sortIsOn: boolean;
  onClick: () => void;
  cellTitle: string;
  cellData: IColumn<T>;
  sortedColumn?: IOrdersType;
  isSortable: boolean;
}

interface IUseGridColumnSortProps<T> {
  columns: IColumn<T>[];
  index: number;
}
const useGridColumnSort = <T>({
  columns,
  index,
}: IUseGridColumnSortProps<T>): IUseGridColumnSort<T> => {
  const { t } = useTranslation('translation', { keyPrefix: 'common.sorting' });

  const { onSort, sort, filters, defaultSortedColumn } = useDataGridContext();

  const defaultSorted = React.useMemo(
    () => columns.find((item) => item.dataKey === defaultSortedColumn),
    [columns, defaultSortedColumn]
  );

  const sortingProps = {
    filters,
    sort,
    columns,
    index,
    callback: onSort,
  } as ISortingCallback<T>;
  const { onSortingChange, sortedColumn } = getSortingCallback(sortingProps);

  const cellData = columns?.[index];
  const cellTitle = cellData?.title || '';

  const onClick = React.useCallback(() => {
    const currentSortIndex =
      sortedColumn?.property === cellData?.dataKey
        ? SORTING_ORDER.findIndex((item) => item === sortedColumn?.direction)
        : 0;

    const ascIndex = SORTING_ORDER.findIndex((item) => item === 'ASC');

    let nextIndex =
      sortedColumn?.property === defaultSortedColumn && sortedColumn?.direction === 'DESC'
        ? ascIndex
        : currentSortIndex + 1;

    if (nextIndex > SORTING_ORDER.length - 1) {
      nextIndex = 0;
    }

    const nextItem = SORTING_ORDER[nextIndex] as TSortDirection;

    const config = nextItem
      ? { property: cellData?.dataKey as string, direction: nextItem }
      : null;

    onSortingChange?.(config);

    const defaultText = defaultSorted
      ? `${t('off')} ${defaultSorted.title.toLowerCase()}`
      : t('defaultSortText');

    notificationService.show({
      type: NOTIF_TYPES.INFO,
      title: nextItem
        ? `${t('order')} ${cellTitle.toLowerCase()} ${t('changed')} ${
            nextItem === 'ASC' ? t('ascending') : t('descending')
          }`
        : defaultText,
    });
  }, [sortedColumn, defaultSortedColumn]);

  const sortIsOn = !!sortedColumn?.direction;

  return {
    onClick,
    sortIsOn,
    cellTitle,
    cellData,
    sortedColumn,
    isSortable: !!onSortingChange,
  };
};

export default useGridColumnSort;
