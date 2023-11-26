import React from 'react';
import { useTranslation } from 'react-i18next';

import { IMerchantRequiredFields } from 'api/merchants/types';
import Detail from 'components/Detail';
import { appReactMemo } from 'hocs';
import { useGetDetailFields } from 'hooks/useGetDetailFields';

import { ViewBlockContainer, ViewBlockTitle } from '../../../styled';
import { SectionDataList } from '../styled';

interface IRequiredField {
  details?: IMerchantRequiredFields;
}

const PaymentRequiredFields = ({ details }: IRequiredField) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'merchant.paymentRequiredFields',
  });

  const requiredFieldsInfo = useGetDetailFields({
    initPrefix: 'merchant.paymentRequiredFields',
    details,
  });

  if (!details) {
    return null;
  }

  return (
    <ViewBlockContainer>
      <ViewBlockTitle variant='bold' size='xl'>
        {t('title')}
      </ViewBlockTitle>
      <SectionDataList>
        {requiredFieldsInfo.map((info, index) => (
          <Detail key={index} title={info.key} text={info.value} small />
        ))}
      </SectionDataList>
    </ViewBlockContainer>
  );
};

export default appReactMemo(PaymentRequiredFields);
