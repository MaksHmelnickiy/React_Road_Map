import React from 'react';

import { IComponentProperty } from 'utils/types';

export interface IComponentProps {
  innerProperties: [string, unknown][];
  componentProperties: [string, IComponentProperty][];
}

interface IUseGetComponentPropertiesResult extends IComponentProps {
  getAvailableComponentProperties: (component: IComponentProperty) => IComponentProps;
}

export const useGetComponentProperties = (
  component?: IComponentProperty
): IUseGetComponentPropertiesResult => {
  const getAvailableComponentProperties = React.useCallback(
    (component: IComponentProperty) => {
      const innerProperties: [string, unknown][] = [];
      const componentProperties: [string, IComponentProperty][] = [];

      Object.entries(component).forEach(([key, value]) => {
        const hasValue = Object.hasOwnProperty.call(value, 'value');
        if (typeof value === 'object' && !hasValue) {
          return innerProperties.push([key, value]);
        }
        if (hasValue && (value as IComponentProperty)?.editable) {
          componentProperties.push([key, value as IComponentProperty]);
        }
      });

      return { innerProperties, componentProperties };
    },
    []
  );

  const componentProperties = React.useMemo(
    () =>
      component
        ? getAvailableComponentProperties(component)
        : { innerProperties: [], componentProperties: [] },
    [component]
  );

  return { ...componentProperties, getAvailableComponentProperties };
};
