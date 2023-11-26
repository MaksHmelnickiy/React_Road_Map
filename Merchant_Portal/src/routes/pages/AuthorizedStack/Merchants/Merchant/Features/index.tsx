import React from 'react';
import { useTranslation } from 'react-i18next';

import { IMerchantFeatures } from 'api/merchants/types';
import Detail from 'components/Detail';
import { appReactMemo } from 'hocs';
import { useGetDetailFields } from 'hooks/useGetDetailFields';

import { ViewBlockContainer, ViewBlockTitle } from '../../../styled';
import { SectionDataList } from '../styled';

interface IFeatures {
  details?: IMerchantFeatures;
}

const Features = ({ details }: IFeatures) => {
  const { t } = useTranslation('translation', { keyPrefix: 'merchant.features' });

  const featuresInfo = useGetDetailFields({
    initPrefix: 'merchant.features',
    details,
  });

  if (!details) {
    return null;
  }

  return (
    <ViewBlockContainer>
      <ViewBlockTitle variant='bold' size='xl'>
        {t('title')}
      </ViewBlockTitle>
      <SectionDataList>
        {featuresInfo.map((info, index) => (
          <Detail key={index} title={info.key} text={info.value} small />
        ))}
      </SectionDataList>
    </ViewBlockContainer>
  );
};

export default appReactMemo(Features);
