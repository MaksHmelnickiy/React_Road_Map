import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import DataGrid from 'components/Grids/DataGrid';
import Loader from 'components/Loader';
import { useGetRoles } from 'queries/rolesPermissions';
import { ROUTES } from 'routes/config/constants';
import { LoaderContainer } from 'routes/styled';

import { PageContainer, PageHeader, PageTitle } from '../../styled';

import { useRolesAndPermissionsGridData } from './useRolesAndPermissionsGridData';

const RolesAndPermissions = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'rolesAndPermissions' });
  const navigate = useNavigate();

  const { data, isLoading, isFetching, refetch } = useGetRoles({ withPermissions: true });
  const rolesAndPermissionsColumns = useRolesAndPermissionsGridData(data);

  const createClient = React.useCallback(() => {
    navigate(ROUTES.SETTINGS.SUB_PATH.ROLES_AND_PERMISSIONS.SUB_PATH.CREATE);
  }, []);

  const paginationConfig = React.useMemo(() => ({ isDefaultGridPagination: true }), []);

  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader size={100} />
      </LoaderContainer>
    );
  }

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>{t('title')}</PageTitle>
        <Button variant='primary' onClick={createClient}>
          {t('role.create.title')}
        </Button>
      </PageHeader>
      <DataGrid
        isLoading={isLoading}
        isFetching={isFetching}
        data={data || []}
        total={data?.length}
        columns={rolesAndPermissionsColumns}
        pageKey={ROUTES.SETTINGS.SUB_PATH.ROLES_AND_PERMISSIONS.PATH}
        pagination={paginationConfig}
        refetch={refetch}
      />
    </PageContainer>
  );
};

export default RolesAndPermissions;
