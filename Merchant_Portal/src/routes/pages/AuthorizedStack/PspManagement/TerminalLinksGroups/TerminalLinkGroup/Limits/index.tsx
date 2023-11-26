import { useTranslation } from 'react-i18next';

import FiltersButton from 'components/FiltersButton';
import { appReactMemo } from 'hocs';
import { usePageNavigation } from 'hooks/usePageNavigation';
import { useGetTerminalLinkGroupLimits } from 'queries/terminalsLinks';
import { ViewBlockTitle } from 'routes/pages/AuthorizedStack/styled';

import { SectionContainer } from '../../../Psp/View/styled';
import { Filters, LimitsDataGrid } from '../../styled';

import { useTLGroupLimitsData } from './useTLGroupLimitsData';

interface ILimitsProps {
  id: string;
}

const Limits = ({ id }: ILimitsProps) => {
  const { t } = useTranslation();

  const { pageFilters, onApplyFilters, updateSortParams, onPerPageChange } =
    usePageNavigation();

  const { data, isLoading, isFetching } = useGetTerminalLinkGroupLimits(pageFilters, id);

  const limitColumns = useTLGroupLimitsData(data?.data);

  return (
    <SectionContainer>
      <ViewBlockTitle variant='bold' size='xl'>
        {t('terminalLink.limits.title')}
      </ViewBlockTitle>
      {data?.hasResults && (
        <Filters>
          <FiltersButton
            intlPrefix='terminalLinkGroup.limits.columns'
            columnsFilters={data?.filters}
            onChange={onApplyFilters}
            initialFilters={pageFilters.search}
          />
        </Filters>
      )}
      <LimitsDataGrid
        isLoading={isLoading}
        isFetching={isFetching}
        data={data?.data || []}
        total={data?.totalElements}
        sort={data?.sort}
        onSort={updateSortParams}
        onPerPageChange={onPerPageChange}
        columns={limitColumns}
        pageFilters={pageFilters}
        filters={data?.filters}
        baseOffColumns={[]}
        isTopToolbar={data?.hasResults}
        isBottomToolbar={data?.hasResults}
      />
    </SectionContainer>
  );
};

export default appReactMemo(Limits);
