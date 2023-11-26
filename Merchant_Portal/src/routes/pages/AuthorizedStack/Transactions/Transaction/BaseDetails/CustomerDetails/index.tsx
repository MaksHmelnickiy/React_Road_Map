import React from 'react';
import { useTranslation } from 'react-i18next';

import { ITransactionCustomer } from 'api/transactions/types';
import Detail from 'components/Detail';
import { appReactMemo } from 'hocs';

import { ViewBlockContainer, ViewBlockTitle } from '../../../../styled';
import { DetailsWrapper } from '../../styled';

import useCustomerData from './useCustomerData';

interface ICustomerDetails {
  details?: ITransactionCustomer;
}

const CustomerDetails = ({ details }: ICustomerDetails) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'transaction.customerDetails',
  });

  const customerInfo = useCustomerData(details);

  if (!details) {
    return null;
  }

  return (
    <ViewBlockContainer>
      <ViewBlockTitle as='p'>{t('title')}</ViewBlockTitle>
      <DetailsWrapper>
        {customerInfo.map((info, index) => {
          const { key, value, link, icon } = info;

          return (
            <Detail
              key={key + index}
              title={key}
              text={link?.(details) || value}
              icon={icon?.() || ''}
              enabledIcon={!icon}
              small
            />
          );
        })}
      </DetailsWrapper>
    </ViewBlockContainer>
  );
};

export default appReactMemo(CustomerDetails);
