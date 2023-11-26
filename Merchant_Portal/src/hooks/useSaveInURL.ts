import React from 'react';

import { StringParam, useQueryParams } from 'use-query-params';

interface IUseSaveInURL<T> {
  savedData?: T;
  onSave: (data?: T) => void;
}

export const useSaveInURL = <T>(paramName: string): IUseSaveInURL<T> => {
  const [query, setQuery] = useQueryParams({ [paramName]: StringParam });

  const onSave = React.useCallback(
    (data?: T) => {
      const stringFilter = data ? JSON.stringify(data) : null;

      setQuery({ [paramName]: stringFilter });
    },
    [setQuery]
  );

  const savedData = React.useMemo(() => {
    try {
      if (query?.[paramName]) {
        return JSON.parse(query[paramName]!);
      }
    } catch (e) {
      setQuery({ [paramName]: null });
      // eslint-disable-next-line no-console
      console.warn('Error of parsing query string from url.');
    }
  }, [query]);

  return {
    savedData,
    onSave,
  };
};
