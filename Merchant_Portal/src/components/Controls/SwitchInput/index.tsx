import React from 'react';

import { appReactMemo } from 'hocs';

import Switch from '../Switch';
import { ISwitchProps } from '../Switch/styled';

import { Body, Container, Error, Label } from './styled';

interface ISwitchInputProps extends ISwitchProps {
  errorMessage?: string;
  showError?: boolean;
  size?: 'sm' | 'lg';
}

const SwitchInput = ({
  label,
  className,
  onChange,
  errorMessage,
  showError,
  size = 'sm',
  ...rest
}: ISwitchInputProps) => {
  const changeHandler = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      onChange?.(e, checked);
    },
    [onChange]
  );

  const renderLabel = () => {
    const content = typeof label === 'function' ? label() : label;

    return <Label>{content}</Label>;
  };

  return (
    <Container className={className} $size={size}>
      <Body>
        {renderLabel()}
        <Switch {...rest} onChange={changeHandler} />
      </Body>
      {showError && <Error>{errorMessage}</Error>}
    </Container>
  );
};

export default appReactMemo(SwitchInput);
