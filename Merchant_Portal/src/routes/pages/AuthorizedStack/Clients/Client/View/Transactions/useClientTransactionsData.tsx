import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath } from 'react-router-dom';

import { IColumn, UNITS } from '@private/data-grid';

import { TRANSACTIONS_TYPE_VARIANTS } from 'api/transactions/contants';
import { ITransaction } from 'api/transactions/types';
import BinaryCell from 'components/Grids/DataGrid/BinaryCell';
import CopyCell from 'components/Grids/DataGrid/CopyCell';
import HeaderCell from 'components/Grids/DataGrid/HeaderCell';
import RowCell from 'components/Grids/DataGrid/RowCell';
import Link from 'components/Link';
import Tag from 'components/Tags/Tag';
import { ROUTES } from 'routes/config/constants';
import { getFormattedDate, getNormalName } from 'utils/common';
import { IUseGridDataResult } from 'utils/types';

export const useClientTransactionsData = (
  data?: ITransaction[]
): IUseGridDataResult<ITransaction> => {
  const { t } = useTranslation();

  const transactionsColumns = React.useMemo(() => {
    return [
      {
        dataKey: 'id',
        title: t('transactions.columns.id'),
        minWidth: 180,
        width: {
          unit: UNITS.PERCENT,
          value: 10,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { PATH, PARAMS } = ROUTES.TRANSACTIONS.SUB_PATH.VIEW;

          const path = generatePath(PATH, {
            [PARAMS.ID]: params.item.id,
          });

          return (
            <RowCell {...params}>
              <CopyCell text={params.item.id} item={params.item} to={path} />
            </RowCell>
          );
        },
      },
      {
        dataKey: 'type',
        title: t('transactions.columns.type'),
        minWidth: 110,
        width: {
          unit: UNITS.PERCENT,
          value: 16,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell center {...params} />;
        },
        renderRowCell: (params) => {
          const { type } = params.item;

          const tagVariant = TRANSACTIONS_TYPE_VARIANTS[type];

          return (
            <RowCell center {...params}>
              <Tag
                variant={tagVariant}
                label={t(`dictionaries.transactionType.${type}` as never)}
              />
            </RowCell>
          );
        },
      },
      {
        dataKey: 'paymentMethod',
        title: t('transactions.columns.paymentMethod'),
        minWidth: 150,
        width: {
          unit: UNITS.PERCENT,
          value: 10,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return (
            <RowCell {...params}>
              {getNormalName(params.item.paymentMethod) || '-'}
            </RowCell>
          );
        },
      },
      {
        dataKey: 'paymentIdentifier',
        title: t('transactions.columns.paymentIdentifier'),
        minWidth: 200,
        width: {
          unit: UNITS.PERCENT,
          value: 10,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { paymentIdentifier } = params.item;
          return <RowCell {...params}>{paymentIdentifier || '—'}</RowCell>;
        },
      },
      {
        dataKey: 'state',
        title: t('transactions.columns.state'),
        minWidth: 120,
        width: {
          unit: UNITS.PERCENT,
          value: 17,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return (
            <RowCell {...params}>
              {t(`dictionaries.transactionState.${params.item.state}` as never)}
            </RowCell>
          );
        },
      },
      {
        dataKey: 'amount',
        title: t('transactions.columns.amount'),
        minWidth: 145,
        width: {
          unit: UNITS.PERCENT,
          value: 17,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell center {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} center />;
        },
      },
      {
        dataKey: 'currency',
        title: t('transactions.columns.currency'),
        minWidth: 130,
        width: {
          unit: UNITS.PERCENT,
          value: 16,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell center {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} center />;
        },
      },
      {
        dataKey: 'merchantTerminalName',
        title: t('transactions.columns.merchantTerminalName'),
        minWidth: 180,
        width: {
          unit: UNITS.PERCENT,
          value: 17,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { merchantTerminalId, merchantTerminalName } = params.item;
          const { PATH, PARAMS } = ROUTES.MERCHANTS.SUB_PATH.MERCHANT;

          const path = generatePath(PATH, {
            [PARAMS.ID]: merchantTerminalId,
          });

          return (
            <RowCell {...params}>
              <Link to={path}>{merchantTerminalName}</Link>
            </RowCell>
          );
        },
      },
      {
        dataKey: 'tokenPresence',
        title: t('transactions.columns.tokenPresence'),
        minWidth: 180,
        width: {
          unit: UNITS.PERCENT,
          value: 8,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell center {...params} />;
        },
        renderRowCell: (params) => {
          return <BinaryCell {...params} />;
        },
      },
      {
        dataKey: 'customerAccessToken',
        title: t('transactions.columns.customerAccessToken'),
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
            <RowCell {...params}>
              <CopyCell text={params.item.customerAccessToken} item={params.item} />
            </RowCell>
          );
        },
      },
      {
        dataKey: 'createdAt',
        title: t('transactions.columns.created'),
        minWidth: 180,
        width: {
          unit: UNITS.PERCENT,
          value: 17,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params}>{getFormattedDate(params.item.created)}</RowCell>;
        },
      },
    ] as IColumn<ITransaction>[];
  }, []);

  return !data ? [] : transactionsColumns;
};
