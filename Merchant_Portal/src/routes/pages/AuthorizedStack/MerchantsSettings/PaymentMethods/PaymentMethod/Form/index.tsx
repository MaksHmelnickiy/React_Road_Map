import React from 'react';
import { useTranslation } from 'react-i18next';
import { MutateOptions } from 'react-query/types/core/types';
import { useNavigate } from 'react-router-dom';

import { Form, Formik, FormikHelpers } from 'formik';

import {
  ICashierPaymentMethod,
  IPaymentMethodPayload,
  IUpdatePaymentMethod,
} from 'api/cashierPaymentMethods/types';
import BreadCrumb from 'components/BreadCrumb';
import Button from 'components/Button';
import FieldWrapper from 'components/Form/FieldWrapper';
import FromikInput from 'components/Form/FormikInput';
import { appReactMemo } from 'hocs';
import { ROUTES } from 'routes/config/constants';
import { PageContainer } from 'routes/pages/AuthorizedStack/styled';
import { getFormErrors } from 'utils/common';
import { QueryError } from 'utils/types';

import { IPaymentMethodForm, validationSchema } from './helpers';
import LogoSection from './LogoSection';
import MerchantSection from './MerchantSection';
import { Actions, Body, Code, Header, PaymentCodeData, Title } from './styled';

interface IForm {
  isNew?: boolean;
  onSave: (
    values: IPaymentMethodPayload,
    options?: MutateOptions<
      ICashierPaymentMethod,
      QueryError,
      IPaymentMethodPayload | IUpdatePaymentMethod
    >
  ) => void;
  initialValues: IPaymentMethodForm;
  methodCode?: string;
}

const PaymentMethodForm = ({ isNew, onSave, initialValues, methodCode }: IForm) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onSubmitForm = React.useCallback(
    (
      { organization: _, ...values }: IPaymentMethodForm,
      helpers: FormikHelpers<IPaymentMethodForm>
    ) => {
      onSave(values, {
        onSuccess: () => {
          navigate(ROUTES.MERCHANTS_SETTINGS.SUB_PATH.PAYMENT_METHODS.PATH);
        },
        onError: (resp: QueryError) => {
          helpers.setErrors(
            getFormErrors({ getTranslation: t, errors: resp?.response?.data?.errors })
          );
        },
        onSettled: () => {
          helpers.setSubmitting(false);
        },
      });
    },
    []
  );

  const onBack = () => {
    navigate(ROUTES.MERCHANTS_SETTINGS.SUB_PATH.PAYMENT_METHODS.PATH);
  };

  return (
    <PageContainer>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmitForm}
        validationSchema={validationSchema}
      >
        {({ isValid, isSubmitting }) => (
          <Form>
            <Header>
              <div>
                <Title as='h3'>{t('paymentMethods.create')}</Title>
                <BreadCrumb />
              </div>
              <Actions>
                <Button type='button' variant='outlined' onClick={onBack}>
                  {t('common.cancel')}
                </Button>
                <Button
                  type='submit'
                  variant='primary'
                  disabled={!isValid || isSubmitting}
                >
                  {isNew ? t('common.create') : t('common.save')}
                </Button>
              </Actions>
            </Header>
            <Body>
              <MerchantSection />
              <FieldWrapper title={t('paymentMethods.form.name')}>
                <FromikInput
                  name='name'
                  sizeVariant='sm'
                  placeholder={t('paymentMethods.form.name')}
                />
              </FieldWrapper>
              <LogoSection />
              {methodCode && (
                <FieldWrapper title={t('paymentMethods.form.name')}>
                  <PaymentCodeData>
                    <Code size='sm'>{methodCode}</Code>
                    <Button
                      variant='icon'
                      iconSize={20}
                      enableCopyToClipboard
                      copyText={methodCode}
                    />
                  </PaymentCodeData>
                </FieldWrapper>
              )}
            </Body>
          </Form>
        )}
      </Formik>
    </PageContainer>
  );
};

export default appReactMemo(PaymentMethodForm);
