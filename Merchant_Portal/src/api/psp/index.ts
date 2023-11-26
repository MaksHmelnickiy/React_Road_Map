import axiosInstance from 'api/base';
import { normalizeGist, normalizePageData } from 'utils/commonNormalizer';
import { normalizeSearchFiltersPayload } from 'utils/filters';
import { IAllPageFilters, IGist, IPageType } from 'utils/types';

import { normalizePsp, normalizePspDetails } from './normalizers';
import { IPsp, IPspDetails, TPspData } from './types';

const pspAPI = {
  async getAllPsp(filters: IAllPageFilters): Promise<IPageType<IPsp>> {
    const normalizedFilter = normalizeSearchFiltersPayload(filters);

    const response = await axiosInstance.get('banks', {
      params: normalizedFilter,
    });

    return normalizePageData<TPspData, IPsp>(response.data, normalizePsp);
  },

  async getPsp(id: string): Promise<IPspDetails> {
    const response = await axiosInstance.get(`banks/${id}`);

    return normalizePspDetails(response.data);
  },

  async searchPsp(search: string): Promise<IGist[]> {
    const response = await axiosInstance.get(`banks/names`, {
      params: { search },
    });

    return response.data?.result?.map(normalizeGist) || [];
  },
};

export default pspAPI;
