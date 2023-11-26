import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath } from 'react-router-dom';

import { IColumn, UNITS } from '@private/data-grid';

import { ICashierPaymentMethod } from 'api/cashierPaymentMethods/types';
import HeaderCell from 'components/Grids/DataGrid/HeaderCell';
import RowCell from 'components/Grids/DataGrid/RowCell';
import Link from 'components/Link';
import RandomImgPreview from 'components/RandomImgPreview';
import { ROUTES } from 'routes/config/constants';
import { PreviewWrapper } from 'routes/pages/AuthorizedStack/MerchantsSettings/PaymentMethods/styled';
import { IUseGridDataResult } from 'utils/types';

export const usePaymentMethodsGridData = (
  data?: ICashierPaymentMethod[]
): IUseGridDataResult<ICashierPaymentMethod> => {
  const { t } = useTranslation('translation', { keyPrefix: 'paymentMethods' });

  const paymentMethodsColumns = React.useMemo(() => {
    return [
      {
        dataKey: 'merchantName',
        title: t('columns.merchantName'),
        minWidth: 180,
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
        dataKey: 'merchantTerminalName',
        title: t('columns.merchantTerminalName'),
        minWidth: 190,
        width: {
          unit: UNITS.PERCENT,
          value: 20,
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
        dataKey: 'cashierPaymentMethodName',
        title: t('columns.cashierPaymentMethodName'),
        minWidth: 200,
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
        dataKey: 'logoData',
        title: t('columns.logoData'),
        width: {
          unit: UNITS.PERCENT,
          value: 20,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return (
            <RowCell {...params}>
              {!params.item.logoData ? (
                '-'
              ) : (
                <PreviewWrapper>
                  <RandomImgPreview src={params.item.logoData} />
                </PreviewWrapper>
              )}
            </RowCell>
          );
        },
      },
      {
        dataKey: 'cashierPaymentMethodCode',
        title: t('columns.cashierPaymentMethodCode'),
        minWidth: 170,
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
    ] as IColumn<ICashierPaymentMethod>[];
  }, []);

  return !data ? [] : paymentMethodsColumns;
};
