import { useQuery } from 'react-query';

import api from 'api';
import { DATA_KEYS } from 'api/data/constants';
import { IRolesParams } from 'api/data/types';

export const useGetDictionaries = () => {
  return useQuery(DATA_KEYS.DICTIONARIES, api.data.getDictionaries, {
    cacheTime: Infinity,
    staleTime: 60 * 60 * 1000,
  });
};

export const useGetRoles = (params?: IRolesParams) => {
  const getRoles = () => api.data.getRoles(params);

  return useQuery(DATA_KEYS.ROLES, getRoles);
};
