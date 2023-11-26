import React from 'react';
import { useTranslation } from 'react-i18next';

import { IColumn, UNITS } from '@private/data-grid';

import { IRole } from 'api/rolesPermissions/types';
import HeaderCell from 'components/Grids/DataGrid/HeaderCell';
import MultiItemsCell from 'components/Grids/DataGrid/MultiItemsCell';
import RowCell from 'components/Grids/DataGrid/RowCell';
import { IUseGridDataResult } from 'utils/types';

export const useRolesAndPermissionsGridData = (
  data?: IRole[]
): IUseGridDataResult<IRole> => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'rolesAndPermissions.columns',
  });

  const rolesAndPermissionsColumns = React.useMemo(() => {
    return [
      {
        dataKey: 'role',
        title: t('role'),
        minWidth: 120,
        width: {
          unit: UNITS.PERCENT,
          value: 50,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'permissions',
        title: t('permissions'),
        minWidth: 120,
        width: {
          unit: UNITS.PERCENT,
          value: 50,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const readableNames = params.item.permissions?.map((item) => item.label) || [];

          return <MultiItemsCell {...params} list={readableNames} />;
        },
      },
    ] as IColumn<IRole>[];
  }, []);

  return !data ? [] : rolesAndPermissionsColumns;
};
