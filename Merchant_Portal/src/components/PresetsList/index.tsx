import React from 'react';

import { IPalettePreset } from 'api/merchantTerminalThemes/types';
import { getHslColor } from 'utils/themeHelpers';

import { Container, Preset } from './styled';

interface IPresetsList {
  list: IPalettePreset[];
  selected: string;
  onSelect: (palettePreset: IPalettePreset) => () => void;
}

const PresetsList = ({ list, selected, onSelect }: IPresetsList) => {
  return (
    <Container>
      {list.map((palettePreset) => {
        const { name, palette } = palettePreset;
        const primary = palette.find((item) => item.name === 'primary') || palette[0];
        const { hue, saturation } = primary;

        return (
          <Preset
            key={name}
            $bg={getHslColor({ h: hue, s: saturation, l: 55 })}
            $isActive={selected === name}
            onClick={onSelect(palettePreset)}
          />
        );
      })}
    </Container>
  );
};

export default PresetsList;
