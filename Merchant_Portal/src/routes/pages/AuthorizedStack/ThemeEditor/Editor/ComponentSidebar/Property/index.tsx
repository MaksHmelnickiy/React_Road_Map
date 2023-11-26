import React from 'react';

import { ISelectOption, TSelectValues } from '@private/components';

import AutocompleteSelect from 'components/Controls/AutocompleteSelect';
import {
  FONT_WEIGHTS,
  fontOptions,
  FONTS_VARIANTS,
  fontSizeVariants,
  pixelsOptions,
} from 'constants/componentValues';
import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';
import { useFontWeights } from 'hooks/useFontWeights';
import { normalizeCamelCaseName, setNestedProp } from 'utils/common';
import { IComponentProperty, PROPERTY_TYPES } from 'utils/types';

import { useEditorContext } from '../../EditorContext';

import ColorProperty from './ColorProperty';
import { Body, Container, Header, Name, ShowButton } from './styled';

interface IProperty {
  propertyKey: string;
  value: IComponentProperty;
  valuesList?: Record<string, IComponentProperty>;
  componentPath?: string;
  onChange: (props: { key: string; value: string }) => void;
}

const Property = ({
  propertyKey,
  value,
  componentPath = '',
  onChange,
  valuesList,
}: IProperty) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { merchantTheme, updateMerchantTheme } = useEditorContext();

  const weightOptions = useFontWeights({
    fontFamily: valuesList?.fontFamily?.value,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    mainFontFamily: merchantTheme.theme.container.fontFamily,
  });

  const openHandler = React.useCallback(() => {
    setIsOpen((state) => !state);
  }, []);

  const updateMerchant = React.useCallback(
    (newValue: string) => {
      let updatedTheme = setNestedProp({
        key: `theme.components.${componentPath}.${propertyKey}.value`,
        obj: merchantTheme,
        value: newValue,
      });

      if (propertyKey === 'fontFamily') {
        const fontWeights = FONT_WEIGHTS[newValue as FONTS_VARIANTS];
        const fontWeight = valuesList?.fontWeight?.value;
        const weightExist = fontWeight ? fontWeights?.includes(fontWeight) : false;

        if (!weightExist) {
          updatedTheme = setNestedProp({
            key: `theme.components.${componentPath}.fontWeight.value`,
            obj: updatedTheme,
            value: fontWeights[0],
          });
          onChange({ key: 'fontWeight', value: fontWeights[0] });
        }
      }

      updateMerchantTheme(updatedTheme);
      onChange({ key: propertyKey, value: newValue });
    },
    [componentPath, propertyKey, merchantTheme, valuesList?.fontWeight?.value]
  );

  const onSelectValue = React.useCallback(
    (newValue: TSelectValues | TSelectValues[]) => {
      updateMerchant(newValue as string);
    },
    [updateMerchant]
  );

  const component = React.useMemo(() => {
    const normalizedValue = Number(value.value) === 0 ? `0px` : value.value;

    let options: ISelectOption[] = pixelsOptions;
    const { type } = value;

    switch (type) {
      case PROPERTY_TYPES.FONT_FAMILY:
        options = fontOptions;
        break;
      case PROPERTY_TYPES.FONT_SIZE:
        options = fontSizeVariants;
        break;
      case PROPERTY_TYPES.FONT_WEIGHT:
        options = weightOptions;
        break;
      default:
        break;
    }

    switch (type) {
      case PROPERTY_TYPES.FONT_FAMILY:
      case PROPERTY_TYPES.FONT_SIZE:
      case PROPERTY_TYPES.PIXELS:
      case PROPERTY_TYPES.FONT_WEIGHT:
        return (
          <AutocompleteSelect
            size='sm'
            value={normalizedValue}
            options={options}
            onChange={onSelectValue}
            enableRemoveButton={false}
          />
        );
      case PROPERTY_TYPES.COLOR:
        return <ColorProperty value={normalizedValue} onChange={updateMerchant} />;
      default:
        return null;
    }
  }, [value, updateMerchant, onSelectValue, weightOptions]);

  return (
    <Container>
      <Header>
        <Name variant='bold' size='sm'>
          {normalizeCamelCaseName(propertyKey)}
        </Name>
        <ShowButton
          variant='icon'
          size='xs'
          startIcon={isOpen ? <ICONS_MAP.Visible /> : <ICONS_MAP.Invisible />}
          iconSize={20}
          onClick={openHandler}
        />
      </Header>
      {isOpen && <Body>{component}</Body>}
    </Container>
  );
};

export default appReactMemo(Property);
