import React from 'react';
import { useTranslation } from 'react-i18next';

import FiltersButton from 'components/FiltersButton';
import { appReactMemo } from 'hocs';
import { usePageNavigation } from 'hooks/usePageNavigation';
import { useGetTerminalLinkLimits } from 'queries/terminalsLinks';
import { SectionContainer } from 'routes/pages/AuthorizedStack/PspManagement/TerminalsLinks/TerminalLink/View/styled';
import { ViewBlockTitle } from 'routes/pages/AuthorizedStack/styled';

import { Filters, LimitsDataGrid } from './styled';
import { useTerminalLimitsData } from './useTerminalLinkLimitsData';

interface ILimits {
  id?: string;
}

const Limits = ({ id }: ILimits) => {
  const { t } = useTranslation();

  const { pageFilters, onApplyFilters } = usePageNavigation({ size: 100 });

  const { data, isLoading, isFetching } = useGetTerminalLinkLimits(pageFilters, id);

  const limitColumns = useTerminalLimitsData(data?.data);

  return (
    <SectionContainer>
      <ViewBlockTitle variant='bold' size='xl'>
        {t('terminalLink.limits.title')}
      </ViewBlockTitle>
      <Filters>
        <FiltersButton
          intlPrefix='terminalLink.limits.columns'
          columnsFilters={data?.filters}
          onChange={onApplyFilters}
          initialFilters={pageFilters.search}
        />
      </Filters>
      <LimitsDataGrid
        isLoading={isLoading}
        isFetching={isFetching}
        data={data?.data || []}
        columns={limitColumns}
        pageFilters={pageFilters}
        filters={data?.filters}
        isTopToolbar={false}
        isBottomToolbar={false}
      />
    </SectionContainer>
  );
};

export default appReactMemo(Limits);
