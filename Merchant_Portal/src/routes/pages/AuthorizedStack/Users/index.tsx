import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import FiltersButton from 'components/FiltersButton';
import DataGrid from 'components/Grids/DataGrid';
import Loader from 'components/Loader';
import { usePageNavigation } from 'hooks/usePageNavigation';
import { useGetAllUsers } from 'queries/users';
import { ROUTES } from 'routes/config/constants';
import { LoaderContainer } from 'routes/styled';

import { Filters, PageContainer, PageHeader, PageTitle } from '../styled';

import { useUsersGridData } from './useUsersGridData';

const Users = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { pageFilters, onPerPageChange, onPageChange, onApplyFilters, updateSortParams } =
    usePageNavigation();

  const { data, isLoading, isFetching, refetch } = useGetAllUsers(pageFilters);

  const usersColumns = useUsersGridData(data?.data);

  const onCreateNewUser = React.useCallback(() => {
    navigate(ROUTES.USERS.SUB_PATH.CREATE, { state: ROUTES.USERS.PATH });
  }, []);

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
        <PageTitle>{t('users.title')}</PageTitle>
        <Button variant='primary' onClick={onCreateNewUser}>
          {t('common.create')}
        </Button>
      </PageHeader>
      {data?.hasResults && (
        <Filters>
          <FiltersButton
            intlPrefix='users.columns'
            columnsFilters={data?.filters}
            onChange={onApplyFilters}
            initialFilters={pageFilters.search}
          />
        </Filters>
      )}
      <DataGrid
        isLoading={isLoading}
        isFetching={isFetching}
        data={data?.data || []}
        total={data?.totalElements}
        columns={usersColumns}
        pageFilters={pageFilters}
        sort={data?.sort}
        filters={data?.filters}
        onPageChange={onPageChange}
        onPerPageChange={onPerPageChange}
        onSort={updateSortParams}
        isTopToolbar={data?.hasResults}
        isBottomToolbar={data?.hasResults}
        pageKey={ROUTES.USERS.PATH}
        refetch={refetch}
      />
    </PageContainer>
  );
};

export default Users;
