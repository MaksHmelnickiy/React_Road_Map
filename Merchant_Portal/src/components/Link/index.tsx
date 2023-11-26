import React from 'react';

import { appReactMemo } from 'hocs';

import { AppLink, GlobalLink } from './styled';

type ILink = (ILinkHref | ILinkTo) & {
  children?: string;
  disabled?: boolean;
  className?: string;
  variant?: 'bold' | 'regular';
  target?: string;
};

interface ILinkHref {
  to?: never;
  href: string;
}

interface ILinkTo {
  to: string;
  href?: never;
}

const Link = ({
  to = '',
  href = '',
  children,
  disabled,
  className,
  variant = 'regular',
  target,
}: ILink) => {
  if (href) {
    return (
      <GlobalLink
        href={disabled ? '#' : href}
        disabled={disabled}
        variant={variant}
        className={className}
        target={target}
      >
        {children}
      </GlobalLink>
    );
  }

  return (
    <AppLink
      to={disabled ? '#' : to}
      disabled={disabled}
      variant={variant}
      className={className}
    >
      {children}
    </AppLink>
  );
};

export default appReactMemo(Link);
