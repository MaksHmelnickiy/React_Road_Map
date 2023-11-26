import React from 'react';

import { appReactMemo } from 'hocs';

import { Color, Container, TextValue } from './styled';

interface IColorSetting {
  title: string;
  bg: string;
  disabled?: boolean;
  isActive?: boolean;
}

const ColorItem = React.forwardRef<HTMLDivElement, IColorSetting>(
  ({ title, bg, disabled, isActive }, ref) => {
    return (
      <Container ref={ref} disabled={disabled}>
        <Color $isActive={isActive} $bg={bg} />
        <TextValue size='sm' $isUppercase={title.startsWith('#')} $isActive={isActive}>
          {title}
        </TextValue>
      </Container>
    );
  }
);

export default appReactMemo(ColorItem);
