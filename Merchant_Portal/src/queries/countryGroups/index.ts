import { UseQueryResult } from 'react-query';

import api from 'api';
import { COUNTRY_GROUPS_KEYS } from 'api/countryGroups/constants';
import { ICountryGroupData } from 'api/countryGroups/types';
import { getAllEntities } from 'queries/utils';
import { IAllPageFilters, IPageType } from 'utils/types';

export const useGetAllCountryGroups = (
  pageFilters: IAllPageFilters
): UseQueryResult<IPageType<ICountryGroupData>> =>
  getAllEntities<ICountryGroupData>({
    pageFilters,
    queryKey: COUNTRY_GROUPS_KEYS.ALL,
    getAllEntitiesFunc: api.countryGroups.getAllCountryGroups,
  });
