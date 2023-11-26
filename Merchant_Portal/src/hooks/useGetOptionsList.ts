import { useTranslation } from 'react-i18next';

import { IDictionariesKeys, IPaymentMethod, IResultCode } from '../api/data/types';
import { useGetDictionaries } from '../queries/data';
import { getFormattedCountry, getNormalName } from '../utils/common';

export const useGetOptionsList = ({ name, type }: { name: string; type?: string }) => {
  const { t, i18n } = useTranslation();
  const { data: appData } = useGetDictionaries();

  if (!type || !appData) {
    return [];
  }

  const [_, dictionaryName] = type.split('.');

  const optionMapVariants = {
    countryCode: (option: string) => ({
      label: name === 'binCountryCode' ? option : getFormattedCountry(option),
      value: option,
    }),
    currency: (option: string) => ({
      label: option,
      value: option,
    }),
    paymentMethod: ({ name, description }: IPaymentMethod) => ({
      label: description,
      value: name,
    }),
    resultCode: ({ code, message, description }: IResultCode) => ({
      label: `${code} - ${message}${description ? ` (${description})` : ''}`,
      value: code,
    }),
  };

  const baseOptionMapping = (option: string) => {
    const intlKey =
      dictionaryName === 'transactionType' || dictionaryName === 'transactionTypes'
        ? `dictionaries.transactionType.${option}`
        : `dictionaries.${dictionaryName}.${option}`;

    return {
      label: i18n.exists(intlKey) ? t(intlKey as never) : getNormalName(option),
      value: option,
    };
  };

  return appData[dictionaryName as IDictionariesKeys].map(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    optionMapVariants[dictionaryName as keyof typeof optionMapVariants] ||
      baseOptionMapping
  );
};
