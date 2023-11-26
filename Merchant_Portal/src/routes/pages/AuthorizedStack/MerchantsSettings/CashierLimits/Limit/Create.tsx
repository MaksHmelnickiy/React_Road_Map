import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath, useLocation, useNavigate } from 'react-router-dom';

import { FormikHelpers } from 'formik';

import { ILimitForm } from 'api/cashierLimits/types';
import { useCreateLimit } from 'queries/cashierLimits';
import { ROUTES } from 'routes/config/constants';
import { getFormErrors } from 'utils/common';
import { QueryError } from 'utils/types';

import LimitForm from './Form';

const CreateLimit = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const location = useLocation();

  const onBack = React.useCallback(() => {
    if (location.state === ROUTES.MERCHANTS_SETTINGS.SUB_PATH.CASHIER_LIMITS.PATH) {
      navigate(-1);
    } else {
      navigate(ROUTES.MERCHANTS_SETTINGS.SUB_PATH.CASHIER_LIMITS.PATH);
    }
  }, []);

  const { mutate: createLimit } = useCreateLimit();

  const onSubmit = React.useCallback(
    (values: ILimitForm, helpers: FormikHelpers<ILimitForm>) => {
      createLimit(values, {
        onError: (resp: QueryError) => {
          helpers.setErrors(
            getFormErrors({ getTranslation: t, errors: resp?.response?.data?.errors })
          );
        },
        onSuccess: (response) => {
          const { PATH } = ROUTES.MERCHANTS_SETTINGS.SUB_PATH.CASHIER_LIMITS;
          const navigatePath = generatePath(PATH, {
            [PATH]: response.id.toString(),
          });

          navigate(navigatePath);
        },
        onSettled: () => {
          helpers.setSubmitting(false);
        },
      });
    },
    []
  );

  return <LimitForm onBack={onBack} onSubmit={onSubmit} isNew />;
};

export default CreateLimit;
