import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath } from 'react-router-dom';

import { IColumn, UNITS } from '@private/data-grid';

import { ITerminalLinksGroups } from 'api/terminalsLinks/types';
import BinaryCell from 'components/Grids/DataGrid/BinaryCell';
import HeaderCell from 'components/Grids/DataGrid/HeaderCell';
import RowCell from 'components/Grids/DataGrid/RowCell';
import Link from 'components/Link';
import { ROUTES } from 'routes/config/constants';

export const useTerminalLinksGroupsData = (
  data?: ITerminalLinksGroups[]
): IColumn<ITerminalLinksGroups>[] => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'terminalLinksGroups.columns',
  });

  return React.useMemo(() => {
    if (!data) {
      return [];
    }

    return [
      {
        dataKey: 'merchant.name',
        title: t('merchant.name'),
        width: {
          unit: UNITS.PERCENT,
          value: 15,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'merchant.id',
        title: t('merchant.id'),
        width: {
          unit: UNITS.PERCENT,
          value: 15,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'id',
        title: t('id'),
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
        dataKey: 'name',
        title: t('name'),
        width: {
          unit: UNITS.PERCENT,
          value: 20,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { PATH, PARAMS } =
            ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINAL_LINKS_GROUPS.SUB_PATH
              .TERMINAL_LINKS_GROUP;
          const viewTLGroup = generatePath(PATH, {
            [PARAMS.ID]: params.item.id,
          });
          return (
            <RowCell {...params}>
              <Link to={viewTLGroup}>{params.item.name}</Link>
            </RowCell>
          );
        },
      },
      {
        dataKey: 'limitsCount',
        title: t('limitsCount'),
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
        dataKey: 'terminalLinksCount',
        title: t('terminalLinksCount'),
        width: {
          unit: UNITS.PERCENT,
          value: 20,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'enabled',
        title: t('enabled'),
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
    ] as IColumn<ITerminalLinksGroups>[];
  }, [data]);
};
