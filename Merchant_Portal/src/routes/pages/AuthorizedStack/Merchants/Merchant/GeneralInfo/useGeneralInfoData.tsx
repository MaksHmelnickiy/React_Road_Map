import React from 'react';
import { useTranslation } from 'react-i18next';

import { IMerchantInfo } from 'api/merchants/types';

const useGeneralInfoData = (details?: IMerchantInfo) => {
  const { t } = useTranslation('translation', { keyPrefix: 'merchant.generalInfo' });

  return React.useMemo(() => {
    if (!details) {
      return [];
    }

    return [
      { key: t('id'), value: details.id },
      { key: t('description'), value: details.description },
      {
        key: t('apiAccessMode'),
        value: details.apiAccessMode,
      },
      { key: t('shopUrl'), value: details.shopUrl },
      {
        key: t('webhookUrl'),
        value: details.webhookUrl,
      },
      {
        key: t('shopTitle'),
        value: details.shopTitle,
      },
      {
        key: t('merchantName'),
        value: details.merchantName,
      },
      {
        key: t('legalEntityName'),
        value: details.legalEntityName,
      },
    ];
  }, [details]);
};

export default useGeneralInfoData;
