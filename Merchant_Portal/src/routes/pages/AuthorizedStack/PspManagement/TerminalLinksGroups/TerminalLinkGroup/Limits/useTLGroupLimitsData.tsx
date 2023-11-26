import React from 'react';
import { useTranslation } from 'react-i18next';

import { IColumn, UNITS } from '@private/data-grid';

import { ITerminalGroupLimits } from 'api/terminalsLinks/types';
import BinaryCell from 'components/Grids/DataGrid/BinaryCell';
import HeaderCell from 'components/Grids/DataGrid/HeaderCell';
import RowCell from 'components/Grids/DataGrid/RowCell';
import { useGetDictionaryNaming } from 'hooks/useGetDictionaryNaming';
import { getFormattedDate } from 'utils/common';
import { IUseGridDataResult } from 'utils/types';

export const useTLGroupLimitsData = (
  details?: ITerminalGroupLimits[]
): IUseGridDataResult<ITerminalGroupLimits> => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'terminalLinkGroup.limits.columns',
  });

  const getDictionaryNaming = useGetDictionaryNaming();

  return React.useMemo(() => {
    if (!details) {
      return [];
    }

    return [
      {
        dataKey: 'id',
        title: t('id'),
        minWidth: 80,
        width: {
          unit: UNITS.PERCENT,
          value: 5,
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
        minWidth: 185,
        width: {
          unit: UNITS.PERCENT,
          value: 15,
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
        minWidth: 130,
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
        dataKey: 'cardBrand',
        title: t('cardBrand'),
        minWidth: 165,
        width: {
          unit: UNITS.PERCENT,
          value: 10,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const text = getDictionaryNaming('cardBrand', params.item.cardBrand);
          return <RowCell {...params}>{text}</RowCell>;
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
        minWidth: 90,
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
        dataKey: 'currency',
        title: t('currency'),
        minWidth: 110,
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
        dataKey: 'transactionStatus',
        title: t('transactionStatus'),
        minWidth: 190,
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
        dataKey: 'periodType',
        title: t('periodType'),
        minWidth: 120,
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
    ] as IColumn<ITerminalGroupLimits>[];
  }, [details]);
};
