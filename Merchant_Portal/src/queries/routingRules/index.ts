import { useTranslation } from 'react-i18next';
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
  UseQueryResult,
} from 'react-query';

import { NOTIF_TYPES } from '@private/notifications';
import { AxiosResponse } from 'axios';

import api from 'api';
import { ROUTING_RULESET_KEYS } from 'api/routingRuleset/constants';
import { IRoutingRuleset, IRulesetsGroupEdit } from 'api/routingRuleset/types';
import { STATUSES } from 'constants/common';
import { getAllEntities } from 'queries/utils';
import { IRoutingRulesetForm } from 'routes/pages/AuthorizedStack/TrafficManagement/RoutingRuleset/Form/utils/types';
import { notificationService } from 'utils/notificationService';
import { IAllPageFilters, ICreatedGist, IPageType, QueryError } from 'utils/types';

export const useGetAllRoutingRules = (
  pageFilters: IAllPageFilters
): UseQueryResult<IPageType<IRoutingRuleset>> =>
  getAllEntities<IRoutingRuleset>({
    pageFilters,
    queryKey: ROUTING_RULESET_KEYS.ALL,
    getAllEntitiesFunc: api.routingRuleset.getAllRoutingRuleset,
  });

export const useCreateRoutingRuleset = (): UseMutationResult<
  ICreatedGist,
  QueryError,
  IRoutingRulesetForm,
  { ntfID: string }
> => {
  const { t } = useTranslation();

  return useMutation(api.routingRuleset.createRoutingRuleset, {
    retry: 1,
    onMutate: () => {
      const ntfID = notificationService.show({
        title: t('notifications.loadingTitle'),
        message: t('routingRuleset.form.notifications.create.loading'),
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
              : t('routingRuleset.form.notifications.create.error')),
          updateId: context?.ntfID,
        });
      } else {
        notificationService.remove(context?.ntfID || '');
      }
    },
    onSuccess: (response, _, context) => {
      notificationService.show({
        type: NOTIF_TYPES.SUCCESS,
        title: t('notifications.successTitle'),
        message: t('routingRuleset.form.notifications.create.success'),
        updateId: context?.ntfID,
      });
    },
  });
};

type IRoutingRulesetGroupResult = UseMutationResult<
  AxiosResponse,
  QueryError,
  IRulesetsGroupEdit
>;

export const useRoutingRulesetGroupEdit = (): IRoutingRulesetGroupResult => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  return useMutation(api.routingRuleset.groupEdit, {
    retry: 1,
    onError: (error: QueryError) => {
      notificationService.show({
        type: NOTIF_TYPES.ERROR,
        title: t('notifications.errorTitle'),
        message:
          error?.response?.data?.message ||
          t('routingRuleset.groupEdit.notifications.error'),
      });
    },
    onSuccess: (_, { filters }) => {
      if (filters.page !== undefined) {
        queryClient.invalidateQueries([ROUTING_RULESET_KEYS.ALL, filters.page]);
        queryClient.invalidateQueries([ROUTING_RULESET_KEYS.ALL, filters.page + 1]);
      }
      notificationService.show({
        type: NOTIF_TYPES.SUCCESS,
        title: t('notifications.successTitle'),
        message: t('routingRuleset.groupEdit.notifications.success'),
      });
    },
  });
};
