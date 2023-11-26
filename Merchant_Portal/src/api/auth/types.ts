import { PERMISSIONS } from './constants';

export interface IAuthState {
  token: string;
  tokenType: string;
  expiration: number;
  expirationDate: number;
  error: string;
  errorDescription: string;
  errorUrl: string;
  idToken: string;
  notBeforePolicy: number;
  scope: string;
  sessionState: string;
  permissions: PERMISSIONS[];
}

export interface ILoginPayload {
  username: string;
  password: string;
  isSaved: boolean;
}

export interface IPasswordRecoveryData {
  login: string;
}

export type IPasswordSetType = 'USER_CREATION' | 'PASSWORD_RESET';

export interface ISetPasswordData {
  login: string;
  password: string;
  otpToken: string;
  operationType: IPasswordSetType;
}
