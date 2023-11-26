import React from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath } from 'react-router-dom';

import { TAG_VARIANTS } from '@private/components';
import { IColumn, UNITS } from '@private/data-grid';

import { ICountryGroupData } from 'api/countryGroups/types';
import HeaderCell from 'components/Grids/DataGrid/HeaderCell';
import MultiItemsCell from 'components/Grids/DataGrid/MultiItemsCell';
import RowCell from 'components/Grids/DataGrid/RowCell';
import Link from 'components/Link';
import { ROUTES } from 'routes/config/constants';
import { IUseGridDataResult } from 'utils/types';

import { Flag, TagContainer } from './styled';

export const useCountryGroupsGridData = (
  data?: ICountryGroupData[]
): IUseGridDataResult<ICountryGroupData> => {
  const { t } = useTranslation('translation');

  const countryGroupsColumns = React.useMemo(() => {
    return [
      {
        dataKey: 'name',
        title: t('countryGroups.columns.name'),
        minWidth: 180,
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
        dataKey: 'merchantName',
        title: t('countryGroups.columns.merchantName'),
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
        dataKey: 'merchantTerminalName',
        title: t('countryGroups.columns.merchantTerminalName'),
        minWidth: 180,
        width: {
          unit: UNITS.PERCENT,
          value: 15,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          const { merchantTerminalId, merchantTerminalName } = params.item;
          const { PATH, PARAMS } = ROUTES.MERCHANTS.SUB_PATH.MERCHANT;
          const viewMerchant = generatePath(PATH, {
            [PARAMS.ID]: merchantTerminalId,
          });
          return (
            <RowCell {...params}>
              {merchantTerminalName ? (
                <Link to={viewMerchant}>{merchantTerminalName}</Link>
              ) : (
                '-'
              )}
            </RowCell>
          );
        },
      },
      {
        dataKey: 'countRulesetsUse',
        title: t('countryGroups.columns.countRulesetsUse'),
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
        dataKey: 'countryCodes',
        title: t('countryGroups.columns.countryCodes'),
        minWidth: 380,
        width: {
          unit: UNITS.PERCENT,
          value: 40,
        },
        renderHeaderCell: (params) => {
          return <HeaderCell {...params} />;
        },
        renderRowCell: (params) => {
          return (
            <MultiItemsCell
              {...params}
              renderFirstItem={(item) => (
                <TagContainer
                  startIcon={<Flag countryCode={item} fullHeight />}
                  label={item}
                  variant={TAG_VARIANTS.PRIMARY}
                />
              )}
              renderHiddenComponent={(item) => (
                <TagContainer
                  startIcon={<Flag countryCode={item} fullHeight />}
                  label={item}
                  variant={TAG_VARIANTS.PRIMARY}
                />
              )}
              list={params.item.countryCodes}
              countDisplayItems={5}
            />
          );
        },
      },
    ] as IColumn<ICountryGroupData>[];
  }, []);

  return !data ? [] : countryGroupsColumns;
};
