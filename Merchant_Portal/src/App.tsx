import React from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { ToastContainer } from '@private/notifications';
import { composeTheme, generatePalette } from '@private/payment';
import { AppProvider } from 'AppContext';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';

import { IUserPaletteColor } from 'api/portalUser/types';
import { basePermanentConfig, royalBluePaletteConfig } from 'constants/defaultPalette';
import { StyledModalProvider } from 'modals';
import { queryClient } from 'queries';
import IndexRoute from 'routes';
import ErrorBoundary from 'routes/ErrorBoundary';
import store, { persistor, TRootState } from 'store';
import { IUserState } from 'store/userConfiguration';
import { COMPONENTS_MAPPING } from 'theme/constants';
import { GlobalReset } from 'theme/reset';
import { THEMES } from 'theme/theme';
import { TPalette } from 'utils/types';

import 'theme/fonts.css';
import './i18n';

const App = (): React.ReactElement => {
  const [currentPalette, setCurrentPalette] = React.useState(royalBluePaletteConfig);

  const { theme } = useSelector<TRootState, IUserState>(
    (state) => state.userConfiguration
  );

  const updateAppPalette = (newPalette: IUserPaletteColor[]) => {
    setCurrentPalette(newPalette);
  };

  const palette = React.useMemo(() => {
    return currentPalette.reduce<TPalette>((prev, { name, hue, saturation, config }) => {
      return {
        ...prev,
        [name]: generatePalette({
          hue,
          saturation,
          lightnessConfig: config,
        }),
      };
    }, basePermanentConfig);
  }, [currentPalette]);

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.log(palette); // TODO remove (its suitable to search a colors here)
  }

  const { stringVariables } = React.useMemo(() => {
    const currentTheme = THEMES[theme];
    if (!currentTheme) {
      return {};
    }

    return composeTheme({
      theme: currentTheme,
      components: currentTheme.components,
      componentsMapping: COMPONENTS_MAPPING,
      palette,
    });
  }, [theme, palette]);

  return (
    <>
      <ReactQueryDevtools position='bottom-left' initialIsOpen={false} />
      <ToastContainer pauseOnFocusLoss={false} closeButton={false} hideProgressBar />
      <GlobalReset cssVariables={stringVariables} />
      <ErrorBoundary>
        <StyledModalProvider>
          <AppProvider value={{ updateAppPalette }}>
            <IndexRoute />
          </AppProvider>
        </StyledModalProvider>
      </ErrorBoundary>
    </>
  );
};

const AppRoot = () => {
  // eslint-disable-next-line
  console.log('APP_VERSION - ', window.CONFIG.APP_VERSION);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <QueryParamProvider adapter={ReactRouter6Adapter}>
            <QueryClientProvider client={queryClient}>
              <App />
            </QueryClientProvider>
          </QueryParamProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default AppRoot;
