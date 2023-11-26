import * as yup from 'yup';

export interface IForgotPasswordForm {
  password: string;
  confirmPassword: string;
}

const intlPrefix = 'authentication.forgotPassword.setPassword.validation.';

export const validationSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, `${intlPrefix}minCharacters`)
    .max(256, `${intlPrefix}maxCharacters`)
    .matches(/[a-z]/, `${intlPrefix}lowerCaseCharacter`)
    .matches(/[A-Z]/, `${intlPrefix}upperCaseCharacter`)
    .matches(/[0-9]/, `${intlPrefix}oneDigit`)
    .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, `${intlPrefix}specialSymbol`)
    .required('common.requiredField'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], `${intlPrefix}passwordsMatch`)
    .required('common.requiredField'),
});

export const initialValues = {
  password: '',
  confirmPassword: '',
};
