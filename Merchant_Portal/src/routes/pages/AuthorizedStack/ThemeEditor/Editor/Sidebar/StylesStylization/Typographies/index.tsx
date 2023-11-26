import React from 'react';
import { useTranslation } from 'react-i18next';

import Accordion from 'components/Accordion';
import { baseThemeValues } from 'constants/common';
import { FONT_WEIGHTS, FONTS_VARIANTS } from 'constants/componentValues';
import { appReactMemo } from 'hocs';
import { setNestedProp } from 'utils/common';
import { TObject } from 'utils/types';

import { useEditorContext } from '../../../EditorContext';
import AccordionTitle from '../../AccordionTitle';

import { ITypography, ITypographyBase } from './types';
import TypographyItem from './TypographyItem';

const Typographies = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'themeEditor' });

  const { merchantTheme, updateMerchantTheme } = useEditorContext();

  const {
    components: { typography },
    container,
  } = merchantTheme.theme as Record<string, TObject>;

  const typographies = React.useMemo(() => {
    const variants = Object.entries<ITypographyBase | ITypography>(
      typography as ITypography
    );
    const fullVariants = variants.reduce<[string, ITypographyBase | ITypography][]>(
      (prev, item) => {
        const [name, typography] = item;
        if (typography.fontFamily) {
          prev.push(item);
        } else {
          const paragraphVariants = [] as [string, ITypography][];
          Object.entries(typography).forEach(([variantName, variantValue]) => {
            if (!variantName.includes('Base')) {
              paragraphVariants.push([
                `${name} ${variantName.toUpperCase()}`,
                variantValue,
              ]);
            }
          });
          prev.push(...paragraphVariants);
        }
        return prev;
      },
      []
    );

    return fullVariants as [string, ITypographyBase][];
  }, [typography]);

  const onTypographyChange = React.useCallback(
    (key: string, typography: ITypographyBase) => {
      updateMerchantTheme(
        setNestedProp({
          key: `theme.components.typography.${key}`,
          obj: merchantTheme,
          value: typography,
        })
      );
    },
    [merchantTheme]
  );

  const onMainChange = React.useCallback(
    (value: string) => {
      const updatedTheme = setNestedProp({
        key: `theme.container.fontFamily`,
        obj: merchantTheme,
        value,
      });
      const fontWeights = FONT_WEIGHTS[value as FONTS_VARIANTS];
      const newFontWeight = fontWeights[0];

      const updateTypography = (
        obj: Record<string, ITypographyBase> | ITypographyBase
      ) => {
        Object.values(obj).forEach((typography) => {
          if (typography.fontWeight) {
            const typographyWeights =
              FONT_WEIGHTS[typography.fontFamily as FONTS_VARIANTS];
            const supportNewWeight = typographyWeights?.includes(newFontWeight);

            if (supportNewWeight || typography.fontFamily === baseThemeValues.inherit) {
              typography.fontWeight = newFontWeight;
            }
          } else if (typeof typography === 'object') {
            updateTypography(typography);
          }
        });
      };
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      updateTypography(updatedTheme.theme.components.typography);

      updateMerchantTheme(updatedTheme);
    },
    [merchantTheme]
  );

  return (
    <Accordion header={(props) => <AccordionTitle {...props} title={t('typography')} />}>
      <TypographyItem
        name={t('pageFontFamily')}
        mainFontFamily={container.fontFamily as string}
        onMainFontChange={onMainChange}
      />
      {typographies.map(([name, typography]) => (
        <TypographyItem
          key={name}
          typography={typography}
          name={name}
          mainFontFamily={container.fontFamily as string}
          onFontChange={onTypographyChange}
        />
      ))}
    </Accordion>
  );
};

export default appReactMemo(Typographies);
