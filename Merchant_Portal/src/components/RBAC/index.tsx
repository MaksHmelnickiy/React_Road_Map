import React from 'react';

import { PERMISSIONS } from 'api/auth/constants';
import { appReactMemo } from 'hocs';
import { useRBAC } from 'hooks/useRBAC';

interface IRbac extends React.PropsWithChildren {
  list?: PERMISSIONS[];
  conditionType?: 'AND' | 'OR';
}

const RBAC = ({ list, conditionType = 'AND', children }: IRbac) => {
  const { enabled } = useRBAC({ list, conditionType });

  if (!enabled) {
    return null;
  }

  return <>{children}</>;
};

export default appReactMemo(RBAC);
