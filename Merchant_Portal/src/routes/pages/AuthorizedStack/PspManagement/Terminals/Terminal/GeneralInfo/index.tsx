import React from 'react';
import { useTranslation } from 'react-i18next';

import { IPspTerminal } from 'api/terminals/types';
import Detail from 'components/Detail';
import { ViewBlockContainer, ViewBlockTitle } from 'routes/pages/AuthorizedStack/styled';

import { SectionDataList } from '../styled';

import useGeneralInfoData from './useGeneralInfoData';

interface IGeneralInfo {
  details?: IPspTerminal;
}

const GeneralInfo = ({ details }: IGeneralInfo) => {
  const { t } = useTranslation('translation', { keyPrefix: 'terminal.generalInfo' });

  const generalInfo = useGeneralInfoData(details);

  return (
    <ViewBlockContainer>
      <ViewBlockTitle variant='bold' size='xl'>
        {t('title')}
      </ViewBlockTitle>
      <SectionDataList>
        {generalInfo.map((info, index) => (
          <Detail
            key={index}
            title={info.key}
            text={info.link ? info.link(details) : info.value}
            small
          />
        ))}
      </SectionDataList>
    </ViewBlockContainer>
  );
};

export default GeneralInfo;
