import React from 'react';
import { useTranslation } from 'react-i18next';

import { IClientTopErrors } from 'api/clients/types';
import DetailGrid from 'components/Grids/DetailGrid';
import { appReactMemo } from 'hocs';

import { BlockContainer, BlockTitle } from '../styled';

import { useTopErrorsColumns } from './useTopErrorsColumns';

interface IClientTopErrorsInfo {
  details?: IClientTopErrors;
}

const TopErrors: React.FC<IClientTopErrorsInfo> = ({ details }) => {
  const { t } = useTranslation('translation');

  const errorsColumns = useTopErrorsColumns(details?.listCustomerMethodErrorStats);

  return (
    <BlockContainer>
      <BlockTitle as='p'>{t('client.topErrors.title')}</BlockTitle>
      <DetailGrid
        details={details?.listCustomerMethodErrorStats}
        columns={errorsColumns}
      />
    </BlockContainer>
  );
};

export default appReactMemo(TopErrors);
