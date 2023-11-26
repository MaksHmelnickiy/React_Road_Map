import { ISelectOption } from '@private/components';

import { IGist, ISortingCallback } from './types';

export const sleep = (ms: number): Promise<void> => {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const copyToClipBoard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
};

export const getFormattedDate = (dateString?: string, ignoreList?: string[]): string => {
  if (!dateString) {
    return '';
  }
  const date = new Date(dateString);
  const formatter = new Intl.DateTimeFormat('ru', {
    hour: ignoreList?.includes('hour') ? undefined : 'numeric',
    minute: ignoreList?.includes('minute') ? undefined : 'numeric',
    second: ignoreList?.includes('second') ? undefined : 'numeric',
    year: ignoreList?.includes('year') ? undefined : 'numeric',
    month: ignoreList?.includes('month') ? undefined : '2-digit',
    day: ignoreList?.includes('day') ? undefined : '2-digit',
  });

  return formatter.format(date);
};

export const getFormattedCountry = (countryCode?: string, locale = 'en'): string => {
  if (!countryCode) {
    return '';
  }
  const formatter = new Intl.DisplayNames([locale], { type: 'region' });

  return formatter.of(countryCode) || countryCode;
};

// ------------------- case convertation -----------------------

type caseTypes = 'snakeCase' | 'camelCase';

export const getSnakeCase = (text?: string): string =>
  text
    ? text
        .split(/(?=[A-Z])/)
        .join('_')
        .toLowerCase()
    : '';

export const getCamelCase = (text?: string): string =>
  text
    ? text
        .toLowerCase()
        .replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('_', ''))
    : '';

export const convertCases = <T>(type: caseTypes, data = {}): Record<string, T> => {
  const updated = Object.entries(data).map(([key, value]) => {
    const updatedKey = type === 'snakeCase' ? getSnakeCase(key) : getCamelCase(key);
    if (Array.isArray(value) && value[0] instanceof Object) {
      return [updatedKey, value.map((item) => convertCases(type, item))];
    }
    if (value instanceof Object && !Array.isArray(value)) {
      return [updatedKey, convertCases(type, value)];
    }
    return [updatedKey, value];
  });
  return Object.fromEntries(updated);
};

export const getNormalName = (text: string): string => {
  if (!text) {
    return '';
  }

  const normalizedArr = text
    .split('_')
    .map((item) => item[0].toUpperCase() + item.slice(1).toLowerCase());
  return normalizedArr.join(' ');
};

export const normalizeCamelCaseName = (text: string) => {
  if (text === 'bg') {
    return 'Background'; // TODO
  }
  return text
    .split(/(?=[A-Z])/)
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(' ');
};

export const getHMfromMilliseconds = (milliseconds: number | undefined) => {
  if (!milliseconds) {
    return null;
  }

  const seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  minutes %= 60;

  return `${hours}h${minutes.toString().padStart(2, '0')}min`;
};

interface ISetNestedProp<T> {
  key: string;
  obj: T;
  value: unknown;
}

export const setNestedProp = <T>({ key, obj, value }: ISetNestedProp<T>) => {
  if (!key.includes('.')) {
    return { ...obj, [key]: value };
  }
  const currentObj = structuredClone(obj);
  let currentValue = currentObj;
  const keys = key.split('.').reverse() as (keyof T)[];

  while (keys.length) {
    const key = keys.pop();
    if (key && keys.length) {
      currentValue = currentValue[key] as T;
    }

    if (key && !keys.length) {
      currentValue[key as keyof T] = value as T[keyof T];
    }
  }

  return currentObj;
};

export const getSortingCallback = <T>({
  filters,
  sort,
  columns,
  index,
  callback,
}: ISortingCallback<T>) => {
  return {
    sortedColumn: sort?.orders?.find(
      (column) => column.property === columns[index]?.dataKey
    ),
    onSortingChange: filters?.[columns[index].dataKey]?.sortable ? callback : undefined,
  };
};

export const mathRoundNumber = (number?: number, digits = 2) => {
  if (number === undefined) {
    return '';
  }
  const countOfDigits = digits < 1 ? 0 : digits;
  if (countOfDigits === 0) {
    return Math.round(number);
  }
  const roundNumber = 10 ** countOfDigits;
  return Math.round(number * roundNumber) / roundNumber;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const readJWTData = (jwt?: string): any => {
  if (!jwt) {
    return;
  }
  const encodedDataParts = jwt.split('.');
  if (encodedDataParts.length !== 3) {
    return;
  }
  const encodedData = encodedDataParts[1];
  const decoded = window.atob(encodedData);
  return JSON.parse(decoded);
};

export const getPreviousMonthDate = (): Date => {
  const date = new Date();

  const previousMonth = new Date(date.getTime());
  previousMonth.setDate(0);

  return previousMonth;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
interface IGetFormErrors {
  getTranslation: (key: string) => void;
  errors?: Record<string, any>;
}

export const getFormErrors = ({ getTranslation, errors }: IGetFormErrors) => {
  const newObj: Record<string, any> = {};
  /* eslint-enable @typescript-eslint/no-explicit-any */
  if (!errors) {
    return newObj;
  }

  Object.keys(errors).forEach((key) => {
    const path = key.split('.');
    let currentObj = newObj;

    path.forEach((pathKey, index) => {
      if (index === path.length - 1) {
        currentObj[pathKey] = getTranslation(errors[key]);
      } else {
        currentObj[pathKey] = currentObj[pathKey] || {};
        currentObj = currentObj[pathKey];
      }
    });
  });

  return newObj;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getFormTouched = (
  originalObj?: Record<string, any>
): Record<string, any> => {
  const newObj: Record<string, any> = {};
  /* eslint-enable @typescript-eslint/no-explicit-any */

  if (!originalObj) {
    return newObj;
  }

  Object.keys(originalObj).forEach((key) => {
    const path = key.split('.');
    let currentObj = newObj;

    path.forEach((pathKey, index) => {
      if (index === path.length - 1) {
        currentObj[pathKey] = true;
      } else {
        currentObj[pathKey] = currentObj[pathKey] || {};
        currentObj = currentObj[pathKey];
      }
    });
  });

  return newObj;
};

export const formErrorsExist = (
  errors: Record<string, unknown>,
  omitKeys: string[] = []
): boolean => {
  const entries = Object.entries(errors);
  for (const [key, value] of entries) {
    if (typeof value !== 'object' && value && !omitKeys.includes(key)) {
      return true;
    }
    if (typeof value === 'object') {
      return formErrorsExist(value as Record<string, unknown>);
    }
  }

  return false;
};

export const checkNumberValue = (
  value?: number,
  returnText?: string | number
): string | number => (value === undefined ? '-' : returnText || value);

export const getSelectList = <T extends IGist>(
  data?: T[] | null
): ISelectOption[] | undefined => {
  return data?.map((item) => ({
    value: item.id,
    label: item.name,
  }));
};
