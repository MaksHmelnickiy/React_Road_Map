import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath, useLocation, useNavigate } from 'react-router-dom';

import { FormikHelpers } from 'formik';

import { IClientForm } from 'api/clients/types';
import { useCreateClient } from 'queries/clients';
import { ROUTES } from 'routes/config/constants';
import { getFormErrors } from 'utils/common';
import { QueryError } from 'utils/types';

import { useShowConfirmModal } from './Form/useShowConfirmModal';

import ClientForm from './Form';

const CreateClient = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const { mutate: createClient } = useCreateClient();
  const showConfirm = useShowConfirmModal();

  const onBack = React.useCallback(() => {
    if (location.state === ROUTES.CLIENTS.PATH) {
      navigate(-1);
    } else {
      navigate(ROUTES.CLIENTS.PATH);
    }
  }, []);

  const onCreate = (values: IClientForm, helpers: FormikHelpers<IClientForm>) =>
    createClient(values, {
      onError: (resp: QueryError) => {
        helpers.setErrors(
          getFormErrors({ getTranslation: t, errors: resp?.response?.data?.errors })
        );
      },
      onSuccess: (response) => {
        const { PATH, PARAMS } = ROUTES.CLIENTS.SUB_PATH.CLIENT;
        const navigatePath = generatePath(PATH, { [PARAMS.ID]: response.id });

        navigate(navigatePath);
      },
      onSettled: () => {
        helpers.setSubmitting(false);
      },
    });

  const onSubmit = React.useCallback(
    (values: IClientForm, helpers: FormikHelpers<IClientForm>) => {
      showConfirm({
        condition: !!values.terminalLinkId,
        helpers,
        callback: () => {
          onCreate(values, helpers);
        },
      });
    },
    []
  );

  return <ClientForm onBack={onBack} onSubmit={onSubmit} isNew />;
};

export default CreateClient;
