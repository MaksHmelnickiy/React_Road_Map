import { readJWTData } from 'utils/common';
import { TObject } from 'utils/types';

import { IAuthState } from './types';

export function normalizeSignIn(data: TObject): IAuthState {
  const parsedJWT = readJWTData(data?.access_token as string) || '';

  const expiration = (data?.expires_in as number) || 0;

  return {
    token: (data?.access_token as string) || '',
    tokenType: (data?.token_type as string) || '',
    expiration,
    expirationDate: expiration * 1000 + Date.now(),
    error: (data?.error as string) || '',
    errorDescription: (data?.error_description as string) || '',
    errorUrl: (data?.error_url as string) || '',
    idToken: (data?.id_token as string) || '',
    notBeforePolicy: (data?.['not-before-policy'] as number) || 0,
    scope: (data?.scope as string) || '',
    sessionState: (data?.session_state as string) || '',
    permissions: parsedJWT?.realm_access?.roles || [],
  };
}
