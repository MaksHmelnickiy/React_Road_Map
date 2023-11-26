import { PERMISSIONS } from 'api/auth/constants';
import { TObject } from 'utils/types';

import { IPermission, IRole } from './types';

type IRolesData = TObject & {
  permissions: string[];
};

export const normalizePermission = (permission: string): IPermission => {
  const normalName = permission.split(/[.-_]/).join(' ');
  const readableName = normalName.charAt(0).toUpperCase() + normalName.slice(1);

  return {
    label: readableName,
    value: permission as PERMISSIONS,
  };
};

export const normalizeRole = (data: IRolesData): IRole => {
  return {
    role: (data?.role as string) || '',
    permissions: data?.permissions?.map(normalizePermission),
  };
};
