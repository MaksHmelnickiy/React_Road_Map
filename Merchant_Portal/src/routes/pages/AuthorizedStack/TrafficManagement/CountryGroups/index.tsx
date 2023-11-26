import React from 'react';
import { useTranslation } from 'react-i18next';

import FiltersButton from 'components/FiltersButton';
import DataGrid from 'components/Grids/DataGrid';
import Loader from 'components/Loader';
import { usePageNavigation } from 'hooks/usePageNavigation';
import { useGetAllCountryGroups } from 'queries/countryGroups';
import { ROUTES } from 'routes/config/constants';
import { LoaderContainer } from 'routes/styled';

import { Filters, PageContainer, PageHeader, PageTitle } from '../../styled';

import { useCountryGroupsGridData } from './useCountryGroupsGridData';

const CountryGroups = () => {
  const { t } = useTranslation();

  const { pageFilters, onPerPageChange, onPageChange, onApplyFilters, updateSortParams } =
    usePageNavigation();

  const { data, isLoading, isFetching, refetch } = useGetAllCountryGroups(pageFilters);

  const countryGroupsColumns = useCountryGroupsGridData(data?.data);

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
        <PageTitle>{t('countryGroups.title')}</PageTitle>
      </PageHeader>
      {data?.hasResults && (
        <Filters>
          <FiltersButton
            intlPrefix='countryGroups.columns'
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
        columns={countryGroupsColumns}
        pageFilters={pageFilters}
        onPageChange={onPageChange}
        onPerPageChange={onPerPageChange}
        onSort={updateSortParams}
        pageKey={ROUTES.TRAFFIC_MANAGEMENT.SUB_PATH.COUNTRY_GROUPS.PATH}
        refetch={refetch}
      />
    </PageContainer>
  );
};

export default CountryGroups;
