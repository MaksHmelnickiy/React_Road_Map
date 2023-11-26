import React from 'react';
import { useTranslation } from 'react-i18next';

import { ICustomTopToolbarProps } from '@private/data-grid';

import Button from 'components/Button';
import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';

import ColumnsSettings from '../ColumnsSettings';
import ItemsPerPage from '../ItemsPerPage';
import { SettingsColumn, TableSettings } from '../styled';

interface ITopToolbar<T> extends ICustomTopToolbarProps<T> {
  total?: number;
  refetch?: () => void;
  customToolbarElement?: React.ReactNode;
}

const TopToolbar = <T,>({
  pagination,
  columnsSettings,
  total,
  refetch,
  customToolbarElement,
}: ITopToolbar<T>) => {
  const { t } = useTranslation();

  const {
    pageNavigation: { perPage },
    perPageSelect: { onChange },
  } = pagination;

  return (
    <TableSettings $isHidden={!total}>
      <div>{customToolbarElement}</div>
      <SettingsColumn>
        <ItemsPerPage onChange={onChange} value={perPage} />
        <ColumnsSettings {...columnsSettings} />
        {refetch && (
          <Button
            onClick={refetch}
            variant='outlined'
            iconSize={24}
            startIcon={<ICONS_MAP.ArrowCircle />}
          >
            {t('common.refresh')}
          </Button>
        )}
      </SettingsColumn>
    </TableSettings>
  );
};

export default appReactMemo(TopToolbar);
