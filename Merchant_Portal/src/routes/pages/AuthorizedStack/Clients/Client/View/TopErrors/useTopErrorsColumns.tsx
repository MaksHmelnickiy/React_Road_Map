import React from 'react';
import { useTranslation } from 'react-i18next';

import { IClientTopErrorsData } from 'api/clients/types';
import { IDetailGridColumn } from 'components/Grids/DetailGrid';

export const useTopErrorsColumns = (details?: IClientTopErrorsData[]) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'client.topErrors.columns',
  });

  const topErrorsColumns = React.useMemo(() => {
    return [
      {
        dataKey: 'errorMessage',
        title: t('errorCode'),
        width: {
          value: 80,
        },
        renderCellData: (params) => {
          return <>{`${params.errorCode} ${params.errorMessage}`}</>;
        },
      },
      {
        dataKey: 'count',
        title: '#',
        width: {
          value: 20,
        },
      },
    ] as IDetailGridColumn<IClientTopErrorsData>[];
  }, []);

  return !details?.length ? [] : topErrorsColumns;
};
