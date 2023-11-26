import React from 'react';

import { useDebouncedValue } from '@private/hooks';

interface IUseDataWithFilterResult<T> {
  data: T[];
  searchQuery?: string;
  filterByText: (query: string) => void;
  clearSearch: () => void;
}

interface IDeepSearchFilter<T> {
  data?: T[];
  searchKeys?: string[];
  debounceTime?: number;
  onChange?: (value: string) => void;
}

export const useDeepSearchFilter = <T extends object>({
  data,
  searchKeys,
  debounceTime = 600,
  onChange,
}: IDeepSearchFilter<T>): IUseDataWithFilterResult<T> => {
  const [debouncedSearchQuery, setDebouncedSearchQuery] =
    useDebouncedValue<string>(debounceTime);
  const [searchQuery, setSearchQuery] = React.useState<string>('');

  const updateSearchQuery = (query: string) => {
    const normalizedTerm = query.toLowerCase().trim();
    setSearchQuery(query);
    if (onChange) {
      return onChange(normalizedTerm);
    }
    if (!normalizedTerm || !debounceTime) {
      setDebouncedSearchQuery(normalizedTerm, true);
    } else {
      setDebouncedSearchQuery(normalizedTerm);
    }
  };

  const filterByText = React.useCallback((items: T[], query: string) => {
    const filterData = (data: T[]) =>
      data.reduce((list: T[], entry: T) => {
        let clone: T | null = null;
        const someKeyEqual = searchKeys?.some((key) => {
          const entryValue = entry[key as keyof typeof entry];
          if (
            typeof entryValue === 'string' &&
            entryValue.toLowerCase().includes(query)
          ) {
            return true;
          }
          return false;
        });
        if (someKeyEqual) {
          clone = { ...entry };
        } else {
          const entryKeys = Object.keys(entry);

          entryKeys.forEach((key) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const entryValue = entry[key];
            if (Array.isArray(entryValue)) {
              const fieldFilter = filterData(entryValue);
              if (fieldFilter && fieldFilter.length > 0) {
                clone = { ...entry, [key]: fieldFilter };
              }
            }
          });
        }

        if (clone) {
          list.push(clone);
        }
        return list;
      }, []);

    return filterData(items);
  }, []);

  const clearSearch = React.useCallback(() => {
    setSearchQuery('');
    setDebouncedSearchQuery('', true);
  }, []);

  const filteredData = React.useMemo(() => {
    const notFiltered = data || [];
    return debouncedSearchQuery
      ? filterByText(notFiltered, debouncedSearchQuery)
      : notFiltered;
  }, [data, debouncedSearchQuery]);

  return {
    data: filteredData,
    searchQuery,
    clearSearch,
    filterByText: updateSearchQuery,
  };
};
