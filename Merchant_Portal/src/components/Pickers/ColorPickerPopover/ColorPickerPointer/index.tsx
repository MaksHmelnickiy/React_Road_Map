import React from 'react';

import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';

import { Container } from './styled';

const ColorPickerPointer = () => {
  return (
    <Container>
      <ICONS_MAP.PickerPointer />
    </Container>
  );
};

export default appReactMemo(ColorPickerPointer);
