import axiosInstance from 'api/base';
import { normalizePageData } from 'utils/commonNormalizer';
import { normalizeSearchFiltersPayload } from 'utils/filters';
import { prepareFormData } from 'utils/form';
import { IAllPageFilters, IPageType, TObject } from 'utils/types';

import {
  normalizeClient,
  normalizeClientErrors,
  normalizeClientGeneralInfo,
  normalizeClientStats,
  normalizePaymentMethod,
} from './normalizers';
import {
  IClient,
  IClientForm,
  IClientGeneralInfo,
  IClientPaymentMethod,
  IClientStats,
  IClientTopErrors,
  IEditClientPayload,
} from './types';

const clientsAPI = {
  async getAllClients(filters: IAllPageFilters): Promise<IPageType<IClient>> {
    const normalizedFilter = normalizeSearchFiltersPayload(filters);

    const response = await axiosInstance.get('customers', {
      params: normalizedFilter,
    });
    return normalizePageData<TObject, IClient>(response.data, normalizeClient);
  },

  async getClientsGeneralInfo(id: string): Promise<IClientGeneralInfo> {
    const response = await axiosInstance.get(`customers/${id}`);
    return normalizeClientGeneralInfo(response.data);
  },

  async getClientStats(id: string): Promise<IClientStats> {
    const response = await axiosInstance.get(`customers/${id}/stats`);
    return normalizeClientStats(response.data);
  },

  async getClientTopErrors(id: string): Promise<IClientTopErrors> {
    const response = await axiosInstance.get(`customers/${id}/errors`);
    return normalizeClientErrors(response.data);
  },

  async getClientPaymentMethod(id: string): Promise<IClientPaymentMethod> {
    const response = await axiosInstance.get(`customers/${id}/methods`);
    return normalizePaymentMethod(response.data);
  },

  async createClient(payload: IClientForm): Promise<IClientGeneralInfo> {
    const normalizedClient = prepareFormData(payload);
    const result = await axiosInstance.post(`customers`, normalizedClient);
    return normalizeClientGeneralInfo(result.data);
  },

  async editClient({ id, payload }: IEditClientPayload): Promise<IClientGeneralInfo> {
    const normalizedClient = prepareFormData(payload);
    const result = await axiosInstance.put(`customers/${id}`, normalizedClient);
    return normalizeClientGeneralInfo(result.data);
  },
};

export default clientsAPI;
