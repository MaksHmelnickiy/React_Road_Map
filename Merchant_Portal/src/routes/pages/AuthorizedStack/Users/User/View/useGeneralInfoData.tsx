import React from 'react';
import { useTranslation } from 'react-i18next';

import { IUser } from 'api/users/types';
import { getFormattedDate } from 'utils/common';

interface IElementInfo {
  key: string;
  value?: string | number;
}

const useGeneralInfoData = (details?: IUser): IElementInfo[][] => {
  const { t } = useTranslation();

  return React.useMemo(() => {
    if (!details) {
      return [];
    }

    const columns = [
      [
        {
          key: t('user.settings.properties.login'),
          value: details.login,
        },
        {
          key: t('user.settings.properties.status'),
          value: details.enabled ? t('common.enabled') : t('common.disabled'),
        },
        {
          key: t('user.settings.properties.firstName'),
          value: details.firstName,
        },
        {
          key: t('user.settings.properties.lastName'),
          value: details.lastName,
        },
        {
          key: t('user.settings.properties.phone'),
          value: `${details.phoneCountryCode} ${details.phoneNumber}`,
        },
        {
          key: t('user.settings.properties.createdTime'),
          value: getFormattedDate(details.created, ['hour', 'minute', 'second']),
        },
      ],
    ];

    if (details?.roleScope?.fullAccess)
      columns[0].push({
        key: t('user.settings.properties.fullAccess'),
        value: t('common.yes'),
      });

    return columns;
  }, [details]);
};

export default useGeneralInfoData;
