import React from 'react';
import { useTranslation } from 'react-i18next';

import { ITerminalLinkParameter } from 'api/terminalsLinks/types';
import DataGrid from 'components/Grids/DataGrid';
import { appReactMemo } from 'hocs';
import { ROUTES } from 'routes/config/constants';
import { SectionContainer } from 'routes/pages/AuthorizedStack/PspManagement/TerminalsLinks/TerminalLink/View/styled';
import { ViewBlockTitle } from 'routes/pages/AuthorizedStack/styled';

import { useTerminalParametersData } from './useTerminalLinkParamteresData';

interface IParameter {
  details?: ITerminalLinkParameter[];
}

const Parameters = ({ details }: IParameter) => {
  const { t } = useTranslation('translation', { keyPrefix: 'terminalLink.parameters' });

  const parameterColumns = useTerminalParametersData(details);

  const pagination = React.useMemo(() => {
    return {
      isDefaultGridPagination: true,
    };
  }, []);

  if (!details) {
    return null;
  }

  return (
    <SectionContainer>
      <ViewBlockTitle variant='bold' size='xl'>
        {t('title')}
      </ViewBlockTitle>
      <DataGrid
        data={details || []}
        columns={parameterColumns}
        total={details.length}
        pagination={pagination}
        pageKey={
          ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINALS_LINKS.SUB_PATH.TERMINAL_LINK.PATH
        }
      />
    </SectionContainer>
  );
};

export default appReactMemo(Parameters);
