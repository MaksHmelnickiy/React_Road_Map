import React from 'react';
import { useTranslation } from 'react-i18next';

import { ITransactionCard } from 'api/transactions/types';
import { ICONS_MAP } from 'constants/icons';
import { useGetDictionaryNaming } from 'hooks/useGetDictionaryNaming';

interface IElementInfo {
  key: string;
  value?: string | number;
  icon?: () => React.ReactElement;
}

const useCardData = (details?: ITransactionCard): IElementInfo[] => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'transaction.cardDetails',
  });

  const getDictionaryNaming = useGetDictionaryNaming();

  return React.useMemo(() => {
    if (!details) {
      return [];
    }

    const {
      cardBin,
      cardLast4,
      cardholder,
      cardBrand,
      binCountryCode,
      binCountryName,
      expireMonth,
      expireYear,
    } = details;

    return [
      {
        key: t('pan'),
        value: cardBin && cardLast4 && `${cardBin}...${cardLast4}`,
        icon: () => {
          return <ICONS_MAP.Card />;
        },
      },
      { key: t('cardholder'), value: cardholder },
      { key: t('cardBrand'), value: getDictionaryNaming('cardBrand', cardBrand) },
      {
        key: t('expiryAt'),
        value: expireMonth && expireYear && `${expireMonth}/${expireYear}`,
      },
      { key: t('countryCode'), value: binCountryCode },
      { key: t('countryName'), value: binCountryName },
    ];
  }, [details]);
};

export default useCardData;
