import axiosInstance from 'api/base';
import { normalizePageData } from 'utils/commonNormalizer';
import { normalizeSearchFiltersPayload } from 'utils/filters';
import { prepareFormData } from 'utils/form';
import { IAllPageFilters, IPageType, TObject } from 'utils/types';

import { normalizeCashierLimit } from './normalizers';
import { ICashierLimit, IEditLimitPayload, ILimitForm } from './types';

const cashierLimitsApi = {
  async getAllCashierLimits(filters: IAllPageFilters): Promise<IPageType<ICashierLimit>> {
    const normalizedFilter = normalizeSearchFiltersPayload(filters);

    const response = await axiosInstance.get('cashier-page-limits', {
      params: normalizedFilter,
    });

    return normalizePageData<TObject, ICashierLimit>(
      response.data,
      normalizeCashierLimit
    );
  },

  async getLimit(id: string): Promise<ICashierLimit> {
    const response = await axiosInstance.get(`cashier-page-limits/${id}`);

    return normalizeCashierLimit(response.data);
  },

  async createLimit(payload: ILimitForm): Promise<ICashierLimit> {
    const normalizedPayload = prepareFormData(payload);
    const result = await axiosInstance.post(`cashier-page-limits`, normalizedPayload);

    return normalizeCashierLimit(result.data);
  },

  async editLimit({ id, payload }: IEditLimitPayload): Promise<ICashierLimit> {
    const normalizedPayload = prepareFormData(payload);
    const result = await axiosInstance.put(
      `cashier-page-limits/${id}`,
      normalizedPayload
    );

    return normalizeCashierLimit(result.data);
  },
};

export default cashierLimitsApi;
