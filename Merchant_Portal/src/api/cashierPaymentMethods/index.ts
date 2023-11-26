import { normalizePageData } from 'utils/commonNormalizer';
import { normalizeSearchFiltersPayload } from 'utils/filters';
import { prepareFormData } from 'utils/form';
import { IAllPageFilters, IPageType, TObject } from 'utils/types';

import axiosInstance from '../base';

import { normalizeCashierPaymentMethod } from './normalizers';
import {
  ICashierPaymentMethod,
  IPaymentMethodPayload,
  IUpdatePaymentMethod,
} from './types';

const cashierPaymentMethodsAPI = {
  async getAllCashierPaymentMethods(
    filters: IAllPageFilters
  ): Promise<IPageType<ICashierPaymentMethod>> {
    const normalizedFilter = normalizeSearchFiltersPayload(filters);

    const response = await axiosInstance.get('cashier-payment-methods', {
      params: normalizedFilter,
    });
    return normalizePageData<TObject, ICashierPaymentMethod>(
      response.data,
      normalizeCashierPaymentMethod
    );
  },

  async getPaymentMethod(id: string): Promise<ICashierPaymentMethod> {
    const result = await axiosInstance.get(`cashier-payment-methods/${id}`);

    return normalizeCashierPaymentMethod(result.data);
  },

  async createPaymentMethod(
    payload: IPaymentMethodPayload
  ): Promise<ICashierPaymentMethod> {
    const normalizedPayload = prepareFormData(payload);
    const result = await axiosInstance.post(`cashier-payment-methods`, normalizedPayload);

    return normalizeCashierPaymentMethod(result.data);
  },

  async updatePaymentMethod({
    id,
    payload,
  }: IUpdatePaymentMethod): Promise<ICashierPaymentMethod> {
    const normalizedPayload = prepareFormData(payload);
    const result = await axiosInstance.put(
      `cashier-payment-methods/${id}`,
      normalizedPayload
    );

    return normalizeCashierPaymentMethod(result.data);
  },
};

export default cashierPaymentMethodsAPI;
