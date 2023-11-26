import React from 'react';
import { useTranslation } from 'react-i18next';

import { FILTRATION_TYPES, LOCAL_SEARCH_KEY } from 'constants/common';
import { TSearch } from 'utils/types';

import {
  FILTER_OPERATIONS,
  IAppliedFilter,
  IFallbackValues,
  IFiltrationResult,
  ISearchFilters,
  TColumnFilters,
} from './types';

export interface IUseGridDataFiltration {
  intlPrefix: string;
  columnsFilters?: TColumnFilters;
  initialFilters?: TSearch;
  onChange?: (appliedFilters: ISearchFilters) => void;
  ignoreList?: string[];
  fallbackValues?: IFallbackValues;
}

const BASE_IGNORE_LIST = [FILTRATION_TYPES.LIST];

export const useFiltration = ({
  intlPrefix,
  columnsFilters,
  initialFilters = {},
  onChange,
  ignoreList = [],
  fallbackValues,
}: IUseGridDataFiltration): IFiltrationResult => {
  const { t, i18n } = useTranslation();
  const lastAction = React.useRef<'add' | 'remove'>('remove');

  const setInitialFilters = () => {
    const entries = Object.entries(initialFilters);
    if (!entries.length) {
      return [{}];
    }
    const filtersList = entries.reduce<IAppliedFilter[]>((prev, [columnKey, value]) => {
      if (
        !ignoreList?.includes(columnKey) &&
        columnKey !== LOCAL_SEARCH_KEY &&
        i18n.exists(`${intlPrefix}.${columnKey}`)
      ) {
        prev.push({ columnKey, ...value });
      }
      return prev;
    }, []);

    if (!filtersList.length) {
      return [{}];
    }

    return filtersList;
  };

  const [appliedFilters, setAppliedFilters] =
    React.useState<IAppliedFilter[]>(setInitialFilters);

  const applyFilters = React.useCallback(
    (newFilters: IAppliedFilter[]) => {
      const filtersConfig: ISearchFilters = {};
      newFilters
        .filter((filter) => filter.value !== undefined)
        .forEach(({ columnKey, ...filter }) => {
          if (columnKey) {
            filtersConfig[columnKey] = filter;
          }
        });
      onChange?.(filtersConfig);
    },
    [onChange]
  );

  const columnsOptions = React.useMemo(() => {
    if (!columnsFilters) {
      return [];
    }

    return Object.entries(columnsFilters)
      .filter(([key, filterSettings]) => {
        return (
          filterSettings?.listOperations.length &&
          i18n.exists(`${intlPrefix}.${key}`) &&
          key !== LOCAL_SEARCH_KEY &&
          !ignoreList.some((ignoredFilter) => ignoredFilter === key) &&
          !BASE_IGNORE_LIST.some((ignoredFilter) => ignoredFilter === filterSettings.type)
        );
      })
      .map(([key]) => ({
        label: t(`${intlPrefix}.${key}` as never),
        value: key,
      }));
  }, [columnsFilters, appliedFilters]);

  const onSelectColumn = React.useCallback(
    (newValue: string | null, index: number) => {
      let shouldTrigger = false;
      const newFilters = appliedFilters.map((filter, filterIndex) => {
        if (filterIndex === index) {
          if (newValue !== filter.columnKey && filter.value !== undefined) {
            shouldTrigger = true;
          }
          return {
            columnKey: newValue,
            operation: undefined,
            value: undefined,
          };
        }

        return filter;
      });

      setAppliedFilters(newFilters);

      if (shouldTrigger) {
        applyFilters(newFilters);
      }
    },
    [appliedFilters, applyFilters]
  );

  const onSelectOperation = React.useCallback(
    (newOperation: string | null, index: number) => {
      let shouldTrigger = false;
      const newFilters = appliedFilters.map((filter, filterIndex) => {
        if (filterIndex === index) {
          if (newOperation !== filter.operation && filter.value !== undefined) {
            shouldTrigger = true;
          }
          return {
            ...filter,
            operation: newOperation,
            value:
              (filter.operation === FILTER_OPERATIONS.RANGE &&
                newOperation !== FILTER_OPERATIONS.RANGE) ||
              (filter.operation !== FILTER_OPERATIONS.RANGE &&
                newOperation === FILTER_OPERATIONS.RANGE)
                ? undefined
                : filter.value,
          };
        }

        return filter;
      });

      setAppliedFilters(newFilters);

      if (shouldTrigger) {
        applyFilters(newFilters);
      }
    },
    [appliedFilters, applyFilters]
  );

  const onSelectFilter: IFiltrationResult['onSelectFilter'] = React.useCallback(
    (newFilter, index) => {
      const newFilters = appliedFilters.map((filter, filterIndex) => {
        const { columnKey } = filter;
        const fallbackValueCallback = columnKey && fallbackValues?.[columnKey];

        if (!newFilter && filterIndex === index && fallbackValueCallback) {
          const fallbackValue = fallbackValueCallback();
          return {
            ...filter,
            value: fallbackValue,
          };
        }

        return filterIndex === index
          ? {
              ...filter,
              value: newFilter,
            }
          : filter;
      });

      setAppliedFilters(newFilters);
      applyFilters(newFilters);
    },
    [appliedFilters, applyFilters, fallbackValues]
  );

  const addNewFilter = React.useCallback(() => {
    setAppliedFilters((state) => [...state, {}]);
    lastAction.current = 'add';
  }, []);

  const removeFilter = React.useCallback(
    (index: number) => {
      const [firstFilter] = appliedFilters;
      let shouldTrigger =
        appliedFilters.length === 1 &&
        firstFilter.value !== undefined &&
        firstFilter.value !== '';

      let newFilters = appliedFilters.reduce<IAppliedFilter[]>(
        (prev, item, filterIndex) => {
          const { value, columnKey, operation } = item;

          if (value !== undefined && value !== '') {
            shouldTrigger = true;
          }

          const fallbackValueCallback = columnKey && fallbackValues?.[columnKey];

          if (filterIndex === index && fallbackValueCallback) {
            const fallbackValue = fallbackValueCallback();
            prev.push({ columnKey, operation, value: fallbackValue });
          }

          if (filterIndex !== index) {
            prev.push(item);
          }

          return prev;
        },
        []
      );

      newFilters = newFilters.length ? newFilters : [{}];

      setAppliedFilters(newFilters);
      lastAction.current = 'remove';

      if (shouldTrigger) {
        applyFilters(newFilters);
      }
    },
    [appliedFilters, applyFilters, fallbackValues]
  );

  return {
    appliedFilters,
    onSelectColumn,
    onSelectFilter,
    onSelectOperation,
    addNewFilter,
    removeFilter,
    lastAction: lastAction.current,
    setAppliedFilters,
    columnsOptions,
  };
};
