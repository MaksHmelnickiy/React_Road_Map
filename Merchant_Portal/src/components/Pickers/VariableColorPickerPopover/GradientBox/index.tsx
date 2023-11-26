import React from 'react';
import { CustomPicker, CustomPickerInjectedProps } from 'react-color';
import { Saturation } from 'react-color/lib/components/common';

import { Container, GradientPointer } from './styled';

const GradientBox = (props: CustomPickerInjectedProps) => {
  return (
    <Container>
      <Saturation {...props} pointer={GradientPointer} />
    </Container>
  );
};

export default CustomPicker(GradientBox);
