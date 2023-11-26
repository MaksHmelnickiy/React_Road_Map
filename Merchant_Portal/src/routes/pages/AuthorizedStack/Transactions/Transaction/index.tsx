import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { PERMISSIONS } from 'api/auth/constants';
import { ITransactionEditData } from 'api/transactions/types';
import BreadCrumb from 'components/BreadCrumb';
import Button from 'components/Button';
import Loader from 'components/Loader';
import RBAC from 'components/RBAC';
import { Tab } from 'components/Tabs';
import Typography from 'components/Typography';
import { ICONS_MAP } from 'constants/icons';
import {
  useGetTransactionCard,
  useGetTransactionCustomer,
  useGetTransactionDetails,
} from 'queries/transactions';
import { ViewContainer, ViewTitleWrapper } from 'routes/pages/AuthorizedStack/styled';
import { LoaderContainer } from 'routes/styled';

import { getModalData } from './useEditTransactionModal/helpers';

import BaseDetails from './BaseDetails';
import OperationHistory from './OperationHistory';
import { HeaderContainer, TabsContainer } from './styled';
import { useEditTransactionModal } from './useEditTransactionModal';
import Webhooks from './Webhooks';

const tabs = [
  'transaction.baseDetails.title',
  'transaction.operationHistory.title',
  'transaction.webhooks.title',
];

const Transaction = () => {
  const { t } = useTranslation();
  const { id = '' } = useParams();

  const [selectedTab, setSelectedTab] = React.useState(0);
  const [showEditTransactionModal] = useEditTransactionModal();

  const { data: baseDetails, isLoading: isLoadingDetails } = useGetTransactionDetails(id);

  const { data: cardDetails, isLoading: isLoadingCard } = useGetTransactionCard(id);

  const { data: customerDetails, isLoading: isLoadingCustomer } =
    useGetTransactionCustomer(id);

  const modalData: ITransactionEditData = React.useMemo(
    () => getModalData(baseDetails, customerDetails),
    [baseDetails, customerDetails]
  );

  const onOpenModal = React.useCallback(() => {
    showEditTransactionModal({
      data: modalData,
      id,
    });
  }, [modalData]);

  const onTabChange = React.useCallback((_e: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  }, []);

  if (isLoadingDetails || isLoadingCard || isLoadingCustomer) {
    return (
      <LoaderContainer>
        <Loader size={100} />
      </LoaderContainer>
    );
  }

  const renderTabContent = () => {
    switch (selectedTab) {
      case 0:
        return (
          <BaseDetails
            baseDetails={baseDetails}
            cardDetails={cardDetails}
            customerDetails={customerDetails}
          />
        );
      case 1:
        return <OperationHistory />;
      case 2:
        return <Webhooks />;
      default:
        return null;
    }
  };

  return (
    <ViewContainer>
      <HeaderContainer>
        <div>
          <ViewTitleWrapper>
            <Typography as='h3'>{`${t('transaction.title')}: `}</Typography>
            <Typography variant='regular' size='xxl'>
              {id}
            </Typography>
          </ViewTitleWrapper>
          <BreadCrumb />
        </div>
        <RBAC list={[PERMISSIONS.CAN_UPDATE_SINGLE_TRANSACTION]}>
          <Button onClick={onOpenModal} variant='outlined' startIcon={<ICONS_MAP.Edit />}>
            {t('common.edit')}
          </Button>
        </RBAC>
      </HeaderContainer>
      <TabsContainer value={selectedTab} onChange={onTabChange}>
        {tabs.map((tab, index) => (
          <Tab key={index} label={t(tab as never)} />
        ))}
      </TabsContainer>
      {renderTabContent()}
    </ViewContainer>
  );
};

export default Transaction;
