import React from 'react';
import { useTranslation } from 'react-i18next';

import { INITIAL_OFF_COLUMNS_MERCHANTS } from 'api/merchants/constants';
import FiltersButton from 'components/FiltersButton';
import DataGrid from 'components/Grids/DataGrid';
import Loader from 'components/Loader';
import { appReactMemo } from 'hocs';
import { usePageNavigation } from 'hooks/usePageNavigation';
import { useGetMerchants } from 'queries/merchants';
import { ROUTES } from 'routes/config/constants';
import { LoaderContainer } from 'routes/styled';

import { Filters, PageContainer, PageHeader, PageTitle } from '../styled';

import { useMerchantsGridData } from './useMerchantsGridData';

const Merchants = () => {
  const { t } = useTranslation();

  const { pageFilters, onPerPageChange, onPageChange, onApplyFilters, updateSortParams } =
    usePageNavigation();

  const { data, isLoading, isFetching, refetch } = useGetMerchants(pageFilters);

  const merchantsColumns = useMerchantsGridData(data?.data);

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
        <PageTitle>{t('merchants.title')}</PageTitle>
      </PageHeader>
      {data?.hasResults && (
        <Filters>
          <FiltersButton
            intlPrefix='merchants.columns'
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
        columns={merchantsColumns}
        pageFilters={pageFilters}
        onPageChange={onPageChange}
        onPerPageChange={onPerPageChange}
        onSort={updateSortParams}
        isTopToolbar={data?.hasResults}
        isBottomToolbar={data?.hasResults}
        pageKey={ROUTES.MERCHANTS.PATH}
        baseOffColumns={INITIAL_OFF_COLUMNS_MERCHANTS}
        refetch={refetch}
      />
    </PageContainer>
  );
};

export default appReactMemo(Merchants);
