import React from 'react';
import { useTranslation } from 'react-i18next';

import { IColumn, UNITS } from '@private/data-grid';

import { IWebhook } from 'api/transactions/types';
import CopyCell from 'components/Grids/DataGrid/CopyCell';
import HeaderCell from 'components/Grids/DataGrid/HeaderCell';
import RowCell from 'components/Grids/DataGrid/RowCell';
import { getFormattedDate } from 'utils/common';
import { IUseGridDataResult } from 'utils/types';

export const useWebhooksGridData = (data?: IWebhook[]): IUseGridDataResult<IWebhook> => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'transaction.webhooks.columns',
  });

  const webhooksColumns = React.useMemo(() => {
    return [
      {
        dataKey: 'id',
        title: t('id'),
        minWidth: 100,
        width: {
          unit: UNITS.PERCENT,
          value: 6,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params}>{params.item.id}</RowCell>;
        },
      },
      {
        dataKey: 'url',
        title: t('url'),
        minWidth: 100,
        width: {
          unit: UNITS.PERCENT,
          value: 22,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return (
            <RowCell {...params}>
              <CopyCell text={params.item.url} item={params.item} enableFullText />
            </RowCell>
          );
        },
      },
      {
        dataKey: 'startDate',
        title: t('startDate'),
        minWidth: 100,
        width: {
          unit: UNITS.PERCENT,
          value: 15,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params}>{getFormattedDate(params.item.startDate)}</RowCell>;
        },
      },
      {
        dataKey: 'runCount',
        title: t('runCount'),
        minWidth: 100,
        width: {
          unit: UNITS.PERCENT,
          value: 7,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params}>{params.item.runCount}</RowCell>;
        },
      },
      {
        dataKey: 'lastStartDate',
        title: t('lastStartDate'),
        minWidth: 100,
        width: {
          unit: UNITS.PERCENT,
          value: 15,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return (
            <RowCell {...params}>{getFormattedDate(params.item.lastStartDate)}</RowCell>
          );
        },
      },
      {
        dataKey: 'nextRunDate',
        title: t('nextRunDate'),
        minWidth: 100,
        width: {
          unit: UNITS.PERCENT,
          value: 15,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return (
            <RowCell {...params}>{getFormattedDate(params.item.nextRunDate)}</RowCell>
          );
        },
      },
      {
        dataKey: 'lastResponseCode',
        title: t('lastResponseCode'),
        minWidth: 100,
        width: {
          unit: UNITS.PERCENT,
          value: 10,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params}>{params.item.lastResponseCode}</RowCell>;
        },
      },
      {
        dataKey: 'lastResponseBody',
        title: t('lastResponseBody'),
        minWidth: 100,
        width: {
          unit: UNITS.PERCENT,
          value: 10,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params}>{params.item.lastResponseBody}</RowCell>;
        },
      },
    ] as IColumn<IWebhook>[];
  }, []);

  return !data ? [] : webhooksColumns;
};
