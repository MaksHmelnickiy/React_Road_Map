import React from 'react';
import { useQuery, useQueryClient, UseQueryResult } from 'react-query';

import { useUpdateEffect } from '@private/hooks';

import api from 'api';
import { PSP_KEYS } from 'api/psp/contants';
import { IPsp, IPspDetails } from 'api/psp/types';
import { getAllEntities } from 'queries/utils';
import { IAllPageFilters, IGist, IPageType } from 'utils/types';

export const useGetAllPsp = (
  pageFilters: IAllPageFilters
): UseQueryResult<IPageType<IPsp>> =>
  getAllEntities<IPsp>({
    pageFilters,
    queryKey: PSP_KEYS.ALL,
    getAllEntitiesFunc: api.psp.getAllPsp,
  });

export const useGetPsp = (id?: string): UseQueryResult<IPspDetails> => {
  const getTransactionCard = React.useCallback(
    () => (id ? api.psp.getPsp(id) : null),
    [id]
  );

  return useQuery([PSP_KEYS.PSP, id], getTransactionCard);
};

interface IPspSearchAutocomplete {
  searchPsp: (search: string) => void;
  query: UseQueryResult<IGist[] | null>;
}

export const usePspSearchAutocomplete = (): IPspSearchAutocomplete => {
  const queryClient = useQueryClient();
  const [search, setSearch] = React.useState('');

  const getPsp = React.useCallback(
    () => (search ? api.psp.searchPsp(search) : null),
    [search]
  );

  const query = useQuery(PSP_KEYS.PSP_SEARCH, getPsp, { enabled: false });

  const searchPsp = React.useCallback((text: string) => {
    if (text.length < 3) {
      return;
    }
    setSearch(text);
  }, []);

  useUpdateEffect(() => {
    query.refetch();
  }, [search]);

  React.useEffect(() => () => queryClient.removeQueries(PSP_KEYS.PSP_SEARCH), []);

  return { searchPsp, query };
};
