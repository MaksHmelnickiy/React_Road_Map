import React from 'react';

import ColorItem from 'components/Pickers/ColorItem';
import ColorPickerPopover, {
  TColorPickerHandler,
} from 'components/Pickers/ColorPickerPopover';
import ColorStepsPreview, {
  IColorStepsPreview,
} from 'components/Pickers/ColorStepsPreview';
import { appReactMemo } from 'hocs';
import { hslToHex } from 'utils/themeHelpers';

import { BlockTitle, Section } from '../../styled';

interface IPickerSection extends IColorStepsPreview {
  title: string;
  onColorSelect: TColorPickerHandler;
}

const PickerSection = ({ title, onColorSelect, ...rest }: IPickerSection) => {
  const {
    color: { hue, saturation },
  } = rest;

  const colorHex = React.useMemo(
    () => hslToHex({ h: hue, s: saturation, l: 55 }),
    [hue, saturation]
  );

  return (
    <Section>
      <BlockTitle size='sm' variant='bold'>
        {title}
      </BlockTitle>
      <ColorPickerPopover
        hue={hue}
        saturation={saturation}
        lightnessConfig={rest.lightnessConfig.slice(3, 9).reverse()}
        onChange={onColorSelect}
      >
        {({ isOpen }) => <ColorItem bg={colorHex} title={colorHex} isActive={isOpen} />}
      </ColorPickerPopover>
      <ColorStepsPreview {...rest} />
    </Section>
  );
};

export default appReactMemo(PickerSection);
