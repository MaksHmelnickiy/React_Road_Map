import { AxiosResponse } from 'axios';

import axiosInstance from 'api/base';
import { IRoutingRulesetForm } from 'routes/pages/AuthorizedStack/TrafficManagement/RoutingRuleset/Form/utils/types';
import { normalizeCreatedGist, normalizePageData } from 'utils/commonNormalizer';
import { normalizeSearchFiltersPayload } from 'utils/filters';
import { prepareFormData } from 'utils/form';
import { IAllPageFilters, ICreatedGist, IPageType } from 'utils/types';

import { normalizeRoutingRuleset } from './normalizers';
import { IRoutingRuleset, IRoutingRulesetData, IRulesetsGroupEdit } from './types';

const IRoutingRulesetApi = {
  async getAllRoutingRuleset(
    filters: IAllPageFilters
  ): Promise<IPageType<IRoutingRuleset>> {
    const normalizedFilter = normalizeSearchFiltersPayload(filters);

    const response = await axiosInstance.get('routing-rulesets', {
      params: normalizedFilter,
    });

    return normalizePageData<IRoutingRulesetData, IRoutingRuleset>(
      response.data,
      normalizeRoutingRuleset
    );
  },

  async groupEdit(payload: IRulesetsGroupEdit): Promise<AxiosResponse> {
    const { filters, settings } = payload;

    const response = await axiosInstance.post(`routing-rulesets/group/edit`, {
      filters,
      settings,
    });

    return response.data;
  },

  async createRoutingRuleset(payload: IRoutingRulesetForm): Promise<ICreatedGist> {
    const normalizedPayload = prepareFormData(payload);
    const result = await axiosInstance.post(`routing-rulesets`, normalizedPayload);
    return normalizeCreatedGist(result.data);
  },
};

export default IRoutingRulesetApi;
