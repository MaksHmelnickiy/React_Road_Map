import React from 'react';
import { useTranslation } from 'react-i18next';

import { IPalettePreset } from 'api/merchantTerminalThemes/types';
import Accordion from 'components/Accordion';
import { TColorPickerHandler } from 'components/Pickers/ColorPickerPopover';
import PresetsList from 'components/PresetsList';
import { appReactMemo } from 'hocs';
import { getNormalName } from 'utils/common';

import { useEditorContext } from '../../../EditorContext';
import AccordionTitle from '../../AccordionTitle';
import { BlockTitle, PresetName, Section } from '../../styled';
import PermanentSection from '../PermanentSection';
import PickerSection from '../PickerSection';

const Palette = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'themeEditor' });

  const {
    merchantTheme,
    updateMerchantTheme,
    merchantPalette,
    merchantPermanentPalette,
    layout,
  } = useEditorContext();

  const onSelectPreset = (palettePreset: IPalettePreset) => () => {
    updateMerchantTheme({
      ...merchantTheme,
      palette: palettePreset.name,
      permanentPalette: palettePreset.name,
    });
  };

  const selectedPresetName: string =
    typeof merchantTheme.palette === 'string' ? merchantTheme.palette : 'Custom';

  const permanentList = React.useMemo(() => {
    return Object.entries<string>(merchantPermanentPalette).filter(
      ([name]) => name !== 'transparent'
    );
  }, [merchantPermanentPalette]);

  return (
    <Accordion
      isInitialOpen
      header={(props) => <AccordionTitle {...props} title={t('colors')} />}
    >
      <Section>
        <BlockTitle variant='bold' size='sm'>
          {t('preset')}
        </BlockTitle>
        <PresetsList
          list={layout.palettes}
          selected={selectedPresetName}
          onSelect={onSelectPreset}
        />
        <PresetName variant='regular' size='sm'>
          {selectedPresetName}
        </PresetName>
      </Section>
      {merchantPalette.map((palette, index) => {
        const onColorSelect = (newColor: Parameters<TColorPickerHandler>[0]) => {
          updateMerchantTheme({
            ...merchantTheme,
            palette: merchantPalette.map((color, colorIndex) =>
              colorIndex === index ? { ...color, ...newColor } : color
            ),
          });
        };

        return (
          <PickerSection
            key={palette.name}
            title={`${getNormalName(palette.name)} ${t('color')}`}
            lightnessConfig={layout.lightnessConfig}
            color={palette}
            onColorSelect={onColorSelect}
          />
        );
      })}
      {permanentList.map(([key, color]) => {
        const onChangePermanentColor = (newColor: string) => {
          updateMerchantTheme({
            ...merchantTheme,
            permanentPalette: {
              ...merchantPermanentPalette,
              [key]: newColor,
            },
          });
        };

        return (
          <PermanentSection
            key={key}
            title={key}
            color={color}
            onChange={onChangePermanentColor}
          />
        );
      })}
    </Accordion>
  );
};

export default appReactMemo(Palette);
