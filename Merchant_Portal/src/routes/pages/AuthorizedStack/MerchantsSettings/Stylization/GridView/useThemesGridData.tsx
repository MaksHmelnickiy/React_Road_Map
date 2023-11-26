import React from 'react';
import { useTranslation } from 'react-i18next';

import { TAG_VARIANTS } from '@private/components';
import { IColumn, UNITS } from '@private/data-grid';

import { PERMISSIONS } from 'api/auth/constants';
import { ITheme } from 'api/merchantTerminalThemes/types';
import Button from 'components/Button';
import HeaderCell from 'components/Grids/DataGrid/HeaderCell';
import RowCell from 'components/Grids/DataGrid/RowCell';
import Status from 'components/Tags/Status';
import Tag from 'components/Tags/Tag';
import { ICONS_MAP } from 'constants/icons';
import { useRBAC } from 'hooks/useRBAC';
import { getFormattedDate } from 'utils/common';
import { IUseGridDataResult } from 'utils/types';

import ActionsList from '../ActionsList';
import { ActionsPopover } from '../styled';

import { IconContainer, Name, ThemeName } from './styled';

interface IThemesGridData {
  data?: ITheme[];
  activeTheme: string;
  maxThemesReached: boolean;
  merchantId: string;
}

export const useThemesGridData = ({
  data,
  activeTheme,
  maxThemesReached,
  merchantId,
}: IThemesGridData): IUseGridDataResult<ITheme> => {
  const { t } = useTranslation('translation', { keyPrefix: 'stylization' });

  const { checkPermission } = useRBAC();

  const themesColumns = React.useMemo(() => {
    const columns = [
      {
        dataKey: 'themeName',
        title: t('columns.name'),
        minWidth: 200,
        width: {
          unit: UNITS.PERCENT,
          value: 30,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const isActive = activeTheme === params.item.id;
          return (
            <RowCell {...params}>
              <ThemeName>
                <IconContainer $isActive={isActive}>
                  <ICONS_MAP.Start />
                </IconContainer>
                <Name>{params.item.name}</Name>
              </ThemeName>
            </RowCell>
          );
        },
      },
      {
        dataKey: 'isSystem',
        title: t('columns.type'),
        minWidth: 110,
        width: {
          unit: UNITS.PERCENT,
          value: 15,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { isSystem } = params.item;
          return (
            <RowCell {...params}>
              <Tag
                variant={isSystem ? TAG_VARIANTS.SUCCESS : TAG_VARIANTS.WARNING}
                label={isSystem ? 'Default' : 'Custom'}
              />
            </RowCell>
          );
        },
      },
      {
        dataKey: 'name',
        title: t('columns.status'),
        minWidth: 150,
        width: {
          unit: UNITS.PERCENT,
          value: 20,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { id } = params.item;
          const isActive = id === activeTheme;
          return (
            <RowCell {...params}>
              <Status variant={isActive ? 'success' : 'neutral'}>
                {isActive ? 'Active' : 'Inactive'}
              </Status>
            </RowCell>
          );
        },
      },
      {
        dataKey: 'createdAt',
        title: t('columns.createdAt'),
        minWidth: 180,
        width: {
          unit: UNITS.PERCENT,
          value: 15,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params}>{getFormattedDate(params.item.createdAt)}</RowCell>;
        },
      },
      {
        dataKey: 'updatedAt',
        title: t('columns.updatedAt'),
        minWidth: 180,
        width: {
          unit: UNITS.PERCENT,
          value: 15,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params}>{getFormattedDate(params.item.updatedAt)}</RowCell>;
        },
      },
    ] as IColumn<ITheme>[];

    const actionsColumn = {
      dataKey: 'id',
      title: t('columns.actions'),
      minWidth: 80,
      width: {
        unit: UNITS.PERCENT,
        value: 5,
      },
      renderHeaderCell: (params) => {
        return <HeaderCell {...params} />;
      },
      renderRowCell: (params) => {
        return (
          <RowCell {...params}>
            <ActionsPopover
              disableInteractive
              immediateAnimation
              component={
                <ActionsList
                  theme={params.item}
                  isSystem={params.item.isSystem}
                  isActive={params.item.id === activeTheme}
                  maxThemesReached={maxThemesReached}
                  merchantId={merchantId}
                />
              }
              placement='bottom-end'
              positionGap={0}
            >
              <Button variant='icon' startIcon={<ICONS_MAP.More />} iconSize={18} />
            </ActionsPopover>
          </RowCell>
        );
      },
    } as IColumn<ITheme>;

    const enableActions = checkPermission({
      list: [
        PERMISSIONS.CAN_SET_ACTIVE_PAYMENT_PAGE_STYLIZATION,
        PERMISSIONS.CAN_CHANGE_PAYMENT_PAGE_STYLIZATION,
        PERMISSIONS.CAN_COPY_PAYMENT_PAGE_STYLIZATION,
        PERMISSIONS.CAN_DELETE_PAYMENT_PAGE_STYLIZATION,
      ],
      conditionType: 'OR',
    });

    if (enableActions) {
      columns.push(actionsColumn);
    }

    return columns as IColumn<ITheme>[];
  }, [activeTheme]);

  return !data ? [] : themesColumns;
};
