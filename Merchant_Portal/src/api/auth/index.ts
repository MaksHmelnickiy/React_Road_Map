import { AxiosResponse } from 'axios';

import { axiosAuthInstance } from 'api/base';

import { normalizeSignIn } from './normalizers';
import type { IAuthState, ILoginPayload } from './types';
import { IPasswordRecoveryData, ISetPasswordData } from './types';

const authAPI = {
  async logout(): Promise<void> {
    const result = await axiosAuthInstance.get('auth/logout', {
      withCredentials: true,
      headers: { Authorization: undefined },
    });

    return result?.data;
  },

  async signIn(payload: ILoginPayload): Promise<IAuthState> {
    const result = await axiosAuthInstance.post('auth/login', payload, {
      withCredentials: true,
    });

    return normalizeSignIn(result?.data);
  },

  async refreshToken(): Promise<IAuthState> {
    const result = await axiosAuthInstance.get('auth/token/refresh', {
      withCredentials: true,
    });

    return normalizeSignIn(result?.data);
  },

  async passwordRecovery(payload: IPasswordRecoveryData): Promise<AxiosResponse> {
    const result = await axiosAuthInstance.post('users/password/initiate-reset', payload);

    return result?.data;
  },

  async setUserPassword(payload: ISetPasswordData): Promise<AxiosResponse> {
    const result = await axiosAuthInstance.post('users/password/confirm-reset', payload);

    return result?.data;
  },
};

export default authAPI;
