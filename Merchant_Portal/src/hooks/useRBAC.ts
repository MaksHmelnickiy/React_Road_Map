import React from 'react';

import { PERMISSIONS } from 'api/auth/constants';
import { IAuthState } from 'api/auth/types';
import { SESSION_KEYS } from 'queries/session/constants';
import { useQueryData } from 'queries/utils';

interface IRbacProps {
  list?: PERMISSIONS[];
  conditionType?: 'AND' | 'OR';
}

export interface ICheckPermissionProps {
  list?: PERMISSIONS[];
  conditionType?: 'AND' | 'OR';
}

export type TCheckPermission = (props: ICheckPermissionProps) => boolean;

interface IUseRBACResult {
  enabled: boolean;
  checkPermission: TCheckPermission;
}

export const useRBAC = ({ list, conditionType }: IRbacProps = {}): IUseRBACResult => {
  const session = useQueryData<IAuthState>(SESSION_KEYS.SESSION);

  const checkPermission = React.useCallback(
    (
      { list = [], conditionType = 'AND' }: ICheckPermissionProps = {
        list: [],
        conditionType: 'AND',
      }
    ): boolean => {
      let permission: boolean | undefined = false;

      if (conditionType === 'AND') {
        permission = list?.every((userPermission) =>
          session?.permissions?.find((permissions) => permissions === userPermission)
        );
      }

      if (conditionType === 'OR') {
        permission = list?.some(
          (userPermission) =>
            !!session?.permissions?.find((permissions) => permissions === userPermission)
        );
      }
      return permission;
    },
    [session?.permissions]
  );

  const permissionExist = checkPermission({ list, conditionType });

  return {
    enabled: permissionExist,
    checkPermission,
  };
};
