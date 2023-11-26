import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { ICONS_MAP } from 'constants/icons';

import WrongPageLayout from './WrongPageLayout';

interface ISomethingWrong {
  onReset?: () => void;
}

const SomethingWrong: React.FC<ISomethingWrong> = ({ onReset }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'somethingWrong' });
  const navigate = useNavigate();

  const onBack = () => {
    if (onReset) {
      onReset();
    } else {
      navigate(-1);
    }
  };

  return (
    <WrongPageLayout
      title={t('title')}
      subtitle={t('subtitle')}
      icon={<ICONS_MAP.SomethingWentWrong />}
      buttonText={t('button')}
      onClick={onBack}
    />
  );
};

export default SomethingWrong;
