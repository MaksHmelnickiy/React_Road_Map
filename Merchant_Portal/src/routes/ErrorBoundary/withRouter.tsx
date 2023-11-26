import React from 'react';
import { useLocation } from 'react-router-dom';

export function withRouter<TProps>(
  Component: React.ComponentType<TProps>
): React.ComponentType<TProps> {
  const ComponentWithRouterProp: React.FC<TProps> = (props) => {
    const location = useLocation();

    return <Component {...props} router={{ location }} />;
  };

  return ComponentWithRouterProp;
}
