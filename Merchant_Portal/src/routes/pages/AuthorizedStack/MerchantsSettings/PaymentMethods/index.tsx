import React from 'react';
import { useTranslation } from 'react-i18next';

import FiltersButton from 'components/FiltersButton';
import DataGrid from 'components/Grids/DataGrid';
import Loader from 'components/Loader';
import { usePageNavigation } from 'hooks/usePageNavigation';
import { useGetCashierPaymentMethods } from 'queries/cashierPaymentMethods';
import { ROUTES } from 'routes/config/constants';
import { usePaymentMethodsGridData } from 'routes/pages/AuthorizedStack/MerchantsSettings/PaymentMethods/usePaymentMethodsGridData';
import {
  Filters,
  PageContainer,
  PageHeader,
  PageTitle,
} from 'routes/pages/AuthorizedStack/styled';
import { LoaderContainer } from 'routes/styled';

const CashierPaymentMethods = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'paymentMethods' });
  // const navigate = useNavigate();

  const { pageFilters, onPerPageChange, onPageChange, onApplyFilters, updateSortParams } =
    usePageNavigation();

  const { data, isLoading, isFetching, refetch } =
    useGetCashierPaymentMethods(pageFilters);

  const methodColumns = usePaymentMethodsGridData(data?.data);

  // const onCreateMethod = React.useCallback(() => {
  //   navigate(ROUTES.MERCHANTS_SETTINGS.SUB_PATH.PAYMENT_METHODS.SUB_PATH.CREATE);
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
        <PageTitle>{t('title')}</PageTitle>
        {/* <RBAC list={[PERMISSIONS.CAN_CREATE_CASHIER_PAYMENT_METHOD]}> */}
        {/*  <Button variant='primary' onClick={onCreateMethod}> */}
        {/*    {t('create')} */}
        {/*  </Button> */}
        {/* </RBAC> */}
      </PageHeader>
      {data?.hasResults && (
        <Filters>
          <FiltersButton
            intlPrefix='paymentMethods.columns'
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
        columns={methodColumns}
        pageFilters={pageFilters}
        onPageChange={onPageChange}
        onPerPageChange={onPerPageChange}
        onSort={updateSortParams}
        isTopToolbar={data?.hasResults}
        isBottomToolbar={data?.hasResults}
        pageKey={ROUTES.MERCHANTS_SETTINGS.SUB_PATH.PAYMENT_METHODS.PATH}
        refetch={refetch}
      />
    </PageContainer>
  );
};

export default CashierPaymentMethods;
