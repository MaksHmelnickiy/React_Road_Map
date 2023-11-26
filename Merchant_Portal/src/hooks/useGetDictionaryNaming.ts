import React from 'react';
import { useTranslation } from 'react-i18next';

import { normalizeNaming } from 'utils/commonNormalizer';

export const useGetDictionaryNaming = () => {
  const { t, i18n } = useTranslation();

  return React.useCallback((key: string, value?: string): string => {
    if (!value) {
      return '-';
    }
    const name = `dictionaries.${key}.${value}` as never;
    return i18n.exists(name) ? t(name) : normalizeNaming(value);
  }, []);
};
