import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath } from 'react-router-dom';

import { ITransactionDetails } from 'api/transactions/types';
import Link from 'components/Link';
import { ICONS_MAP } from 'constants/icons';
import { useGetDictionaries } from 'queries/data';
import { ROUTES } from 'routes/config/constants';
import { getFormattedDate } from 'utils/common';

interface IElementInfo {
  key: string;
  value?: React.ReactNode | (() => React.ReactNode);
  icon?: () => React.ReactElement;
}

const useGeneralInfoData = (details?: ITransactionDetails): IElementInfo[][] => {
  const { t } = useTranslation();
  const { data: dictionaries } = useGetDictionaries();

  return React.useMemo(() => {
    if (!details) {
      return [];
    }

    const {
      basic: {
        id,
        status,
        resolution,
        description,
        source,
        executionId,
        merchantTransactionId,
        resultCode,
        merchantTerminalId,
        merchantTerminalName,
        referenceId,
      },
      amount: { initialAmount, initialCurrency, processedAmount, processedCurrency, fee },
      timeline: { createdAt, updatedAt },
    } = details;
    return [
      [
        {
          key: t('transaction.baseDetails.created'),
          value: getFormattedDate(createdAt),
          icon: () => {
            return <ICONS_MAP.Calendar />;
          },
        },
        { key: t('transaction.baseDetails.id'), value: id },
        {
          key: t('transaction.baseDetails.merchant'),
          value: () => {
            const { PATH, PARAMS } = ROUTES.MERCHANTS.SUB_PATH.MERCHANT;

            const path = generatePath(PATH, {
              [PARAMS.ID]: merchantTerminalId,
            });

            return <Link to={path}>{merchantTerminalName}</Link>;
          },
        },
        {
          key: t('transaction.baseDetails.resolution'),
          value: resolution,
        },
        {
          key: t('transaction.baseDetails.status'),
          value: t(`dictionaries.transactionState.${status}` as never),
        },
        {
          key: t('transaction.baseDetails.executionId'),
          value: executionId,
        },
        {
          key: t('transaction.baseDetails.merchantTransactionId'),
          value: merchantTransactionId,
        },
        {
          key: t('transaction.baseDetails.resultCode'),
          value: () => {
            const resultCodeData = dictionaries?.resultCodeMap[resultCode];
            if (resultCodeData) {
              const { code, message, description } = resultCodeData;
              return `${code} - ${message}${description && ` (${description})`}`;
            }
            return resultCode;
          },
        },
        {
          key: t('transaction.baseDetails.referenceId'),
          value: () => {
            const { PATH, PARAMS } = ROUTES.TRANSACTIONS.SUB_PATH.VIEW;

            const path = generatePath(PATH, {
              [PARAMS.ID]: details?.basic.referenceId,
            });

            return <Link to={path}>{referenceId || '-'}</Link>;
          },
        },
        {
          key: t('transaction.baseDetails.description'),
          value: description,
        },
        {
          key: t('transaction.baseDetails.source'),
          value: source ? t('common.yes') : t('common.no'),
        },
      ],
      [
        {
          key: t('transaction.baseDetails.initialAmount'),
          value: initialAmount,
          icon: () => {
            return <ICONS_MAP.Bank />;
          },
        },
        {
          key: t('transaction.baseDetails.initialCurrency'),
          value: initialCurrency,
        },
        {
          key: t('transaction.baseDetails.processedAmount'),
          value: processedAmount,
        },
        {
          key: t('transaction.baseDetails.processedCurrency'),
          value: processedCurrency,
        },
        {
          key: t('transaction.baseDetails.fee'),
          value: fee,
        },
        {
          key: t('transaction.baseDetails.updated'),
          value: getFormattedDate(updatedAt),
        },
      ],
    ];
  }, [details]);
};

export default useGeneralInfoData;
