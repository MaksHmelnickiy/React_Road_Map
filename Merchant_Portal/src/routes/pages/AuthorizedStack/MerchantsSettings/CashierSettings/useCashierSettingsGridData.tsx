import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath } from 'react-router-dom';

import { IColumn, UNITS } from '@private/data-grid';

import { ICashierSettings } from 'api/cashierSettings/types';
import { TRANSACTIONS_TYPE_VARIANTS } from 'api/transactions/contants';
import BinaryCell from 'components/Grids/DataGrid/BinaryCell';
import HeaderCell from 'components/Grids/DataGrid/HeaderCell';
import MultiItemsCell from 'components/Grids/DataGrid/MultiItemsCell';
import RowCell from 'components/Grids/DataGrid/RowCell';
import Link from 'components/Link';
import Tag from 'components/Tags/Tag';
import { useGetDictionaryNaming } from 'hooks/useGetDictionaryNaming';
import { ROUTES } from 'routes/config/constants';
import { IUseGridDataResult } from 'utils/types';

export const useCashierSettingsGridData = (
  data?: ICashierSettings[]
): IUseGridDataResult<ICashierSettings> => {
  const { t } = useTranslation();
  const getDictionaryNaming = useGetDictionaryNaming();

  const cashierSettingsColumns = React.useMemo(() => {
    return [
      {
        dataKey: 'id',
        title: t('cashierSettings.columns.id'),
        minWidth: 110,
        width: {
          unit: UNITS.PERCENT,
          value: 6,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'merchantName',
        title: t('cashierSettings.columns.merchantName'),
        minWidth: 180,
        width: {
          unit: UNITS.PERCENT,
          value: 8,
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
        title: t('cashierSettings.columns.merchantTerminalName'),
        minWidth: 190,
        width: {
          unit: UNITS.PERCENT,
          value: 6,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { merchantTerminalId, merchantTerminalName } = params.item;
          const { PATH, PARAMS } = ROUTES.MERCHANTS.SUB_PATH.MERCHANT;

          const viewMerchant = generatePath(PATH, {
            [PARAMS.ID]: merchantTerminalId,
          });

          return (
            <RowCell {...params}>
              <Link to={viewMerchant}>{merchantTerminalName}</Link>
            </RowCell>
          );
        },
      },
      {
        dataKey: 'paymentMethod',
        title: t('cashierSettings.columns.paymentMethod'),
        minWidth: 175,
        width: {
          unit: UNITS.PERCENT,
          value: 8,
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
        dataKey: 'currency',
        title: t('cashierSettings.columns.currency'),
        minWidth: 120,
        width: {
          unit: UNITS.PERCENT,
          value: 6,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'transactionType',
        title: t('cashierSettings.columns.transactionType'),
        minWidth: 175,
        width: {
          unit: UNITS.PERCENT,
          value: 8,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { transactionType } = params.item;

          const tagVariant = TRANSACTIONS_TYPE_VARIANTS[transactionType as never];

          return (
            <RowCell {...params}>
              <Tag
                variant={tagVariant}
                label={getDictionaryNaming('transactionTypes', transactionType)}
              />
            </RowCell>
          );
        },
      },
      {
        dataKey: 'minCommission',
        title: t('cashierSettings.columns.minCommission'),
        minWidth: 155,
        width: {
          unit: UNITS.PERCENT,
          value: 8,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'commission',
        title: `${t('cashierSettings.columns.commission')}, %`,
        minWidth: 160,
        width: {
          unit: UNITS.PERCENT,
          value: 6,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'commissionConfirmation',
        title: t('cashierSettings.columns.commissionConfirmation'),
        minWidth: 120,
        width: {
          unit: UNITS.PERCENT,
          value: 6,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <BinaryCell {...params} />;
        },
      },
      {
        dataKey: 'predefinedAmounts',
        title: t('cashierSettings.columns.predefinedAmounts'),
        minWidth: 180,
        width: {
          unit: UNITS.PERCENT,
          value: 6,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const filtered = Object.values(params.item.predefinedAmounts).filter(
            (value) => !!value
          );

          return (
            <RowCell {...params}>{filtered.length ? filtered.join(':') : '-'}</RowCell>
          );
        },
      },
      {
        dataKey: 'defaultAmount',
        title: t('cashierSettings.columns.defaultAmount'),
        width: {
          unit: UNITS.PERCENT,
          value: 6,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'requiredFields',
        title: t('cashierSettings.columns.requiredFields'),
        minWidth: 180,
        width: {
          unit: UNITS.PERCENT,
          value: 8,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const {
            item: { requiredFields },
          } = params;

          const requiredFieldsList: string[] = [];
          Object.entries(requiredFields).forEach(([key, value]) => {
            const intlName = `requiredFields.${key}`;

            return value && requiredFieldsList.push(t(intlName as never));
          });

          return <MultiItemsCell {...params} list={requiredFieldsList} />;
        },
      },
      {
        dataKey: 'requestCardPan',
        title: t('cashierSettings.columns.requestCardPan'),
        minWidth: 130,
        width: {
          unit: UNITS.PERCENT,
          value: 6,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <BinaryCell {...params} />;
        },
      },
      {
        dataKey: 'requestAccountId',
        title: t('cashierSettings.columns.requestAccountId'),
        width: {
          unit: UNITS.PERCENT,
          value: 6,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <BinaryCell {...params} />;
        },
      },
      {
        dataKey: 'earlyRouting',
        title: t('cashierSettings.columns.earlyRouting'),
        minWidth: 120,
        width: {
          unit: UNITS.PERCENT,
          value: 6,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <BinaryCell {...params} />;
        },
      },
    ] as IColumn<ICashierSettings>[];
  }, []);

  return !data ? [] : cashierSettingsColumns;
};
