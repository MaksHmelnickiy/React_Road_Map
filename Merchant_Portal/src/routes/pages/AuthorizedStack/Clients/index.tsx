import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { INITIAL_OFF_COLUMNS_CLIENTS } from 'api/clients/contants';
import Button from 'components/Button';
import FiltersButton from 'components/FiltersButton';
import DataGrid from 'components/Grids/DataGrid';
import Loader from 'components/Loader';
import { usePageNavigation } from 'hooks/usePageNavigation';
import { useGetClients } from 'queries/clients';
import { ROUTES } from 'routes/config/constants';
import { LoaderContainer } from 'routes/styled';

import {
  ButtonsContainer,
  Filters,
  PageContainer,
  PageHeader,
  PageTitle,
} from '../styled';

import { useClientsGridData } from './useClientsGridData';

const Clients = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { pageFilters, onPerPageChange, onPageChange, onApplyFilters, updateSortParams } =
    usePageNavigation();

  const { data, isLoading, isFetching, refetch } = useGetClients(pageFilters);

  const clientsColumns = useClientsGridData(data?.data);

  const createManualTransaction = React.useCallback(() => {
    navigate(ROUTES.CLIENTS.SUB_PATH.MANUAL_TRANSACTION.PATH);
  }, []);

  const createClient = React.useCallback(() => {
    navigate(ROUTES.CLIENTS.SUB_PATH.CREATE, { state: ROUTES.CLIENTS.PATH });
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
        <PageTitle>{t('clients.title')}</PageTitle>
        <ButtonsContainer>
          <Button variant='outlined' onClick={createManualTransaction}>
            {t('manualTransaction.title')}
          </Button>
          <Button variant='primary' onClick={createClient}>
            {`${t('common.create')} ${t('client.form.profile')}`}
          </Button>
        </ButtonsContainer>
      </PageHeader>
      {data?.hasResults && (
        <Filters>
          <FiltersButton
            intlPrefix='clients.columns'
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
        sort={data?.sort}
        filters={data?.filters}
        columns={clientsColumns}
        pageFilters={pageFilters}
        onPageChange={onPageChange}
        onPerPageChange={onPerPageChange}
        onSort={updateSortParams}
        isTopToolbar={data?.hasResults}
        isBottomToolbar={data?.hasResults}
        pageKey={ROUTES.CLIENTS.PATH}
        baseOffColumns={INITIAL_OFF_COLUMNS_CLIENTS}
        refetch={refetch}
      />
    </PageContainer>
  );
};

export default Clients;
