import React from 'react';

import { appReactMemo } from 'hocs';

import { typographyTheme } from './theme';

export interface ITypography {
  as?: keyof typeof typographyTheme;
  size?: 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  variant?: 'bold' | 'regular';
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.SyntheticEvent) => void;
}

const Text = ({ as = 'p', children, className, onClick }: ITypography) => {
  const Component = as === 'p' ? 'div' : as;

  return (
    <Component className={className} onClick={onClick}>
      {children}
    </Component>
  );
};

export default appReactMemo(Text);
