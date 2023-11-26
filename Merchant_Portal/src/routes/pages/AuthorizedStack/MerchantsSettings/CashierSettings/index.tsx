import React from 'react';
import { useTranslation } from 'react-i18next';

import FiltersButton from 'components/FiltersButton';
import DataGrid from 'components/Grids/DataGrid';
import Loader from 'components/Loader';
import { usePageNavigation } from 'hooks/usePageNavigation';
import { useGetCashierSettings } from 'queries/cashierSettings';
import { ROUTES } from 'routes/config/constants';
import {
  Filters,
  PageContainer,
  PageHeader,
  PageTitle,
} from 'routes/pages/AuthorizedStack/styled';
import { LoaderContainer } from 'routes/styled';

import { useCashierSettingsGridData } from './useCashierSettingsGridData';

const CashierSettings = () => {
  const { t } = useTranslation();

  const { pageFilters, onPerPageChange, onPageChange, onApplyFilters, updateSortParams } =
    usePageNavigation();

  const { data, isLoading, isFetching, refetch } = useGetCashierSettings(pageFilters);

  const cashierSettingsColumns = useCashierSettingsGridData(data?.data);

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
        <PageTitle>{t('cashierSettings.title')}</PageTitle>
      </PageHeader>
      {data?.hasResults && (
        <Filters>
          <FiltersButton
            intlPrefix='cashierSettings.columns'
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
        columns={cashierSettingsColumns}
        pageFilters={pageFilters}
        onPageChange={onPageChange}
        onPerPageChange={onPerPageChange}
        onSort={updateSortParams}
        pageKey={ROUTES.MERCHANTS_SETTINGS.SUB_PATH.CASHIER_SETTINGS.PATH}
        refetch={refetch}
      />
    </PageContainer>
  );
};

export default CashierSettings;
