import React from 'react';

import { useDebouncedValue, useUpdateEffect } from '@private/hooks';
import { getNestedProp } from '@private/payment';

import { SMALL_SCREEN_WIDTH } from 'constants/common';
import { IComponentProperty, ISelectedComponent } from 'utils/types';

import ComponentSidebar from '../ComponentSidebar';
import { useEditorContext } from '../EditorContext';
import Sidebar from '../Sidebar';
import { useGetComponentProperties } from '../Sidebar/ComponentsStylization/useGetComponentProperties';
import { STYLIZATION } from '../Sidebar/constants';

import { ISidebarState, SidebarsProvider } from './SidebarsContext';
import { Container } from './styled';

interface ISidebars {
  children: React.ReactNode;
  resetCount: number;
}

const Sidebars = ({ children, resetCount }: ISidebars) => {
  const { merchantTheme } = useEditorContext();

  const [stylizationType, setStylizationType] = React.useState(STYLIZATION.STYLES);
  const [componentConfig, setComponentConfig] = React.useState<null | ISelectedComponent>(
    null
  );
  const [sidebarState, setSideBarState] = React.useState<ISidebarState>({
    left: true,
    right: false,
  });

  const [windowWidth, setWindowWidth] = useDebouncedValue(300, window.innerWidth);

  useUpdateEffect(() => {
    if (!componentConfig) {
      return;
    }
    const screenIsSmaller = window.innerWidth < SMALL_SCREEN_WIDTH;
    if (
      ((sidebarState.right && sidebarState.left) ||
        (!sidebarState.right && !sidebarState.left)) &&
      screenIsSmaller
    ) {
      setSideBarState({ left: false, right: true });
    }
  }, [windowWidth, componentConfig]);

  const { getAvailableComponentProperties } = useGetComponentProperties();

  useUpdateEffect(() => {
    setComponentConfig((state) => {
      if (!state) {
        return null;
      }

      const updatedComponent = getNestedProp(
        state.componentPath as never,
        merchantTheme.theme.components
      );

      const { componentProperties } = getAvailableComponentProperties(
        updatedComponent as IComponentProperty
      );

      return updatedComponent
        ? {
            ...state,
            component: Object.fromEntries(componentProperties),
          }
        : null;
    });
  }, [resetCount]);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    if (stylizationType === STYLIZATION.COMPONENTS) {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [stylizationType]);

  const updateHandler = React.useCallback(
    ({ key, value }: { key: string; value: string }) => {
      setComponentConfig((state) => {
        if (!state) {
          return state;
        }

        return {
          ...state,
          component: {
            ...state.component,
            [key]: {
              ...state.component?.[key],
              value,
            },
          },
        };
      });
    },
    []
  );

  const updateSidebarState = React.useCallback(
    (side: keyof ISidebarState, newState: boolean) => {
      const screenIsSmaller = window.innerWidth < SMALL_SCREEN_WIDTH;
      if (screenIsSmaller) {
        // if screen is smaller than toggle sides
        const otherSide = side === 'left' ? 'right' : 'left';
        // if we close one side we must open other side
        setSideBarState(() => ({
          [side]: newState,
          [otherSide]: !newState,
        }));
      } else {
        // if screen is large than toggle only specific side
        setSideBarState((state) => ({ ...state, [side]: newState }));
      }
    },
    []
  );

  const onSelectComponent = React.useCallback((config: ISelectedComponent) => {
    setComponentConfig(config);
  }, []);

  const contextValues = React.useMemo(
    () => ({
      sidebarState,
      componentConfig,
      updateHandler,
      selectComponent: onSelectComponent,
      updateSidebarState,
    }),
    [updateHandler, componentConfig, sidebarState, updateSidebarState]
  );

  return (
    <Container>
      <SidebarsProvider value={contextValues}>
        <Sidebar
          stylizationType={stylizationType}
          selectStylization={setStylizationType}
        />
        {children}
        {stylizationType === STYLIZATION.COMPONENTS && <ComponentSidebar />}
      </SidebarsProvider>
    </Container>
  );
};

export default Sidebars;
