import * as yup from 'yup';

export interface IPaymentMethodForm {
  organization: number | null;
  merchant: number | null;
  name: string | null;
  logo: string | null;
}

export const initialValues = {
  organization: null,
  merchant: null,
  name: null,
  logo: null,
};

export const validationSchema = yup.object().shape({
  organization: yup.string().nullable().required('common.requiredField'),
  merchant: yup.string().nullable().required('common.requiredField'),
  name: yup.string().nullable().required('common.requiredField'),
});

export const validateSVG = (svgString: string) => {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgString, 'image/svg+xml');
    const parserError = doc.querySelector('parsererror');
    const rootElement = doc.querySelector('svg');

    return !(parserError || !rootElement);
  } catch (error) {
    return false; // Error occurred during parsing
  }
};

export const TYPE_ERROR = 'file-invalid-type';
export const SIZE_ERROR = 'file-too-large';
export const THREE_MB = 3145728;
