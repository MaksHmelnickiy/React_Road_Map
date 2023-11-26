import React from 'react';
import { useQuery, UseQueryResult } from 'react-query';

import api from 'api';
import { TERMINAL_KEYS } from 'api/terminals/constants';
import { IPspTerminal } from 'api/terminals/types';
import { getAllEntities } from 'queries/utils';
import { IAllPageFilters, IGetAllEntitiesConfig, IPageType } from 'utils/types';

export const useGetAllTerminals = (
  pageFilters: IAllPageFilters,
  config?: IGetAllEntitiesConfig
): UseQueryResult<IPageType<IPspTerminal>> =>
  getAllEntities<IPspTerminal>({
    pageFilters,
    queryKey: TERMINAL_KEYS.ALL,
    getAllEntitiesFunc: () => api.terminals.getAllTerminals(pageFilters),
    config,
  });

export const useGetTerminal = (id?: string): UseQueryResult<IPspTerminal> => {
  const getTerminal = React.useCallback(
    () => (id ? api.terminals.getTerminal(id) : null),
    [id]
  );

  return useQuery([TERMINAL_KEYS.TERMINAL, id], getTerminal);
};
