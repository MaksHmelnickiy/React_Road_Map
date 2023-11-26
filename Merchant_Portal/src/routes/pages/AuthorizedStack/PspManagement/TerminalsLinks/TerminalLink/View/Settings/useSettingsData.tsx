import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath } from 'react-router-dom';

import { ITerminalLink } from 'api/terminalsLinks/types';
import Link from 'components/Link';
import { useGetDictionaryNaming } from 'hooks/useGetDictionaryNaming';
import { ROUTES } from 'routes/config/constants';

const useSettingsData = (details?: ITerminalLink) => {
  const { t } = useTranslation();

  const getDictionaryNaming = useGetDictionaryNaming();

  return React.useMemo(() => {
    if (!details) {
      return [];
    }

    return [
      { key: t('terminalLink.settings.properties.id'), value: details.id },
      {
        key: t('terminalLink.settings.properties.bankName'),
        value: details?.bankTerminal?.bank?.name,
        link: (details?: ITerminalLink): React.ReactElement => {
          const { id, name } = details?.bankTerminal?.bank || {};
          const { PATH, PARAMS } = ROUTES.PSP_MANAGEMENT.SUB_PATH.PSP.SUB_PATH.VIEW;
          const path = generatePath(PATH, {
            [PARAMS.ID]: id,
          });
          return <Link to={path}>{name}</Link>;
        },
      },
      {
        key: t('terminalLink.settings.properties.paymentMethod'),
        value:
          getDictionaryNaming(
            'paymentMethodMap',
            details?.bankTerminal?.bank?.paymentMethod
          ) ||
          details?.bankTerminal?.bank?.paymentMethod ||
          '-',
      },
      {
        key: t('terminalLink.settings.properties.bankTerminalName'),
        value: details?.bankTerminal?.name,
        link: (details?: ITerminalLink): React.ReactElement => {
          const { id, name } = details?.bankTerminal || {};
          const { PATH, PARAMS } =
            ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINALS.SUB_PATH.TERMINAL;
          const path = generatePath(PATH, {
            [PARAMS.ID]: id,
          });
          return <Link to={path}>{name}</Link>;
        },
      },
      {
        key: t('terminalLink.settings.properties.recurringEnabled'),
        value: details.recurringEnabled ? t('common.yes') : t('common.no'),
      },
      {
        key: t('terminalLink.settings.properties.merchantName'),
        value: details?.merchantTerminal?.merchant?.name,
      },
      {
        key: t('terminalLink.settings.properties.merchantTerminalName'),
        value: details?.merchantTerminal?.merchant?.name,
        link: (details?: ITerminalLink): React.ReactElement => {
          const { id, name } = details?.merchantTerminal || {};
          const { PATH, PARAMS } = ROUTES.MERCHANTS.SUB_PATH.MERCHANT;
          const path = generatePath(PATH, {
            [PARAMS.ID]: id,
          });
          return <Link to={path}>{name}</Link>;
        },
      },
      {
        key: t('terminalLink.settings.properties.description'),
        value: details.description,
      },
      {
        key: t('terminalLink.settings.properties.limitsEnabled'),
        value: details.limitsEnabled ? t('common.yes') : t('common.no'),
      },
      {
        key: t('terminalLink.settings.properties.trusted'),
        value: details.trusted ? t('common.yes') : t('common.no'),
      },
      {
        key: t('terminalLink.settings.properties.enabled'),
        value: details.enabled ? t('common.yes') : t('common.no'),
      },
      {
        key: t('terminalLink.settings.properties.exitIFrame'),
        value: details.exitIFrame ? t('common.yes') : t('common.no'),
      },
      {
        key: t('terminalLink.settings.properties.webhooksEnabled'),
        value: details.webhooksEnabled ? t('common.yes') : t('common.no'),
      },
      {
        key: t('terminalLink.settings.properties.motoEnabled'),
        value: details.motoEnabled ? t('common.yes') : t('common.no'),
      },
    ];
  }, [details]);
};

export default useSettingsData;
