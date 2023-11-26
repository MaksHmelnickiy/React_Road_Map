import React from 'react';

import {
  ITransactionCard,
  ITransactionCustomer,
  ITransactionDetails,
} from 'api/transactions/types';
import { appReactMemo } from 'hocs';

import CardDetails from './CardDetails';
import CustomerDetails from './CustomerDetails';
import Details from './Details';
import { Container, CustomerAndCardContainer } from './styled';

interface IBaseDetails {
  baseDetails?: ITransactionDetails;
  customerDetails?: ITransactionCustomer;
  cardDetails?: ITransactionCard;
}

const BaseDetails = ({ baseDetails, customerDetails, cardDetails }: IBaseDetails) => {
  return (
    <Container>
      <Details details={baseDetails} />
      <CustomerAndCardContainer>
        <CustomerDetails details={customerDetails} />
        <CardDetails details={cardDetails} />
      </CustomerAndCardContainer>
    </Container>
  );
};

export default appReactMemo(BaseDetails);
