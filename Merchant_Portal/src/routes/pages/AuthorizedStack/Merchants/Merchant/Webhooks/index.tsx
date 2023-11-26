import React from 'react';
import { useTranslation } from 'react-i18next';

import { IMerchantWebhooksEvents } from 'api/merchants/types';
import Detail from 'components/Detail';
import { appReactMemo } from 'hocs';
import { useGetDetailFields } from 'hooks/useGetDetailFields';

import { ViewBlockContainer, ViewBlockTitle } from '../../../styled';
import { SectionDataList } from '../styled';

interface IWebhooks {
  details?: IMerchantWebhooksEvents;
}

const Webhooks = ({ details }: IWebhooks) => {
  const { t } = useTranslation('translation', { keyPrefix: 'merchant.webhooks' });

  const webhooksInfo = useGetDetailFields({
    initPrefix: 'merchant.webhooks',
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
        {webhooksInfo.map((info, index) => (
          <Detail key={index} title={info.key} text={info.value} small />
        ))}
      </SectionDataList>
    </ViewBlockContainer>
  );
};

export default appReactMemo(Webhooks);
