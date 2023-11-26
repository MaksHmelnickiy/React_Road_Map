import React from 'react';
import { useTranslation } from 'react-i18next';

import { INITIAL_OFF_COLUMNS_PSP } from 'api/psp/contants';
import FiltersButton from 'components/FiltersButton';
import DataGrid from 'components/Grids/DataGrid';
import Loader from 'components/Loader';
import { usePageNavigation } from 'hooks/usePageNavigation';
import { useGetAllPsp } from 'queries/psp';
import { ROUTES } from 'routes/config/constants';
import { LoaderContainer } from 'routes/styled';

import { Filters, PageContainer, PageHeader, PageTitle } from '../../styled';

import { usePspGridData } from './usePspGridData';

const Psp = () => {
  const { t } = useTranslation();

  const { pageFilters, onPerPageChange, onPageChange, onApplyFilters, updateSortParams } =
    usePageNavigation();

  const { data, isLoading, isFetching, refetch } = useGetAllPsp(pageFilters);

  const pspColumns = usePspGridData(data?.data);

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
        <PageTitle as='h1'>{t('psp.title')}</PageTitle>
      </PageHeader>
      {data?.hasResults && (
        <Filters>
          <FiltersButton
            intlPrefix='psp.columns'
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
        columns={pspColumns}
        pageFilters={pageFilters}
        sort={data?.sort}
        filters={data?.filters}
        onPageChange={onPageChange}
        onPerPageChange={onPerPageChange}
        onSort={updateSortParams}
        isTopToolbar={data?.hasResults}
        isBottomToolbar={data?.hasResults}
        pageKey={ROUTES.PSP_MANAGEMENT.SUB_PATH.PSP.PATH}
        baseOffColumns={INITIAL_OFF_COLUMNS_PSP}
        refetch={refetch}
      />
    </PageContainer>
  );
};

export default Psp;
