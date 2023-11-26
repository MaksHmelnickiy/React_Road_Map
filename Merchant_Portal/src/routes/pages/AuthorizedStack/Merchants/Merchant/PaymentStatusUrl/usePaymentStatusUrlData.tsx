import React from 'react';
import { useTranslation } from 'react-i18next';

import { IMerchantStatusPageUrl } from 'api/merchants/types';

const usePaymentStatusUrlData = (details?: IMerchantStatusPageUrl) => {
  const { t } = useTranslation('translation', { keyPrefix: 'merchant.paymentStatusUrl' });

  return React.useMemo(() => {
    if (!details) {
      return [];
    }

    return [
      { key: t('returnSuccessUrl'), value: details.returnSuccessUrl },
      { key: t('returnFailureUrl'), value: details.returnFailureUrl },
      {
        key: t('returnCancelUrl'),
        value: details.returnCancelUrl,
      },
      { key: t('returnHoldUrl'), value: details.returnHoldUrl },
      {
        key: t('returnPayoutFailureUrl'),
        value: details.returnPayoutFailureUrl,
      },
      {
        key: t('returnFromCashierUrl'),
        value: details.returnFromCashierUrl,
      },
      {
        key: t('returnInProgressUrl'),
        value: details.returnInProgressUrl,
      },
    ];
  }, [details]);
};

export default usePaymentStatusUrlData;
