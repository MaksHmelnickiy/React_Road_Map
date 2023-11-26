import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { ICONS_MAP } from 'constants/icons';

import WrongPageLayout from './WrongPageLayout';

const Maintenance = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'maintenance' });
  const navigate = useNavigate();

  const onGoMainPage = useCallback(() => {
    navigate('/');
  }, []);

  return (
    <WrongPageLayout
      title={t('title')}
      subtitle={t('subtitle')}
      buttonText={t('button')}
      icon={<ICONS_MAP.Maintenance />}
      onClick={onGoMainPage}
    />
  );
};

export default Maintenance;
