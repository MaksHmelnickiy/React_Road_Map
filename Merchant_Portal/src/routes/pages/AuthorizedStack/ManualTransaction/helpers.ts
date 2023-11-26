import * as yup from 'yup';

import { IManualTransactionForm } from 'api/manualTransaction/types';

export enum NAVIGATION_OPTIONS {
  GENERAL = 'general',
  TRANSACTION = 'transaction',
  MERCHANT_IDS = 'merchantIds',
  CRM_ID = 'crmId',
  CLIENT_INFO = 'clientInfo',
  BILLING_ADDRESS = 'billingAddress',
}

export const NAVIGATION_LIST = [
  NAVIGATION_OPTIONS.GENERAL,
  NAVIGATION_OPTIONS.TRANSACTION,
  NAVIGATION_OPTIONS.MERCHANT_IDS,
  NAVIGATION_OPTIONS.CRM_ID,
  NAVIGATION_OPTIONS.CLIENT_INFO,
  NAVIGATION_OPTIONS.BILLING_ADDRESS,
];

export const CASHIER = 'CASHIER';

export enum STRATEGY_CODES {
  DIRECT = 'direct',
  USE_SYSTEM_RULES = 'use_system_rules',
  USE_ROUTING = 'use_routing',
}

export const STRATEGY_OPTIONS = [
  {
    label: 'manualTransaction.strategies.direct',
    value: STRATEGY_CODES.DIRECT,
  },
  {
    label: 'manualTransaction.strategies.useSystemRules',
    value: STRATEGY_CODES.USE_SYSTEM_RULES,
  },
  {
    label: 'manualTransaction.strategies.useRouting',
    value: STRATEGY_CODES.USE_ROUTING,
  },
];

export const initialValues = {
  merchantTerminalId: null,
  paymentMethod: null,
  strategy: null, // only front use
  amount: null,
  currency: null,
  description: null,
  merchantTransactionId: null,
  mt4Id: null,
  terminalLinkId: null, // this is psp
  rulesetId: null, //  use system routes
  customer: {
    merchantCustomerId: null,
    firstName: null,
    lastName: null,
    dateOfBirth: null,
    email: null,
    phoneCountryCode: null,
    phone: null,
    registrationDate: null,
    countryCode: null,
    city: null,
    state: null,
    addressLine1: null,
    addressLine2: null,
    postalCode: null,
  },
} as IManualTransactionForm;

export const validationSchema = yup.object().shape({
  strategy: yup
    .string()
    .nullable()
    .when('paymentMethod', (paymentMethod) =>
      paymentMethod && paymentMethod === CASHIER
        ? yup.string().nullable()
        : yup.string().nullable().required('common.requiredField')
    ),
  rulesetId: yup
    .string()
    .nullable()
    .when('strategy', {
      is: STRATEGY_CODES.USE_SYSTEM_RULES,
      then: yup.string().nullable().required('common.requiredField'),
    }),
  terminalLinkId: yup
    .string()
    .nullable()
    .when('strategy', {
      is: STRATEGY_CODES.DIRECT,
      then: yup.string().nullable().required('common.requiredField'),
    }),
});
