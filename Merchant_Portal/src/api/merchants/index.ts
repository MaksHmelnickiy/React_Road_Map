import { ISelectOption } from '@private/components';

import axiosInstance from 'api/base';
import { normalizePageData } from 'utils/commonNormalizer';
import { normalizeSearchFiltersPayload } from 'utils/filters';
import { IAllPageFilters, IPageType, TObject } from 'utils/types';

import {
  normalizeMerchant,
  normalizeMerchantDetails,
  normalizeMerchantsNames,
  normalizeMerchantsSelectScope,
  normalizeMerchantsTreeScope,
  normalizeNames,
} from './normalizers';
import { IMerchant, IMerchantDetails } from './types';

const merchantsAPI = {
  async getAllMerchants(filters: IAllPageFilters): Promise<IPageType<IMerchant>> {
    const normalizedFilter = normalizeSearchFiltersPayload(filters);

    const response = await axiosInstance.get('merchants/terminals', {
      params: normalizedFilter,
    });
    return normalizePageData<TObject, IMerchant>(response.data, normalizeMerchant);
  },

  async getMerchant(id: number | string): Promise<IMerchantDetails> {
    const response = await axiosInstance.get(`merchants/terminals/${id}`);

    return normalizeMerchantDetails(response.data);
  },

  async getMerchantNames(): Promise<ISelectOption[]> {
    const response = await axiosInstance.get('merchants/terminals/names');

    return normalizeMerchantsNames(response.data);
  },

  async getMerchantsScope<T>(isTree?: boolean): Promise<T> {
    const response = await axiosInstance.get('merchants/scope');

    if (isTree) {
      const scope = response.data?.listMerchantAndMerchantTerminalNames?.map(
        normalizeMerchantsTreeScope
      );

      return scope || [];
    }

    return normalizeMerchantsSelectScope(
      response.data?.listMerchantAndMerchantTerminalNames
    ) as T;
  },

  // TODO this is mock. finish it
  async getMerchantRoutingRulesets(id: number): Promise<ISelectOption[]> {
    const response = await axiosInstance.get(
      `merchants/terminals/${id}/routing-rulesets`
    );

    return response?.data?.map(normalizeNames) || [];
  },

  // TODO this is mock. finish it
  async getMerchantCashierPaymentMethods(id: number): Promise<string[]> {
    const response = await axiosInstance.get(
      `merchants/terminals/${id}/cashier-payment-methods`
    );

    return response?.data || [];
  },

  // TODO this is mock. finish it
  async getMerchantCountryGroups(id: number): Promise<ISelectOption[]> {
    const response = await axiosInstance.get(`merchants/terminals/${id}/country-groups`);

    return response?.data?.map(normalizeNames) || [];
  },
};

export default merchantsAPI;
