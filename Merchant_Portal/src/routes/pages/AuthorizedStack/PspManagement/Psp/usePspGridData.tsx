import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath } from 'react-router-dom';

import { IColumn, UNITS } from '@private/data-grid';

import { IPsp } from 'api/psp/types';
import { TRANSACTIONS_TYPE_VARIANTS } from 'api/transactions/contants';
import BinaryCell from 'components/Grids/DataGrid/BinaryCell';
import HeaderCell from 'components/Grids/DataGrid/HeaderCell';
import MultiItemsCell from 'components/Grids/DataGrid/MultiItemsCell';
import RowCell from 'components/Grids/DataGrid/RowCell';
import Link from 'components/Link';
import Tag from 'components/Tags/Tag';
import { useGetDictionaryNaming } from 'hooks/useGetDictionaryNaming';
import { ROUTES } from 'routes/config/constants';
import { getFormattedDate } from 'utils/common';
import { IUseGridDataResult } from 'utils/types';

export const usePspGridData = (data?: IPsp[]): IUseGridDataResult<IPsp> => {
  const { t } = useTranslation();

  const getDictionaryNaming = useGetDictionaryNaming();

  const pspColumns = React.useMemo(() => {
    return [
      {
        dataKey: 'id',
        title: t('psp.columns.id'),
        minWidth: 80,
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
        title: t('psp.columns.name'),
        minWidth: 180,
        width: {
          unit: UNITS.PERCENT,
          value: 20,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const viewPsp = generatePath(
            ROUTES.PSP_MANAGEMENT.SUB_PATH.PSP.SUB_PATH.VIEW.PATH,
            {
              [ROUTES.PSP_MANAGEMENT.SUB_PATH.PSP.SUB_PATH.VIEW.PARAMS.ID]:
                params.item.id,
            }
          );
          return (
            <RowCell {...params}>
              <Link to={viewPsp}>{params.item.name}</Link>
            </RowCell>
          );
        },
      },
      {
        dataKey: 'adapterCode',
        title: t('psp.columns.adapterCode'),
        minWidth: 180,
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
        dataKey: 'email',
        title: t('psp.columns.email'),
        minWidth: 190,
        width: {
          unit: UNITS.PERCENT,
          value: 6,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <RowCell {...params} />;
        },
      },
      {
        dataKey: 'operation',
        title: t('psp.columns.operation'),
        minWidth: 200,
        width: {
          unit: UNITS.PERCENT,
          value: 10,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { operation } = params.item;

          const renderItem = (item: string) => {
            const tagVariant = TRANSACTIONS_TYPE_VARIANTS[item as never];

            return (
              <Tag
                variant={tagVariant}
                label={getDictionaryNaming('transactionTypes', item)}
              />
            );
          };

          return (
            <MultiItemsCell
              {...params}
              list={operation}
              renderFirstItem={renderItem}
              renderHiddenComponent={renderItem}
            />
          );
        },
      },
      {
        dataKey: 'isPartner',
        title: t('psp.columns.isPartner'),
        minWidth: 130,
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
        dataKey: 'enabled',
        title: t('psp.columns.enabled'),
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
        dataKey: 'refPercent',
        title: t('psp.columns.refPercent'),
        minWidth: 100,
        width: {
          unit: UNITS.PERCENT,
          value: 4,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { refPercent } = params.item;
          return <RowCell {...params}>{refPercent || '-'}</RowCell>;
        },
      },
      {
        dataKey: 'fx',
        title: t('psp.columns.fx'),
        minWidth: 100,
        width: {
          unit: UNITS.PERCENT,
          value: 6,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { fx } = params.item;
          return <RowCell {...params}>{fx || '-'}</RowCell>;
        },
      },
      {
        dataKey: 'gambling',
        title: t('psp.columns.gambling'),
        minWidth: 100,
        width: {
          unit: UNITS.PERCENT,
          value: 6,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { gambling } = params.item;
          return <RowCell {...params}>{gambling || '-'}</RowCell>;
        },
      },
      {
        dataKey: 'cryptoExchange',
        title: t('psp.columns.cryptoExchange'),
        minWidth: 180,
        width: {
          unit: UNITS.PERCENT,
          value: 6,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { cryptoExchange } = params.item;
          return <RowCell {...params}>{cryptoExchange || '-'}</RowCell>;
        },
      },
      {
        dataKey: 'notes',
        title: t('psp.columns.notes'),
        minWidth: 80,
        width: {
          unit: UNITS.PERCENT,
          value: 6,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { notes } = params.item;
          return <RowCell {...params}>{notes || '-'}</RowCell>;
        },
      },
      {
        dataKey: 'countryCodes',
        title: t('psp.columns.countryCodes'),
        minWidth: 170,
        width: {
          unit: UNITS.PERCENT,
          value: 6,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <MultiItemsCell {...params} list={params.item.countryCodes} />;
        },
      },
      {
        dataKey: 'countryGroups',
        title: t('psp.columns.countryGroups'),
        minWidth: 200,
        width: {
          unit: UNITS.PERCENT,
          value: 6,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return <MultiItemsCell {...params} list={params.item.countryGroups} />;
        },
      },
      {
        dataKey: 'pciDssCompliant',
        title: t('psp.columns.pciDssCompliant'),
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
        dataKey: 'pciDssExpirationDate',
        title: t('psp.columns.pciDssExpirationDate'),
        minWidth: 220,
        width: {
          unit: UNITS.PERCENT,
          value: 10,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return (
            <RowCell {...params}>
              {getFormattedDate(params.item.pciDssExpirationDate, [
                'hour',
                'minute',
                'second',
              ])}
            </RowCell>
          );
        },
      },
      {
        dataKey: 'paymentMethod',
        title: t('psp.columns.paymentMethod'),
        minWidth: 190,
        width: {
          unit: UNITS.PERCENT,
          value: 15,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} center />;
        },
        renderRowCell: (params) => {
          const { paymentMethod } = params.item;

          const text = getDictionaryNaming('paymentMethodMap', paymentMethod);

          return <RowCell {...params}>{text || paymentMethod || '-'}</RowCell>;
        },
      },
    ] as IColumn<IPsp>[];
  }, []);

  return !data ? [] : pspColumns;
};
