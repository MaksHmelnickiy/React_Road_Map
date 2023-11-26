import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Form, Formik, FormikHelpers } from 'formik';

import { IPasswordRecoveryData } from 'api/auth/types';
import FormikInput from 'components/Form/FormikInput';
import { ICONS_MAP } from 'constants/icons';
import { RECOVER_PASSWORD, useRecoverPassword } from 'queries/resetPassword';
import { ROUTES } from 'routes/config/constants';
import { getFormErrors } from 'utils/common';
import { notificationService } from 'utils/notificationService';
import { QueryError } from 'utils/types';

import AuthContainer from '../AuthContainer';

import { initialValues, validationSchema } from './helpers';
import { BackButton, SignInButton, SubTitle, Title } from './styled';

const FirstStep: React.FC = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const { mutate: recoverPassword, isSuccess } = useRecoverPassword();

  React.useEffect(() => {
    return () => {
      notificationService.remove(RECOVER_PASSWORD);
    };
  }, []);

  const onBack = React.useCallback(() => {
    navigate(ROUTES.HOME.PATH);
  }, []);

  const onSubmit = React.useCallback(
    (values: IPasswordRecoveryData, helpers: FormikHelpers<IPasswordRecoveryData>) => {
      recoverPassword(values, {
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

  return (
    <AuthContainer>
      <Title as='h1'>{t('authentication.forgotPassword.emailStep.title')}</Title>
      <SubTitle size='md'>
        {t('authentication.forgotPassword.emailStep.emailText')}
      </SubTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <FormikInput
              name='login'
              label={t('authentication.forgotPassword.emailStep.emailLabel')}
              startIcon={<ICONS_MAP.Letter />}
              isAnimatedLabel
              shouldValidate
            />
            <SignInButton
              type='submit'
              variant='primary'
              disabled={isSubmitting || !isValid || isSuccess}
              isLoading={isSubmitting}
            >
              {t('authentication.forgotPassword.emailStep.sendButton')}
            </SignInButton>
            <BackButton
              variant='icon'
              type='reset'
              startIcon={<ICONS_MAP.MinimalLeftArrow />}
              iconSize={14}
              onClick={onBack}
            >
              {t('authentication.forgotPassword.emailStep.backButton')}
            </BackButton>
          </Form>
        )}
      </Formik>
    </AuthContainer>
  );
};

export default FirstStep;
