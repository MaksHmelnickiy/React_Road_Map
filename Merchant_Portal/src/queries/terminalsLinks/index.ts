import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from 'react-query';

import { ISelectOption } from '@private/components';
import { NOTIF_TYPES } from '@private/notifications';
import { AxiosResponse } from 'axios';

import api from 'api';
import { TERMINALS_LINKS_KEYS } from 'api/terminalsLinks/constants';
import {
  IGetTerminalLinksPayload,
  IGroupEditPayload,
  ITerminalGroup,
  ITerminalGroupLimits,
  ITerminalLink,
  ITerminalLinkLimit,
  ITerminalLinkPayload,
  ITerminalLinksGroups,
  ITerminalLinksLimits,
  ITerminalLinksParameters,
  ITerminalsLinks,
} from 'api/terminalsLinks/types';
import { STATUSES } from 'constants/common';
import { getAllEntities } from 'queries/utils';
import { notificationService } from 'utils/notificationService';
import { IAllPageFilters, IPageType, QueryError } from 'utils/types';

export const useGetAllTerminalsLinks = (
  pageFilters: IAllPageFilters
): UseQueryResult<IPageType<ITerminalsLinks>> =>
  getAllEntities<ITerminalsLinks>({
    pageFilters,
    queryKey: TERMINALS_LINKS_KEYS.ALL,
    getAllEntitiesFunc: api.terminalsLinks.getAllTerminalsLinks,
  });

export const useCreateTerminalLink = (): UseMutationResult<
  ITerminalLink,
  QueryError,
  ITerminalLinkPayload,
  { ntfID: string }
> => {
  const { t } = useTranslation();

  return useMutation(api.terminalsLinks.createTerminalLink, {
    retry: 1,
    onMutate: () => {
      const ntfID = notificationService.show({
        title: t('notifications.loadingTitle'),
        message: t('terminalLink.form.notifications.create.loading'),
        type: NOTIF_TYPES.LOADING,
      });

      return { ntfID };
    },
    onError: (error: QueryError, _variables, context) => {
      const isSavingError = error?.response?.status === STATUSES.INVALID_DATA;
      const errorsExists = Object.keys(error?.response?.data?.errors || {}).length;

      if (errorsExists) {
        notificationService.show({
          type: NOTIF_TYPES.ERROR,
          title: t('notifications.errorTitle'),
          message:
            error?.response?.data?.message ||
            (isSavingError
              ? t('notifications.invalidData')
              : t('terminalLink.form.notifications.create.error')),
          updateId: context?.ntfID,
        });
      } else {
        notificationService.remove(context?.ntfID || '');
      }
    },
    onSuccess: (response, _data, context) => {
      notificationService.show({
        type: NOTIF_TYPES.SUCCESS,
        title: t('notifications.successTitle'),
        message: t('terminalLink.form.notifications.create.success'),
        updateId: context?.ntfID,
      });
    },
  });
};

export const useGetAllTerminalLinksLimits = (
  pageFilters: IAllPageFilters
): UseQueryResult<IPageType<ITerminalLinksLimits>> =>
  getAllEntities<ITerminalLinksLimits>({
    pageFilters,
    queryKey: TERMINALS_LINKS_KEYS.TERMINAL_LINKS_LIMITS,
    getAllEntitiesFunc: api.terminalsLinks.getAllTerminalLinksLimits,
  });

export const useGetAllTerminalLinksParameters = (
  pageFilters: IAllPageFilters
): UseQueryResult<IPageType<ITerminalLinksParameters>> =>
  getAllEntities<ITerminalLinksParameters>({
    pageFilters,
    queryKey: TERMINALS_LINKS_KEYS.TERMINAL_LINKS_PARAMETERS,
    getAllEntitiesFunc: api.terminalsLinks.getAllTerminalLinksParameters,
  });

export const useGetTerminalLink = (id?: string): UseQueryResult<ITerminalLink> => {
  const getTerminalLink = React.useCallback(
    () => (id ? api.terminalsLinks.getTerminalLink(id) : null),
    [id]
  );

  return useQuery([TERMINALS_LINKS_KEYS.TERMINAL_LINK, id], getTerminalLink);
};

export const useGetTerminalLinkLimits = (
  pageFilters: IAllPageFilters,
  id?: string
): UseQueryResult<IPageType<ITerminalLinkLimit>> =>
  getAllEntities<ITerminalLinkLimit>({
    pageFilters,
    queryKey: TERMINALS_LINKS_KEYS.TERMINAL_LINK_LIMITS,
    getAllEntitiesFunc: () => api.terminalsLinks.getTerminalLinkLimits(pageFilters, id),
  });

export const useGetTerminalLinksList = (
  payload: IGetTerminalLinksPayload
): UseQueryResult<ISelectOption[]> => {
  const { merchantTerminalId, paymentMethod } = payload;

  const getTerminalLinkList = React.useCallback(
    () =>
      payload.merchantTerminalId
        ? api.terminalsLinks.getTerminalLinksList(payload)
        : null,
    [payload]
  );

  return useQuery(
    [TERMINALS_LINKS_KEYS.TERMINAL_LINK_LIST, merchantTerminalId, paymentMethod],
    getTerminalLinkList
  );
};

type ITerminalLinkGroupResult = UseMutationResult<
  AxiosResponse,
  QueryError,
  IGroupEditPayload
>;

export const useTerminalsLinksGroupEdit = (): ITerminalLinkGroupResult => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  return useMutation(api.terminalsLinks.groupEdit, {
    retry: 1,
    onError: (error: QueryError) => {
      notificationService.show({
        type: NOTIF_TYPES.ERROR,
        title: t('notifications.errorTitle'),
        message:
          error?.response?.data?.message ||
          t('terminalsLinks.groupEdit.notifications.error'),
      });
    },
    onSuccess: (_, { filters }) => {
      if (filters.page !== undefined) {
        queryClient.invalidateQueries([TERMINALS_LINKS_KEYS.ALL, filters.page]);
        queryClient.invalidateQueries([TERMINALS_LINKS_KEYS.ALL, filters.page + 1]);
      }

      notificationService.show({
        type: NOTIF_TYPES.SUCCESS,
        title: t('notifications.successTitle'),
        message: t('terminalsLinks.groupEdit.notifications.success'),
      });
    },
  });
};

export const useGetTerminalLinkGroup = (id: string): UseQueryResult<ITerminalGroup> => {
  const getTerminalLinkGroup = React.useCallback(
    () => (id ? api.terminalsLinks.getTLGroup(id) : null),
    [id]
  );

  return useQuery([TERMINALS_LINKS_KEYS.TERMINAL_LINKS_GROUP, id], getTerminalLinkGroup);
};

export const useGetTerminalLinkGroupLimits = (
  pageFilters: IAllPageFilters,
  id: string
): UseQueryResult<IPageType<ITerminalGroupLimits>> =>
  getAllEntities<ITerminalGroupLimits>({
    pageFilters,
    queryKey: TERMINALS_LINKS_KEYS.TERMINAL_LINKS_GROUP_LIMITS,
    getAllEntitiesFunc: () => api.terminalsLinks.getAllTLLimits(pageFilters, id),
  });

export const useGetAllTerminalLinksGroups = (
  pageFilters: IAllPageFilters
): UseQueryResult<IPageType<ITerminalLinksGroups>> =>
  getAllEntities<ITerminalLinksGroups>({
    pageFilters,
    queryKey: TERMINALS_LINKS_KEYS.TERMINAL_LINKS_GROUPS_LIST,
    getAllEntitiesFunc: api.terminalsLinks.getAllTerminalLinksGroups,
  });
