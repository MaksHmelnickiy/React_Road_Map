import React from 'react';

import { useField, useFormikContext } from 'formik';

import { appReactMemo } from 'hocs';

import Header, { IHeader } from '.';

interface IFormikHeader
  extends Pick<
    IHeader,
    'onBack' | 'backText' | 'isNew' | 'newNameText' | 'namePlaceholder'
  > {
  name: string;
}

const FormikHeader = ({ name, ...props }: IFormikHeader) => {
  const [isEditMode, setIsEditMode] = React.useState(false);
  const [{ value, onBlur }, { error, touched }, helpers] = useField(name);
  const { isSubmitting } = useFormikContext();
  const prevName = React.useRef('');

  React.useEffect(() => {
    if (error && touched) {
      setIsEditMode(true); // turn on if we get an error from a BE
    }
  }, [error]);

  const activateEditMode = React.useCallback(() => {
    setIsEditMode(true);
    prevName.current = value;
  }, [isEditMode, value]);

  const discardChanges = React.useCallback(() => {
    setIsEditMode(false);
    helpers.setValue(prevName.current, false);
  }, []);

  const onClearName = React.useCallback(() => {
    helpers.setValue('', false);
  }, []);

  const saveName = React.useCallback(() => {
    setIsEditMode(false);
    prevName.current = value;
  }, [value]);

  const onChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    helpers.setValue(value, false);
  }, []);

  return (
    <Header
      {...props}
      isEditMode={isEditMode}
      name={value}
      onNameChange={onChange}
      saveName={saveName}
      onClearName={onClearName}
      activateEditMode={activateEditMode}
      discardChanges={discardChanges}
      isSaving={isSubmitting}
      error={error}
      onBlur={onBlur}
    />
  );
};

export default appReactMemo(FormikHeader);
