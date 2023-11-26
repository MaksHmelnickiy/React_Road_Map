import React from 'react';

import { ITheme } from 'api/merchantTerminalThemes/types';
import DataGrid from 'components/Grids/DataGrid';
import { appReactMemo } from 'hocs';
import { ROUTES } from 'routes/config/constants';

import { useThemesGridData } from './useThemesGridData';

interface ITiles {
  themes?: ITheme[];
  activeTheme?: string;
  maxThemesReached: boolean;
  merchantId: string;
}

const GridView = ({
  themes = [],
  activeTheme = '',
  maxThemesReached,
  merchantId,
}: ITiles) => {
  const themesColumns = useThemesGridData({
    data: themes,
    activeTheme,
    maxThemesReached,
    merchantId,
  });

  const paginationConfig = React.useMemo(
    () => ({
      isDefaultGridPagination: true,
    }),
    []
  );

  return (
    <DataGrid
      data={themes}
      total={themes?.length}
      columns={themesColumns}
      pagination={paginationConfig}
      pageKey={ROUTES.MERCHANTS.SUB_PATH.MERCHANT.SUB_PATH.STYLIZATION.PATH}
    />
  );
};

export default appReactMemo(GridView);
