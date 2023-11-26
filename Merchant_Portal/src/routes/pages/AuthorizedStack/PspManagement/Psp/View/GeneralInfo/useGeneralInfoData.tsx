import React from 'react';
import { useTranslation } from 'react-i18next';

import { IPspInfo } from 'api/psp/types';
import { TRANSACTIONS_TYPE, TRANSACTIONS_TYPE_VARIANTS } from 'api/transactions/contants';
import Tag from 'components/Tags/Tag';
import { useGetDictionaryNaming } from 'hooks/useGetDictionaryNaming';
import { getFormattedDate } from 'utils/common';

import { OperationsContainer } from '../styled';

const useGeneralInfoData = (details?: IPspInfo) => {
  const { t } = useTranslation('translation');

  const getDictionaryNaming = useGetDictionaryNaming();

  const normalizeOperations = (operation: TRANSACTIONS_TYPE[]) => {
    if (!operation.length) {
      return '-';
    }

    return (
      <OperationsContainer>
        {operation.map((item, index) => {
          const tagVariant = TRANSACTIONS_TYPE_VARIANTS[item as never];

          return (
            <Tag
              key={index}
              variant={tagVariant}
              label={t(`dictionaries.transactionType.${item}` as never)}
            />
          );
        })}
      </OperationsContainer>
    );
  };

  return React.useMemo(() => {
    if (!details) {
      return [];
    }

    return [
      { key: t('psp.columns.name'), value: details.name },
      { key: t('psp.columns.email'), value: details.email },
      {
        key: t('psp.columns.pciDssCompliant'),
        value: details.pciDssCompliant ? t('common.yes') : t('common.no'),
      },
      { key: t('psp.columns.adapterCode'), value: details.adapterCode },
      {
        key: t('psp.columns.operation'),
        value: normalizeOperations(details.operation),
      },
      {
        key: t('psp.columns.pciDssExpirationDate'),
        value: getFormattedDate(details.pciDssExpirationDate, [
          'hour',
          'minute',
          'second',
        ]),
      },
      {
        key: t('psp.columns.paymentMethod'),
        value:
          getDictionaryNaming('paymentMethodMap', details.paymentMethod) ||
          details.paymentMethod ||
          '-',
      },
      {
        key: t('psp.columns.enabled'),
        value: details.enabled ? t('common.yes') : t('common.no'),
      },
      {
        key: t('psp.infoBlock.adapterCodeHash'),
        value: details.adapterCodeHash,
      },
    ];
  }, [details]);
};

export default useGeneralInfoData;
