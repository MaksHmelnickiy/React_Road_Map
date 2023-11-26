import React from 'react';
import { useTranslation } from 'react-i18next';

import { IClientPaymentMethod } from 'api/clients/types';
import DetailGrid from 'components/Grids/DetailGrid';
import { appReactMemo } from 'hocs';

import { BlockContainer, BlockTitle } from '../styled';

import { usePaymentMethodsColumns } from './usePaymentMethodsColumns';

interface IClientPaymentMethodInfo {
  details?: IClientPaymentMethod;
}

const PaymentMethod = ({ details }: IClientPaymentMethodInfo) => {
  const { t } = useTranslation('translation');

  const methodsColumns = usePaymentMethodsColumns({
    methodList: details?.listCustomerMethodStats,
    baseCurrency: details?.baseCurrency,
  });

  return (
    <BlockContainer>
      <BlockTitle as='p'>{t('client.paymentMethod.title')}</BlockTitle>
      <DetailGrid details={details?.listCustomerMethodStats} columns={methodsColumns} />
    </BlockContainer>
  );
};

export default appReactMemo(PaymentMethod);
