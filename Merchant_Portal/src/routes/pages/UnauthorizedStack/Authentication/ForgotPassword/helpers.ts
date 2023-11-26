import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  login: yup.string().email('common.incorrectEmail').required('common.requiredField'),
});

export const initialValues = {
  login: '',
};
