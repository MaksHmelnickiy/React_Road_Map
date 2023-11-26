import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath } from 'react-router-dom';

import { IColumn, UNITS } from '@private/data-grid';

import { IClient } from 'api/clients/types';
import CopyCell from 'components/Grids/DataGrid/CopyCell';
import HeaderCell from 'components/Grids/DataGrid/HeaderCell';
import RowCell from 'components/Grids/DataGrid/RowCell';
import Link from 'components/Link';
import { ROUTES } from 'routes/config/constants';
import { getFormattedCountry, getFormattedDate } from 'utils/common';
import { IUseGridDataResult } from 'utils/types';

export const useClientsGridData = (data?: IClient[]): IUseGridDataResult<IClient> => {
  const { t } = useTranslation('translation', { keyPrefix: 'clients' });

  const clientsColumns = React.useMemo(() => {
    return [
      {
        dataKey: 'merchantCustomerId',
        title: t('columns.merchantCustomerId'),
        minWidth: 170,
        width: {
          unit: UNITS.PERCENT,
          value: 8,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { PATH, PARAMS } = ROUTES.CLIENTS.SUB_PATH.CLIENT;
          const clientPath = generatePath(PATH, { [PARAMS.ID]: params.item.id });

          return (
            <RowCell {...params}>
              <CopyCell
                text={String(params.item.merchantCustomerId)}
                item={params.item}
                to={clientPath}
              />
            </RowCell>
          );
        },
      },
      {
        dataKey: 'firstName',
        title: t('columns.firstName'),
        minWidth: 190,
        width: {
          unit: UNITS.PERCENT,
          value: 12,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'lastName',
        title: t('columns.lastName'),
        minWidth: 190,
        width: {
          unit: UNITS.PERCENT,
          value: 12,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'merchantTerminalName',
        title: t('columns.merchantTerminalName'),
        minWidth: 190,
        width: {
          unit: UNITS.PERCENT,
          value: 14,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { PATH, PARAMS } = ROUTES.MERCHANTS.SUB_PATH.MERCHANT;
          const viewMerchant = generatePath(PATH, {
            [PARAMS.ID]: params.item.merchantTerminalId,
          });
          return (
            <RowCell {...params}>
              <Link to={viewMerchant}>{params.item.merchantTerminalName}</Link>
            </RowCell>
          );
        },
      },
      {
        dataKey: 'merchantTerminalId',
        title: t('columns.merchantTerminalId'),
        minWidth: 170,
        width: {
          unit: UNITS.PERCENT,
          value: 9,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return (
            <RowCell {...params}>
              <CopyCell
                text={String(params.item.merchantTerminalId)}
                item={params.item}
              />
            </RowCell>
          );
        },
      },
      {
        dataKey: 'email',
        title: t('columns.email'),
        minWidth: 180,
        width: {
          unit: UNITS.PERCENT,
          value: 12,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'countryCode',
        title: t('columns.countryCode'),
        minWidth: 170,
        width: {
          unit: UNITS.PERCENT,
          value: 8,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return (
            <RowCell {...params}>{getFormattedCountry(params.item.countryCode)}</RowCell>
          );
        },
      },
      {
        dataKey: 'city',
        title: t('columns.city'),
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
        dataKey: 'firstTimeDepositDate',
        title: t('columns.firstTimeDepositDate'),
        minWidth: 180,
        width: {
          unit: UNITS.PERCENT,
          value: 11,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return (
            <RowCell {...params}>
              {getFormattedDate(params.item.firstTimeDepositDate)}
            </RowCell>
          );
        },
      },
      {
        dataKey: 'registrationDate',
        title: t('columns.registrationDate'),
        minWidth: 180,
        width: {
          unit: UNITS.PERCENT,
          value: 10,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { registrationDate } = params.item;
          return (
            <RowCell {...params}>
              {getFormattedDate(registrationDate, ['hour', 'minute', 'second'])}
            </RowCell>
          );
        },
      },
    ] as IColumn<IClient>[];
  }, []);

  return !data ? [] : clientsColumns;
};
