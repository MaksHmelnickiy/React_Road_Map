import React from 'react';
import { useTranslation } from 'react-i18next';

import { ICONS_MAP } from 'constants/icons';
import { useAuthentication } from 'queries/session';

import WrongPageLayout from './WrongPageLayout';

interface IAccessForbidden {
  onReset?: () => void;
}

const AccessForbidden: React.FC<IAccessForbidden> = ({ onReset }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'accessForbidden' });
  const { logout } = useAuthentication();

  const onBack = async () => {
    await logout();
    onReset?.();
  };

  return (
    <WrongPageLayout
      title={t('title')}
      subtitle={t('subtitle')}
      buttonText={t('backButton')}
      icon={<ICONS_MAP.PermissionDenied />}
      onClick={onBack}
    />
  );
};

export default AccessForbidden;
