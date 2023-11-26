import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath } from 'react-router-dom';

import { IColumn, UNITS } from '@private/data-grid';

import { IPspTerminal } from 'api/terminals/types';
import HeaderCell from 'components/Grids/DataGrid/HeaderCell';
import RowCell from 'components/Grids/DataGrid/RowCell';
import Link from 'components/Link';
import { ROUTES } from 'routes/config/constants';

import TerminalParamPopover from './TerminalParameters';

export const useTerminalsGridData = (data?: IPspTerminal[]): IColumn<IPspTerminal>[] => {
  const { t } = useTranslation('translation', { keyPrefix: 'terminals.columns' });

  const pspColumns = React.useMemo(() => {
    return [
      {
        dataKey: 'id',
        title: t('id'),
        minWidth: 80,
        width: {
          unit: UNITS.PERCENT,
          value: 3,
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
        width: {
          unit: UNITS.PERCENT,
          value: 39,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { id, name } = params.item;
          const { PATH, PARAMS } =
            ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINALS.SUB_PATH.TERMINAL;

          const path = generatePath(PATH, {
            [PARAMS.ID]: id,
          });

          return (
            <RowCell {...params}>
              <Link to={path}>{name}</Link>
            </RowCell>
          );
        },
      },
      {
        dataKey: 'bankName',
        title: t('bankName'),
        width: {
          unit: UNITS.PERCENT,
          value: 38,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { bankId, bankName } = params.item;
          const { PATH, PARAMS } = ROUTES.PSP_MANAGEMENT.SUB_PATH.PSP.SUB_PATH.VIEW;

          const path = generatePath(PATH, {
            [PARAMS.ID]: bankId,
          });

          return (
            <RowCell {...params}>
              <Link to={path}>{bankName}</Link>
            </RowCell>
          );
        },
      },
      {
        dataKey: 'settlementType',
        title: t('settlementType'),
        width: {
          unit: UNITS.PERCENT,
          value: 17,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'bankParams',
        title: t('actions'),
        minWidth: 80,
        width: {
          unit: UNITS.PERCENT,
          value: 3,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return (
            <RowCell {...params}>
              <TerminalParamPopover params={params.item.parameters} />
            </RowCell>
          );
        },
      },
    ] as IColumn<IPspTerminal>[];
  }, []);

  return !data ? [] : pspColumns;
};
