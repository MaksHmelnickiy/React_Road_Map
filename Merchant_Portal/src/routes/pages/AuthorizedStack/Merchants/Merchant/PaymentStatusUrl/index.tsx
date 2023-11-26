import React from 'react';
import { useTranslation } from 'react-i18next';

import { IMerchantStatusPageUrl } from 'api/merchants/types';
import Detail from 'components/Detail';
import { appReactMemo } from 'hocs';

import { ViewBlockContainer, ViewBlockTitle } from '../../../styled';
import { SectionDataList } from '../styled';

import usePaymentStatusUrlData from './usePaymentStatusUrlData';

interface IPaymentStatusUrl {
  details?: IMerchantStatusPageUrl;
}

const PaymentStatusUrl = ({ details }: IPaymentStatusUrl) => {
  const { t } = useTranslation('translation', { keyPrefix: 'merchant.paymentStatusUrl' });

  const statusUrlInfo = usePaymentStatusUrlData(details);

  if (!details) {
    return null;
  }

  return (
    <ViewBlockContainer>
      <ViewBlockTitle variant='bold' size='xl'>
        {t('title')}
      </ViewBlockTitle>
      <SectionDataList>
        {statusUrlInfo.map((info, index) => (
          <Detail key={index} title={info.key} text={info.value} small />
        ))}
      </SectionDataList>
    </ViewBlockContainer>
  );
};

export default appReactMemo(PaymentStatusUrl);
