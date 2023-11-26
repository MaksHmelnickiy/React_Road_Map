import React from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';

import { Form, Formik, FormikHelpers } from 'formik';

import { IPasswordSetType } from 'api/auth/types';
import FormikInput from 'components/Form/FormikInput';
import { ICONS_MAP } from 'constants/icons';
import { useSetUserPassword } from 'queries/resetPassword';
import { ROUTES } from 'routes/config/constants';

import AuthContainer from '../AuthContainer';

import { IForgotPasswordForm, initialValues, validationSchema } from './helpers';
import { ConfirmPasswordInput, SetButton, Title } from './styled';

const SetPassword: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { t } = useTranslation('translation', {
    keyPrefix: 'authentication.forgotPassword.setPassword',
  });

  const { mutate: setUserPassword } = useSetUserPassword();

  const { type, otp, login } = React.useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  const onSubmit = React.useCallback(
    ({ password }: IForgotPasswordForm, helpers: FormikHelpers<IForgotPasswordForm>) => {
      setUserPassword(
        {
          password,
          operationType: type as IPasswordSetType,
          otpToken: otp,
          login,
        },
        {
          onSuccess: () => {
            navigate(ROUTES.SIGN_IN.PATH);
          },
          onSettled: () => {
            helpers.setSubmitting(false);
          },
        }
      );
    },
    [type, otp, login]
  );

  if (!type || !otp || !login) {
    return <Navigate to={ROUTES.SIGN_IN.PATH} />;
  }

  return (
    <AuthContainer>
      <Title as='h1'>
        {t(type === 'PASSWORD_RESET' ? 'changeTitle' : 'setPasswordTitle')}
      </Title>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <FormikInput
              name='password'
              label={t('password')}
              type='password'
              startIcon={<ICONS_MAP.Lock />}
              isAnimatedLabel
              shouldValidate
            />
            <ConfirmPasswordInput
              name='confirmPassword'
              label={t(
                type === 'PASSWORD_RESET' ? 'confirmNewPassword' : 'confirmPassword'
              )}
              type='password'
              startIcon={<ICONS_MAP.Lock />}
              isAnimatedLabel
              shouldValidate
            />
            <SetButton
              variant='primary'
              type='submit'
              disabled={isSubmitting || !isValid}
              isLoading={isSubmitting}
            >
              {t('sendButton')}
            </SetButton>
          </Form>
        )}
      </Formik>
    </AuthContainer>
  );
};

export default SetPassword;
