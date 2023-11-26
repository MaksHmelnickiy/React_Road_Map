import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  username: yup.string().required('common.formValidation.requiredField'),
  password: yup.string().required('common.formValidation.requiredField'),
});

export const initialValues = {
  username: '',
  password: '',
  isSaved: false,
};
