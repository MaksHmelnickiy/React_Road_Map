import React from 'react';
import { useTranslation } from 'react-i18next';

import { TAG_VARIANTS } from '@private/components';
import { IColumn, UNITS } from '@private/data-grid';

import { TRANSACTIONS_TYPE } from 'api/transactions/contants';
import { ITransaction } from 'api/transactions/types';
import { TStatus } from 'components/Tags/Status/styled';
import { ICONS_MAP } from 'constants/icons';
import { getNormalName } from 'utils/common';

import { GridHeaderCell, GridRowCell, GridStatus, GridTag } from './styled';

export const useTransactionsGridData = () => {
  const { t } = useTranslation();

  return React.useMemo(() => {
    return [
      {
        dataKey: 'id',
        title: t('transactions.columns.id'),
        width: {
          unit: UNITS.PERCENT,
          value: 12,
        },
        renderHeaderCell: (params) => {
          return <GridHeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return (
            <GridRowCell {...params}>
              <ICONS_MAP.Copy width={8} height={8} />
              {params.item.id}
            </GridRowCell>
          );
        },
      },
      {
        dataKey: 'type',
        title: t('transactions.columns.type'),
        width: {
          unit: UNITS.PERCENT,
          value: 11,
        },
        renderHeaderCell: (params) => {
          return <GridHeaderCell {...params} center />;
        },
        renderRowCell: (params) => {
          const { item } = params;
          return (
            <GridRowCell {...params} center>
              <GridTag
                variant={
                  item.type === TRANSACTIONS_TYPE.PAYOUT
                    ? TAG_VARIANTS.WARNING
                    : TAG_VARIANTS.SUCCESS
                }
                label={getNormalName(item.type || '')}
              />
            </GridRowCell>
          );
        },
      },
      {
        dataKey: 'paymentMethod',
        title: t('transactions.columns.paymentMethod'),
        width: {
          unit: UNITS.PERCENT,
          value: 11,
        },
        renderHeaderCell: (params) => {
          return <GridHeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { item } = params;
          return <GridRowCell {...params}>{item.paymentMethod}</GridRowCell>;
        },
      },
      {
        dataKey: 'state',
        title: t('transactions.columns.state'),
        width: {
          unit: UNITS.PERCENT,
          value: 11,
        },
        renderHeaderCell: (params) => {
          return <GridHeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { item } = params;
          let variant = item.state === 'Pending' ? 'primary' : 'error';
          variant = item.state === 'Completed' ? 'success' : variant;
          return (
            <GridRowCell {...params}>
              <GridStatus variant={variant as TStatus}>{item.state}</GridStatus>
            </GridRowCell>
          );
        },
      },
      {
        dataKey: 'amount',
        title: t('transactions.columns.amount'),
        width: {
          unit: UNITS.PERCENT,
          value: 11,
        },
        renderHeaderCell: (params) => {
          return <GridHeaderCell {...params} center />;
        },
        renderRowCell: (params) => {
          return <GridRowCell {...params} center />;
        },
      },
      {
        dataKey: 'currency',
        title: t('transactions.columns.currency'),
        width: {
          unit: UNITS.PERCENT,
          value: 11,
        },
        renderHeaderCell: (params) => {
          return <GridHeaderCell {...params} center />;
        },
        renderRowCell: (params) => {
          return <GridRowCell {...params} center />;
        },
      },
      {
        dataKey: 'tokenPresence',
        title: t('transactions.columns.tokenPresence'),
        width: {
          unit: UNITS.PERCENT,
          value: 11,
        },
        renderHeaderCell: (params) => {
          return <GridHeaderCell {...params} center />;
        },
        renderRowCell: (params) => {
          const { item } = params;
          return (
            <GridRowCell {...params} center>
              {item.tokenPresence ? t('common.yes') : t('common.no')}
            </GridRowCell>
          );
        },
      },
      {
        dataKey: 'merchantTerminalName',
        title: t('transactions.columns.merchantTerminalName'),
        width: {
          unit: UNITS.PERCENT,
          value: 11,
        },
        renderHeaderCell: (params) => {
          return <GridHeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <GridRowCell {...params} />;
        },
      },
      {
        dataKey: 'customerAccessToken',
        title: t('transactions.columns.customerAccessToken'),
        width: {
          unit: UNITS.PERCENT,
          value: 11,
        },
        renderHeaderCell: (params) => {
          return <GridHeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <GridRowCell {...params} />;
        },
      },
    ] as IColumn<Partial<ITransaction>>[];
  }, []);
};
