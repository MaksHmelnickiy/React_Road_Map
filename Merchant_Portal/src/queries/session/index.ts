import React from 'react';
import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from 'react-query';
import { useNavigate } from 'react-router-dom';

import { useModal } from '@private/modals';
import { AxiosRequestConfig } from 'axios';

import api from 'api';
import { IAuthState, ILoginPayload } from 'api/auth/types';
import axiosInstance, { axiosAuthInstance } from 'api/base';
import { STATUSES } from 'constants/common';
import { useAppDispatch, useAppSelector } from 'hooks/storeHooks';
import {
  logoutWithQuery,
  updateConfigHeader,
  updateRequestHeaders,
} from 'queries/session/utils';
import { useQueryData } from 'queries/utils';
import { ROUTES } from 'routes/config/constants';
import { setIsAuthenticated } from 'store/session';
import { sleep } from 'utils/common';

import { SESSION_CONFIG, SESSION_KEYS } from './constants';

type TLogoutResult = () => void;

const useLogout = (): TLogoutResult => {
  const navigate = useNavigate();
  const { closeModal } = useModal();
  const client = useQueryClient();
  const dispatch = useAppDispatch();

  const { mutateAsync: logout } = useMutation(api.auth.logout, {
    retry: 0,
    useErrorBoundary: false,
    onSettled: () => {
      updateRequestHeaders();
      logoutWithQuery(client);
      dispatch(setIsAuthenticated(false));
      closeModal();
      navigate(ROUTES.SIGN_IN.PATH);
    },
  });

  return logout;
};

interface IUseAuthenticationResult {
  isAuthorized: boolean;
  isInitialized: boolean;
  isLoadingLogin: boolean;
  loginError: UseQueryResult<IAuthState>['error'];
  login: UseMutationResult<IAuthState, unknown, ILoginPayload>['mutate'];
  logout: () => void;
}

export const useAuthentication = (): IUseAuthenticationResult => {
  const client = useQueryClient();
  const dispatch = useAppDispatch();
  const session = useQueryData<IAuthState>(SESSION_KEYS.SESSION);
  const isInitialized = useQueryData<boolean>(SESSION_KEYS.IS_INITILIZED);
  const logout = useLogout();

  const {
    mutate: login,
    error: loginError,
    isLoading: isLoadingLogin,
  } = useMutation<IAuthState, unknown, ILoginPayload>(api.auth.signIn, {
    retry: 0,
    onSuccess: (response) => {
      updateRequestHeaders(response.token);
      dispatch(setIsAuthenticated(true));
      client.setQueryData(SESSION_KEYS.SESSION, response);
    },
  });

  return {
    login,
    loginError,
    isLoadingLogin,
    logout,
    isAuthorized: !!session?.token,
    isInitialized: !!isInitialized,
  };
};

export const useSessionRecover = (): void => {
  const isRefreshing = React.useRef<boolean>(false);
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  const logout = useLogout();
  const client = useQueryClient();

  const { isAuthenticated } = useAppSelector((state) => state.session);

  const session = useQueryData<IAuthState>(SESSION_KEYS.SESSION);

  const expiresIn = session?.expiration ? session.expiration * 1000 : 0; // conversion of expiration from seconds to milliseconds

  const expiresInWithFallback = expiresIn || SESSION_CONFIG.EXPIRATION_OFFSET;

  // time in milliseconds when token is valid before next refetch
  const refetchInterval =
    expiresInWithFallback > SESSION_CONFIG.EXPIRATION_OFFSET
      ? expiresInWithFallback - SESSION_CONFIG.EXPIRATION_OFFSET
      : SESSION_CONFIG.EXPIRATION_OFFSET;

  const { refetch: doRefreshToken } = useQuery<IAuthState>(
    SESSION_KEYS.SESSION,
    api.auth.refreshToken,
    {
      enabled: isAuthenticated,
      retry: isAuthenticated
        ? SESSION_CONFIG.RETRIES_LOGGED_IN
        : SESSION_CONFIG.RETRIES_LOGGED_OUT,
      cacheTime: Infinity,
      staleTime: Infinity,
      refetchInterval, // example: refetch after each (token expiration time ms - 30000 ms)
      refetchIntervalInBackground: true,
      useErrorBoundary: false,
      onSuccess: (response) => {
        queryClient.setQueryData(SESSION_KEYS.IS_LOGGED_IN, true);
        dispatch(setIsAuthenticated(true));
        updateRequestHeaders(response.token);
        client.setQueryData(SESSION_KEYS.SESSION, response);
      },
      onError: logout,
      onSettled: () => {
        const isAlreadyInitialized = queryClient.getQueryData(SESSION_KEYS.IS_INITILIZED);
        if (!isAlreadyInitialized) {
          queryClient.setQueryData(SESSION_KEYS.IS_INITILIZED, true);
        }
        isRefreshing.current = false;
      },
    }
  );

  const requestInterceptor = async (config: AxiosRequestConfig) => {
    if (config.url?.includes('refresh') || config.url?.includes('logout')) {
      isRefreshing.current = true;
      return config;
    }

    const session = queryClient.getQueryData<IAuthState>(SESSION_KEYS.SESSION);

    if (!session) {
      return config;
    }

    const expiresIn = session.expirationDate; // expiration date in ms

    const isTokenValid = expiresIn > Date.now() + SESSION_CONFIG.EXPIRATION_OFFSET;

    if (isTokenValid) {
      return config;
    }

    if (!isRefreshing.current) {
      isRefreshing.current = true;
      const { data } = await doRefreshToken();
      return updateConfigHeader(config, data?.token || '');
    }

    let ticks = 0;
    while (
      isRefreshing.current &&
      ticks < SESSION_CONFIG.PENDING_TIMEOUT / SESSION_CONFIG.PENDING_TICKER_STEP
    ) {
      await sleep(SESSION_CONFIG.PENDING_TICKER_STEP);
      ticks += 1;
    }

    const updatedSession = queryClient.getQueryData<IAuthState>(SESSION_KEYS.SESSION);
    return updateConfigHeader(config, updatedSession?.token || '');
  };

  // eslint-disable-next-line
  const errorInterceptor = async (error: any) => {
    const isTokenFailed = error?.response?.status === STATUSES.AUTHENTICATION;
    const isRefreshRequest = !!error?.response?.config?.url?.includes('refresh');

    if (isRefreshRequest || isRefreshing.current) {
      return Promise.reject(error);
    }

    if (isTokenFailed) {
      logout();
      return Promise.reject(error);
    }

    return Promise.reject(error);
  };

  React.useEffect(() => {
    if (!isAuthenticated) {
      const isAlreadyInitialized = queryClient.getQueryData(SESSION_KEYS.IS_INITILIZED);
      if (!isAlreadyInitialized) {
        queryClient.setQueryData(SESSION_KEYS.IS_INITILIZED, true);
      }
    }

    const requestBaseInterceptor =
      axiosInstance.interceptors.request.use(requestInterceptor);
    const responseBaseInterceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      errorInterceptor
    );

    const requestAuthInterceptor =
      axiosAuthInstance.interceptors.request.use(requestInterceptor);
    const responseAuthInterceptor = axiosAuthInstance.interceptors.response.use(
      (response) => response,
      errorInterceptor
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestBaseInterceptor);
      axiosInstance.interceptors.response.eject(responseBaseInterceptor);

      axiosAuthInstance.interceptors.request.eject(requestAuthInterceptor);
      axiosAuthInstance.interceptors.response.eject(responseAuthInterceptor);
    };
  }, []);
};
