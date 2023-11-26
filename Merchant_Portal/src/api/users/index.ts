import { axiosAuthInstance } from 'api/base';
import { isFilterNumberRange } from 'components/FiltersButton/helpers';
import { IAppliedFilter } from 'components/FiltersButton/types';
import { normalizePageData } from 'utils/commonNormalizer';
import { normalizeSearchFiltersPayload } from 'utils/filters';
import { prepareFormData } from 'utils/form';
import { IAllPageFilters, IPageType, TSearch } from 'utils/types';

import { normalizeUser } from './normalizers';
import { IUser, IUserData, IUserFormattedData } from './types';

const usersAPI = {
  async getAllUsers(filters: IAllPageFilters): Promise<IPageType<IUser>> {
    const { search, ...restFilters } = filters;
    const normalizedFilter = normalizeSearchFiltersPayload(restFilters);
    const { created, ...restSearch } = search || {};
    let normalizedSearch: TSearch = search || {};

    if (created) {
      const { operation, value } = created as IAppliedFilter;
      let createdFilter;
      if (isFilterNumberRange(value)) {
        createdFilter = {
          operation,
          startDate: value.min,
          endDate: value.max,
        };
      } else if (value) {
        createdFilter = {
          operation,
          startDate: value as string,
        };
      }

      normalizedSearch = {
        ...restSearch,
        created: createdFilter,
      };
    }

    const response = await axiosAuthInstance.post(`users/search`, normalizedSearch, {
      params: normalizedFilter,
    });

    return normalizePageData<IUserData, IUser>(response.data, normalizeUser);
  },

  async getUser(id: string): Promise<IUser> {
    const response = await axiosAuthInstance.get(`users/${id}`);

    return normalizeUser(response.data);
  },

  async createUser(user: IUserFormattedData): Promise<IUser> {
    const normalizedUser = prepareFormData(user);

    const response = await axiosAuthInstance.post('users', normalizedUser);

    return normalizeUser(response.data);
  },

  async updateUser({ id, login: _, ...user }: IUserFormattedData): Promise<IUser> {
    const normalizedUser = prepareFormData(user);

    const response = await axiosAuthInstance.put(`users/${id}`, normalizedUser);

    return normalizeUser(response.data);
  },
};

export default usersAPI;
