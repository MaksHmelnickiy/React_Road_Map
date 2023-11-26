import React from 'react';

import { IColumnSetting, TColumnFilterState } from '@private/data-grid';

import { useSaveUserPageSettings } from 'queries/portalUser';

interface IUseSaveGridSettingsResult<T> {
  onColumnOrderChange: (columnsSettings: TColumnFilterState<T>) => void;
}

export const useSaveGridSettings = <T>(
  pageKey?: string
): IUseSaveGridSettingsResult<T> => {
  const { mutate: savePageSettings } = useSaveUserPageSettings();

  const onColumnOrderChange = React.useCallback((columns: TColumnFilterState<T>) => {
    if (!pageKey) {
      return;
    }

    const valuesToSave = Object.entries<IColumnSetting<T>>(columns).map(
      ([key, { visible, order }]) => [key, { visible, order }]
    );
    const columnsSettings = Object.fromEntries(valuesToSave);

    savePageSettings({ pageKey, settings: { columns: columnsSettings } });
  }, []);

  return { onColumnOrderChange };
};
