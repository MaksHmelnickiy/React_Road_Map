import React from 'react';

import {
  ILayout,
  IPaletteColor,
  ITheme,
  TComposedPalette,
  TLayoutsKeys,
} from 'api/merchantTerminalThemes/types';
import { TObject } from 'utils/types';

export interface IEditorContext {
  merchantTheme: ITheme;
  composedTheme: TObject;
  composedPalette: TComposedPalette;
  updateMerchantTheme: (theme: ITheme) => void;
  layoutName: TLayoutsKeys;
  layout: ILayout;
  merchantPalette: IPaletteColor[];
  merchantPermanentPalette: Record<string, string>;
}

export const EditorContext = React.createContext<IEditorContext>({
  merchantTheme: {} as ITheme,
  composedTheme: {},
  composedPalette: {},
  updateMerchantTheme: () => {},
  layoutName: '' as TLayoutsKeys,
  layout: {} as ILayout,
  merchantPalette: [],
  merchantPermanentPalette: {},
});

export const EditorProvider = EditorContext.Provider;

export const useEditorContext = () => React.useContext(EditorContext);
