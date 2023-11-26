import axiosInstance from 'api/base';
import { normalizePageData } from 'utils/commonNormalizer';
import { normalizeSearchFiltersPayload } from 'utils/filters';
import { IAllPageFilters, IPageType } from 'utils/types';

import { normalizeCashierSettings } from './normalizers';
import { ICashierSettings, ICashierSettingsData } from './types';

const cashierSettingsApi = {
  async getAllCashierSettings(
    filters: IAllPageFilters
  ): Promise<IPageType<ICashierSettings>> {
    const normalizedFilter = normalizeSearchFiltersPayload(filters);

    const response = await axiosInstance.get('cashier-settings', {
      params: normalizedFilter,
    });

    return normalizePageData<ICashierSettingsData, ICashierSettings>(
      response.data,
      normalizeCashierSettings
    );
  },
};

export default cashierSettingsApi;
