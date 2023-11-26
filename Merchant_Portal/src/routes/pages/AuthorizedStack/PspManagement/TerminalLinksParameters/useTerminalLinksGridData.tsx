import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath } from 'react-router-dom';

import { IColumn, UNITS } from '@private/data-grid';

import { ITerminalLinksParameters } from 'api/terminalsLinks/types';
import BinaryCell from 'components/Grids/DataGrid/BinaryCell';
import HeaderCell from 'components/Grids/DataGrid/HeaderCell';
import RowCell from 'components/Grids/DataGrid/RowCell';
import Link from 'components/Link';
import { useGetDictionaryNaming } from 'hooks/useGetDictionaryNaming';
import { ROUTES } from 'routes/config/constants';

export const useTerminalLinksParametersGridData = (
  data?: ITerminalLinksParameters[]
): IColumn<ITerminalLinksParameters>[] => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'terminalLinksParameters.columns',
  });

  const getDictionaryNaming = useGetDictionaryNaming();

  const terminalLinksParametersColumns = React.useMemo(() => {
    return [
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
        dataKey: 'merchantTerminalName',
        title: t('merchantTerminalName'),
        minWidth: 170,
        width: {
          unit: UNITS.PERCENT,
          value: 10,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { merchantTerminalId, merchantTerminalName } = params.item;
          const { PATH, PARAMS } = ROUTES.MERCHANTS.SUB_PATH.MERCHANT;
          const path = generatePath(PATH, {
            [PARAMS.ID]: merchantTerminalId,
          });

          return (
            <RowCell {...params}>
              {merchantTerminalName ? <Link to={path}>{merchantTerminalName}</Link> : '-'}
            </RowCell>
          );
        },
      },
      {
        dataKey: 'terminalLinkDescription',
        title: t('terminalLinkDescription'),
        minWidth: 230,
        width: {
          unit: UNITS.PERCENT,
          value: 10,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { terminalLinkId, terminalLinkDescription } = params.item;
          const { PATH, PARAMS } =
            ROUTES.PSP_MANAGEMENT.SUB_PATH.TERMINALS_LINKS.SUB_PATH.TERMINAL_LINK;
          const path = generatePath(PATH, {
            [PARAMS.ID]: terminalLinkId,
          });
          return (
            <RowCell {...params}>
              {terminalLinkDescription ? (
                <Link to={path}>{terminalLinkDescription}</Link>
              ) : (
                '-'
              )}
            </RowCell>
          );
        },
      },
      {
        dataKey: 'terminalLinkId',
        title: t('terminalLinkId'),
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
        dataKey: 'bankName',
        title: t('bankName'),
        minWidth: 180,
        width: {
          unit: UNITS.PERCENT,
          value: 10,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { PATH, PARAMS } = ROUTES.PSP_MANAGEMENT.SUB_PATH.PSP.SUB_PATH.VIEW;
          const path = generatePath(PATH, {
            [PARAMS.ID]: params.item.bankId,
          });
          return (
            <RowCell {...params}>
              <Link to={path}>{params.item.bankName}</Link>
            </RowCell>
          );
        },
      },
      {
        dataKey: 'paymentMethod',
        title: t('paymentMethod'),
        minWidth: 180,
        width: {
          unit: UNITS.PERCENT,
          value: 10,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { paymentMethod } = params.item;

          const text = getDictionaryNaming('paymentMethodMap', paymentMethod);

          return <RowCell {...params}>{text || paymentMethod || '-'}</RowCell>;
        },
      },
      {
        dataKey: 'paramId',
        title: t('paramId'),
        minWidth: 150,
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
        dataKey: 'name',
        title: t('name'),
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
        dataKey: 'value',
        title: t('value'),
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
        dataKey: 'level',
        title: t('level'),
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
        dataKey: 'editable',
        title: t('editable'),
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
    ] as IColumn<ITerminalLinksParameters>[];
  }, []);

  return !data ? [] : terminalLinksParametersColumns;
};
