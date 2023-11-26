import React from 'react';

import { useUpdateEffect } from '@private/hooks';

import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';
import { normalizeCamelCaseName } from 'utils/common';

import { useSidebarContext } from '../Sidebars/SidebarsContext';

import Property from './Property';
import { CloseButton, Container, Content, Header, PropertyName } from './styled';

const ComponentSidebar = () => {
  const { componentConfig, updateHandler, sidebarState, updateSidebarState } =
    useSidebarContext();

  const isRightSidebarOpen = sidebarState.right;

  useUpdateEffect(() => {
    if (!componentConfig) {
      return;
    }

    if (!isRightSidebarOpen) {
      updateSidebarState('right', true);
    }
  }, [componentConfig]);

  const openHandler = React.useCallback(() => {
    updateSidebarState('right', !isRightSidebarOpen);
  }, [isRightSidebarOpen]);

  const valuesList = Object.entries(componentConfig?.component || {});

  const normalizePropertyName = (componentPath: string) => {
    return componentPath
      .split('.')
      .map((path) => normalizeCamelCaseName(path))
      .join(' - ');
  };

  return (
    <Container $isOpen={isRightSidebarOpen}>
      <Header>
        {componentConfig && (
          <CloseButton
            variant='icon'
            size='xs'
            startIcon={<ICONS_MAP.DoubleArrows />}
            onClick={openHandler}
            $isOpen={isRightSidebarOpen}
          />
        )}
        {isRightSidebarOpen && componentConfig?.componentPath && (
          <PropertyName variant='bold' size='xs'>
            {normalizePropertyName(componentConfig.componentPath)}
          </PropertyName>
        )}
      </Header>
      <Content $isOpen={isRightSidebarOpen}>
        {valuesList.map(([name, value], index) => (
          <Property
            key={`${componentConfig?.componentPath || ''}:${index}`}
            valuesList={componentConfig?.component}
            propertyKey={name}
            value={value}
            componentPath={componentConfig?.componentPath}
            onChange={updateHandler}
          />
        ))}
      </Content>
    </Container>
  );
};

export default appReactMemo(ComponentSidebar);
