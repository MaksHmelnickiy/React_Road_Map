import React from 'react';
import { generatePath, Navigate } from 'react-router-dom';

import { useScreenshot } from '@private/hooks';
import { layouts, PAGE_TYPES, useLayoutTheme } from '@private/payment';

import {
  IPaletteColor,
  ITheme,
  TComposedPalette,
} from 'api/merchantTerminalThemes/types';
import { appReactMemo } from 'hocs';
import { ROUTES } from 'routes/config/constants';

import '@private/payment/dist/assets/payment-styles.css';

import { EditorProvider } from './EditorContext';
import Header from './Header';
import SettingsHeader from './SettingsHeader';
import Sidebars from './Sidebars';
import {
  Container,
  FlexContainer,
  HiddenPreview,
  LayoutContainer,
  ViewContainer,
} from './styled';
import { changeSettingCallback, IViewSettings, VIEW_MODE } from './types';

interface IEditor {
  layoutTheme: ITheme;
  activeTheme?: string;
  onSave: (theme: ITheme) => void;
  isSaving: boolean;
  isApplying: boolean;
  isSaved: boolean;
  onApply: () => void;
  isNew?: boolean;
  merchantTerminalId: string;
}

const Editor = ({ layoutTheme, onSave, merchantTerminalId, ...rest }: IEditor) => {
  const [merchantTheme, setMerchantTheme] = React.useState(layoutTheme);
  const [themeState, setThemeState] = React.useState({
    saved: false,
    isDefault: false, // we can't figure out if it's edited by default
    isEdited: false,
    resetCount: 0,
  });
  const [isPreviewRendered, setIsPreviewRendered] = React.useState(false);
  const [viewSettings, setViewSettings] = React.useState<IViewSettings>({
    page: PAGE_TYPES.CASHIER,
    mode: VIEW_MODE.DESKTOP,
    showLogo: true,
  });
  const takeScreenShot = useScreenshot({
    quality: 0.6,
  });

  React.useEffect(() => {
    if (rest.isSaved) {
      setThemeState((state) => ({ ...state, isEdited: false, saved: true }));
    }
  }, [rest.isSaved]);

  const paymentLayout = layouts[merchantTheme.layoutName as keyof typeof layouts];
  const {
    config: { componentsMapping },
    lightnessConfig,
    palettes,
  } = paymentLayout;

  const onSaveHandler = React.useCallback(async () => {
    setIsPreviewRendered(true);
  }, []);

  const onMountPreview = async (node: HTMLDivElement) => {
    if (!node) {
      return;
    }

    const screen = await takeScreenShot(node);
    await onSave({
      ...merchantTheme,
      preview: screen,
    });
    setIsPreviewRendered(false);
  };

  const getPalette = <T,>(searchKey: unknown, searchValue: string) => {
    let layoutPalette = palettes.find(
      (layoutPalette) => layoutPalette.name === searchValue
    );
    if (!layoutPalette) {
      [layoutPalette] = paymentLayout.palettes;
    }
    return layoutPalette[searchKey as keyof typeof layoutPalette] as T;
  };

  const resetTheme = React.useCallback(() => {
    const paymentLayout = layouts[merchantTheme.layoutName as keyof typeof layouts];
    const palette = paymentLayout.palettes[0];
    setMerchantTheme((state) => ({
      ...state,
      theme: paymentLayout.theme,
      palette: palette.name,
      permanentPalette: palette.permanentPalette,
    }));
    setThemeState((state) => ({
      isEdited: true,
      saved: false,
      isDefault: true,
      resetCount: state.resetCount + 1,
    }));
  }, []);

  const merchantPalette = React.useMemo(() => {
    if (typeof merchantTheme.palette === 'string') {
      return getPalette<IPaletteColor[]>('palette', merchantTheme.palette);
    }
    return merchantTheme.palette as IPaletteColor[];
  }, [merchantTheme.palette]);

  const merchantPermanentPalette = React.useMemo(() => {
    if (typeof merchantTheme.permanentPalette === 'string') {
      return getPalette<Record<string, string>>(
        'permanentPalette',
        merchantTheme.permanentPalette
      );
    }
    return merchantTheme.permanentPalette as Record<string, string>;
  }, [merchantTheme.permanentPalette]);

  const {
    theme: composedTheme,
    themeVariables,
    palette,
  } = useLayoutTheme({
    theme: merchantTheme.theme,
    fallbackLayoutName: merchantTheme.layoutName,
    componentsMapping,
    palette: merchantPalette,
    initialPalette: merchantPermanentPalette,
    lightnessConfig,
  });

  const updateMerchantTheme = React.useCallback((theme: ITheme) => {
    setMerchantTheme(theme);
    setThemeState((state) => ({
      ...state,
      isEdited: true,
      saved: false,
      isDefault: false,
    }));
  }, []);

  const changeViewSetting: changeSettingCallback = (key, value) => {
    setViewSettings((state) => ({ ...state, [key]: value }));
  };

  const contextValue = React.useMemo(
    () => ({
      merchantTheme,
      composedTheme,
      merchantPalette,
      composedPalette: palette as TComposedPalette,
      merchantPermanentPalette,
      updateMerchantTheme,
      layoutName: merchantTheme.layoutName,
      layout: paymentLayout,
    }),
    [merchantTheme, composedTheme, palette]
  );

  if (!paymentLayout) {
    const { PATH, PARAMS } = ROUTES.MERCHANTS.SUB_PATH.MERCHANT.SUB_PATH.STYLIZATION;
    return (
      <Navigate to={generatePath(PATH, { [PARAMS.ID]: merchantTerminalId })} replace />
    );
  }

  const Layout = paymentLayout.component;

  const { resetCount, saved, isEdited, isDefault } = themeState;

  return (
    <Container>
      {isPreviewRendered && (
        <HiddenPreview ref={onMountPreview}>
          <Layout theme={composedTheme} themeVariables={themeVariables} isEditor />
        </HiddenPreview>
      )}
      <EditorProvider value={contextValue}>
        <Header
          {...rest}
          resetTheme={resetTheme}
          isSaved={saved}
          isEdited={isEdited}
          isDefault={isDefault}
          onSave={onSaveHandler}
        />
        <Sidebars resetCount={resetCount}>
          <LayoutContainer>
            <SettingsHeader
              settings={viewSettings}
              changeViewSetting={changeViewSetting}
            />
            <FlexContainer>
              <ViewContainer $isMobile={viewSettings.mode === VIEW_MODE.MOBILE}>
                <Layout
                  theme={composedTheme}
                  themeVariables={themeVariables}
                  hideLogo={!viewSettings.showLogo}
                  pageType={viewSettings.page}
                  isEditor
                  isMobile={viewSettings.mode === VIEW_MODE.MOBILE}
                />
              </ViewContainer>
            </FlexContainer>
          </LayoutContainer>
        </Sidebars>
      </EditorProvider>
    </Container>
  );
};

export default appReactMemo(Editor);
