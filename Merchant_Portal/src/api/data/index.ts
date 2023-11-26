import axiosInstance, { axiosAuthInstance } from 'api/base';
import { normalizeDictionaries, normalizeRoles } from 'api/data/normalizers';
import { IDictionaries, IRole, IRolesParams } from 'api/data/types';

const dataAPI = {
  async getDictionaries(): Promise<IDictionaries> {
    const response = await axiosInstance.get('dictionaries');

    return normalizeDictionaries(response.data?.dictionaries);
  },

  async getRoles(params?: IRolesParams): Promise<IRole[]> {
    const response = await axiosAuthInstance.get('roles', { params });

    return normalizeRoles(response.data);
  },
};

export default dataAPI;
