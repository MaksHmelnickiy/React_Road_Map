import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath } from 'react-router-dom';

import { IColumn, UNITS } from '@private/data-grid';

import { ICashierLimit } from 'api/cashierLimits/types';
import { TRANSACTIONS_TYPE_VARIANTS } from 'api/transactions/contants';
import HeaderCell from 'components/Grids/DataGrid/HeaderCell';
import RowCell from 'components/Grids/DataGrid/RowCell';
import Link from 'components/Link';
import Tag from 'components/Tags/Tag';
import { useGetDictionaryNaming } from 'hooks/useGetDictionaryNaming';
import { ROUTES } from 'routes/config/constants';
import { getFormattedCountry } from 'utils/common';
import { IUseGridDataResult } from 'utils/types';

export const useCashierLimitsGridData = (
  data?: ICashierLimit[]
): IUseGridDataResult<ICashierLimit> => {
  const { t } = useTranslation();
  // const navigate = useNavigate();

  const getDictionaryNaming = useGetDictionaryNaming();
  // const { enabled: actionsEnabled } = useRBAC({
  //   list: [PERMISSIONS.CAN_UPDATE_CASHIER_PAYMENT_LIMIT],
  // });

  const cashierLimitsColumns = React.useMemo(() => {
    const columns = [
      {
        dataKey: 'merchantName',
        title: t('cashierLimits.columns.merchantName'),
        minWidth: 180,
        width: {
          unit: UNITS.PERCENT,
          value: 12.5,
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
        title: t('cashierLimits.columns.merchantTerminalName'),
        minWidth: 190,
        width: {
          unit: UNITS.PERCENT,
          value: 12.5,
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
        title: t('cashierLimits.columns.paymentMethod'),
        minWidth: 180,
        width: {
          unit: UNITS.PERCENT,
          value: 12.5,
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
        dataKey: 'operation',
        title: t('cashierLimits.columns.operation'),
        minWidth: 175,
        width: {
          unit: UNITS.PERCENT,
          value: 12.5,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { operation } = params.item;

          const tagVariant = TRANSACTIONS_TYPE_VARIANTS[operation as never];

          return (
            <RowCell {...params}>
              <Tag
                variant={tagVariant}
                label={getDictionaryNaming('transactionTypes', operation)}
              />
            </RowCell>
          );
        },
      },
      {
        dataKey: 'countryCode',
        title: t('cashierLimits.columns.countryCode'),
        minWidth: 140,
        width: {
          unit: UNITS.PERCENT,
          value: 12.5,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return (
            <RowCell {...params}>{getFormattedCountry(params.item.countryCode)}</RowCell>
          );
        },
      },
      {
        dataKey: 'currency',
        title: t('cashierLimits.columns.currency'),
        minWidth: 120,
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
        dataKey: 'minAmount',
        title: t('cashierLimits.columns.minAmount'),
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
        dataKey: 'maxAmount',
        title: t('cashierLimits.columns.maxAmount'),
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
    ] as IColumn<ICashierLimit>[];

    // if (actionsEnabled) {
    //   columns.push({
    //     dataKey: 'action' as keyof ICashierLimit,
    //     title: t('cashierLimits.columns.action'),
    //     minWidth: 120,
    //     width: {
    //       unit: UNITS.PERCENT,
    //       value: 7.5,
    //     },
    //     renderHeaderCell: (params): React.ReactElement => {
    //       return <HeaderCell {...params} />;
    //     },
    //     renderRowCell: (params): React.ReactElement => {
    //       const { PATH, PARAMS } =
    //         ROUTES.MERCHANTS_SETTINGS.SUB_PATH.CASHIER_LIMITS.SUB_PATH.EDIT_LIMIT;
    //       const { id } = params.item;
    //       const limitPath = generatePath(PATH, {
    //         [PARAMS.ID]: id,
    //       });
    //       const onEditLimit = () => navigate(limitPath);
    //
    //       return (
    //         <RowCell {...params}>
    //           <Button
    //             onClick={onEditLimit}
    //             variant='icon'
    //             iconSize={22}
    //             startIcon={<ICONS_MAP.Edit />}
    //           />
    //         </RowCell>
    //       );
    //     },
    //   } as IColumn<ICashierLimit>);
    // }

    return columns;
  }, []);

  return !data ? [] : cashierLimitsColumns;
};
