import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath } from 'react-router-dom';

import { IColumn, UNITS } from '@private/data-grid';

import { ITerminalLinksLimits } from 'api/terminalsLinks/types';
import { TRANSACTION_STATUS_TAG } from 'api/transactions/contants';
import BinaryCell from 'components/Grids/DataGrid/BinaryCell';
import HeaderCell from 'components/Grids/DataGrid/HeaderCell';
import RowCell from 'components/Grids/DataGrid/RowCell';
import Link from 'components/Link';
import Tag from 'components/Tags/Tag';
import { useGetDictionaryNaming } from 'hooks/useGetDictionaryNaming';
import { ROUTES } from 'routes/config/constants';
import { getFormattedDate, getNormalName } from 'utils/common';

export const useGetTerminalLinksLimitsGridData = (
  data?: ITerminalLinksLimits[]
): IColumn<ITerminalLinksLimits>[] => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'terminalLinksLimits.columns',
  });

  const getDictionaryNaming = useGetDictionaryNaming();

  const terminalLinksColumns = React.useMemo(() => {
    return [
      {
        dataKey: 'id',
        title: t('id'),
        minWidth: 80,
        width: {
          unit: UNITS.PIXEL,
          value: 80,
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
          unit: UNITS.PIXEL,
          value: 100,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <BinaryCell {...params} />;
        },
      },
      {
        dataKey: 'uniqueInstrument',
        title: t('uniqueInstrument'),
        minWidth: 110,
        width: {
          unit: UNITS.PIXEL,
          value: 110,
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
        minWidth: 110,
        width: {
          unit: UNITS.PIXEL,
          value: 110,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params}>{getNormalName(params.item.limitType)}</RowCell>;
        },
      },
      {
        dataKey: 'cardBrand',
        title: t('cardBrand'),
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
              {getDictionaryNaming('cardBrand', params.item.cardBrand)}
            </RowCell>
          );
        },
      },
      {
        dataKey: 'amount',
        title: t('amount'),
        minWidth: 120,
        width: {
          unit: UNITS.PIXEL,
          value: 120,
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
          unit: UNITS.PIXEL,
          value: 100,
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
        minWidth: 120,
        width: {
          unit: UNITS.PIXEL,
          value: 120,
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
        minWidth: 140,
        width: {
          unit: UNITS.PIXEL,
          value: 140,
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
          unit: UNITS.PIXEL,
          value: 130,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params}>{getNormalName(params.item.periodType)}</RowCell>;
        },
      },
      {
        dataKey: 'lastUpdated',
        title: t('lastUpdated'),
        width: {
          unit: UNITS.PIXEL,
          value: 180,
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
        dataKey: 'merchantName',
        title: t('merchantName'),
        minWidth: 170,
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
        dataKey: 'merchantId',
        title: t('merchantId'),
        minWidth: 120,
        width: {
          unit: UNITS.PIXEL,
          value: 120,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'merchantTerminalName',
        title: t('merchantTerminalName'),
        width: {
          unit: UNITS.PIXEL,
          value: 180,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { merchantTerminalId } = params.item;
          const { PATH, PARAMS } = ROUTES.MERCHANTS.SUB_PATH.MERCHANT;

          const path = !merchantTerminalId
            ? ''
            : generatePath(PATH, {
                [PARAMS.ID]: merchantTerminalId,
              });

          return (
            <RowCell {...params}>
              <Link to={path}>{params.item.merchantName}</Link>
            </RowCell>
          );
        },
      },
      {
        dataKey: 'merchantTerminalId',
        title: t('merchantTerminalId'),

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
        dataKey: 'description',
        title: t('description'),
        width: {
          unit: UNITS.PIXEL,
          value: 200,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { terminalLinkId } = params.item;
          const { PATH, PARAMS } =
            ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINALS_LINKS.SUB_PATH.TERMINAL_LINK;

          const path = !terminalLinkId
            ? ''
            : generatePath(PATH, {
                [PARAMS.ID]: terminalLinkId,
              });

          return (
            <RowCell {...params}>
              <Link to={path}>{params.item.description}</Link>
            </RowCell>
          );
        },
      },
      {
        dataKey: 'terminalLinkId',
        title: t('terminalLinkId'),
        minWidth: 120,
        width: {
          unit: UNITS.PIXEL,
          value: 120,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'bankName',
        title: t('bankName'),
        minWidth: 180,
        width: {
          unit: UNITS.PIXEL,
          value: 180,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { bankId } = params.item;
          const { PATH, PARAMS } = ROUTES.PSP_MANAGEMENT.SUB_PATH.PSP.SUB_PATH.VIEW;

          const path = !bankId
            ? ''
            : generatePath(PATH, {
                [PARAMS.ID]: bankId,
              });

          return (
            <RowCell {...params}>
              <Link to={path}>{params.item.bankName}</Link>
            </RowCell>
          );
        },
      },
      {
        dataKey: 'bankId',
        title: t('bankId'),
        minWidth: 120,
        width: {
          unit: UNITS.PIXEL,
          value: 120,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'paymentMethod',
        title: t('paymentMethod'),
        minWidth: 180,
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
    ] as IColumn<ITerminalLinksLimits>[];
  }, []);

  return !data ? [] : terminalLinksColumns;
};
