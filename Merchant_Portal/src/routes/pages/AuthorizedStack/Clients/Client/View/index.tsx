import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath, useNavigate, useParams } from 'react-router-dom';

import BreadCrumb from 'components/BreadCrumb';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Typography from 'components/Typography';
import { ICONS_MAP } from 'constants/icons';
import {
  useGetClientGeneralInfo,
  useGetClientPaymentMethod,
  useGetClientStats,
  useGetClientTopErrors,
} from 'queries/clients';
import { ROUTES } from 'routes/config/constants';
import { ViewContainer, ViewTitleWrapper } from 'routes/pages/AuthorizedStack/styled';
import { LoaderContainer } from 'routes/styled';

import GeneralInfo from './GeneralInfo';
import PaymentMethod from './PaymentMethod';
import Stats from './Stats';
import { ButtonContainer, DetailsContainer, HeaderContainer, Wrapper } from './styled';
import TopErrors from './TopErrors';
import ClientTransactions from './Transactions';

const Client = () => {
  const { t } = useTranslation();
  const { id = '' } = useParams();
  const navigate = useNavigate();

  const { data: clientInfo, isLoading: isLoadingDetails } = useGetClientGeneralInfo(id);

  const { data: clientStats, isLoading: isLoadingStats } = useGetClientStats(id);

  const { data: clientTopErrors, isLoading: isLoadingErrors } = useGetClientTopErrors(id);

  const { data: clientPaymentMethod, isLoading: isLoadingPaymentMethod } =
    useGetClientPaymentMethod(id);

  const createManualTransaction = React.useCallback(() => {
    const { PATH, PARAMS } = ROUTES.CLIENTS.SUB_PATH.CLIENT.SUB_PATH.MANUAL_TRANSACTION;
    const manualTransactionPath = generatePath(PATH, { [PARAMS.ID]: id });

    navigate(manualTransactionPath);
  }, []);

  const editClient = React.useCallback(() => {
    const { PATH, PARAMS } = ROUTES.CLIENTS.SUB_PATH.EDIT;
    const clientPath = generatePath(PATH, { [PARAMS.ID]: id });

    navigate(clientPath);
  }, []);

  if (isLoadingDetails || isLoadingStats || isLoadingErrors || isLoadingPaymentMethod) {
    return (
      <LoaderContainer>
        <Loader size={100} />
      </LoaderContainer>
    );
  }

  return (
    <ViewContainer>
      <HeaderContainer>
        <div>
          <ViewTitleWrapper>
            <Typography as='h3'>{`${t('client.title')}: `}</Typography>
            <Typography variant='regular' size='xxl'>
              {clientInfo?.merchantCustomerId}
            </Typography>
          </ViewTitleWrapper>
          <BreadCrumb />
        </div>
        <ButtonContainer>
          <Button variant='outlined' onClick={createManualTransaction}>
            {t('manualTransaction.title')}
          </Button>
          <Button variant='outlined' onClick={editClient} startIcon={<ICONS_MAP.Edit />}>
            {t('common.edit')}
          </Button>
        </ButtonContainer>
      </HeaderContainer>
      <DetailsContainer>
        <Wrapper>
          <GeneralInfo details={clientInfo} />
          <PaymentMethod details={clientPaymentMethod} />
        </Wrapper>
        <Wrapper>
          <Stats details={clientStats} />
          <TopErrors details={clientTopErrors} />
        </Wrapper>
      </DetailsContainer>
      <ClientTransactions clientId={id} />
    </ViewContainer>
  );
};

export default Client;
