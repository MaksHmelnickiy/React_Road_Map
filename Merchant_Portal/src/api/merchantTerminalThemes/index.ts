import { AxiosResponse } from 'axios';

import axiosInstance from 'api/base';

import { normalizeActiveTheme, normalizeMerchant, normalizeTheme } from './normalizers';
import {
  IActivateThemePayload,
  IActiveTheme,
  ICreateThemePayload,
  IDeleteThemePayload,
  IMerchant,
  ITheme,
  IUpdateThemePayload,
} from './types';

const merchantTerminalThemesAPI = {
  async getThemes(id: string): Promise<IMerchant> {
    const result = await axiosInstance.get(
      `customizations/merchants/terminals/${id}/themes`
    );

    return normalizeMerchant(result.data);
  },

  async createTheme({ id, theme }: ICreateThemePayload): Promise<ITheme> {
    const { name, preview, ...restTheme } = theme;
    const { data } = await axiosInstance.post(
      `customizations/merchants/terminals/${id}/themes`,
      {
        name,
        preview,
        theme: restTheme,
      }
    );

    return normalizeTheme(data);
  },

  async updateTheme({ id, theme }: IUpdateThemePayload): Promise<ITheme> {
    const { name, preview, isSystem: _isSystem, id: themeId, ...restTheme } = theme;
    const { data } = await axiosInstance.put(
      `customizations/merchants/terminals/${id}/themes/${themeId}`,
      {
        name,
        preview,
        theme: restTheme,
      }
    );

    return normalizeTheme(data);
  },

  async setActiveTheme({ id, themeId }: IActivateThemePayload): Promise<AxiosResponse> {
    const result = await axiosInstance.put(
      `customizations/merchants/terminals/${id}/themes`,
      {
        themeId,
      }
    );

    return result.data;
  },

  async deleteTheme({ id, themeId }: IDeleteThemePayload): Promise<IActiveTheme> {
    const result = await axiosInstance.delete(
      `customizations/merchants/terminals/${id}/themes/${themeId}`
    );
    return normalizeActiveTheme(result.data);
  },
};

export default merchantTerminalThemesAPI;
