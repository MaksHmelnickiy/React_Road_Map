import React from 'react';
import { useTranslation } from 'react-i18next';

import { IDateBlockerChecker } from '@private/datepicker';
import { addMonths, format, isAfter, subDays, subMonths } from 'date-fns';

import { INITIAL_ON_COLUMNS_TRANSACTIONS } from 'api/transactions/contants';
import FiltersButton from 'components/FiltersButton';
import DataGrid from 'components/Grids/DataGrid';
import Loader from 'components/Loader';
import { Tab } from 'components/Tabs';
import { LOCAL_SEARCH_KEY, TIMEZONE_MASK } from 'constants/common';
import { usePageNavigation } from 'hooks/usePageNavigation';
import { useGetDictionaries } from 'queries/data';
import { useGetTransactions } from 'queries/transactions';
import { ROUTES } from 'routes/config/constants';
import { LoaderContainer } from 'routes/styled';
import { TSearch } from 'utils/types';

import { Filters, GridSearch, PageContainer, PageHeader, PageTitle } from '../styled';

import { TabsFilter } from './styled';
import { useTransactionsGridData } from './useTransactionsGridData';

const pageKey = ROUTES.TRANSACTIONS.PATH;

const Transactions: React.FC = () => {
  const { t } = useTranslation();

  const { data: dictionaries, isLoading: isLoadingData } = useGetDictionaries();

  const initialFilter = React.useMemo(() => {
    const currentDate = Date.now();
    return {
      search: {
        created: {
          operation: '<>',
          value: {
            min: format(subDays(currentDate, 3), TIMEZONE_MASK),
            max: format(currentDate, TIMEZONE_MASK),
          },
        },
      },
    };
  }, []);

  const {
    pageFilters,
    onPerPageChange,
    onPageChange,
    onApplyFilters,
    updateSearchFilter,
    localSearch,
    updateSortParams,
  } = usePageNavigation(initialFilter);

  const [selectedTab, selectTab] = React.useState(0);

  const tabsList = React.useMemo(() => {
    if (!dictionaries?.transactionType) {
      return [];
    }
    const tabs = ['ALL', ...dictionaries.transactionType];
    const index = tabs.findIndex((tab) => tab === pageFilters.search?.type?.value);
    selectTab(index === -1 ? 0 : index);
    return tabs;
  }, [dictionaries?.transactionType]);

  const { data, isLoading, isFetching, refetch } = useGetTransactions(pageFilters);

  const transactionsColumns = useTransactionsGridData(data?.data);

  const onTabChange = React.useCallback(
    (_e: React.SyntheticEvent, newValue: number) => {
      selectTab(newValue);
      const typeFilter = data?.filters.type;
      updateSearchFilter({
        columnKey: 'type',
        operation: typeFilter?.listOperations?.[0] || '~',
        value: !newValue ? '' : tabsList[newValue],
      });
    },
    [tabsList, data?.filters]
  );

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
        type: pageFilters?.search?.type,
        ...filters,
      });
    },
    [pageFilters?.search?.type]
  );

  const fallbackValues = React.useMemo(() => {
    return {
      created: () => {
        const currentDate = Date.now();
        return {
          min: format(subMonths(currentDate, 3), TIMEZONE_MASK),
          max: format(currentDate, TIMEZONE_MASK),
        };
      },
    };
  }, []);

  const calendarDayChecker: IDateBlockerChecker = React.useCallback(
    ({ date, startDate }) => {
      if (!startDate) {
        return false;
      }
      const maxDate = addMonths(startDate, 3);
      const isDayAfterThreeMonth = isAfter(date, maxDate);

      return isDayAfterThreeMonth;
    },
    []
  );

  if (isLoading || isLoadingData) {
    return (
      <LoaderContainer>
        <Loader size={100} />
      </LoaderContainer>
    );
  }

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>{t('transactions.title')}</PageTitle>
      </PageHeader>
      {data?.hasResults && (
        <>
          <Filters>
            <GridSearch value={localSearch} onChange={onSearchChange} />
            <FiltersButton
              intlPrefix='transactions.columns'
              columnsFilters={data?.filters}
              onChange={applyFilters}
              ignoreList={['type']}
              initialFilters={pageFilters.search}
              fallbackValues={fallbackValues}
              availableDaysChecker={calendarDayChecker}
            />
          </Filters>
          <TabsFilter value={selectedTab} onChange={onTabChange}>
            {tabsList.map((tab) => (
              <Tab key={tab} label={t(`dictionaries.transactionType.${tab}` as never)} />
            ))}
          </TabsFilter>
        </>
      )}
      <DataGrid
        isLoading={isLoading}
        isFetching={isFetching}
        data={data?.data || []}
        total={data?.totalElements}
        sort={data?.sort}
        filters={data?.filters}
        columns={transactionsColumns}
        pageFilters={pageFilters}
        onPageChange={onPageChange}
        onPerPageChange={onPerPageChange}
        onSort={updateSortParams}
        isTopToolbar={data?.hasResults}
        isBottomToolbar={data?.hasResults}
        pageKey={pageKey}
        baseOnColumns={INITIAL_ON_COLUMNS_TRANSACTIONS}
        notVirtualized={false}
        refetch={refetch}
      />
    </PageContainer>
  );
};

export default Transactions;
