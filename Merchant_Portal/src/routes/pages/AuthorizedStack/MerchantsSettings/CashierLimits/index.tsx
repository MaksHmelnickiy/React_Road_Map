import React from 'react';
import { useTranslation } from 'react-i18next';

import { INITIAL_OFF_COLUMNS_LIMITS } from 'api/cashierLimits/constants';
import FiltersButton from 'components/FiltersButton';
import DataGrid from 'components/Grids/DataGrid';
import Loader from 'components/Loader';
import { usePageNavigation } from 'hooks/usePageNavigation';
import { useGetCashierLimits } from 'queries/cashierLimits';
import { ROUTES } from 'routes/config/constants';
import {
  Filters,
  PageContainer,
  PageHeader,
  PageTitle,
} from 'routes/pages/AuthorizedStack/styled';
import { LoaderContainer } from 'routes/styled';

import { useCashierLimitsGridData } from './useCashierLimitsGridData';

const CashierLimits = () => {
  const { t } = useTranslation();
  // const navigate = useNavigate();

  const { pageFilters, onPerPageChange, onPageChange, onApplyFilters, updateSortParams } =
    usePageNavigation();

  const { data, isLoading, isFetching, refetch } = useGetCashierLimits(pageFilters);

  const cashierLimitsColumns = useCashierLimitsGridData(data?.data);

  // const onCreateLimit = React.useCallback(() => {
  //   navigate(
  //     ROUTES.MERCHANTS_SETTINGS.SUB_PATH.CASHIER_LIMITS.SUB_PATH.CREATE_LIMIT.PATH,
  //     { state: ROUTES.MERCHANTS_SETTINGS.SUB_PATH.CASHIER_LIMITS.PATH }
  //   );
  // }, []);

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
        <PageTitle>{t('cashierLimits.title')}</PageTitle>
        {/* <RBAC list={[PERMISSIONS.CAN_CREATE_CASHIER_PAYMENT_LIMIT]}> */}
        {/*  <Button onClick={onCreateLimit}>{t('cashierLimits.createButton')}</Button> */}
        {/* </RBAC> */}
      </PageHeader>
      {data?.hasResults && (
        <Filters>
          <FiltersButton
            intlPrefix='cashierLimits.columns'
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
        columns={cashierLimitsColumns}
        pageFilters={pageFilters}
        baseOffColumns={INITIAL_OFF_COLUMNS_LIMITS}
        onPageChange={onPageChange}
        onPerPageChange={onPerPageChange}
        onSort={updateSortParams}
        pageKey={ROUTES.MERCHANTS_SETTINGS.SUB_PATH.CASHIER_LIMITS.PATH}
        refetch={refetch}
      />
    </PageContainer>
  );
};

export default CashierLimits;
