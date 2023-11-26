import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  IColumnsSettingsConfig,
  ICustomBottomToolbarProps,
  ICustomTopToolbarProps,
  IGridPagination,
  IGridProps,
} from '@private/data-grid';

import { useSaveGridSettings } from 'components/Grids/DataGrid/useSaveGridSettings';
import Loader from 'components/Loader';
import NoItemsFound from 'components/NoItemsFound';
import { appReactMemo } from 'hocs';
import {
  IAllPageFilters,
  IFilterSetting,
  ISortType,
  TSortCallbackProps,
} from 'utils/types';

import BottomToolbar from './BottomToolbar';
import { DataGridProvider } from './DataGridContext';
import { StyledDataGrid } from './styled';
import TopToolbar from './TopToolbar';
import { useSortGridColumns } from './useSortGridColumns';

interface IDataGrid<T> extends IGridProps<T> {
  currentPage?: number;
  perPage?: number;
  total?: number;
  onPerPageChange?: (count: number) => void;
  onPageChange?: (page: number) => void;
  pageFilters?: IAllPageFilters;
  sort?: ISortType;
  filters?: Record<keyof T, IFilterSetting>;
  onSort?: (config: TSortCallbackProps) => void;
  pageKey?: string;
  baseOffColumns?: string[];
  customToolbarElement?: React.ReactNode;
  baseOnColumns?: string[];
  refetch?: () => void;
}

const DataGrid = <T,>({
  isLoading,
  isFetching,
  data,
  columns,
  onPerPageChange,
  onPageChange,
  total,
  headerHeight = 60,
  rowHeight = () => 60,
  defaultMinWidthColumn = 150,
  isTopToolbar = true,
  isBottomToolbar = true,
  pageFilters,
  sort,
  filters,
  pagination = {},
  onSort,
  pageKey,
  baseOffColumns,
  baseOnColumns,
  refetch,
  columnsSettingsConfig,
  notVirtualized = true,
  customToolbarElement,
  components = {},
  ...rest
}: IDataGrid<T>): React.ReactElement => {
  const { t } = useTranslation('translation', { keyPrefix: 'common' });

  const { onColumnOrderChange } = useSaveGridSettings(pageKey);
  const {
    columns: gridColumns,
    initialOffColumns,
    initialOnColumns,
  } = useSortGridColumns({
    columns,
    pageKey,
    baseOffColumns,
    baseOnColumns,
  });

  const columnsSettings = React.useMemo(
    () =>
      ({
        ...columnsSettingsConfig,
        initialOffColumns,
        initialOnColumns,
        onVisibilityChange: onColumnOrderChange,
        onOrderChange: onColumnOrderChange,
      } as IColumnsSettingsConfig<T>),
    [initialOffColumns, initialOnColumns, onColumnOrderChange, columnsSettingsConfig]
  );

  const defaultSortedColumn = React.useMemo(() => {
    const entries = Object.entries<IFilterSetting>(filters || {});
    const [defaultItem] = entries.find(([_key, filter]) => filter.defaultSorting) || [];

    return defaultItem;
  }, [filters]);

  const currentContext = React.useMemo(
    () => ({
      defaultSortedColumn,
      disabled: !data.length || !!isFetching,
      sort,
      filters,
      onSort,
    }),
    [data.length, isFetching, sort, filters, onSort, defaultSortedColumn]
  );

  const { page: currentPage, size: rowsPerPage } = pageFilters || {};

  const paginationConfig = React.useMemo(() => {
    const { isDefaultGridPagination = false } = pagination;

    return {
      isDefaultGridPagination,
      onPageChange,
      currentPage,
      rowsPerPage,
      onPerPageChange,
      total,
      startPage: 0,
    } as IGridPagination;
  }, [currentPage, rowsPerPage, pagination, onPageChange, onPerPageChange, total]);

  const textConfig = React.useMemo(
    () => ({
      bottomToolbar: {
        to: t('pagination.to'),
        of: t('pagination.of'),
        entries: t('pagination.entries'),
      },
    }),
    []
  );

  const NotFoundPageComponent = React.useCallback(
    () => (
      <NoItemsFound title={t('noItemsFound')} subtitle={t('anotherFiltersCombination')} />
    ),
    []
  );

  const LoaderComponent = React.useCallback(() => <Loader size={70} />, []);

  const TopToolbarComponent = React.useCallback(
    (props: ICustomTopToolbarProps<T>) => (
      <TopToolbar
        {...props}
        total={total}
        customToolbarElement={customToolbarElement}
        refetch={refetch}
      />
    ),
    [total, customToolbarElement]
  );

  const BottomToolbarComponent = React.useCallback(
    (props: ICustomBottomToolbarProps) => <BottomToolbar {...props} />,
    []
  );

  const componentsConfig = React.useMemo(
    () => ({
      TopToolbar: TopToolbarComponent,
      BottomToolbar: BottomToolbarComponent,
      Loader: LoaderComponent,
      NotFoundPage: NotFoundPageComponent,
      ...components,
    }),
    [TopToolbarComponent, LoaderComponent, NotFoundPageComponent]
  );

  return (
    <DataGridProvider value={currentContext}>
      <StyledDataGrid
        {...rest}
        isLoading={isLoading}
        isFetching={isFetching}
        data={data}
        headerHeight={headerHeight}
        rowHeight={rowHeight}
        columns={gridColumns}
        defaultMinWidthColumn={defaultMinWidthColumn}
        isTopToolbar={isTopToolbar}
        isBottomToolbar={isBottomToolbar}
        pagination={paginationConfig}
        textConfig={textConfig}
        columnsSettingsConfig={columnsSettings}
        components={componentsConfig}
        notVirtualized={notVirtualized}
      />
    </DataGridProvider>
  );
};

export default appReactMemo(DataGrid);
