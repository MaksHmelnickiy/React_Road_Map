import React from 'react';
import { useTranslation } from 'react-i18next';

import { useModal } from '@private/modals';
import { Form, Formik, FormikHelpers } from 'formik';

import { IResultCode } from 'api/data/types';
import { ITransactionEditData } from 'api/transactions/types';
import FormikInput from 'components/Form/FormikInput';
import FormikRadioSelect from 'components/Form/FormikRadioSelect';
import FormikSelect from 'components/Form/FormikSelect';
import Loader from 'components/Loader';
import ModalContainer from 'components/ModalContainer';
import { BINARY_OPTIONS } from 'constants/common';
import { useGetDictionaries } from 'queries/data';
import { useUpdateTransactionState } from 'queries/transactions';
import { LoaderContainer } from 'routes/styled';
import { getFormErrors } from 'utils/common';
import { QueryError } from 'utils/types';

import { AVAILABLE_STATUSES } from './helpers';
import { FormContainer } from './styled';

interface IUseEditTransactionModal {
  id: string;
  data: ITransactionEditData;
}

export interface IEditTransactionForm extends IUseEditTransactionModal {
  onClose: () => void;
}

const EditTransactionForm = ({ data, id, onClose }: IEditTransactionForm) => {
  const { t } = useTranslation();

  const { data: dictionaries, isLoading } = useGetDictionaries();

  const { mutate: updateTransaction } = useUpdateTransactionState(id);

  const statusList = React.useMemo(() => {
    const statusOptions = [...new Set([data.state, ...AVAILABLE_STATUSES])];

    return (
      statusOptions?.map((item) => ({
        label: t(`dictionaries.transactionState.${item}` as never),
        value: item,
      })) || []
    );
  }, []);

  const resultCodeList = React.useMemo(() => {
    return (
      dictionaries?.resultCode?.map(({ code, message, description }: IResultCode) => ({
        label: `${code} - ${message}${description && ` (${description})`}`,
        value: code,
      })) || []
    );
  }, []);

  const onSubmit = React.useCallback(
    (values: ITransactionEditData, helpers: FormikHelpers<ITransactionEditData>) => {
      updateTransaction(values, {
        onError: (resp: QueryError) => {
          helpers.setErrors(
            getFormErrors({ getTranslation: t, errors: resp?.response?.data?.errors })
          );
          helpers.setSubmitting(false);
        },
        onSuccess: () => onClose(),
      });
    },
    []
  );

  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );
  }

  return (
    <Formik initialValues={data} onSubmit={onSubmit}>
      {({ isSubmitting, dirty }) => (
        <Form>
          <ModalContainer
            title={t('transaction.editModal.title')}
            rightBtnText={t('modals.save')}
            rightBtnType='submit'
            disableRightBtn={isSubmitting || !dirty}
            onLeftAction={onClose}
            onDismiss={onClose}
            rightBtnLoading={isSubmitting}
          >
            <FormContainer>
              <FormikSelect
                label={t('transaction.editModal.status')}
                name='state'
                options={statusList}
                size='sm'
              />
              <FormikSelect
                label={t('transaction.editModal.resultCode')}
                name='resultCode'
                options={resultCodeList}
                size='sm'
              />
              <FormikInput
                label={t('transaction.editModal.bankTid')}
                placeholder={t('transaction.editModal.bankTid')}
                name='bankTid'
                sizeVariant='sm'
              />
              <FormikInput
                label={t('transaction.editModal.merchantTid')}
                placeholder={t('transaction.editModal.merchantTid')}
                name='merchantTransactionId'
                sizeVariant='sm'
              />
              <FormikInput
                label={t('transaction.editModal.description')}
                placeholder={t('transaction.editModal.description')}
                name='description'
                sizeVariant='sm'
              />
              <FormikInput
                label={t('transaction.editModal.customerId')}
                placeholder={t('transaction.editModal.customerId')}
                name='customerId'
                sizeVariant='sm'
              />
              <FormikRadioSelect
                label={t('transaction.editModal.sendWebhook')}
                name='sendWebhook'
                data={BINARY_OPTIONS}
              />
            </FormContainer>
          </ModalContainer>
        </Form>
      )}
    </Formik>
  );
};

type TUseEditTransactionModalResult = [
  (config: IUseEditTransactionModal) => void,
  () => void
];

export const useEditTransactionModal = (): TUseEditTransactionModalResult => {
  const { closeModal, showModal } = useModal();

  const showConfirmModal = React.useCallback((config: IUseEditTransactionModal) => {
    showModal(<EditTransactionForm {...config} onClose={closeModal} />);
  }, []);

  return [showConfirmModal, closeModal];
};
