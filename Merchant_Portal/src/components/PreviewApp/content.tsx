import React from 'react';

import { TRANSACTIONS_TYPE } from 'api/transactions/contants';
import { ITransaction } from 'api/transactions/types';
import { ICONS_MAP } from 'constants/icons';

export const tabsContent = [
  'dictionaries.transactionType.ALL',
  'dictionaries.transactionType.PURCHASE',
  'dictionaries.transactionType.PAYOUT',
  'dictionaries.transactionType.REFUND',
];

export const navBarContent = [
  {
    name: 'Transaction',
    icon: <ICONS_MAP.TransactionMenu />,
    isActive: true,
  },
  {
    name: 'Users',
    icon: <ICONS_MAP.Users />,
  },
  {
    name: 'Clients',
    icon: <ICONS_MAP.Clients />,
  },
  {
    name: 'PSP Management',
    icon: <ICONS_MAP.PSP />,
    hasSubFolders: true,
  },
  {
    name: 'Traffic Management',
    icon: <ICONS_MAP.TrafficManagement />,
    hasSubFolders: true,
  },
  {
    name: 'Merchants',
    icon: <ICONS_MAP.Merchants />,
  },
  {
    name: 'Merchants Settings',
    icon: <ICONS_MAP.MerchantsSettingsMenu />,
    hasSubFolders: true,
  },
  {
    name: 'Settings',
    icon: <ICONS_MAP.Settings />,
  },
];

export const gridDataContent = [
  {
    id: 'ffbbc...15ace',
    type: TRANSACTIONS_TYPE.PURCHASE,
    paymentMethod: 'Credit card',
    state: 'Pending',
    amount: 109.99,
    currency: 'USD',
    tokenPresence: true,
    merchantTerminalName: 'Merchant`s Name',
    customerAccessToken: 'ffbbc...15ace',
  },
  {
    id: 'ffbbc...15ace',
    type: TRANSACTIONS_TYPE.PURCHASE,
    paymentMethod: 'Credit card',
    state: 'Declined',
    amount: 109.99,
    currency: 'USD',
    tokenPresence: true,
    merchantTerminalName: 'Merchant`s Name',
    customerAccessToken: 'ffbbc...15ace',
  },
  {
    id: 'ffbbc...15ace',
    type: TRANSACTIONS_TYPE.PAYOUT,
    paymentMethod: 'Bank transfer',
    state: 'Completed',
    amount: 109.99,
    currency: 'USD',
    tokenPresence: false,
    merchantTerminalName: 'Merchant`s Name',
    customerAccessToken: 'ffbbc...15ace',
  },
  {
    id: 'ffbbc...15ace',
    type: TRANSACTIONS_TYPE.PURCHASE,
    paymentMethod: 'Credit card',
    state: 'Pending',
    amount: 109.99,
    currency: 'USD',
    tokenPresence: true,
    merchantTerminalName: 'Merchant`s Name',
    customerAccessToken: 'ffbbc...15ace',
  },
  {
    id: 'ffbbc...15ace',
    type: TRANSACTIONS_TYPE.PURCHASE,
    paymentMethod: 'Credit card',
    state: 'Pending',
    amount: 109.99,
    currency: 'USD',
    tokenPresence: true,
    merchantTerminalName: 'Merchant`s Name',
    customerAccessToken: 'ffbbc...15ace',
  },
] as Partial<ITransaction>[];
