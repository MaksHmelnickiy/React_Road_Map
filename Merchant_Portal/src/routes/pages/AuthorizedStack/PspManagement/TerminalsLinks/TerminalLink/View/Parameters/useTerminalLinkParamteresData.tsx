import React from 'react';
import { useTranslation } from 'react-i18next';

import { IColumn, UNITS } from '@private/data-grid';

import { ITerminalLinkParameter } from 'api/terminalsLinks/types';
import HeaderCell from 'components/Grids/DataGrid/HeaderCell';
import RowCell from 'components/Grids/DataGrid/RowCell';
import { IUseGridDataResult } from 'utils/types';

export const useTerminalParametersData = (
  details?: ITerminalLinkParameter[]
): IUseGridDataResult<ITerminalLinkParameter> => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'terminalLink.parameters.columns',
  });

  const parametersColumns = React.useMemo(() => {
    return [
      {
        dataKey: 'id',
        title: t('id'),
        width: {
          unit: UNITS.PERCENT,
          value: 10,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'name',
        title: t('name'),
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
        title: t('dataType'),
        width: {
          unit: UNITS.PERCENT,
          value: 14,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'value',
        title: t('value'),
        width: {
          unit: UNITS.PERCENT,
          value: 56,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
    ] as IColumn<ITerminalLinkParameter>[];
  }, []);

  return !details ? [] : parametersColumns;
};
