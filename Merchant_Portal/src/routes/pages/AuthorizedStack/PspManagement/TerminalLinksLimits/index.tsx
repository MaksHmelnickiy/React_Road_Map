import React from 'react';
import { useTranslation } from 'react-i18next';

import { INITIAL_OFF_COLUMNS_TERMINAL_LINKS_LIMITS } from 'api/terminalsLinks/constants';
import FiltersButton from 'components/FiltersButton';
import DataGrid from 'components/Grids/DataGrid';
import Loader from 'components/Loader';
import { usePageNavigation } from 'hooks/usePageNavigation';
import { useGetAllTerminalLinksLimits } from 'queries/terminalsLinks';
import { ROUTES } from 'routes/config/constants';
import { LoaderContainer } from 'routes/styled';

import { Filters, PageContainer, PageHeader, PageTitle } from '../../styled';

import { useGetTerminalLinksLimitsGridData } from './useGetTerminalLinksLimitsGridData';

const TerminalLinksLimits = () => {
  const { t } = useTranslation();

  const { pageFilters, onPerPageChange, onPageChange, onApplyFilters, updateSortParams } =
    usePageNavigation();

  const { data, isLoading, isFetching, refetch } =
    useGetAllTerminalLinksLimits(pageFilters);

  const limitsColumns = useGetTerminalLinksLimitsGridData(data?.data);

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
        <PageTitle>{t('terminalLinksLimits.title')}</PageTitle>
      </PageHeader>
      {data?.hasResults && (
        <Filters>
          <FiltersButton
            intlPrefix='terminalLinksLimits.columns'
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
        columns={limitsColumns}
        pageFilters={pageFilters}
        sort={data?.sort}
        filters={data?.filters}
        onPageChange={onPageChange}
        onPerPageChange={onPerPageChange}
        onSort={updateSortParams}
        isTopToolbar={data?.hasResults}
        isBottomToolbar={data?.hasResults}
        pageKey={ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINALS_LINKS_LIMITS.PATH}
        baseOffColumns={INITIAL_OFF_COLUMNS_TERMINAL_LINKS_LIMITS}
        refetch={refetch}
      />
    </PageContainer>
  );
};

export default TerminalLinksLimits;
