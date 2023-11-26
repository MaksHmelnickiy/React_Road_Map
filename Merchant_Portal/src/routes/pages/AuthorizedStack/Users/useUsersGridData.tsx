import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath, useNavigate } from 'react-router-dom';

import { IColumn, UNITS } from '@private/data-grid';

import { PERMISSIONS } from 'api/auth/constants';
import { IUser } from 'api/users/types';
import Button from 'components/Button';
import Switch from 'components/Controls/Switch';
import HeaderCell from 'components/Grids/DataGrid/HeaderCell';
import MultiItemsCell from 'components/Grids/DataGrid/MultiItemsCell';
import RowCell from 'components/Grids/DataGrid/RowCell';
import Link from 'components/Link';
import { ICONS_MAP } from 'constants/icons';
import { useRBAC } from 'hooks/useRBAC';
import { ROUTES } from 'routes/config/constants';
import { getFormattedDate } from 'utils/common';

export const useUsersGridData = (data?: IUser[]): IColumn<IUser>[] => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'users.columns',
  });

  const navigate = useNavigate();
  const { checkPermission } = useRBAC();

  const usersColumns = React.useMemo(() => {
    const columns = [
      {
        dataKey: 'login',
        title: t('login'),
        minWidth: 190,
        width: {
          unit: UNITS.PERCENT,
          value: 10,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { PATH, PARAMS } = ROUTES.USERS.SUB_PATH.USER;
          const { id } = params.item;
          const viewUser = generatePath(PATH, {
            [PARAMS.ID]: id,
          });

          return (
            <RowCell {...params}>
              <Link to={viewUser}>{params.item.login}</Link>
            </RowCell>
          );
        },
      },
      {
        dataKey: 'firstName',
        title: t('firstName'),
        width: {
          unit: UNITS.PERCENT,
          value: 10,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'lastName',
        title: t('lastName'),
        width: {
          unit: UNITS.PERCENT,
          value: 10,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'enabled',
        title: t('enabled'),
        minWidth: 80,
        width: {
          unit: UNITS.PERCENT,
          value: 10,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return (
            <RowCell {...params}>
              <Switch readonly checked={params.item.enabled} />
            </RowCell>
          );
        },
      },
      {
        dataKey: 'phoneCountryCode',
        title: t('phoneCountryCode'),
        width: {
          unit: UNITS.PERCENT,
          value: 10,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'phoneNumber',
        title: t('phoneNumber'),
        width: {
          unit: UNITS.PERCENT,
          value: 10,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'role',
        title: t('role'),
        width: {
          unit: UNITS.PERCENT,
          value: 8,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <MultiItemsCell {...params} list={params.item.role} />;
        },
      },
      {
        dataKey: 'organization',
        title: t('organization'),
        minWidth: 180,
        width: {
          unit: UNITS.PERCENT,
          value: 8,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { merchants } = params.item.roleScope;
          const merchantsNames = merchants.map((merchant) => merchant.name);
          return <MultiItemsCell {...params} list={merchantsNames} />;
        },
      },
      {
        dataKey: 'roleScope',
        title: t('merchantTerminalName'),
        minWidth: 180,
        width: {
          unit: UNITS.PERCENT,
          value: 8,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { merchants } = params.item.roleScope;
          const terminalsList = merchants.flatMap((merchant) =>
            merchant.merchantTerminals.map((terminal) => terminal.name)
          );
          return <MultiItemsCell {...params} list={terminalsList} />;
        },
      },
      {
        dataKey: 'created',
        title: t('created'),
        minWidth: 180,
        width: {
          unit: UNITS.PERCENT,
          value: 8,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return (
            <RowCell {...params}>
              {getFormattedDate(params.item.created, ['hour', 'minute', 'second'])}
            </RowCell>
          );
        },
      },
    ] as IColumn<IUser>[];

    if (checkPermission({ list: [PERMISSIONS.CAN_UPDATE_USER] })) {
      columns.push({
        dataKey: 'id',
        title: t('actions'),
        minWidth: 80,
        width: {
          unit: UNITS.PERCENT,
          value: 8,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { PATH, PARAMS } = ROUTES.USERS.SUB_PATH.EDIT;
          const { id } = params.item;
          const userPath = generatePath(PATH, {
            [PARAMS.ID]: id,
          });

          const onEditUser = () => navigate(userPath);

          return (
            <RowCell {...params}>
              <Button
                variant='icon'
                endIcon={<ICONS_MAP.Edit />}
                iconSize={18}
                onClick={onEditUser}
              />
            </RowCell>
          );
        },
      });
    }

    return columns;
  }, []);

  return !data ? [] : usersColumns;
};
