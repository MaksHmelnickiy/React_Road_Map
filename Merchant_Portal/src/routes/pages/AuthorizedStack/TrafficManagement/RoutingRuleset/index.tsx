import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  BETWEEN_LIST_RULESETS,
  HOURS_LIST_RULESETS,
  INITIAL_ON_COLUMNS_RULESETS,
} from 'api/routingRuleset/constants';
import FiltersButton from 'components/FiltersButton';
import DataGrid from 'components/Grids/DataGrid';
import Loader from 'components/Loader';
import { useGroupEdit } from 'hooks/useGroupEdit';
import { usePageNavigation } from 'hooks/usePageNavigation';
import { useGetAllRoutingRules } from 'queries/routingRules';
import { ROUTES } from 'routes/config/constants';
import { LoaderContainer } from 'routes/styled';

import {
  ButtonsContainer,
  Filters,
  PageContainer,
  PageHeader,
  PageTitle,
} from '../../styled';

import { ITEMS } from './GroupEdit/helpers';

import GroupEdit from './GroupEdit';
import { useRoutingRulesetGridData } from './useRoutingRulesetGridData';

const RoutingRules = () => {
  const { t } = useTranslation();
  // const navigate = useNavigate();

  const { pageFilters, onPerPageChange, onPageChange, onApplyFilters, updateSortParams } =
    usePageNavigation();

  const { data, isLoading, isFetching, refetch } = useGetAllRoutingRules(pageFilters);

  const {
    propertiesList,
    isBarOpen,
    groupState,
    activateItemHandler,
    changeItemState,
    clearStates,
    // setIsBarOpen,
  } = useGroupEdit(ITEMS);

  const routingRulesColumns = useRoutingRulesetGridData(data?.data);

  // const onCreate = React.useCallback(() => {
  //   const { PATH, SUB_PATH } = ROUTES.TRAFFIC_MANAGEMENT.SUB_PATH.ROUTING_RULESET;
  //   navigate(SUB_PATH.CREATE, { state: PATH });
  // }, []);

  // const onGroupEditOpen = React.useCallback(() => {
  //   setIsBarOpen(true);
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
        <PageTitle as='h1'>{t('routingRuleset.title')}</PageTitle>
        <ButtonsContainer>
          {/* <Button variant='outlined' onClick={onGroupEditOpen}> */}
          {/*  {t('groupEdit.title')} */}
          {/* </Button> */}
          {/* <RBAC list={[PERMISSIONS.CAN_CREATE_RULESET]}> */}
          {/*  <Button variant='primary' onClick={onCreate}> */}
          {/*    {t('routingRuleset.create')} */}
          {/*  </Button> */}
          {/* </RBAC> */}
        </ButtonsContainer>
      </PageHeader>
      {data?.hasResults && (
        <Filters>
          <FiltersButton
            intlPrefix='routingRuleset.columns'
            columnsFilters={data?.filters}
            onChange={onApplyFilters}
            initialFilters={pageFilters.search}
            config={{
              betweenList: BETWEEN_LIST_RULESETS,
              hoursList: HOURS_LIST_RULESETS,
            }}
          />
        </Filters>
      )}
      <DataGrid
        isLoading={isLoading}
        isFetching={isFetching}
        data={data?.data || []}
        total={data?.totalElements}
        columns={routingRulesColumns}
        pageFilters={pageFilters}
        sort={data?.sort}
        filters={data?.filters}
        onPageChange={onPageChange}
        onPerPageChange={onPerPageChange}
        onSort={updateSortParams}
        isTopToolbar={data?.hasResults}
        isBottomToolbar={data?.hasResults}
        pageKey={ROUTES.TRAFFIC_MANAGEMENT.SUB_PATH.ROUTING_RULESET.PATH}
        notVirtualized={false}
        baseOnColumns={INITIAL_ON_COLUMNS_RULESETS}
        refetch={refetch}
      />
      <GroupEdit
        propertiesList={propertiesList}
        groupState={groupState}
        isOpen={isBarOpen}
        filters={pageFilters}
        clearStates={clearStates}
        isAllSelected
        activateItemHandler={activateItemHandler}
        changeItemState={changeItemState}
      />
    </PageContainer>
  );
};

export default RoutingRules;
