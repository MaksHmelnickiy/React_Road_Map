import React from 'react';
import { useTranslation } from 'react-i18next';

import { IMerchantInfo } from 'api/merchants/types';
import Detail from 'components/Detail';
import { appReactMemo } from 'hocs';

import { ViewBlockContainer, ViewBlockTitle } from '../../../styled';
import { SectionDataList } from '../styled';

import useGeneralInfoData from './useGeneralInfoData';

interface IGeneralInfo {
  details?: IMerchantInfo;
}

const GeneralInfo = ({ details }: IGeneralInfo) => {
  const { t } = useTranslation('translation', { keyPrefix: 'merchant.generalInfo' });

  const generalInfo = useGeneralInfoData(details);

  if (!details) {
    return null;
  }

  return (
    <ViewBlockContainer>
      <ViewBlockTitle variant='bold' size='xl'>
        {t('title')}
      </ViewBlockTitle>
      <SectionDataList>
        {generalInfo.map((info, index) => (
          <Detail key={index} title={info.key} text={info.value} small />
        ))}
      </SectionDataList>
    </ViewBlockContainer>
  );
};

export default appReactMemo(GeneralInfo);
