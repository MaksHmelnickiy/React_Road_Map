import { AxiosResponse } from 'axios';

import axiosInstance from 'api/base';
import { normalizePageData } from 'utils/commonNormalizer';
import { normalizeSearchFiltersPayload } from 'utils/filters';
import { IAllPageFilters, IPageType, TObject } from 'utils/types';

import {
  normalizeEditData,
  normalizeTransaction,
  normalizeTransactionCard,
  normalizeTransactionCustomer,
  normalizeTransactionDetails,
  normalizeTransactionOperationHistory,
  normalizeTransactionWebhooks,
} from './normalizers';
import {
  ITransaction,
  ITransactionCard,
  ITransactionCustomer,
  ITransactionDetails,
  ITransactionEditData,
  ITransactionOperationHistory,
  ITransactionWebhooks,
} from './types';

const transactionAPI = {
  async getAllTransactions(filters: IAllPageFilters): Promise<IPageType<ITransaction>> {
    const normalizedFilter = normalizeSearchFiltersPayload(filters);

    const response = await axiosInstance.get('transactions', {
      params: normalizedFilter,
    });
    return normalizePageData<TObject, ITransaction>(response.data, normalizeTransaction);
  },

  async getTransactionDetails(id: string): Promise<ITransactionDetails> {
    const response = await axiosInstance.get(`transactions/${id}`);
    return normalizeTransactionDetails(response.data);
  },

  async getTransactionCard(id: string): Promise<ITransactionCard> {
    const response = await axiosInstance.get(`transactions/${id}/card`);
    return normalizeTransactionCard(response.data);
  },

  async getTransactionCustomer(id: string): Promise<ITransactionCustomer> {
    const response = await axiosInstance.get(`transactions/${id}/customer`);
    return normalizeTransactionCustomer(response.data);
  },

  async getTransactionOperationHistory(
    id: string
  ): Promise<ITransactionOperationHistory> {
    const response = await axiosInstance.get(`transactions/${id}/operations`);
    return normalizeTransactionOperationHistory(response.data);
  },

  async updateTransaction(
    id: string,
    payload: ITransactionEditData
  ): Promise<AxiosResponse> {
    const normalizedData = normalizeEditData<ITransactionEditData, ITransactionEditData>(
      payload
    );

    const response = await axiosInstance.post(
      `transactions/${id}/operations`,
      normalizedData
    );
    return response.data;
  },

  async getTransactionWebhooks(id: string): Promise<ITransactionWebhooks> {
    const response = await axiosInstance.get(`transactions/${id}/webhooks`);
    return normalizeTransactionWebhooks(response.data);
  },
};

export default transactionAPI;
