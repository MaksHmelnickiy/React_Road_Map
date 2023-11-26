import React from 'react';

import { useDebouncedValue, useUpdateEffect } from '@private/hooks';

import { IAllPageFilters, TSearch, TSortCallbackProps } from 'utils/types';

import { useSaveInURL } from './useSaveInURL';

interface IUpdateSearchProps {
  search?: TSearch;
  updateProps: IUpdateProps;
}

interface IUpdateProps {
  columnKey: string;
  operation: string;
  value: string;
}

interface IUsePageNavigationResult {
  pageFilters: IAllPageFilters;
  onPerPageChange: (count: number) => void;
  onPageChange: (page: number) => void;
  updateSearchFilter: (filter: IUpdateProps) => void;
  onApplyFilters: (searchFilters: TSearch) => void;
  localSearch: string;
  updateSortParams: (config: TSortCallbackProps) => void;
}

interface IConfig {
  disableSaveUrl?: boolean;
}

const DEFAULT_NAVIGATION = { size: 10, page: 0, search: {}, sort: {} };

export const usePageNavigation = (
  initialFilters = {},
  config: IConfig = {}
): IUsePageNavigationResult => {
  const { disableSaveUrl } = config;

  const { savedData: savedFilters, onSave: onSaveFilters } =
    useSaveInURL<IAllPageFilters>('pageFilters');

  const filters =
    savedFilters && !disableSaveUrl
      ? { ...DEFAULT_NAVIGATION, ...savedFilters }
      : { ...DEFAULT_NAVIGATION, ...initialFilters };

  const [pageFilters, setPageFilters] = React.useState<IAllPageFilters>(filters);
  const [debouncedFilters, setDebouncedFilters] = useDebouncedValue<IAllPageFilters>(
    500,
    filters
  );

  useUpdateEffect(() => {
    setDebouncedFilters(pageFilters);
  }, [pageFilters.search]);

  useUpdateEffect(() => {
    setDebouncedFilters(pageFilters, true);
  }, [pageFilters.page, pageFilters.size, pageFilters.sort]);

  useUpdateEffect(() => {
    if (!config.disableSaveUrl) {
      onSaveFilters(pageFilters);
    }
  }, [pageFilters]);

  const handleSearchFilterState = ({ search, updateProps }: IUpdateSearchProps) => {
    const { columnKey, ...rest } = updateProps;
    if (!rest.value) {
      const key = columnKey as keyof typeof search;
      const { [key]: _, ...restState } = search;
      return restState;
    }

    return {
      ...search,
      [columnKey]: rest,
    };
  };

  const onPerPageChange = React.useCallback((count: number) => {
    setPageFilters((state) => ({
      ...state,
      size: count,
      page: 0,
    }));
  }, []);

  const onPageChange = React.useCallback((page: number) => {
    setPageFilters((state) => ({
      ...state,
      page,
    }));
  }, []);

  const updateSearchFilter = React.useCallback((updateProps: IUpdateProps) => {
    setPageFilters(({ search, ...state }) => ({
      ...state,
      page: 0,
      search: handleSearchFilterState({ search, updateProps }),
    }));
  }, []);

  const onApplyFilters = React.useCallback((search: TSearch) => {
    setPageFilters((state) => ({
      ...state,
      page: 0,
      search: {
        localSearch: state?.search?.localSearch,
        ...search,
      },
    }));
  }, []);

  const updateSortParams = React.useCallback((config: TSortCallbackProps) => {
    if (config) {
      setPageFilters((state) => ({
        ...state,
        sort: {
          [config?.property]: {
            value: config?.direction,
            operation: ',',
            ignoreCase: true,
          },
        },
      }));
    } else {
      setPageFilters((state) => ({
        ...state,
        sort: {},
      }));
    }
  }, []);

  return {
    pageFilters: debouncedFilters || pageFilters,
    onPerPageChange,
    onPageChange,
    updateSearchFilter,
    updateSortParams,
    onApplyFilters,
    localSearch: (pageFilters.search?.localSearch?.value as string) || '',
  };
};
