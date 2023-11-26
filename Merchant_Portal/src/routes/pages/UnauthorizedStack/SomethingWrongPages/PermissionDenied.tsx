import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { ICONS_MAP } from 'constants/icons';
import { useAvailablePath } from 'hooks/useRedirectLayout';
import { useAuthentication } from 'queries/session';
import { CustomButton } from 'routes/pages/UnauthorizedStack/SomethingWrongPages/WrongPageLayout/styled';

import { OptionalButtons } from './WrongPageLayout/styled';

import WrongPageLayout from './WrongPageLayout';

interface IPermissionDenied {
  onReset?: () => void;
}

const PermissionDenied: React.FC<IPermissionDenied> = ({ onReset }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { logout } = useAuthentication();
  const availablePath = useAvailablePath();

  const onGoMainPage = useCallback(() => {
    navigate('/');
    onReset?.();
  }, []);

  const onLogout = async () => {
    await logout();
    onReset?.();
  };

  return (
    <WrongPageLayout
      title={t('permissionDenied.title')}
      subtitle={t('permissionDenied.subtitle')}
      icon={<ICONS_MAP.PermissionDenied />}
    >
      <OptionalButtons $isDouble={!!availablePath}>
        {availablePath && (
          <CustomButton variant='primary' onClick={onGoMainPage}>
            {t('common.goHomeButton')}
          </CustomButton>
        )}
        <CustomButton variant='primary' onClick={onLogout}>
          {t('logout.title')}
        </CustomButton>
      </OptionalButtons>
    </WrongPageLayout>
  );
};

export default PermissionDenied;
