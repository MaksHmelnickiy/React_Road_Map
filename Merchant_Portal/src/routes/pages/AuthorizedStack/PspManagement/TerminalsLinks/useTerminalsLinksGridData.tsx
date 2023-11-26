import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath } from 'react-router-dom';

import { IColumn, UNITS } from '@private/data-grid';

import { ITerminalsLinks } from 'api/terminalsLinks/types';
import BinaryCell from 'components/Grids/DataGrid/BinaryCell';
import HeaderCell from 'components/Grids/DataGrid/HeaderCell';
import RowCell from 'components/Grids/DataGrid/RowCell';
import Link from 'components/Link';
import { useGetDictionaryNaming } from 'hooks/useGetDictionaryNaming';
import { ROUTES } from 'routes/config/constants';

export const useTerminalsLinksGridData = (
  data?: ITerminalsLinks[]
): IColumn<ITerminalsLinks>[] => {
  const { t } = useTranslation('translation', { keyPrefix: 'terminalsLinks.columns' });

  const getDictionaryNaming = useGetDictionaryNaming();

  const terminalsLinksColumns = React.useMemo(() => {
    return [
      {
        dataKey: 'id',
        title: t('id'),
        minWidth: 110,
        width: {
          unit: UNITS.PERCENT,
          value: 7,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'merchantTerminal.merchant.name',
        title: t('merchantTerminal.merchant.name'),
        minWidth: 170,
        width: {
          unit: UNITS.PERCENT,
          value: 12.5,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'merchantTerminal.name',
        title: t('merchantTerminal.name'),
        minWidth: 180,
        width: {
          unit: UNITS.PERCENT,
          value: 12.5,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { PATH, PARAMS } = ROUTES.MERCHANTS.SUB_PATH.MERCHANT;

          const viewMerchant = generatePath(PATH, {
            [PARAMS.ID]: params.item.merchantTerminal.id,
          });

          return (
            <RowCell {...params}>
              <Link to={viewMerchant}>{params.item.merchantTerminal.name}</Link>
            </RowCell>
          );
        },
      },
      {
        dataKey: 'bankTerminal.bank.name',
        title: t('bankTerminal.bank.name'),
        minWidth: 180,
        width: {
          unit: UNITS.PERCENT,
          value: 12.5,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const viewPsp = generatePath(
            ROUTES.PSP_MANAGEMENT.SUB_PATH.PSP.SUB_PATH.VIEW.PATH,
            {
              [ROUTES.PSP_MANAGEMENT.SUB_PATH.PSP.SUB_PATH.VIEW.PARAMS.ID]:
                params.item.bankTerminal.bank.id,
            }
          );
          return (
            <RowCell {...params}>
              <Link to={viewPsp}>{params.item.bankTerminal.bank.name}</Link>
            </RowCell>
          );
        },
      },
      {
        dataKey: 'bankTerminal.name',
        title: t('bankTerminal.name'),
        minWidth: 180,
        width: {
          unit: UNITS.PERCENT,
          value: 12.5,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { PATH, PARAMS } =
            ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINALS.SUB_PATH.TERMINAL;
          const path = generatePath(PATH, {
            [PARAMS.ID]: params.item.bankTerminal.id,
          });
          return (
            <RowCell {...params}>
              <Link to={path}>{params.item.bankTerminal.name}</Link>
            </RowCell>
          );
        },
      },
      {
        dataKey: 'description',
        title: t('description'),
        minWidth: 180,
        width: {
          unit: UNITS.PERCENT,
          value: 12.5,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { PATH, PARAMS } =
            ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINALS_LINKS.SUB_PATH.TERMINAL_LINK;

          const path = generatePath(PATH, {
            [PARAMS.ID]: params.item.id.toString(),
          });
          return (
            <RowCell {...params}>
              <Link to={path}>{params.item.description}</Link>
            </RowCell>
          );
        },
      },
      {
        dataKey: 'bankTerminal.bank.paymentMethod',
        title: t('bankTerminal.bank.paymentMethod'),
        minWidth: 180,
        width: {
          unit: UNITS.PERCENT,
          value: 12,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { paymentMethod } = params.item.bankTerminal.bank;

          const text = getDictionaryNaming('paymentMethodMap', paymentMethod);

          return <RowCell {...params}>{text || paymentMethod || '-'}</RowCell>;
        },
      },
      {
        dataKey: 'enabled',
        title: t('enabled'),
        minWidth: 100,
        width: {
          unit: UNITS.PERCENT,
          value: 10,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <BinaryCell {...params} />;
        },
      },
      {
        dataKey: 'webhooksEnabled',
        title: t('webhooksEnabled'),
        minWidth: 110,
        width: {
          unit: UNITS.PERCENT,
          value: 6,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <BinaryCell {...params} />;
        },
      },
      {
        dataKey: 'motoEnabled',
        title: t('motoEnabled'),
        minWidth: 100,
        width: {
          unit: UNITS.PERCENT,
          value: 6,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <BinaryCell {...params} />;
        },
      },
      {
        dataKey: 'exitIFrame',
        title: t('exitIFrame'),
        minWidth: 100,
        width: {
          unit: UNITS.PERCENT,
          value: 7,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <BinaryCell {...params} />;
        },
      },
      {
        dataKey: 'recurringEnabled',
        title: t('recurringEnabled'),
        minWidth: 100,
        width: {
          unit: UNITS.PERCENT,
          value: 7,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <BinaryCell {...params} />;
        },
      },
      {
        dataKey: 'trusted',
        title: t('trusted'),
        minWidth: 100,
        width: {
          unit: UNITS.PERCENT,
          value: 7,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <BinaryCell {...params} />;
        },
      },
      {
        dataKey: 'limitsEnabled',
        title: t('limitsEnabled'),
        minWidth: 100,
        width: {
          unit: UNITS.PERCENT,
          value: 7,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <BinaryCell {...params} />;
        },
      },
    ] as IColumn<ITerminalsLinks>[];
  }, []);

  return !data ? [] : terminalsLinksColumns;
};
