import { FILTRATION_TYPES } from 'constants/common';
import {
  IFilterSetting,
  IGist,
  IOrdersType,
  IPageType,
  ISortType,
  TObject,
  TSortDirection,
} from 'utils/types';

type IFilterData = TObject & {
  listOperations?: string[];
};

type ISortData = TObject & {
  orders?: IOrdersType[];
};

const normalizeOrder = (order: IOrdersType) => {
  return {
    ascending: !!order?.ascending,
    descending: !!order?.descending,
    direction: (order?.direction as TSortDirection) || 'ASC',
    ignoreCase: !!order?.ignoreCase,
    nullHandling: order?.nullHandling || '',
    property: order?.property || '',
  };
};

const normalizeFilterVariant = (data: IFilterData): IFilterSetting => {
  return {
    listOperations:
      data?.listOperations?.map((operation) => (operation as string) || '') || [],
    sortable: !!data?.sortable,
    type: (data?.type as FILTRATION_TYPES) || '',
    defaultSorting: !!data?.defaultSorting,
    groupEdit: !!data.groupEdit,
  };
};

type ISortingData = Record<string, ISortData>;
type IFiltersData = Record<string, IFilterData>;

const normalizeFilters = (data: IFiltersData): Record<string, IFilterSetting> => {
  const normalizedFilters = Object.entries(data).map(([key, value]) => [
    key,
    normalizeFilterVariant(value),
  ]);

  return Object.fromEntries(normalizedFilters);
};

const normalizeSort = (data: ISortData): ISortType => {
  return {
    empty: !!data?.empty,
    orders: data?.orders?.map(normalizeOrder) || [],
    sorted: !!data?.sorted,
    unsorted: !!data?.unsorted,
  };
};

type TServerData<T> = TObject & {
  content: T[];
  sort: ISortingData;
  filters: IFiltersData;
};

export function normalizePageData<T, U>(
  data: TServerData<T>,
  normalizer: (data: T, index: number, array: T[]) => U
): IPageType<U> {
  return {
    data: data.content?.map(normalizer) || [],
    empty: !!data?.empty,
    filters: normalizeFilters(data?.filters || {}),
    first: !!data?.first,
    last: !!data?.last,
    currentPage: (data.number as number) || 0,
    numberOfElements: (data.numberOfElements as number) || 0,
    size: (data.size as number) || 0,
    sort: normalizeSort(data?.sort || {}),
    totalElements: (data.totalElements as number) || 0,
    totalPages: (data.totalPages as number) || 0,
    hasResults: !!Object.keys(data?.filters || {}).length,
  };
}

export function normalizeCreatedGist(data: TObject) {
  return {
    id: (data.id as number) || 0,
  };
}

export function normalizeGist(data: TObject): IGist {
  return {
    id: (data.id as number) || 0,
    name: (data.name as string) || '',
  };
}

export const normalizeNaming = (text: string) => {
  const modifiedText = text.replaceAll('_', ' ').toLowerCase();
  return modifiedText.charAt(0).toUpperCase() + modifiedText.slice(1);
};
