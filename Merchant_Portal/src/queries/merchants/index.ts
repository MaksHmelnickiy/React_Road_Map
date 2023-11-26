import React from 'react';
import { useQuery, UseQueryResult } from 'react-query';

import { ISelectOption } from '@private/components';

import api from 'api';
import { MERCHANTS_KEYS } from 'api/merchants/constants';
import { IMerchant, IMerchantDetails, IMerchantsScope } from 'api/merchants/types';
import { getAllEntities } from 'queries/utils';
import { IAllPageFilters, INullable, IPageType } from 'utils/types';

export const useGetMerchants = (
  pageFilters: IAllPageFilters
): UseQueryResult<IPageType<IMerchant>> =>
  getAllEntities<IMerchant>({
    pageFilters,
    queryKey: MERCHANTS_KEYS.ALL,
    getAllEntitiesFunc: api.merchants.getAllMerchants,
  });

export const useGetMerchant = (
  id?: INullable<number | string>
): UseQueryResult<IMerchantDetails> => {
  const getMerchantDetails = React.useCallback(
    () => (id ? api.merchants.getMerchant(id) : null),
    [id]
  );

  return useQuery([MERCHANTS_KEYS.MERCHANT, id], getMerchantDetails);
};

export const useGetMerchantsNames = (): UseQueryResult<ISelectOption[]> => {
  return useQuery(MERCHANTS_KEYS.MERCHANTS_NAMES, api.merchants.getMerchantNames);
};

export const useGetMerchantsScope = <T = IMerchantsScope>(
  isTree?: boolean
): UseQueryResult<T> => {
  const getScope = React.useCallback(
    () => api.merchants.getMerchantsScope<T>(isTree),
    [isTree]
  );

  return useQuery(MERCHANTS_KEYS.MERCHANTS_SCOPE, getScope);
};
// TODO finish
export const useGetMerchantRoutingRulesets = (
  id?: INullable<number>
): UseQueryResult<ISelectOption[]> => {
  const getRulesets = React.useCallback(
    () => (id ? api.merchants.getMerchantRoutingRulesets(id) : null),
    [id]
  );

  return useQuery([MERCHANTS_KEYS.MERCHANT_ROUTING_RULESETS, id], getRulesets);
};
// TODO finish
export const useGetMerchantCashierPaymentMethods = (
  id?: INullable<number>
): UseQueryResult<string[]> => {
  const getPaymentMethods = React.useCallback(
    () => (id ? api.merchants.getMerchantCashierPaymentMethods(id) : null),
    [id]
  );

  return useQuery(
    [MERCHANTS_KEYS.MERCHANT_CASHIER_PAYMENT_METHODS, id],
    getPaymentMethods
  );
};
// TODO finish
export const useGetMerchantCountryGroups = (
  id?: INullable<number>
): UseQueryResult<ISelectOption[]> => {
  const getCountryGroups = React.useCallback(
    () => (id ? api.merchants.getMerchantCountryGroups(id) : null),
    [id]
  );

  return useQuery([MERCHANTS_KEYS.MERCHANT_COUNTRY_GROUPS, id], getCountryGroups);
};
