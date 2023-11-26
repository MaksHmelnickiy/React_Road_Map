import React from 'react';
import { useTranslation } from 'react-i18next';

import { INITIAL_OFF_COLUMNS_TERMINAL_LINKS_GROUPS } from 'api/terminalsLinks/constants';
import FiltersButton from 'components/FiltersButton';
import DataGrid from 'components/Grids/DataGrid';
import Loader from 'components/Loader';
import { usePageNavigation } from 'hooks/usePageNavigation';
import { useGetAllTerminalLinksGroups } from 'queries/terminalsLinks';
import { ROUTES } from 'routes/config/constants';
import { LoaderContainer } from 'routes/styled';

import { Filters, PageContainer, PageHeader, PageTitle } from '../../styled';

import { useTerminalLinksGroupsData } from './useTerminalLinksGroupsGridData';

const TerminalLinksGroups = () => {
  const { t } = useTranslation();

  const { pageFilters, onPerPageChange, onPageChange, onApplyFilters, updateSortParams } =
    usePageNavigation();

  const { data, isLoading, isFetching, refetch } =
    useGetAllTerminalLinksGroups(pageFilters);

  const columns = useTerminalLinksGroupsData(data?.data);

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
        <PageTitle as='h1'>{t('terminalLinksGroups.title')}</PageTitle>
      </PageHeader>
      {data?.hasResults && (
        <Filters>
          <FiltersButton
            intlPrefix='terminalLinksGroups.columns'
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
        columns={columns}
        pageFilters={pageFilters}
        sort={data?.sort}
        filters={data?.filters}
        onPageChange={onPageChange}
        onPerPageChange={onPerPageChange}
        onSort={updateSortParams}
        isTopToolbar={data?.hasResults}
        baseOffColumns={INITIAL_OFF_COLUMNS_TERMINAL_LINKS_GROUPS}
        isBottomToolbar={data?.hasResults}
        pageKey={ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINAL_LINKS_GROUPS.PATH}
        refetch={refetch}
      />
    </PageContainer>
  );
};

export default TerminalLinksGroups;
