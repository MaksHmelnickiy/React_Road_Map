import { AxiosResponse } from 'axios';

import { axiosAuthInstance } from 'api/base';
import { prepareFormData } from 'utils/form';

import { normalizePermission, normalizeRole } from './normalizers';
import { IPermission, IRole, IRolePayload, IRolesParams } from './types';

const rolesPermissionsAPI = {
  async getRoles(params?: IRolesParams): Promise<IRole[]> {
    const response = await axiosAuthInstance.get('roles', { params });

    return response?.data?.map(normalizeRole);
  },

  async getPermissions(): Promise<IPermission[]> {
    const response = await axiosAuthInstance.get('permissions');

    return response?.data?.permissions?.map(normalizePermission) || [];
  },

  async createRole(payload: IRolePayload): Promise<AxiosResponse> {
    const fromPayload = prepareFormData(payload);
    const response = await axiosAuthInstance.post('roles', fromPayload);

    return response;
  },
};

export default rolesPermissionsAPI;
