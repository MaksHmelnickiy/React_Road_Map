import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath, useNavigate, useParams } from 'react-router-dom';

import { FormikHelpers } from 'formik';

import { IClientForm } from 'api/clients/types';
import Loader from 'components/Loader';
import { useEditClient, useGetClientGeneralInfo } from 'queries/clients';
import { ROUTES } from 'routes/config/constants';
import { LoaderContainer } from 'routes/styled';
import { getFormErrors } from 'utils/common';
import { QueryError } from 'utils/types';

import { useShowConfirmModal } from './Form/useShowConfirmModal';

import ClientForm from './Form';

const EditClient = () => {
  const { id = '' } = useParams();
  const { t } = useTranslation();

  const navigate = useNavigate();

  const showConfirm = useShowConfirmModal();

  const { data: clientInfo, isLoading: isLoadingDetails } = useGetClientGeneralInfo(id);

  const onBack = React.useCallback(() => {
    const { PATH, PARAMS } = ROUTES.CLIENTS.SUB_PATH.CLIENT;
    const navigatePath = generatePath(PATH, { [PARAMS.ID]: id });

    navigate(navigatePath);
  }, []);

  const { mutate: editClient } = useEditClient();

  const onEdit = (payload: IClientForm, helpers: FormikHelpers<IClientForm>) =>
    editClient(
      { id, payload },
      {
        onError: (resp: QueryError) => {
          helpers.setErrors(
            getFormErrors({ getTranslation: t, errors: resp?.response?.data?.errors })
          );
        },
        onSuccess: onBack,
        onSettled: () => {
          helpers.setSubmitting(false);
        },
      }
    );

  const onSubmit = React.useCallback(
    (values: IClientForm, helpers: FormikHelpers<IClientForm>) => {
      showConfirm({
        condition: !!(
          values.terminalLinkId && values.terminalLinkId !== clientInfo?.terminalLinkId
        ),
        helpers,
        callback: () => {
          onEdit(values, helpers);
        },
      });
    },
    []
  );

  const initialData = React.useMemo((): IClientForm => {
    const phoneCode = clientInfo?.phoneCountryCode;
    const phoneCountryCode =
      phoneCode && phoneCode.startsWith('+') ? phoneCode : `+${phoneCode}`;
    return {
      merchantTerminalId: clientInfo?.merchantTerminalId || null,
      merchantCustomerId: clientInfo?.merchantCustomerId || null,
      terminalLinkId: clientInfo?.terminalLinkId || null,
      firstName: clientInfo?.firstName || null,
      lastName: clientInfo?.lastName || null,
      email: clientInfo?.email || null,
      dateOfBirth: clientInfo?.dateOfBirth || null,
      countryCode: clientInfo?.countryCode || null,
      city: clientInfo?.city || null,
      state: clientInfo?.state || null,
      addressLine1: clientInfo?.addressLine1 || null,
      addressLine2: clientInfo?.addressLine2 || null,
      phoneCountryCode: phoneCode ? phoneCountryCode : null,
      phone: clientInfo?.phone || null,
      postalCode: clientInfo?.postalCode || null,
      registrationDate: clientInfo?.registrationDate || null,
    };
  }, [clientInfo]);

  if (isLoadingDetails) {
    return (
      <LoaderContainer>
        <Loader size={100} />
      </LoaderContainer>
    );
  }

  return <ClientForm onBack={onBack} initialValues={initialData} onSubmit={onSubmit} />;
};

export default EditClient;
