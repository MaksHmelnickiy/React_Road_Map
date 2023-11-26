import axiosInstance from 'api/base';

import { customizationInstance } from '../base';

import { normalizePortalUserConfig, normalizeUserTheme } from './normalizers';
import {
  IPortalUserConfig,
  ISavePageSettingsData,
  IUpdateUserThemePayload,
  IUserTheme,
} from './types';

const portalUserAPI = {
  async getUserConfig(): Promise<IPortalUserConfig> {
    const result = await axiosInstance.get(`customizations/users/configuration`);

    return normalizePortalUserConfig(result.data);
  },

  async savePageSettings(payload: ISavePageSettingsData): Promise<IPortalUserConfig> {
    const result = await axiosInstance.post(
      `customizations/users/configuration/page-settings`,
      payload
    );

    return normalizePortalUserConfig(result.data);
  },

  async updateTheme({ userId, theme }: IUpdateUserThemePayload): Promise<IUserTheme> {
    const { id, ...restTheme } = theme;

    const { data } = await customizationInstance.put(`users/${userId}/themes/${id}`, {
      theme: restTheme,
    });

    return normalizeUserTheme(data);
  },
};

export default portalUserAPI;
