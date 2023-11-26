import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath } from 'react-router-dom';

import { IPspTerminal } from 'api/terminals/types';
import Link from 'components/Link';
import { ROUTES } from 'routes/config/constants';

const useGeneralInfoData = (details?: IPspTerminal) => {
  const { t } = useTranslation('translation', { keyPrefix: 'terminal.generalInfo' });

  return React.useMemo(() => {
    if (!details) {
      return [];
    }

    return [
      { key: t('id'), value: details.id },
      { key: t('name'), value: details.name },
      {
        key: t('bankName'),
        value: details.bankName,
        link: (details?: IPspTerminal): React.ReactElement => {
          const path = generatePath(
            ROUTES.PSP_MANAGEMENT.SUB_PATH.PSP.SUB_PATH.VIEW.PATH,
            {
              [ROUTES.PSP_MANAGEMENT.SUB_PATH.PSP.SUB_PATH.VIEW.PARAMS.ID]:
                details?.bankId,
            }
          );
          return <Link to={path}>{details?.bankName}</Link>;
        },
      },
      { key: t('settlementType'), value: details.settlementType },
    ];
  }, [details]);
};

export default useGeneralInfoData;
