import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath } from 'react-router-dom';

import { ITransactionCustomer } from 'api/transactions/types';
import Link from 'components/Link';
import { ICONS_MAP } from 'constants/icons';
import { ROUTES } from 'routes/config/constants';
import { getFormattedCountry, getFormattedDate } from 'utils/common';

interface IElementInfo {
  key: string;
  value?: string | number;
  icon?: () => React.ReactElement;
  link?: (details?: ITransactionCustomer) => React.ReactNode;
}

const useCustomerData = (details?: ITransactionCustomer): IElementInfo[] => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'transaction.customerDetails',
  });

  return React.useMemo(() => {
    if (!details) {
      return [];
    }

    const {
      firstName,
      accountExternalSystemId,
      city,
      customerAccessToken,
      countryCode,
      addressLine2,
      addressLine1,
      ipAddress,
      email,
      locale,
      lastName,
      phone,
      postalCode,
      userAgent,
      state,
      registrationDate,
      dateOfBirth,
      merchantCustomerId,
      customerId,
    } = details;

    return [
      {
        key: t('name'),
        value: `${firstName || ''} ${lastName || ''}`,
        icon: () => {
          return <ICONS_MAP.Customer />;
        },
      },
      {
        key: t('birth'),
        value: getFormattedDate(dateOfBirth, ['hour', 'minute', 'second']),
      },
      { key: t('accountId'), value: accountExternalSystemId },
      {
        key: t('merchantCustomerId'),
        link: () => {
          if (!customerId) {
            return null;
          }
          const { PATH, PARAMS } = ROUTES.CLIENTS.SUB_PATH.CLIENT;
          const path = generatePath(PATH, { [PARAMS.ID]: customerId });

          return <Link to={path}>{merchantCustomerId}</Link>;
        },
        value: merchantCustomerId,
      },
      { key: t('phone'), value: phone },
      { key: t('email'), value: email },
      { key: t('ipAddress'), value: ipAddress },
      {
        key: t('registrationDate'),
        value: getFormattedDate(registrationDate, ['hour', 'minute', 'second']),
      },
      { key: t('userAgent'), value: userAgent },
      { key: t('locale'), value: locale },
      { key: t('country'), value: getFormattedCountry(countryCode) },
      { key: t('city'), value: city },
      { key: t('state'), value: state },
      { key: t('addressLine1'), value: addressLine1 },
      { key: t('addressLine2'), value: addressLine2 },
      { key: t('postalCode'), value: postalCode },
      { key: t('customerAccessToken'), value: customerAccessToken },
    ];
  }, [details]);
};

export default useCustomerData;
