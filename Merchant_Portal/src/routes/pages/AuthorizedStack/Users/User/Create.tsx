import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath, useLocation, useNavigate } from 'react-router-dom';

import { FormikHelpers } from 'formik/dist/types';

import { formatUserFormValues } from 'api/users/normalizers';
import { IUserForm } from 'api/users/types';
import { useCreateUser } from 'queries/users';
import { ROUTES } from 'routes/config/constants';
import { userInitialValues } from 'routes/pages/AuthorizedStack/Users/User/helpers';
import { getFormErrors } from 'utils/common';
import { QueryError } from 'utils/types';

import UserForm from './Form';

const CreateUser = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const { mutate: createUser } = useCreateUser();

  const onBack = React.useCallback(() => {
    if (location.state === ROUTES.USERS.PATH) {
      navigate(-1);
    } else {
      navigate(ROUTES.USERS.PATH);
    }
  }, []);

  const onSubmit = React.useCallback(
    (values: IUserForm, helpers: FormikHelpers<IUserForm>) => {
      const formattedValues = formatUserFormValues(values);
      createUser(formattedValues, {
        onError: (resp: QueryError) => {
          const errors = resp?.response?.data?.fieldMessages;

          if (errors) {
            helpers.setErrors(
              getFormErrors({
                getTranslation: t,
                errors: resp?.response?.data?.fieldMessages,
              })
            );
          }
        },
        onSuccess: (response) => {
          const userId = response.id;
          const { PATH, PARAMS } = ROUTES.USERS.SUB_PATH.USER;
          const userPath = generatePath(PATH, { [PARAMS.ID]: userId });

          navigate(userPath);
        },
        onSettled: () => {
          helpers.setSubmitting(false);
        },
      });
    },
    []
  );

  return (
    <UserForm
      title={t('users.create.title')}
      initialValues={userInitialValues}
      onSubmit={onSubmit}
      onBack={onBack}
    />
  );
};

export default CreateUser;
