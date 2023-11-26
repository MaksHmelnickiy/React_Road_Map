import React from 'react';

import { appReactMemo } from 'hocs';

import { ColorPreview, Name } from './styled';

interface IGradientType {
  name: string;
  color: string;
  isActive: boolean;
  getSelectedType: () => void;
}

const ColorVariant = ({ name, color, isActive, getSelectedType }: IGradientType) => {
  return (
    <div>
      <ColorPreview onClick={getSelectedType} color={color} $isActive={isActive} />
      <Name variant='regular' size='sm' $isActive={isActive}>
        {name}
      </Name>
    </div>
  );
};

export default appReactMemo(ColorVariant);
