import { IClientForm } from 'api/clients/types';

export enum NAVIGATION_OPTIONS {
  GENERAL = 'general',
  CLIENT_INFO = 'clientInfo',
  ADDITIONAL = 'additional',
}

export const NAVIGATION_LIST = [
  NAVIGATION_OPTIONS.GENERAL,
  NAVIGATION_OPTIONS.CLIENT_INFO,
  NAVIGATION_OPTIONS.ADDITIONAL,
];

export const defaultValues = {
  merchantTerminalId: null,
  merchantCustomerId: null,
  terminalLinkId: null,
  firstName: null,
  lastName: null,
  email: null,
  dateOfBirth: null,
  countryCode: null,
  city: null,
  state: null,
  addressLine1: null,
  addressLine2: null,
  phoneCountryCode: null,
  phone: null,
  postalCode: null,
  registrationDate: null,
} as IClientForm;
