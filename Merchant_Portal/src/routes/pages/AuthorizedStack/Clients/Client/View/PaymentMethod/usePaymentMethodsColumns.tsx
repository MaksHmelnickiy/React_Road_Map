import React from 'react';
import { useTranslation } from 'react-i18next';

import { IPaymentMethod } from 'api/clients/types';
import { IDetailGridColumn } from 'components/Grids/DetailGrid';
import { checkNumberValue, mathRoundNumber } from 'utils/common';

interface IPaymentMethodsInfo {
  methodList?: IPaymentMethod[];
  baseCurrency?: string;
}

export const usePaymentMethodsColumns = (props: IPaymentMethodsInfo) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'client.paymentMethod.columns',
  });

  const methodsColumns = React.useMemo(() => {
    return [
      {
        dataKey: 'methodName',
        title: t('methodName'),
        width: {
          value: 25,
        },
      },
      {
        dataKey: 'bankName',
        title: t('bankName'),
        width: {
          value: 30,
        },
      },
      {
        dataKey: 'depositAmount',
        title: t('depositAmount'),
        width: {
          value: 15,
        },
        renderCellData: (params) => {
          return (
            <>
              {checkNumberValue(
                params.depositAmount,
                `${mathRoundNumber(params.depositAmount)} ${props.baseCurrency}`
              )}
            </>
          );
        },
      },
      {
        dataKey: 'depositCount',
        title: t('depositCount'),
        width: {
          value: 15,
        },
      },
      {
        dataKey: 'authRate',
        title: t('authRate'),
        width: {
          value: 15,
        },
        renderCellData: (params) => {
          return <>{`${mathRoundNumber(params.authRate)}%`}</>;
        },
      },
    ] as IDetailGridColumn<IPaymentMethod>[];
  }, []);

  return !props.methodList?.length ? [] : methodsColumns;
};
