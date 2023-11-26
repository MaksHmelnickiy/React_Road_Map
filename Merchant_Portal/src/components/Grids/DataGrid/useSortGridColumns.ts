import React from 'react';

import { IColumn } from '@private/data-grid';

import { PORTAL_USERS_KEYS } from 'api/portalUser/constants';
import { IPortalUserConfig } from 'api/portalUser/types';
import { useQueryData } from 'queries/utils';

interface IUseSortGridColumns<T> {
  columns: IColumn<T>[];
  pageKey?: string;
  baseOffColumns?: string[];
  baseOnColumns?: string[];
}

interface IUseSortGridColumnsResult<T> {
  columns: IColumn<T>[];
  initialOffColumns?: string[];
  initialOnColumns?: string[];
}

export const useSortGridColumns = <T>({
  columns,
  pageKey,
  baseOffColumns,
  baseOnColumns,
}: IUseSortGridColumns<T>): IUseSortGridColumnsResult<T> => {
  const portalUser = useQueryData<IPortalUserConfig>(PORTAL_USERS_KEYS.PORTAL_USER);

  return React.useMemo(() => {
    const fallback: IUseSortGridColumnsResult<T> = {
      columns,
    };

    if (baseOnColumns) {
      fallback.initialOnColumns = baseOnColumns;
    } else if (baseOffColumns) {
      fallback.initialOffColumns = baseOffColumns;
    }

    if (!pageKey) {
      return fallback;
    }

    const columnsSettings = portalUser?.settings.pages?.[pageKey]?.columns || {};

    if (!columnsSettings) {
      return fallback;
    }

    const gridColumns: IColumn<T>[] = [];
    const initialOffColumns: string[] = [];
    const initialOnColumns: string[] = [];

    for (const column of columns) {
      const { dataKey } = column;

      const columnSetting = columnsSettings[dataKey as keyof typeof columnsSettings];

      if (!columnSetting) {
        return fallback;
      }

      const { order: columnOrder, visible } = columnSetting;

      if (visible) {
        initialOnColumns.push(dataKey as string);
      } else {
        initialOffColumns.push(dataKey as string);
      }

      // if index is free, set a column obj
      if (!gridColumns[columnOrder]) {
        gridColumns[columnOrder] = column;
        // otherwise return fallback
      } else {
        return fallback;
      }
    }

    const result: IUseSortGridColumnsResult<T> = {
      columns: gridColumns,
    };

    if (baseOnColumns) {
      result.initialOnColumns = initialOnColumns;
    } else {
      result.initialOffColumns = initialOffColumns;
    }

    return result;
  }, [columns, pageKey, baseOffColumns]);
};
