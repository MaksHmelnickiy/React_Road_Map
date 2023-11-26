import React from 'react';
import { useTranslation } from 'react-i18next';

import { IPspInfo } from 'api/psp/types';
import Detail from 'components/Detail';

import { ViewBlockContainer, ViewBlockTitle } from '../../../../styled';
import { SectionDataList } from '../styled';

import useGeneralInfoData from './useGeneralInfoData';

interface IGeneralInfo {
  details?: IPspInfo;
}

const GeneralInfo = ({ details }: IGeneralInfo) => {
  const { t } = useTranslation('translation', { keyPrefix: 'psp.infoBlock' });

  const generalInfo = useGeneralInfoData(details);

  if (!details) {
    return null;
  }

  return (
    <ViewBlockContainer>
      <ViewBlockTitle variant='bold' size='xl'>
        {t('generalInfo')}
      </ViewBlockTitle>
      <SectionDataList>
        {generalInfo.map((info, index) => (
          <Detail key={index} title={info.key} text={info.value} small />
        ))}
      </SectionDataList>
    </ViewBlockContainer>
  );
};

export default GeneralInfo;
