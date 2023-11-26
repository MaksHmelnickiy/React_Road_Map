import React from 'react';
import { useTranslation } from 'react-i18next';

import { IPspConditions } from 'api/psp/types';
import Detail from 'components/Detail';

import { ViewBlockContainer, ViewBlockTitle } from '../../../../styled';
import { SectionDataList } from '../styled';

import useReferralAgreementData from './useReferralAgreementData';

interface IReferralAgreement {
  details?: IPspConditions;
}

const ReferralAgreement = ({ details }: IReferralAgreement) => {
  const { t } = useTranslation('translation', { keyPrefix: 'psp.infoBlock' });

  const referralAgreement = useReferralAgreementData(details);

  if (!details) {
    return null;
  }

  return (
    <ViewBlockContainer>
      <ViewBlockTitle variant='bold' size='xl'>
        {t('referralAgreement')}
      </ViewBlockTitle>
      <SectionDataList>
        {referralAgreement.map((info, index) => (
          <Detail key={index} title={info.key} text={info.value} small />
        ))}
      </SectionDataList>
    </ViewBlockContainer>
  );
};

export default ReferralAgreement;
