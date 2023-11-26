import React from 'react';
import { KeyPrefix, useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { appReactMemo } from 'hocs';

import { NavLink, NavList } from './styled';

interface INavigation {
  navigationList: string[];
  keyPrefix: KeyPrefix<'translation'>;
  className?: string;
}

const Navigation = ({ navigationList, keyPrefix, className }: INavigation) => {
  const { t } = useTranslation('translation', {
    keyPrefix,
  });

  const navigate = useNavigate();

  const onNavigate = (intlKey: string) => () => {
    navigate(`#${intlKey}`, { replace: true });
  };

  return (
    <NavList className={className}>
      {navigationList?.map((intlKey) => (
        <li key={intlKey}>
          <NavLink onClick={onNavigate(intlKey)} href={`#${intlKey}`}>
            {t(intlKey as never)}
          </NavLink>
        </li>
      ))}
    </NavList>
  );
};

export default appReactMemo(Navigation);
