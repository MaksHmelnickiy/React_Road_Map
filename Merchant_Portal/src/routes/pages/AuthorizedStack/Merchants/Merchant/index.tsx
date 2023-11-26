import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath, useNavigate, useParams } from 'react-router-dom';

import { PERMISSIONS } from 'api/auth/constants';
import BreadCrumb from 'components/BreadCrumb';
import Button from 'components/Button';
import Loader from 'components/Loader';
import RBAC from 'components/RBAC';
import { ICONS_MAP } from 'constants/icons';
import { useGetMerchant } from 'queries/merchants';
import { ROUTES } from 'routes/config/constants';
import {
  PageHeader,
  ViewContainer,
  ViewTitle,
} from 'routes/pages/AuthorizedStack/styled';
import { LoaderContainer } from 'routes/styled';

import Features from './Features';
import GeneralInfo from './GeneralInfo';
import PaymentRequiredFields from './PaymentRequiredFields';
import PaymentStatusUrl from './PaymentStatusUrl';
import { DetailsContainer, Wrapper } from './styled';
import Webhooks from './Webhooks';

const Merchant = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'merchant' });
  const { id = '' } = useParams();
  const navigate = useNavigate();

  const { data: merchantInfo, isLoading: isLoadingDetails } = useGetMerchant(id);

  const navigateMerchantStylization = React.useCallback(() => {
    const { PATH, PARAMS } = ROUTES.MERCHANTS.SUB_PATH.MERCHANT.SUB_PATH.STYLIZATION;

    const path = generatePath(PATH, {
      [PARAMS.ID]: id,
    });

    navigate(path);
  }, [id]);

  if (isLoadingDetails) {
    return (
      <LoaderContainer>
        <Loader size={100} />
      </LoaderContainer>
    );
  }

  return (
    <ViewContainer>
      <PageHeader>
        <div>
          <ViewTitle>{merchantInfo?.merchantTerminalInfo.name}</ViewTitle>
          <BreadCrumb />
        </div>
        <RBAC list={[PERMISSIONS.CAN_VIEW_PAYMENT_PAGE_STYLIZATIONS]}>
          <Button
            variant='outlined'
            startIcon={<ICONS_MAP.Stylization2 />}
            iconSize={20}
            onClick={navigateMerchantStylization}
          >
            {t('stylization')}
          </Button>
        </RBAC>
      </PageHeader>
      <DetailsContainer>
        <Wrapper>
          <GeneralInfo details={merchantInfo?.merchantTerminalInfo} />
          <PaymentStatusUrl details={merchantInfo?.merchantTerminalStatusPageUrlConfig} />
        </Wrapper>
        <Wrapper>
          <Webhooks details={merchantInfo?.sendWebhooksEventsView} />
          <PaymentRequiredFields
            details={merchantInfo?.paymentRequestRequiredFieldsView}
          />
          <Features details={merchantInfo?.merchantsFeatures} />
        </Wrapper>
      </DetailsContainer>
    </ViewContainer>
  );
};

export default Merchant;
