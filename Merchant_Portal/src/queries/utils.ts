import { useQuery, useQueryClient, UseQueryResult } from 'react-query';

import { useUpdateEffect } from '@private/hooks';

import { IAllPageFilters, IGetAllEntitiesConfig, IPageType } from 'utils/types';

export const useQueryData = <T>(queryKey: string | string[]): T | undefined => {
  const queryClient = useQueryClient();

  const { data } = useQuery<T | undefined>(
    queryKey,
    () => queryClient.getQueryData(queryKey),
    { enabled: false }
  );
  return data;
};

interface IUseGetAllEntities<T> {
  queryKey: string;
  pageFilters: IAllPageFilters;
  getAllEntitiesFunc: (filters: IAllPageFilters) => Promise<IPageType<T>>;
  config?: IGetAllEntitiesConfig;
  isRefetch?: boolean;
}

export const getAllEntities = <T>({
  pageFilters,
  queryKey,
  getAllEntitiesFunc,
  config = { enabled: true },
  isRefetch = true,
}: IUseGetAllEntities<T>): UseQueryResult<IPageType<T>> => {
  const queryClient = useQueryClient();

  const { page = 0 } = pageFilters;

  const getFunc =
    (pageOffset = 0) =>
    () => {
      return getAllEntitiesFunc({
        ...pageFilters,
        page: page + pageOffset,
      });
    };

  const query = useQuery([queryKey, page], getFunc(), {
    ...config,
    keepPreviousData: true,
    onSuccess: (data) => {
      if (!data.last) {
        const nextPageData = queryClient.getQueryData([queryKey, page + 1]);
        if (nextPageData) {
          queryClient.resetQueries([queryKey, page + 1]);
        }
        queryClient.prefetchQuery([queryKey, page + 1], getFunc(1));
      }
    },
  });

  useUpdateEffect(() => {
    if (isRefetch && config.enabled) {
      query.refetch();
      queryClient.removeQueries([queryKey, page - 1]);
    }
  }, [pageFilters]);

  return query;
};
