import { TRANSACTIONS_STATE } from 'api/transactions/contants';
import {
  ITransactionCustomer,
  ITransactionDetails,
  ITransactionEditData,
} from 'api/transactions/types';

export const getModalData = (
  baseDetails?: ITransactionDetails,
  customerDetails?: ITransactionCustomer
): ITransactionEditData => {
  return {
    description: baseDetails?.basic?.description || '',
    state: baseDetails?.basic?.status || '',
    merchantTransactionId: baseDetails?.basic?.merchantTransactionId || '',
    resultCode: baseDetails?.basic?.resultCode || '',
    customerId: customerDetails?.merchantCustomerId || '',
    bankTid: baseDetails?.basic?.executionId || '',
    sendWebhook: false,
  };
};

export const AVAILABLE_STATUSES = [
  TRANSACTIONS_STATE.CANCELLED,
  TRANSACTIONS_STATE.COMPLETED,
  TRANSACTIONS_STATE.DECLINED,
];
