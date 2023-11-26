import React from 'react';
import { useTranslation } from 'react-i18next';

import { IColumn, UNITS } from '@private/data-grid';

import { IPspParameter } from 'api/psp/types';
import HeaderCell from 'components/Grids/DataGrid/HeaderCell';
import RowCell from 'components/Grids/DataGrid/RowCell';
import { IUseGridDataResult } from 'utils/types';

export const usePspDetailsGridData = (
  details?: IPspParameter[]
): IUseGridDataResult<IPspParameter> => {
  const { t } = useTranslation('translation');

  const pspColumns = React.useMemo(() => {
    return [
      {
        dataKey: 'name',
        title: t('psp.columns.name'),
        width: {
          unit: UNITS.PERCENT,
          value: 20,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'dataType',
        title: t('psp.columns.dataType'),
        width: {
          unit: UNITS.PERCENT,
          value: 20,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { dataType } = params.item;

          return <RowCell {...params}>{dataType}</RowCell>;
        },
      },
      {
        dataKey: 'value',
        title: t('psp.columns.value'),
        width: {
          unit: UNITS.PERCENT,
          value: 20,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'visibility',
        title: t('psp.columns.visibility'),
        width: {
          unit: UNITS.PERCENT,
          value: 20,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const {
            item: { visibility },
          } = params;

          const visibilityList: string[] = [];
          Object.entries(visibility).forEach(([key, value]) => {
            const intlName = `psp.visibilityParameters.${key}`;

            return value && visibilityList.push(t(intlName as never));
          });
          return (
            <RowCell {...params}>
              {visibilityList.length ? visibilityList.join(', ') : '-'}
            </RowCell>
          );
        },
      },
      {
        dataKey: 'id',
        title: t('psp.columns.parameterId'),
        width: {
          unit: UNITS.PERCENT,
          value: 20,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
    ] as IColumn<IPspParameter>[];
  }, []);

  return !details ? [] : pspColumns;
};
