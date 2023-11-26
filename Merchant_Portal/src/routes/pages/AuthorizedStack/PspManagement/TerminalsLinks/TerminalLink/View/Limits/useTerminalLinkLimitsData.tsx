import React from 'react';
import { useTranslation } from 'react-i18next';

import { IColumn, UNITS } from '@private/data-grid';

import { ITerminalLinkLimit } from 'api/terminalsLinks/types';
import { TRANSACTION_STATUS_TAG } from 'api/transactions/contants';
import BinaryCell from 'components/Grids/DataGrid/BinaryCell';
import HeaderCell from 'components/Grids/DataGrid/HeaderCell';
import RowCell from 'components/Grids/DataGrid/RowCell';
import Tag from 'components/Tags/Tag';
import { useGetDictionaryNaming } from 'hooks/useGetDictionaryNaming';
import { getFormattedDate } from 'utils/common';
import { IUseGridDataResult } from 'utils/types';

export const useTerminalLimitsData = (
  details?: ITerminalLinkLimit[]
): IUseGridDataResult<ITerminalLinkLimit> => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'terminalLink.limits.columns',
  });

  const getDictionaryNaming = useGetDictionaryNaming();

  const parametersColumns = React.useMemo(() => {
    return [
      {
        dataKey: 'id',
        title: t('id'),
        minWidth: 100,
        width: {
          unit: UNITS.PERCENT,
          value: 3,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'terminalLinkGroupName',
        title: t('terminalLinkGroupName'),
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
        dataKey: 'enabled',
        title: t('enabled'),
        minWidth: 100,
        width: {
          unit: UNITS.PERCENT,
          value: 10,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <BinaryCell {...params} />;
        },
      },
      {
        dataKey: 'amount',
        title: t('amount'),
        minWidth: 100,
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
        dataKey: 'count',
        title: t('count'),
        minWidth: 100,
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
        dataKey: 'uniqueInstrument',
        title: t('uniqueInstrument'),
        minWidth: 160,
        width: {
          unit: UNITS.PERCENT,
          value: 10,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <BinaryCell {...params} />;
        },
      },
      {
        dataKey: 'limitType',
        title: t('limitType'),
        minWidth: 120,
        width: {
          unit: UNITS.PERCENT,
          value: 10,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const text = getDictionaryNaming('limitType', params.item.limitType);
          return <RowCell {...params}>{text}</RowCell>;
        },
      },
      {
        dataKey: 'currency',
        title: t('currency'),
        minWidth: 120,
        width: {
          unit: UNITS.PERCENT,
          value: 10,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { currency } = params.item;
          return <RowCell {...params}>{currency || '-'}</RowCell>;
        },
      },
      {
        dataKey: 'transactionStatus',
        title: t('transactionStatus'),
        minWidth: 180,
        width: {
          unit: UNITS.PERCENT,
          value: 7,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell center {...params} />;
        },
        renderRowCell: (params) => {
          const { transactionStatus } = params.item;

          const tagVariant = TRANSACTION_STATUS_TAG[transactionStatus];

          const text = getDictionaryNaming('transactionStatuses', transactionStatus);

          return (
            <RowCell center {...params}>
              {transactionStatus ? <Tag variant={tagVariant} label={text} /> : '-'}
            </RowCell>
          );
        },
      },
      {
        dataKey: 'periodType',
        title: t('periodType'),
        minWidth: 130,
        width: {
          unit: UNITS.PERCENT,
          value: 10,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const text = getDictionaryNaming('limitPeriodType', params.item.periodType);
          return <RowCell {...params}>{text}</RowCell>;
        },
      },
      {
        dataKey: 'lastUpdated',
        title: t('lastUpdated'),
        minWidth: 180,
        width: {
          unit: UNITS.PERCENT,
          value: 10,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return (
            <RowCell {...params}>{getFormattedDate(params.item.lastUpdated)}</RowCell>
          );
        },
      },
    ] as IColumn<ITerminalLinkLimit>[];
  }, []);

  return !details ? [] : parametersColumns;
};
