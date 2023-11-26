import React from 'react';
import { useTranslation } from 'react-i18next';

import { IClientStats } from 'api/clients/types';
import Detail from 'components/Detail';
import { appReactMemo } from 'hocs';

import { BlockContainer, BlockTitle, DetailsWrapper } from '../styled';

import useStatsData from './useStatsData';

interface IClientStatsInfo {
  details?: IClientStats;
}

const Stats = ({ details }: IClientStatsInfo) => {
  const { t } = useTranslation('translation', { keyPrefix: 'client.stats' });

  const statsInfo = useStatsData(details);

  if (!details) {
    return null;
  }

  return (
    <BlockContainer>
      <BlockTitle as='p'>{t('title')}</BlockTitle>
      <DetailsWrapper>
        {statsInfo.map((info, index) => {
          const { key, value, link } = info;

          return (
            <Detail
              key={key + index}
              title={key}
              text={link ? link(details) : value}
              small
            />
          );
        })}
      </DetailsWrapper>
    </BlockContainer>
  );
};

export default appReactMemo(Stats);
