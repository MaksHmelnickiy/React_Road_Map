import React from 'react';
import { useTranslation } from 'react-i18next';

import Accordion from 'components/Accordion';
import FiltersButton from 'components/FiltersButton';
import DataGrid from 'components/Grids/DataGrid';
import Loader from 'components/Loader';
import { LOCAL_SEARCH_KEY } from 'constants/common';
import { appReactMemo } from 'hocs';
import { usePageNavigation } from 'hooks/usePageNavigation';
import { useGetTransactions } from 'queries/transactions';
import { ROUTES } from 'routes/config/constants';
import { Filters, GridSearch } from 'routes/pages/AuthorizedStack/styled';
import { LoaderContainer } from 'routes/styled';
import { TSearch } from 'utils/types';

import { BlockTitle } from '../styled';

import { GridContainer, IconWrapper, Title } from './styled';
import { useClientTransactionsData } from './useClientTransactionsData';

const BASE_OFF_COLUMNS = [
  'paymentMethod',
  'paymentIdentifier',
  'tokenPresence',
  'customerAccessToken',
];

interface IClientTransactions {
  clientId?: string;
}

const ClientTransactions = ({ clientId }: IClientTransactions) => {
  const { t } = useTranslation();

  const {
    pageFilters,
    onPerPageChange,
    onPageChange,
    onApplyFilters,
    updateSearchFilter,
    localSearch,
  } = usePageNavigation({
    search: {
      customerId: {
        operation: ':',
        value: clientId,
      },
    },
  });

  const { data, isLoading, isFetching } = useGetTransactions(pageFilters);

  const transactionsColumns = useClientTransactionsData(data?.data);

  const onSearchChange = React.useCallback(
    (searchText: string) => {
      const typeFilter = data?.filters?.[LOCAL_SEARCH_KEY];
      updateSearchFilter({
        columnKey: LOCAL_SEARCH_KEY,
        operation: typeFilter?.listOperations?.[0] || '~',
        value: searchText,
      });
    },
    [data?.filters]
  );

  const applyFilters = React.useCallback(
    (filters: TSearch) => {
      onApplyFilters({
        customerId: pageFilters?.search?.customerId,
        ...filters,
      });
    },
    [pageFilters?.search?.type]
  );

  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader size={100} />
      </LoaderContainer>
    );
  }

  return (
    <Accordion
      isInitialOpen={false}
      header={({ isOpen, openHandler }) => (
        <Title onClick={() => openHandler()}>
          <IconWrapper $isOpen={isOpen} />
          <BlockTitle as='p'>{t('client.transactions.title')}</BlockTitle>
        </Title>
      )}
    >
      <GridContainer>
        <Filters>
          {data?.filters?.[LOCAL_SEARCH_KEY] && (
            <GridSearch value={localSearch} onChange={onSearchChange} />
          )}
          <FiltersButton
            intlPrefix='transactions.columns'
            columnsFilters={data?.filters}
            onChange={applyFilters}
            initialFilters={pageFilters?.search}
          />
        </Filters>
        <DataGrid
          isLoading={isLoading}
          isFetching={isFetching}
          data={data?.data || []}
          total={data?.totalElements}
          columns={transactionsColumns}
          pageFilters={pageFilters}
          onPageChange={onPageChange}
          onPerPageChange={onPerPageChange}
          baseOffColumns={BASE_OFF_COLUMNS}
          pageKey={ROUTES.CLIENTS.SUB_PATH.CLIENT.PATH}
        />
      </GridContainer>
    </Accordion>
  );
};

export default appReactMemo(ClientTransactions);
