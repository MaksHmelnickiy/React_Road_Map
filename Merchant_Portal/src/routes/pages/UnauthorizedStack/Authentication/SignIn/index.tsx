import React from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate, useLocation } from 'react-router-dom';

import { Form, Formik, FormikHelpers } from 'formik';

import { ILoginPayload } from 'api/auth/types';
import FormikCheckbox from 'components/Form/FormikCheckbox';
import Link from 'components/Link';
import { ICONS_MAP } from 'constants/icons';
import { useAuthentication } from 'queries/session';
import { ROUTES } from 'routes/config/constants';

import AuthContainer from '../AuthContainer';

import { initialValues, validationSchema } from './helpers';
import {
  Error,
  FormikInput,
  LoginFormikInput,
  RememberBlock,
  SignInButton,
  Title,
} from './styled';

const SignIn = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'authentication.signIn' });
  const { login, isAuthorized, loginError } = useAuthentication();

  const { state } = useLocation();

  const fromPage = state?.from?.pathname || '/';

  const onSubmit = React.useCallback(
    (values: ILoginPayload, helpers: FormikHelpers<ILoginPayload>) => {
      login(values, {
        onSettled: () => {
          helpers.setSubmitting(false);
        },
      });
    },
    []
  );

  if (isAuthorized) {
    return <Navigate to={fromPage} />;
  }

  return (
    <AuthContainer>
      <Title as='h1'>{t('title')}</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, isValid, getFieldProps }) => (
          <Form>
            <LoginFormikInput
              {...getFieldProps('username')}
              name='username'
              autoComplete='email'
              label={t('login')}
              startIcon={<ICONS_MAP.User />}
              error={!!loginError}
              regExp={/^\S+$/g}
              isAnimatedLabel
            />
            <FormikInput
              {...getFieldProps('password')}
              name='password'
              label={t('password')}
              type='password'
              startIcon={<ICONS_MAP.Lock />}
              autoComplete='current-password'
              error={!!loginError}
              isAnimatedLabel
            />
            <Error variant='regular' size='xs'>
              {!!loginError && t('incorrectCredentials')}
            </Error>
            <RememberBlock>
              <FormikCheckbox name='isSaved' label={t('rememberMe')} />
              <Link to={ROUTES.FORGOT_PASSWORD.PATH}>{t('forgotPassword')}</Link>
            </RememberBlock>
            <SignInButton
              type='submit'
              variant='primary'
              disabled={isSubmitting || !isValid}
              isLoading={isSubmitting}
            >
              {t('signInButton')}
            </SignInButton>
          </Form>
        )}
      </Formik>
    </AuthContainer>
  );
};

export default SignIn;
