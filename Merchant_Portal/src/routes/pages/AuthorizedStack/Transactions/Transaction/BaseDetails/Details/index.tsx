import React from 'react';
import { useTranslation } from 'react-i18next';

import { ITransactionDetails } from 'api/transactions/types';
import Detail from 'components/Detail';
import { appReactMemo } from 'hocs';

import { ViewBlockTitle } from '../../../../styled';
import { DetailsWrapper } from '../../styled';

import { Container, DividerLine } from './styled';
import useDetailsData from './useDetailsData';

interface IBaseDetails {
  details?: ITransactionDetails;
}

const Details = ({ details }: IBaseDetails) => {
  const { t } = useTranslation();

  const generalInfo = useDetailsData(details);

  if (!details) {
    return null;
  }

  return (
    <Container>
      <ViewBlockTitle as='p'>{t('transaction.baseDetails.title')}</ViewBlockTitle>
      {generalInfo.map((elementInfo, index) => (
        <React.Fragment key={index}>
          <DetailsWrapper>
            {elementInfo.map((info, index) => {
              const { key, value, icon } = info;

              return (
                <Detail
                  key={key + index}
                  title={key}
                  text={typeof value === 'function' ? value() : value}
                  icon={icon?.()}
                  enabledIcon={!icon}
                  small
                />
              );
            })}
          </DetailsWrapper>
          {index !== generalInfo.length - 1 && <DividerLine />}
        </React.Fragment>
      ))}
    </Container>
  );
};

export default appReactMemo(Details);
