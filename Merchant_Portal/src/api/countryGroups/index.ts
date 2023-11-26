import axiosInstance from 'api/base';
import { normalizePageData } from 'utils/commonNormalizer';
import { normalizeSearchFiltersPayload } from 'utils/filters';
import { IAllPageFilters, IPageType } from 'utils/types';

import { normalizeCountryGroup } from './normalizers';
import { ICountryGroup, ICountryGroupData } from './types';

const ICountryGroupsApi = {
  async getAllCountryGroups(
    filters: IAllPageFilters
  ): Promise<IPageType<ICountryGroupData>> {
    const normalizedFilter = normalizeSearchFiltersPayload(filters);

    const response = await axiosInstance.get('country-groups', {
      params: normalizedFilter,
    });

    return normalizePageData<ICountryGroup, ICountryGroupData>(
      response.data,
      normalizeCountryGroup
    );
  },
};

export default ICountryGroupsApi;
