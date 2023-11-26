import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath } from 'react-router-dom';

import { IClientStats } from 'api/clients/types';
import Link from 'components/Link';
import { ROUTES } from 'routes/config/constants';
import { checkNumberValue, getFormattedDate, mathRoundNumber } from 'utils/common';

interface IElementInfo {
  key: string;
  value?: string | number;
  link?: (details?: IClientStats) => React.ReactElement;
}

const useGeneralInfoData = (details?: IClientStats): IElementInfo[] => {
  const { t } = useTranslation('translation', { keyPrefix: 'client.stats' });

  return React.useMemo(() => {
    if (!details) {
      return [];
    }

    const {
      depositAmount,
      depositCount,
      depositAverageAmount,
      successDepositPercentage,
      withdrawAmount,
      withdrawCount,
      withdrawAverageAmount,
      firstTimeDeposit,
      baseCurrency,
      firstDepositTry,
      firstTimeDepositId,
    } = details;

    return [
      {
        key: t('depositAmount'),
        value: checkNumberValue(
          depositAmount,
          `${mathRoundNumber(depositAmount)} ${baseCurrency}`
        ),
      },
      { key: t('depositCount'), value: checkNumberValue(depositCount) },
      {
        key: t('depositAverageAmount'),
        value: checkNumberValue(
          depositAverageAmount,
          `${mathRoundNumber(depositAverageAmount)} ${baseCurrency}`
        ),
      },
      {
        key: t('successDepositPercentage'),
        value: checkNumberValue(
          successDepositPercentage,
          `${mathRoundNumber(successDepositPercentage)}%`
        ),
      },
      {
        key: t('withdrawAmount'),
        value: checkNumberValue(withdrawAmount, `${withdrawAmount} ${baseCurrency}`),
      },
      {
        key: t('withdrawCount'),
        value: checkNumberValue(withdrawCount),
      },
      {
        key: t('withdrawAverageAmount'),
        value: checkNumberValue(
          withdrawAverageAmount,
          `${withdrawAverageAmount} ${baseCurrency}`
        ),
      },
      {
        key: t('firstDepositTry'),
        value: getFormattedDate(firstDepositTry),
      },
      {
        key: t('firstTimeDeposit'),
        value: getFormattedDate(firstTimeDeposit),
      },
      {
        key: t('firstTimeDepositId'),
        link: (details?: IClientStats): React.ReactElement => {
          const { PATH, PARAMS } = ROUTES.TRANSACTIONS.SUB_PATH.VIEW;

          const path = generatePath(PATH, {
            [PARAMS.ID]: firstTimeDepositId,
          });

          return <Link to={path}>{details?.firstTimeDepositId}</Link>;
        },
      },
    ];
  }, [details]);
};

export default useGeneralInfoData;
