import { AxiosRequestConfig } from 'axios';

import axiosInstance, { axiosAuthInstance } from 'api/base';
import { queryClient as appQueryClient } from 'queries';
import { notificationService } from 'utils/notificationService';

import { SESSION_KEYS } from './constants';

export const updateRequestHeaders = (value?: string): void => {
  axiosInstance.defaults.headers.common.Authorization = value ? `Bearer ${value}` : '';
  axiosAuthInstance.defaults.headers.common.Authorization = value
    ? `Bearer ${value}`
    : '';
};

export const updateConfigHeader = (
  config: AxiosRequestConfig,
  token: string
): AxiosRequestConfig => {
  return {
    ...config,
    headers: { ...config.headers, Authorization: `Bearer ${token}` },
  };
};

export const logoutWithQuery = (queryClient: typeof appQueryClient): void => {
  queryClient.cancelQueries();
  queryClient.cancelMutations();
  queryClient.removeQueries({
    predicate: (query) => query.queryKey !== SESSION_KEYS.IS_INITILIZED,
  });
  queryClient.setQueryData(SESSION_KEYS.IS_LOGGED_IN, false);
  notificationService.removeAll();
};
