import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import BreadCrumb from 'components/BreadCrumb';
import Loader from 'components/Loader';
import Typography from 'components/Typography';
import { useGetTerminal } from 'queries/terminals';
import { ViewContainer, ViewTitleWrapper } from 'routes/pages/AuthorizedStack/styled';
import { LoaderContainer } from 'routes/styled';

import GeneralInfo from './GeneralInfo';
import Parameters from './Parameters';

const Terminal = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'terminal' });

  const { id } = useParams();

  const { data: terminalInfo, isLoading } = useGetTerminal(id);

  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader size={100} />
      </LoaderContainer>
    );
  }

  return (
    <ViewContainer>
      <div>
        <ViewTitleWrapper>
          <Typography as='h3'>{`${t('title')}: `}</Typography>
          <Typography variant='regular' size='xxl'>
            {terminalInfo?.name}
          </Typography>
        </ViewTitleWrapper>
        <BreadCrumb />
      </div>
      <GeneralInfo details={terminalInfo} />
      <Parameters details={terminalInfo?.parameters} />
    </ViewContainer>
  );
};

export default Terminal;
