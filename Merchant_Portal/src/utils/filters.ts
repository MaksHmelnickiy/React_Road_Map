import { isFilterNumberRange } from 'components/FiltersButton/helpers';
import { IAppliedFilter } from 'components/FiltersButton/types';

import { IAllPageFilters } from './types';

export const normalizeSearchFiltersPayload = (
  filters: IAllPageFilters
): Record<string, string> => {
  const normalizedFilters: [string, string][] = [];

  Object.entries(filters).forEach(([key, value]) => {
    if (!value) {
      return;
    }

    // is search object
    if (typeof value === 'object') {
      const normalizedValue = Object.entries<Omit<IAppliedFilter, 'columnKey'>>(value)
        .filter(
          ([_, filterValue]) =>
            filterValue?.value !== undefined && filterValue?.value !== ''
        )
        .map(([columnKey, { operation, value, ignoreCase }]) => {
          if (isFilterNumberRange(value)) {
            if (value?.min && value?.max) {
              return `${columnKey}>${value?.min},${columnKey}<${value?.max}`;
            }
            if (value?.min) {
              return `${columnKey}>${value?.min}`;
            }
            if (value?.max) {
              return `${columnKey}<${value?.max}`;
            }
            return '';
          }
          return `${columnKey}${operation}${value}${
            ignoreCase ? `${operation}ignoreCase` : ''
          }`;
        })
        .join(',');

      if (normalizedValue) {
        return normalizedFilters.push([key, normalizedValue]);
      }
      return;
    }

    normalizedFilters.push([key, value]);
  });

  return Object.fromEntries(normalizedFilters);
};
