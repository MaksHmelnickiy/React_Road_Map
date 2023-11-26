import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath } from 'react-router-dom';

import { IClientGeneralInfo } from 'api/clients/types';
import Link from 'components/Link';
import { ROUTES } from 'routes/config/constants';
import { getFormattedCountry, getFormattedDate } from 'utils/common';

const useGeneralInfoData = (details?: IClientGeneralInfo) => {
  const { t } = useTranslation('translation', { keyPrefix: 'client.generalInfo' });

  return React.useMemo(() => {
    if (!details) {
      return [];
    }

    const {
      firstName,
      lastName,
      merchantTerminalName,
      dateOfBirth,
      email,
      phone,
      phoneCountryCode,
      countryCode,
      city,
      state,
      addressLine1,
      addressLine2,
      postalCode,
      terminalLinkDescription,
      registrationDate,
    } = details;

    return [
      {
        key: t('merchantTerminalName'),
        value: merchantTerminalName,
        link: (details?: IClientGeneralInfo): React.ReactElement => {
          const { PATH, PARAMS } = ROUTES.MERCHANTS.SUB_PATH.MERCHANT;

          const path = generatePath(PATH, {
            [PARAMS.ID]: details?.merchantTerminalId,
          });

          return <Link to={path}>{details?.merchantTerminalName}</Link>;
        },
      },
      { key: t('email'), value: email },
      { key: t('country'), value: getFormattedCountry(countryCode) },
      { key: t('city'), value: city },
      { key: t('state'), value: state },
      { key: t('addressLine1'), value: addressLine1 },
      { key: t('addressLine2'), value: addressLine2 },
      { key: t('fullName'), value: `${firstName} ${lastName}` },
      { key: t('phone'), value: `${phoneCountryCode} ${phone}` },
      { key: t('postalCode'), value: postalCode },
      {
        key: t('terminalLinkDescription'),
        value: terminalLinkDescription,
        link: (details?: IClientGeneralInfo): React.ReactElement => {
          const path = generatePath(
            ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINALS_LINKS.SUB_PATH.TERMINAL_LINK.PATH,
            {
              [ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINALS_LINKS.SUB_PATH.TERMINAL_LINK
                .PARAMS.ID]: details?.terminalLinkId,
            }
          );
          return <Link to={path}>{details?.terminalLinkDescription}</Link>;
        },
      },
      {
        key: t('registrationDate'),
        value: getFormattedDate(registrationDate, ['hour', 'minute', 'second']),
      },
      {
        key: t('dateOfBirth'),
        value: getFormattedDate(dateOfBirth, ['hour', 'minute', 'second']),
      },
    ];
  }, [details]);
};

export default useGeneralInfoData;
