import { IColumn } from '@private/data-grid';
import { PROPERTY_TYPES } from '@private/payment';
import { AxiosError } from 'axios';

import { TDateValue } from 'components/Controls/DatePickerInput';
import { IAppliedFilter } from 'components/FiltersButton/types';
import { FILTRATION_TYPES } from 'constants/common';
import { IHsl } from 'utils/themeHelpers';

export { PROPERTY_TYPES };

export type IUseGridDataResult<T> = IColumn<T>[];

export type TObject = Record<string, unknown>;

export interface IGist {
  id: number;
  name: string;
}

export type TPalette = Record<string, Record<string, string> | string>;

export interface IRespError {
  errors: Record<string, string>;
  fieldMessages: Record<string, string>;
  message?: string;
}

export type QueryError = AxiosError<IRespError>;

export type ThemedElement<T = Record<string, unknown>> = T & {
  themePrefix?: string[];
  $themePrefix?: string[];
};

export type TSortDirection = 'ASC' | 'DESC';

export interface IOrdersType {
  ascending: boolean;
  descending: boolean;
  direction: TSortDirection;
  ignoreCase: boolean;
  nullHandling: string;
  property: string;
}

export interface ISortType {
  empty: boolean;
  orders: IOrdersType[];
  sorted: boolean;
  unsorted: boolean;
}

export type TSortCallbackProps = Pick<IOrdersType, 'direction' | 'property'> | null;

export interface IFilterSetting {
  listOperations: string[];
  sortable: boolean;
  type: FILTRATION_TYPES;
  defaultSorting: boolean;
  groupEdit: boolean;
}

export interface IPageType<T> {
  data: T[];
  empty: boolean;
  filters: Record<string, IFilterSetting>;
  first: boolean;
  last: boolean;
  currentPage: number;
  numberOfElements: number;
  size: number;
  sort: ISortType;
  totalElements: number;
  totalPages: number;
  hasResults: boolean;
}

type IDateSearch = TDateValue & {
  operation?: string | null;
};

type ISearchValue = Omit<IAppliedFilter, 'columnKey'> & Partial<IDateSearch>;

export type TSearch = Record<string, ISearchValue | undefined>;

export interface IAllPageFilters {
  size: number;
  page?: number;
  search?: TSearch;
  sort?: IAppliedFilter;
}

export interface IGetAllEntitiesConfig {
  enabled?: boolean;
  refetchInterval?: number;
}

export interface IGradientColor {
  degree: number;
  startColor: string;
  startColorHsl: IHsl;
  startColorPercent: number;
  endColor: string;
  endColorPercent: number;
  endColorHsl: IHsl;
}

export interface IComponentProperty {
  value: string;
  type: PROPERTY_TYPES;
  editable: boolean;
}

export interface ISelectedComponent {
  component: Record<string, IComponentProperty>;
  componentPath: string;
}

export interface ISortingCallback<T> {
  filters?: Record<keyof T, IFilterSetting>;
  sort?: ISortType;
  columns: IColumn<T>[];
  index: number;
  callback?: (config: TSortCallbackProps) => void;
}

export interface ICreatedGist {
  id: number | string;
}

export type INullable<T> = T | null;

export interface IKeyValue<K = string, V = string> {
  key: K;
  value: V;
}
