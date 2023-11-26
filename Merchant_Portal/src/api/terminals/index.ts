import axiosInstance from 'api/base';
import { normalizePageData } from 'utils/commonNormalizer';
import { normalizeSearchFiltersPayload } from 'utils/filters';
import { IAllPageFilters, IPageType } from 'utils/types';

import { normalizeTerminals } from './normalizers';
import { IPspTerminal, ITerminalData } from './types';

const terminalsApi = {
  async getAllTerminals(filters: IAllPageFilters): Promise<IPageType<IPspTerminal>> {
    const normalizedFilter = normalizeSearchFiltersPayload(filters);

    const response = await axiosInstance.get('banks/terminals', {
      params: normalizedFilter,
    });

    return normalizePageData<ITerminalData, IPspTerminal>(
      response.data,
      normalizeTerminals
    );
  },

  async getTerminal(id: string): Promise<IPspTerminal> {
    const response = await axiosInstance.get(`banks/terminals/${id}`);

    return normalizeTerminals(response.data);
  },
};

export default terminalsApi;
