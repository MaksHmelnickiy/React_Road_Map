import React from 'react';
import { useTranslation } from 'react-i18next';

import { ITransactionCard } from 'api/transactions/types';
import Detail from 'components/Detail';
import { appReactMemo } from 'hocs';

import { ViewBlockContainer, ViewBlockTitle } from '../../../../styled';
import { DetailsWrapper } from '../../styled';

import useCardData from './useCardData';

interface ICardDetails {
  details?: ITransactionCard;
}

const CardDetails = ({ details }: ICardDetails) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'transaction.cardDetails',
  });

  const cardInfo = useCardData(details);

  if (!details) {
    return null;
  }

  return (
    <ViewBlockContainer>
      <ViewBlockTitle as='p'>{t('title')}</ViewBlockTitle>
      <DetailsWrapper>
        {cardInfo.map((info, index) => {
          const { key, value, icon } = info;

          return (
            <Detail
              key={key + index}
              title={key}
              text={value}
              icon={icon?.() || ''}
              enabledIcon={!icon}
              small
            />
          );
        })}
      </DetailsWrapper>
    </ViewBlockContainer>
  );
};

export default appReactMemo(CardDetails);
