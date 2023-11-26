import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { Form, Formik } from 'formik';
import { FormikHelpers } from 'formik/dist/types';

import { IManualTransactionForm } from 'api/manualTransaction/types';
import FormNavigation from 'components/Form/FormNavigation';
import Loader from 'components/Loader';
import { useGetClientGeneralInfo } from 'queries/clients';
import { useCreateManualTransaction } from 'queries/manualTransaction';
import { useRedirectLinkModal } from 'routes/pages/AuthorizedStack/ManualTransaction/useRedirectLink';
import { LoaderContainer } from 'routes/styled';
import { getFormErrors } from 'utils/common';
import { QueryError } from 'utils/types';

import { PageContainer } from '../styled';

import BillingInfo from './Form/BillingInfo';
import ClientInfo from './Form/ClientInfo';
import Crm from './Form/Crm';
import General from './Form/General';
import Merchant from './Form/Merchant';
import Transaction from './Form/Transaction';

import Header from './Header';
import { initialValues, NAVIGATION_LIST, validationSchema } from './helpers';
import { PageBody, SectionList } from './styled';

const ManualTransaction = () => {
  const { id = '' } = useParams();

  const { t } = useTranslation();

  const { mutate: createManualTransaction } = useCreateManualTransaction();

  const { data: clientInfo, isLoading: isLoadingDetails } = useGetClientGeneralInfo(id);

  const [showLinkModal] = useRedirectLinkModal();

  const onSubmit = React.useCallback(
    (values: IManualTransactionForm, helpers: FormikHelpers<IManualTransactionForm>) => {
      createManualTransaction(values, {
        onError: (resp: QueryError) => {
          helpers.setErrors(
            getFormErrors({ getTranslation: t, errors: resp?.response?.data?.errors })
          );
          helpers.setSubmitting(false);
        },
        onSuccess: (response) => {
          helpers.setSubmitting(false);
          helpers.resetForm();
          showLinkModal({ link: response.redirectLink });
        },
      });
    },
    []
  );

  const initialData = React.useMemo(() => {
    if (!id || (id && !clientInfo)) {
      return initialValues;
    }

    const phoneCode = clientInfo!.phoneCountryCode;
    const phoneCountryCode =
      phoneCode && phoneCode.startsWith('+') ? phoneCode : `+${phoneCode}`;

    return {
      merchantTerminalId: null,
      paymentMethod: null,
      strategy: null,
      amount: null,
      currency: null,
      description: null,
      merchantTransactionId: null,
      mt4Id: null,
      terminalLinkId: null,
      rulesetId: null,
      customer: {
        merchantCustomerId: clientInfo!.id || null,
        firstName: clientInfo!.firstName || null,
        lastName: clientInfo!.lastName || null,
        dateOfBirth: clientInfo!.dateOfBirth || null,
        email: clientInfo!.email || null,
        phoneCountryCode: phoneCountryCode || null,
        phone: clientInfo!.phone || null,
        registrationDate: clientInfo!.registrationDate || null,
        countryCode: clientInfo!.countryCode || null,
        city: clientInfo!.city || null,
        state: clientInfo!.state || null,
        addressLine1: clientInfo!.addressLine1 || null,
        addressLine2: clientInfo!.addressLine2 || null,
        postalCode: clientInfo!.postalCode || null,
      },
    };
  }, [clientInfo]);

  if (id && isLoadingDetails) {
    return (
      <LoaderContainer>
        <Loader size={100} />
      </LoaderContainer>
    );
  }

  return (
    <PageContainer>
      <Formik
        initialValues={initialData}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <Header />
          <PageBody>
            <FormNavigation
              navigationList={NAVIGATION_LIST}
              keyPrefix='manualTransaction.sections'
            />
            <SectionList>
              <General />
              <Transaction />
              <Merchant />
              <Crm />
              <ClientInfo />
              <BillingInfo />
            </SectionList>
          </PageBody>
        </Form>
      </Formik>
    </PageContainer>
  );
};

export default ManualTransaction;
