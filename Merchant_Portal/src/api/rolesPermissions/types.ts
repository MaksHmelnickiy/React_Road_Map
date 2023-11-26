import { PERMISSIONS } from 'api/auth/constants';

export interface IPermission {
  label: string;
  value: PERMISSIONS;
}

export interface IRole {
  role: string;
  permissions?: IPermission[];
}

export interface IRolesParams {
  withPermissions?: boolean;
}

export interface IRolePayload {
  roleName: string;
  permissions: string[];
}
