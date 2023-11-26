import React from 'react';
import { useTranslation } from 'react-i18next';

import { IClientGeneralInfo } from 'api/clients/types';
import Detail from 'components/Detail';
import { appReactMemo } from 'hocs';

import { BlockContainer, BlockTitle, DetailsWrapper } from '../styled';

import useGeneralInfoData from './useGeneralInfoData';

interface IClientBaseInfo {
  details?: IClientGeneralInfo;
}

const GeneralInfo = ({ details }: IClientBaseInfo) => {
  const { t } = useTranslation('translation', { keyPrefix: 'client.generalInfo' });

  const generalInfo = useGeneralInfoData(details);

  return (
    <BlockContainer>
      <BlockTitle as='p'>{t('title')}</BlockTitle>
      <DetailsWrapper>
        {generalInfo.map((info, index) => (
          <Detail
            key={index}
            title={info.key}
            text={info.link && info.value ? info.link(details) : info.value.trim()}
            small
          />
        ))}
      </DetailsWrapper>
    </BlockContainer>
  );
};

export default appReactMemo(GeneralInfo);
