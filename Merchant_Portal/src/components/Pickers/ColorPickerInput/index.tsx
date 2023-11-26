import React from 'react';

import { IInputProps } from '@private/components';

import { appReactMemo } from 'hocs';

import { PickerInput } from './styled';

const ColorPickerInput = (props: IInputProps) => {
  return <PickerInput isAnimatedLabel={false} {...props} positionVariant='row' />;
};

export default appReactMemo(ColorPickerInput);
