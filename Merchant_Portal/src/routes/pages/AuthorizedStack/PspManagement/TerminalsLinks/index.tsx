import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { PERMISSIONS } from 'api/auth/constants';
import { INITIAL_OFF_COLUMNS_TERMINAL_LINKS } from 'api/terminalsLinks/constants';
import Button from 'components/Button';
import FiltersButton from 'components/FiltersButton';
import DataGrid from 'components/Grids/DataGrid';
import FilteredItemsSelected from 'components/GroupEditSidebar/FilteredItemsSelected';
import Loader from 'components/Loader';
import RBAC from 'components/RBAC';
import { usePageNavigation } from 'hooks/usePageNavigation';
import { useGetAllTerminalsLinks } from 'queries/terminalsLinks';
import { ROUTES } from 'routes/config/constants';
import { LoaderContainer } from 'routes/styled';

import { Filters, PageContainer, PageHeader, PageTitle } from '../../styled';

import { useGroupEdit } from './GroupEdit/hooks/useGroupEdit';

import GroupEditSidebar from './GroupEdit';
import { useTerminalsLinksGridData } from './useTerminalsLinksGridData';

const TerminalsLinks = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { pageFilters, onPerPageChange, onPageChange, onApplyFilters, updateSortParams } =
    usePageNavigation();

  const { data, isLoading, isFetching, refetch } = useGetAllTerminalsLinks(pageFilters);

  const propertiesList = React.useMemo(() => {
    if (!data?.filters) {
      return [];
    }
    const filtersEntries = Object.entries(data?.filters);
    const properties = filtersEntries.reduce<{ name: string; type: string }[]>(
      (prev, [key, value]) => {
        if (value.groupEdit) {
          prev.push({
            name: key,
            type: value.type,
          });
        }

        return prev;
      },
      []
    );

    return properties;
  }, [data?.filters]);

  const {
    isAllEnabled,
    isBarOpen,
    openBar,
    onSave,
    onCancel,
    onCloseBar,
    enableAllHandler,
    groupState,
    activateItemHandler,
    changeItemState,
    isSaving,
  } = useGroupEdit({ filters: pageFilters, propertiesList });

  const pspColumns = useTerminalsLinksGridData(data?.data);

  const filtersIsApplied = React.useMemo(() => {
    const appliedFilters = Object.entries(pageFilters.search || {}).filter(
      ([_, filter]) => filter?.value !== undefined
    );

    return !!appliedFilters.length;
  }, [pageFilters.search]);

  const createTerminalLink = React.useCallback(() => {
    navigate(ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINALS_LINKS.SUB_PATH.CREATE, {
      state: ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINALS_LINKS.PATH,
    });
  }, []);

  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader size={100} />
      </LoaderContainer>
    );
  }

  return (
    <>
      <PageContainer>
        <PageHeader>
          <PageTitle>{t('terminalsLinks.title')}</PageTitle>
          <RBAC list={[PERMISSIONS.CAN_CREATE_TERMINAL_LINK]}>
            <Button onClick={createTerminalLink}>{t('common.create')}</Button>
          </RBAC>
        </PageHeader>
        {data?.hasResults && (
          <Filters>
            <FiltersButton
              intlPrefix='terminalsLinks.columns'
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
          pageKey={ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINALS_LINKS.PATH}
          baseOffColumns={INITIAL_OFF_COLUMNS_TERMINAL_LINKS}
          refetch={refetch}
          customToolbarElement={
            <FilteredItemsSelected
              onOpen={openBar}
              isVisible={filtersIsApplied}
              permission={PERMISSIONS.CAN_UPDATE_TERMINAL_LINK}
            />
          }
        />
      </PageContainer>
      <GroupEditSidebar
        propertiesList={propertiesList}
        groupState={groupState}
        isOpen={isBarOpen}
        onSave={onSave}
        onCancel={onCancel}
        closeBar={onCloseBar}
        isAllEnabled={isAllEnabled}
        enableAll={enableAllHandler}
        activateItemHandler={activateItemHandler}
        changeItemState={changeItemState}
        isSaving={isSaving}
      />
    </>
  );
};

export default TerminalsLinks;
