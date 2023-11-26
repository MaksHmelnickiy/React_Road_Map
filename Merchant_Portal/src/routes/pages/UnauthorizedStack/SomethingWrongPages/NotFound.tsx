import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { ICONS_MAP } from 'constants/icons';

import WrongPageLayout from './WrongPageLayout';

const NotFound = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'notFound' });
  const navigate = useNavigate();

  const onGoMainPage = useCallback(() => {
    navigate('/');
  }, []);

  return (
    <WrongPageLayout
      title={t('title')}
      subtitle={t('subtitle')}
      icon={<ICONS_MAP.NotFound />}
      onClick={onGoMainPage}
    />
  );
};

export default NotFound;
