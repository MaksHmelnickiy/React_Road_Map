import { ISelectOption, TSelectValues } from '@private/components';

import { IFilterSetting } from 'utils/types';

export const DICTIONARY_PREFIX = 'Dictionary';

export interface INumberRange {
  min: string;
  max: string;
}

export type IAppliedFilterValue = TSelectValues | INumberRange;

export interface IAppliedFilter {
  columnKey?: string | null;
  operation?: string | null;
  ignoreCase?: boolean;
  value?: IAppliedFilterValue;
}

export interface IFilter {
  operation?: string | null;
  value?: TSelectValues | INumberRange;
}

export type ISearchFilters = Record<string, IFilter>;

export type TColumnFilters = Record<string, Omit<IFilterSetting, 'sortable'>>;

export interface IFiltrationResult {
  appliedFilters: IAppliedFilter[];
  columnsOptions: ISelectOption[];
  onSelectColumn: (newValue: string | null, index: number) => void;
  onSelectFilter: (
    newValue: TSelectValues | INumberRange | undefined,
    index: number
  ) => void;
  onSelectOperation: (operation: string | null, index: number) => void;
  setAppliedFilters: (filters: IAppliedFilter[]) => void;
  addNewFilter: () => void;
  removeFilter: (index: number) => void;
  lastAction: 'add' | 'remove';
}

export type IFallbackValues = Record<string, () => IAppliedFilterValue>;

export enum FILTER_OPERATIONS {
  MORE_OR_EQUALS = '>',
  LESS_OR_EQUALS = '<',
  EQUALS = ':',
  NOT_EQUALS = '!',
  LIKE = '~',
  NOT_LIKE = '!~',
  CONTAINS = '&',
  RANGE = '<>',
}

export const INTL_MAPPING = {
  [FILTER_OPERATIONS.MORE_OR_EQUALS]: 'common.filters.moreOrEquals',
  [FILTER_OPERATIONS.LESS_OR_EQUALS]: 'common.filters.lessOrEquals',
  [FILTER_OPERATIONS.EQUALS]: 'common.filters.equals',
  [FILTER_OPERATIONS.NOT_EQUALS]: 'common.filters.notEquals',
  [FILTER_OPERATIONS.LIKE]: 'common.filters.like',
  [FILTER_OPERATIONS.NOT_LIKE]: 'common.filters.notLike',
  [FILTER_OPERATIONS.RANGE]: 'common.filters.range',
  [FILTER_OPERATIONS.CONTAINS]: 'common.filters.contains',
};
