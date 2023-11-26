import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import BreadCrumb from 'components/BreadCrumb';
import Loader from 'components/Loader';
import Typography from 'components/Typography';
import { appReactMemo } from 'hocs';
import { useGetPsp } from 'queries/psp';
import { ViewContainer, ViewTitleWrapper } from 'routes/pages/AuthorizedStack/styled';
import { LoaderContainer } from 'routes/styled';

import GeneralInfo from './GeneralInfo';
import Parameters from './Parameters';
import ReferralAgreement from './ReferralAgreement';

const PspView = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'psp' });

  const { id } = useParams();

  const { data, isLoading } = useGetPsp(id);

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
            {data?.bankInfoBlock.name}
          </Typography>
        </ViewTitleWrapper>
        <BreadCrumb />
      </div>
      <GeneralInfo details={data?.bankInfoBlock} />
      <Parameters details={data?.bankParametersBlockView} />
      <ReferralAgreement details={data?.bankConditionsBlock} />
    </ViewContainer>
  );
};

export default appReactMemo(PspView);
