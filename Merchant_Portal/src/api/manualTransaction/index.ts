import { ISelectOption } from '@private/components';

import axiosInstance from 'api/base';
import { prepareFormData } from 'utils/form';

import {
  normalizeManualTransactionResponse,
  normalizePspDescriptions,
  normalizeRuleset,
} from './normalizers';
import {
  IManualTransactionForm,
  IManualTransactionResponse,
  IPaymentMethodsPayload,
  IPspDescriptionsPayload,
  IRuleset,
} from './types';

const motoAPI = {
  async getPaymentMethods({ id, ...params }: IPaymentMethodsPayload): Promise<string[]> {
    const response = await axiosInstance.get(
      `merchants/terminals/${id}/payment-methods`,
      { params }
    );

    return response.data?.result || [];
  },

  async getPspDescriptions({
    paymentMethod,
    merchantTerminalId,
  }: IPspDescriptionsPayload): Promise<ISelectOption[]> {
    const response = await axiosInstance.get(
      `terminal-links/descriptions?paymentMethod=${paymentMethod}&merchantTerminalId=${merchantTerminalId}`
    );

    return normalizePspDescriptions(response.data);
  },

  async getAvailableRulesets(payload: IManualTransactionForm): Promise<IRuleset[]> {
    const normalizedPayload = prepareFormData(payload);

    const response = await axiosInstance.post(
      'transactions/available-rulesets',
      normalizedPayload
    );

    return response?.data?.result.map(normalizeRuleset) || [];
  },

  async createManualTransaction(
    payload: IManualTransactionForm
  ): Promise<IManualTransactionResponse> {
    const normalizedPayload = prepareFormData(payload);

    const response = await axiosInstance.post('transactions', normalizedPayload);

    return normalizeManualTransactionResponse(response.data);
  },
};

export default motoAPI;
