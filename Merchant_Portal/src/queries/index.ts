import { QueryClient } from 'react-query';

import { AxiosError } from 'axios';

import { STATUSES } from 'constants/common';

const MAX_RETRY_COUNT = 3;

interface IRequestError {
  response?: {
    status?: STATUSES;
  };
}

export const queryClient: InstanceType<typeof QueryClient> = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: (error) =>
        (error as IRequestError)?.response?.status !== STATUSES.AUTHENTICATION,
      staleTime: 1 * 1000 * 60,
      cacheTime: 20 * 60 * 1000,
      refetchOnWindowFocus: false,
      retry: (failureCount, error) => {
        const isMaxRetry = failureCount === MAX_RETRY_COUNT;
        const isAuthorizationError =
          (error as IRequestError)?.response?.status === STATUSES.AUTHENTICATION;
        return !isAuthorizationError && !isMaxRetry;
      },
    },
    mutations: {
      useErrorBoundary: (err) => {
        const error = err as AxiosError<{
          errors: Record<string, string>;
          fieldMessages: Record<string, string>;
        }>;

        const errorsList =
          error.response?.data?.errors || error.response?.data?.fieldMessages || {};

        const isAuth =
          (error as IRequestError)?.response?.status === STATUSES.AUTHENTICATION;

        if (isAuth) {
          return false;
        }

        return !Object.keys(errorsList).length;
      },
    },
  },
});
