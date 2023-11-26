import React from 'react';
import { useTranslation } from 'react-i18next';

interface IInit<T> {
  initPrefix: string;
  details?: T;
}

export const useGetDetailFields = <T>({ initPrefix, details }: IInit<T>) => {
  const { t } = useTranslation();

  const getFieldOption = (key: string, value: unknown) => {
    if (typeof value === 'boolean') {
      return {
        key: t(`${initPrefix}.${key}` as never),
        value: value ? t('common.yes') : t('common.no'),
      };
    }

    return {
      key: t(`${initPrefix}.${key}` as never),
      value: value as string,
    };
  };

  return React.useMemo(() => {
    if (!details) {
      return [];
    }

    return Object.entries(details).map(([key, value]) => getFieldOption(key, value));
  }, [details]);
};
