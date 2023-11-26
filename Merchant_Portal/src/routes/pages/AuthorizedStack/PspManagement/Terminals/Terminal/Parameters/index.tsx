import React from 'react';
import { useTranslation } from 'react-i18next';

import { IPspTerminalParameter } from 'api/terminals/types';
import DataGrid from 'components/Grids/DataGrid';
import { appReactMemo } from 'hocs';
import { ROUTES } from 'routes/config/constants';
import { ViewBlockTitle } from 'routes/pages/AuthorizedStack/styled';

import { useTerminalParametersData } from './useTerminalParametersData';

interface IParameter {
  details?: IPspTerminalParameter[];
}

const Parameters = ({ details }: IParameter) => {
  const { t } = useTranslation('translation', { keyPrefix: 'terminal.parameters' });

  const pspColumns = useTerminalParametersData(details);

  const pagination = React.useMemo(() => {
    return {
      isDefaultGridPagination: true,
    };
  }, []);

  if (!details) {
    return null;
  }

  return (
    <div>
      <ViewBlockTitle variant='bold' size='xl'>
        {t('title')}
      </ViewBlockTitle>
      <DataGrid
        data={details || []}
        columns={pspColumns}
        total={details.length}
        pagination={pagination}
        pageKey={ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINALS.SUB_PATH.TERMINAL.PATH}
      />
    </div>
  );
};

export default appReactMemo(Parameters);
