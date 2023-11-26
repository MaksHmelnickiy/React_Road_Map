import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath, useNavigate } from 'react-router-dom';

import { IColumn, UNITS } from '@private/data-grid';

import { PERMISSIONS } from 'api/auth/constants';
import { IMerchant } from 'api/merchants/types';
import Button from 'components/Button';
import BinaryCell from 'components/Grids/DataGrid/BinaryCell';
import HeaderCell from 'components/Grids/DataGrid/HeaderCell';
import RowCell from 'components/Grids/DataGrid/RowCell';
import Link from 'components/Link';
import { ICONS_MAP } from 'constants/icons';
import { useRBAC } from 'hooks/useRBAC';
import { ROUTES } from 'routes/config/constants';
import { getFormattedDate } from 'utils/common';
import { IUseGridDataResult } from 'utils/types';

export const useMerchantsGridData = (
  data?: IMerchant[]
): IUseGridDataResult<IMerchant> => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'merchants.columns',
  });
  const navigate = useNavigate();
  const { checkPermission } = useRBAC();

  const merchantColumns = React.useMemo(() => {
    const columns = [
      {
        dataKey: 'id',
        title: t('id'),
        minWidth: 120,
        width: {
          unit: UNITS.PERCENT,
          value: 5,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'name',
        title: t('name'),
        minWidth: 170,
        width: {
          unit: UNITS.PERCENT,
          value: 10,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { id, name } = params.item;
          const { PATH, PARAMS } = ROUTES.MERCHANTS.SUB_PATH.MERCHANT;

          const viewMerchant = generatePath(PATH, {
            [PARAMS.ID]: id,
          });

          return (
            <RowCell {...params}>
              <Link to={viewMerchant}>{name}</Link>
            </RowCell>
          );
        },
      },
      {
        dataKey: 'merchantId',
        title: t('merchantId'),
        minWidth: 170,
        width: {
          unit: UNITS.PERCENT,
          value: 5,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'merchantName',
        title: t('merchantName'),
        minWidth: 170,
        width: {
          unit: UNITS.PERCENT,
          value: 10,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'legalEntityId',
        title: t('legalEntityId'),
        minWidth: 160,
        width: {
          unit: UNITS.PERCENT,
          value: 5,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'legalEntityName',
        title: t('legalEntityName'),
        minWidth: 170,
        width: {
          unit: UNITS.PERCENT,
          value: 10,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'platform',
        title: t('platform'),
        minWidth: 170,
        width: {
          unit: UNITS.PERCENT,
          value: 10,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'apiAccessMode',
        title: t('apiAccessMode'),
        minWidth: 170,
        width: {
          unit: UNITS.PERCENT,
          value: 10,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'shopUrl',
        title: t('shopUrl'),
        minWidth: 170,
        width: {
          unit: UNITS.PERCENT,
          value: 9,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'created',
        title: t('created'),
        minWidth: 180,
        width: {
          unit: UNITS.PERCENT,
          value: 8,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params}>{getFormattedDate(params.item.created)}</RowCell>;
        },
      },
      {
        dataKey: 'email',
        title: t('email'),
        minWidth: 170,
        width: {
          unit: UNITS.PERCENT,
          value: 8,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'enableCashier',
        title: t('enableCashier'),
        minWidth: 170,
        width: {
          unit: UNITS.PERCENT,
          value: 5,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <BinaryCell {...params} />;
        },
      },
      {
        dataKey: 'enableCascading',
        title: t('enableCascading'),
        minWidth: 170,
        width: {
          unit: UNITS.PERCENT,
          value: 5,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <BinaryCell {...params} />;
        },
      },
      {
        dataKey: 'useRoutingPriority',
        title: t('useRoutingPriority'),
        minWidth: 170,
        width: {
          unit: UNITS.PERCENT,
          value: 5,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <BinaryCell {...params} />;
        },
      },
      {
        dataKey: 'useCardToken',
        title: t('useCardToken'),
        minWidth: 170,
        width: {
          unit: UNITS.PERCENT,
          value: 5,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <BinaryCell {...params} />;
        },
      },
      {
        dataKey: 'preMemorisedRouting',
        title: t('preMemorisedRouting'),
        minWidth: 170,
        width: {
          unit: UNITS.PERCENT,
          value: 5,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <BinaryCell {...params} />;
        },
      },
    ] as IColumn<IMerchant>[];

    if (checkPermission({ list: [PERMISSIONS.CAN_VIEW_PAYMENT_PAGE_STYLIZATIONS] })) {
      columns.push({
        dataKey: 'actions' as keyof IMerchant,
        title: t('actions'),
        minWidth: 90,
        width: {
          unit: UNITS.PERCENT,
          value: 5,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { PATH, PARAMS } =
            ROUTES.MERCHANTS.SUB_PATH.MERCHANT.SUB_PATH.STYLIZATION;
          const merchantTerminalStylization = generatePath(PATH, {
            [PARAMS.ID]: params.item.id,
          });
          const navigateToStylization = () => navigate(merchantTerminalStylization);

          return (
            <RowCell {...params}>
              <Button
                variant='icon'
                size='sm'
                startIcon={<ICONS_MAP.Stylization2 />}
                onClick={navigateToStylization}
                iconSize={20}
              />
            </RowCell>
          );
        },
      } as IColumn<IMerchant>);
    }

    return columns;
  }, []);

  return !data ? [] : merchantColumns;
};
