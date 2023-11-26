import { FILTRATION_TYPES } from 'constants/common';
import { IGroupEditItems } from 'hooks/useGroupEdit';

import CardNetwork from './customComponents/cardNetwork';

export const GROUP = {
  GENERAL: 'general',
  TRANSACTION: 'transaction',
  BIN: 'bin',
  CLIENTS: 'clients',
  CUSTOMER_STATS: 'customerStats',
};

export const ITEMS: Record<string, IGroupEditItems> = {
  enabled: { group: GROUP.GENERAL, type: FILTRATION_TYPES.BOOLEAN },
  name: { group: GROUP.GENERAL, type: FILTRATION_TYPES.STRING },
  priority: { group: GROUP.GENERAL, type: FILTRATION_TYPES.STRING },
  ratio: { group: GROUP.GENERAL, type: FILTRATION_TYPES.STRING },

  transactionType: { group: GROUP.TRANSACTION, type: 'Dictionary.transactionTypes' },
  txCcy: { group: GROUP.TRANSACTION, type: 'Dictionary.currency' },
  excludedFromCascading: {
    group: GROUP.TRANSACTION,
    type: FILTRATION_TYPES.BOOLEAN,
  },

  binRange: { group: GROUP.BIN, type: FILTRATION_TYPES.STRING },
  billingInfo: { group: GROUP.BIN, type: FILTRATION_TYPES.BOOLEAN },
  cardNetwork: {
    group: GROUP.BIN,
    customComponent: <CardNetwork />,
  },

  customerDaysFromReg: {
    group: GROUP.CLIENTS,
    type: FILTRATION_TYPES.STRING,
  },
  customerRegBeforeDate: {
    group: GROUP.CLIENTS,
    type: 'LocalDate',
  },
  customerDaysFromFtd: {
    group: GROUP.CLIENTS,
    type: FILTRATION_TYPES.STRING,
  },

  customerDpCount: { group: GROUP.CUSTOMER_STATS, type: FILTRATION_TYPES.STRING },
  customerDpAmount: {
    group: GROUP.CUSTOMER_STATS,
    type: FILTRATION_TYPES.STRING,
  },
  customerWdCount: {
    group: GROUP.CUSTOMER_STATS,
    type: FILTRATION_TYPES.STRING,
  },
  customerWdAmount: {
    group: GROUP.CUSTOMER_STATS,
    type: FILTRATION_TYPES.STRING,
  },
  customerCcDpCount: {
    group: GROUP.CUSTOMER_STATS,
    type: FILTRATION_TYPES.STRING,
  },
  customerCcDpAmount: {
    group: GROUP.CUSTOMER_STATS,
    type: FILTRATION_TYPES.STRING,
  },
  customerCcWdCount: {
    group: GROUP.CUSTOMER_STATS,
    type: FILTRATION_TYPES.STRING,
  },
  customerCcWdAmount: {
    group: GROUP.CUSTOMER_STATS,
    type: FILTRATION_TYPES.STRING,
  },
  customerUccDpCount: {
    group: GROUP.CUSTOMER_STATS,
    type: FILTRATION_TYPES.STRING,
  },
  customerUccDpAmount: {
    group: GROUP.CUSTOMER_STATS,
    type: FILTRATION_TYPES.STRING,
  },
  customerUccWdCount: {
    group: GROUP.CUSTOMER_STATS,
    type: FILTRATION_TYPES.STRING,
  },
  customerUccWdAmount: {
    group: GROUP.CUSTOMER_STATS,
    type: FILTRATION_TYPES.BIG_DECIMAL,
  },
};
