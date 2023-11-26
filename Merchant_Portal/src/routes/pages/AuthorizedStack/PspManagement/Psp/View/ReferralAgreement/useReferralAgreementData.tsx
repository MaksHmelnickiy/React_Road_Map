import React from 'react';
import { useTranslation } from 'react-i18next';

import { IPspConditions } from 'api/psp/types';

const useReferralAgreementData = (details?: IPspConditions) => {
  const { t } = useTranslation('translation');

  const countries = details?.countries?.join(', ');
  const countryGroups = details?.countryGroups?.join(', ');

  return React.useMemo(() => {
    if (!details) {
      return [];
    }

    return [
      {
        key: t('psp.columns.isPartner'),
        value: details.isPartner ? t('common.yes') : t('common.no'),
      },
      { key: t('psp.columns.gambling'), value: details.gambling },
      {
        key: t('psp.columns.countryCodes'),
        value: countries,
      },
      { key: t('psp.columns.refPercent'), value: details.refPercent },
      {
        key: t('psp.columns.cryptoExchange'),
        value: details.cryptoExchange,
      },
      {
        key: t('psp.columns.countryGroups'),
        value: countryGroups,
      },
      { key: t('psp.columns.fx'), value: details.fx },
      {
        key: t('psp.columns.notes'),
        value: details.notes,
      },
    ];
  }, [details]);
};

export default useReferralAgreementData;
