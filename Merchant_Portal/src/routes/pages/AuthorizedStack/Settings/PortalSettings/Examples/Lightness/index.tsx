import React from 'react';

import { generatePalette } from '@private/payment';

import {
  Color,
  Container,
  Numbers,
} from 'routes/pages/AuthorizedStack/Settings/PortalSettings/Examples/Lightness/styled';
import { useSettingsContext } from 'routes/pages/AuthorizedStack/Settings/PortalSettings/SettingsContext';

const Lightness = () => {
  const { userPalette, activeColorIndex } = useSettingsContext();

  const colorPalette = React.useMemo(() => {
    const activeColor = activeColorIndex ? userPalette[activeColorIndex] : userPalette[0];
    const palette = generatePalette({
      hue: activeColor.hue,
      saturation: activeColor.saturation,
      lightnessConfig: activeColor.config,
    });

    return Object.entries(palette);
  }, [userPalette, activeColorIndex]);

  return (
    <Container>
      {colorPalette.map((paletteItem, index) => {
        const [name, color] = paletteItem;
        return (
          <Color key={name} color={color}>
            <Numbers variant='bold' size='md' light={index < 6}>
              {name}
            </Numbers>
          </Color>
        );
      })}
    </Container>
  );
};

export default Lightness;
