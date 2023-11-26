import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMatch } from 'react-router-dom';

import { appReactMemo } from 'hocs';
import { useRBAC } from 'hooks/useRBAC';
import { IRoutesConfigItem } from 'routes/config';

import { LinkItem, Text } from '../styled';

interface IAccordionItem extends IRoutesConfigItem {
  isOpenBar: boolean;
}

const AccordionItem = ({
  breadcrumb,
  intlKey,
  path,
  permissions,
  permissionType,
  isOpenBar,
}: IAccordionItem) => {
  const { t } = useTranslation();

  const { enabled } = useRBAC({
    list: permissions,
    conditionType: permissionType,
  });

  const isActiveMatch = !!useMatch(path);

  if (!enabled) {
    return null;
  }

  return (
    <LinkItem
      to={path}
      $isActive={isActiveMatch}
      $isOpen
      $isSubFolder
      $isOpenBar={isOpenBar}
    >
      <Text>{t((breadcrumb || intlKey) as never)}</Text>
    </LinkItem>
  );
};

export default appReactMemo(AccordionItem);
