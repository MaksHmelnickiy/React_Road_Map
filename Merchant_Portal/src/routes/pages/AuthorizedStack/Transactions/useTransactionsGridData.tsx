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
import { useGetDictionaryNaming } from 'hooks/useGetDictionaryNaming';
import { ROUTES } from 'routes/config/constants';
import { getFormattedCountry, getFormattedDate, mathRoundNumber } from 'utils/common';
import { IUseGridDataResult } from 'utils/types';

export const useTransactionsGridData = (
  data?: ITransaction[]
): IUseGridDataResult<ITransaction> => {
  const { t } = useTranslation();

  const getDictionaryNaming = useGetDictionaryNaming();

  const transactionsColumns = React.useMemo(() => {
    return [
      {
        dataKey: 'id',
        title: t('transactions.columns.id'),
        width: {
          unit: UNITS.PIXEL,
          value: 180,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { PATH, PARAMS } = ROUTES.TRANSACTIONS.SUB_PATH.VIEW;
          const transactionPath = generatePath(PATH, { [PARAMS.ID]: params.item.id });

          return (
            <RowCell {...params}>
              <CopyCell text={params.item.id} item={params.item} to={transactionPath} />
            </RowCell>
          );
        },
      },
      {
        dataKey: 'type',
        title: t('transactions.columns.type'),
        minWidth: 130,
        width: {
          unit: UNITS.PIXEL,
          value: 130,
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
                label={getDictionaryNaming('transactionTypes', type)}
              />
            </RowCell>
          );
        },
      },
      {
        dataKey: 'paymentMethod',
        title: t('transactions.columns.paymentMethod'),
        width: {
          unit: UNITS.PIXEL,
          value: 180,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { paymentMethod } = params.item;

          const text = getDictionaryNaming('paymentMethodMap', paymentMethod);

          return <RowCell {...params}>{text || paymentMethod || '-'}</RowCell>;
        },
      },
      {
        dataKey: 'paymentIdentifier',
        title: t('transactions.columns.paymentIdentifier'),
        width: {
          unit: UNITS.PIXEL,
          value: 170,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'state',
        title: t('transactions.columns.state'),
        minWidth: 130,
        width: {
          unit: UNITS.PIXEL,
          value: 130,
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
        minWidth: 120,
        width: {
          unit: UNITS.PIXEL,
          value: 120,
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
        minWidth: 100,
        width: {
          unit: UNITS.PIXEL,
          value: 100,
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
        width: {
          unit: UNITS.PIXEL,
          value: 180,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { PATH, PARAMS } = ROUTES.MERCHANTS.SUB_PATH.MERCHANT;
          const viewMerchant = generatePath(PATH, {
            [PARAMS.ID]: params.item.merchantTerminalId,
          });
          return (
            <RowCell {...params}>
              <Link to={viewMerchant}>{params.item.merchantTerminalName}</Link>
            </RowCell>
          );
        },
      },
      {
        dataKey: 'tokenPresence',
        title: t('transactions.columns.tokenPresence'),
        width: {
          unit: UNITS.PIXEL,
          value: 150,
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
        width: {
          unit: UNITS.PIXEL,
          value: 180,
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
        dataKey: 'created',
        title: t('transactions.columns.created'),
        width: {
          unit: UNITS.PIXEL,
          value: 180,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params}>{getFormattedDate(params.item.created)}</RowCell>;
        },
      },
      {
        dataKey: 'merchantName',
        title: t('transactions.columns.merchantName'),
        width: {
          unit: UNITS.PIXEL,
          value: 150,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'legalEntity',
        title: t('transactions.columns.legalEntity'),
        width: {
          unit: UNITS.PIXEL,
          value: 170,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'clientAccountId',
        title: t('transactions.columns.clientAccountId'),
        width: {
          unit: UNITS.PIXEL,
          value: 180,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'baseCurrencyAmount',
        title: t('transactions.columns.baseCurrencyAmount'),
        width: {
          unit: UNITS.PIXEL,
          value: 180,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return (
            <RowCell {...params}>
              {mathRoundNumber(params.item.baseCurrencyAmount)}
            </RowCell>
          );
        },
      },
      {
        dataKey: 'bankName',
        title: t('transactions.columns.bankName'),
        width: {
          unit: UNITS.PIXEL,
          value: 150,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'bankResultCode',
        title: t('transactions.columns.bankResultCode'),
        width: {
          unit: UNITS.PIXEL,
          value: 180,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'bankTerminal',
        title: t('transactions.columns.bankTerminal'),
        width: {
          unit: UNITS.PIXEL,
          value: 180,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'bankTID',
        title: t('transactions.columns.bankTID'),
        width: {
          unit: UNITS.PIXEL,
          value: 180,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'baseCurrency',
        title: t('transactions.columns.baseCurrency'),
        minWidth: 140,
        width: {
          unit: UNITS.PIXEL,
          value: 140,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'binCountry',
        title: t('transactions.columns.binCountry'),
        width: {
          unit: UNITS.PIXEL,
          value: 150,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return (
            <RowCell {...params}>{getFormattedCountry(params.item.binCountry)}</RowCell>
          );
        },
      },
      {
        dataKey: 'binCountryCode',
        title: t('transactions.columns.binCountryCode'),
        width: {
          unit: UNITS.PIXEL,
          value: 180,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'cardBrand',
        title: t('transactions.columns.cardBrand'),
        width: {
          unit: UNITS.PIXEL,
          value: 160,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'cascadingSchemaName',
        title: t('transactions.columns.cascadingSchemaName'),
        width: {
          unit: UNITS.PIXEL,
          value: 210,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'cryptoAmount',
        title: t('transactions.columns.cryptoAmount'),
        width: {
          unit: UNITS.PIXEL,
          value: 170,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'cryptoCurrency',
        title: t('transactions.columns.cryptoCurrency'),
        width: {
          unit: UNITS.PIXEL,
          value: 180,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'currencyRate',
        title: t('transactions.columns.currencyRate'),
        width: {
          unit: UNITS.PIXEL,
          value: 160,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'customerCountry',
        title: t('transactions.columns.customerCountry'),
        width: {
          unit: UNITS.PIXEL,
          value: 170,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return (
            <RowCell {...params}>
              {getFormattedCountry(params.item.customerCountry)}
            </RowCell>
          );
        },
      },
      {
        dataKey: 'merchantCustomerId',
        title: t('transactions.columns.merchantCustomerId'),
        width: {
          unit: UNITS.PIXEL,
          value: 180,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return (
            <RowCell {...params}>
              <CopyCell text={params.item.merchantCustomerId} item={params.item} />
            </RowCell>
          );
        },
      },
      {
        dataKey: 'customerIp',
        title: t('transactions.columns.customerIp'),
        width: {
          unit: UNITS.PIXEL,
          value: 140,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'customerPersonalId',
        title: t('transactions.columns.customerPersonalId'),
        width: {
          unit: UNITS.PIXEL,
          value: 180,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'depositType',
        title: t('transactions.columns.depositType'),
        width: {
          unit: UNITS.PIXEL,
          value: 160,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'merchantTransactionId',
        title: t('transactions.columns.merchantTransactionId'),
        width: {
          unit: UNITS.PIXEL,
          value: 180,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return (
            <RowCell {...params}>
              <CopyCell text={params.item.merchantTransactionId} item={params.item} />
            </RowCell>
          );
        },
      },
      {
        dataKey: 'moto',
        title: t('transactions.columns.moto'),
        minWidth: 120,
        width: {
          unit: UNITS.PIXEL,
          value: 120,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <BinaryCell {...params} />;
        },
      },
      {
        dataKey: 'mt4Id',
        title: t('transactions.columns.mt4Id'),
        minWidth: 140,
        width: {
          unit: UNITS.PIXEL,
          value: 140,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'original',
        title: t('transactions.columns.original'),
        minWidth: 120,
        width: {
          unit: UNITS.PIXEL,
          value: 120,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <BinaryCell {...params} />;
        },
      },
      {
        dataKey: 'providerAmount',
        title: t('transactions.columns.providerAmount'),
        width: {
          unit: UNITS.PIXEL,
          value: 180,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'providerCurrency',
        title: t('transactions.columns.providerCurrency'),
        width: {
          unit: UNITS.PIXEL,
          value: 160,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'refTransactionId',
        title: t('transactions.columns.refTransactionId'),
        width: {
          unit: UNITS.PIXEL,
          value: 190,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { PATH, PARAMS } = ROUTES.TRANSACTIONS.SUB_PATH.VIEW;
          const transactionPath = generatePath(PATH, {
            [PARAMS.ID]: params.item.refTransactionId,
          });

          return (
            <RowCell {...params}>
              <CopyCell
                text={params.item.refTransactionId}
                item={params.item}
                to={transactionPath}
              />
            </RowCell>
          );
        },
      },
      {
        dataKey: 'refundedAmount',
        title: t('transactions.columns.refundedAmount'),
        width: {
          unit: UNITS.PIXEL,
          value: 180,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'resultCode',
        title: t('transactions.columns.resultCode'),
        width: {
          unit: UNITS.PIXEL,
          value: 180,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'routingRulesetName',
        title: t('transactions.columns.routingRulesetName'),
        width: {
          unit: UNITS.PIXEL,
          value: 180,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'routingSchemaName',
        title: t('transactions.columns.routingSchemaName'),
        width: {
          unit: UNITS.PIXEL,
          value: 180,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'transactionCountry',
        title: t('transactions.columns.transactionCountry'),
        width: {
          unit: UNITS.PIXEL,
          value: 200,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return (
            <RowCell {...params}>
              {getFormattedCountry(params.item.transactionCountry)}
            </RowCell>
          );
        },
      },
      {
        dataKey: 'updated',
        title: t('transactions.columns.updated'),
        width: {
          unit: UNITS.PIXEL,
          value: 180,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params}>{getFormattedDate(params.item.updated)}</RowCell>;
        },
      },
      {
        dataKey: 'userIp',
        title: t('transactions.columns.userIp'),
        width: {
          unit: UNITS.PIXEL,
          value: 170,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'userName',
        title: t('transactions.columns.userName'),
        width: {
          unit: UNITS.PIXEL,
          value: 180,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
    ] as IColumn<ITransaction>[];
  }, []);

  return !data ? [] : transactionsColumns;
};
