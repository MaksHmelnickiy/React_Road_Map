import React from 'react';
import { useTranslation } from 'react-i18next';

import { IPspParameter } from 'api/psp/types';
import DataGrid from 'components/Grids/DataGrid';
import { appReactMemo } from 'hocs';
import { ROUTES } from 'routes/config/constants';
import { ViewBlockTitle } from 'routes/pages/AuthorizedStack/styled';

import { SectionContainer } from '../styled';

import { usePspDetailsGridData } from './usePspDetailsGridData';

interface IParameter {
  details?: IPspParameter[];
}

const Parameters = ({ details }: IParameter) => {
  const { t } = useTranslation('translation', { keyPrefix: 'psp.infoBlock' });

  const pspColumns = usePspDetailsGridData(details);

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
        {t('parameters')}
      </ViewBlockTitle>
      <DataGrid
        data={details || []}
        columns={pspColumns}
        total={details.length}
        pagination={pagination}
        pageKey={ROUTES.PSP_MANAGEMENT.SUB_PATH.PSP.SUB_PATH.VIEW.PATH}
      />
    </SectionContainer>
  );
};

export default appReactMemo(Parameters);
