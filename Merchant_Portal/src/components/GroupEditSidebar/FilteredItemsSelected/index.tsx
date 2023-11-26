import React from 'react';
import { useTranslation } from 'react-i18next';

import { PERMISSIONS } from 'api/auth/constants';
import Button from 'components/Button';
import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';
import { useRBAC } from 'hooks/useRBAC';

import { ItemsCount, SelectedItems } from './styled';

interface ISelectedGridElements {
  onOpen: () => void;
  isVisible: boolean;
  permission: PERMISSIONS;
}

const FilteredItemsSelected = ({
  onOpen,
  isVisible,
  permission,
}: ISelectedGridElements) => {
  const { t } = useTranslation('translation', { keyPrefix: 'groupEdit' });
  const { enabled } = useRBAC({ list: [permission] });

  if (!enabled || !isVisible) {
    return null;
  }

  return (
    <SelectedItems>
      <Button
        variant='icon'
        size='lg'
        startIcon={<ICONS_MAP.Edit />}
        onClick={onOpen}
        iconSize={18}
      />
      <ItemsCount variant='bold' size='sm'>
        {t('allSelected')}
      </ItemsCount>
    </SelectedItems>
  );
};

export default appReactMemo(FilteredItemsSelected);
