import * as yup from 'yup';

export const prepareFormData = (obj: unknown): unknown => {
  if (obj === null || obj === undefined) {
    return null;
  }

  if (typeof obj !== 'object') {
    if (typeof obj === 'string') {
      const currentString = obj as string;
      return currentString.trim() === '' ? null : currentString.trim();
    }
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(prepareFormData);
  }

  const cleanedObj: Record<string, unknown> = {};

  Object.keys(obj).forEach((key) => {
    cleanedObj[key] = prepareFormData((obj as Record<string, unknown>)[key]);
  });

  return cleanedObj;
};

export const passwordSchema = yup
  .string()
  .min(6, 'common.minSixChars')
  .matches(/[A-Z]+/, 'common.oneUppercaseChar')
  .matches(/[a-z]+/, 'common.oneLowercaseChar')
  .matches(/\d+/, 'common.oneDigit');

export const requiredPasswordSchema = passwordSchema.required(
  'common.formValidation.requiredField'
);
