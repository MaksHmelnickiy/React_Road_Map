import React from 'react';

import { TColorPickerHandler } from 'components/Pickers/ColorPickerPopover';
import {
  AccordionContainer,
  AccordionIcon,
  AccordionTitle,
  StyledColorPickerContent,
  TitleBlock,
} from 'routes/pages/AuthorizedStack/Settings/PortalSettings/BaseDetails/PresetColorPicker/styled';
import { useSettingsContext } from 'routes/pages/AuthorizedStack/Settings/PortalSettings/SettingsContext';
import { getNormalName } from 'utils/common';

const PresetColorPicker = () => {
  const {
    updateUserTheme,
    userTheme,
    userPalette,
    activeColorIndex,
    onSelectPaletteColor,
  } = useSettingsContext();

  return (
    <>
      {userPalette.map((palette, index) => {
        const isActive = activeColorIndex === index;

        const onColorSelect = (newColor: Parameters<TColorPickerHandler>[0]) => {
          const newPalette = userPalette.map((color, colorIndex) =>
            colorIndex === index ? { ...color, ...newColor } : color
          );
          updateUserTheme({
            ...userTheme,
            palette: newPalette,
          });
        };

        const onOpenChange = () => {
          if (activeColorIndex === index) {
            return onSelectPaletteColor(null);
          }
          onSelectPaletteColor(index);
        };

        return (
          <AccordionContainer
            key={palette.name}
            isOpen={isActive}
            header={() => (
              <TitleBlock onClick={onOpenChange}>
                <AccordionTitle variant='bold' size='sm'>
                  {`${getNormalName(palette.name)} Color`}
                </AccordionTitle>
                <AccordionIcon $isOpen={isActive} />
              </TitleBlock>
            )}
          >
            <StyledColorPickerContent
              hue={palette.hue}
              saturation={palette.saturation}
              lightnessConfig={
                palette.config.length > 6 ? palette.config.slice(3, 9) : palette.config
              }
              onChange={onColorSelect}
            />
          </AccordionContainer>
        );
      })}
    </>
  );
};

export default PresetColorPicker;
