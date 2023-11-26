import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath, Navigate, useNavigate, useParams } from 'react-router-dom';

import { FormikHelpers } from 'formik/dist/types';

import { formatUserFormValues } from 'api/users/normalizers';
import { IUserForm } from 'api/users/types';
import Loader from 'components/Loader';
import { ISelectedTreeOption } from 'components/Transfers/TransferTree/types';
import { useGetUser, useUpdateUser } from 'queries/users';
import { ROUTES } from 'routes/config/constants';
import { userInitialValues } from 'routes/pages/AuthorizedStack/Users/User/helpers';
import { LoaderContainer } from 'routes/styled';
import { getFormErrors } from 'utils/common';
import { QueryError } from 'utils/types';

import UserForm from './Form';

const EditUser = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id = '' } = useParams();

  const { data: user, isLoading } = useGetUser(id);
  const { mutate: updateUser } = useUpdateUser();

  const onBack = React.useCallback(() => {
    const { PATH, PARAMS } = ROUTES.USERS.SUB_PATH.USER;
    const userPath = generatePath(PATH, { [PARAMS.ID]: id });
    navigate(userPath);
  }, []);

  const onSubmit = React.useCallback(
    (values: IUserForm, helpers: FormikHelpers<IUserForm>) => {
      const formattedValues = formatUserFormValues(values);
      updateUser(formattedValues, {
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
        onSuccess: onBack,
        onSettled: () => {
          helpers.setSubmitting(false);
        },
      });
    },
    []
  );

  const initialData = React.useMemo(() => {
    if (!user) {
      return userInitialValues;
    }

    return {
      id,
      firstName: user.firstName,
      lastName: user.lastName,
      login: user.login,
      phoneNumber: user.phoneNumber,
      phoneCountryCode: user.phoneCountryCode,
      enabled: user.enabled,
      roleName: user.role,
      scope: {
        fullAccess: user.roleScope.fullAccess,
        merchants: user.roleScope.merchants as unknown as ISelectedTreeOption[],
      },
    };
  }, [user]);

  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader size={100} />
      </LoaderContainer>
    );
  }

  if (!user) {
    return <Navigate to={ROUTES.USERS.PATH} />;
  }

  return (
    <UserForm
      isEdit
      title={t('users.edit.title')}
      initialValues={initialData}
      onSubmit={onSubmit}
      onBack={onBack}
    />
  );
};

export default EditUser;
