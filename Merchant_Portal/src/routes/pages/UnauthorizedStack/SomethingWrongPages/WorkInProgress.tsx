import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ICONS_MAP } from 'constants/icons';

import WrongPageLayout from './WrongPageLayout';

const WorkInProgress: React.FC = () => {
  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  return (
    <WrongPageLayout
      title='Work in progress'
      subtitle='Front-end team are working on this page. Please wait a few time.'
      icon={<ICONS_MAP.Maintenance />}
      buttonText='Back'
      onClick={onBack}
    />
  );
};

export default WorkInProgress;
