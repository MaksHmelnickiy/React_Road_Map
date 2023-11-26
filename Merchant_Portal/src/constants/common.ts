export const PER_PAGE_OPTIONS = [
  { value: 10, label: '10' },
  { value: 25, label: '25' },
  { value: 50, label: '50' },
  { value: 100, label: '100' },
];

export enum STATUSES {
  INVALID_DATA = 400,
  AUTHENTICATION = 401,
  AUTHORIZATION = 403,
  NOT_FOUND = 404,
  DATA_ERROR = 422,
}

export enum FILTRATION_TYPES {
  STRING = 'String',
  BOOLEAN = 'Boolean',
  INTEGER = 'Int',
  LONG = 'Long',
  BIG_DECIMAL = 'BigDecimal',
  ZONED_DATE_TIME = 'ZonedDateTime',
  LOCAL_DATE = 'LocalDate',
  LIST = 'List',
}

export const INTEGER_REG_EXP = /^[0-9]*$/;
export const getIntRegExp = (min = 0, max = 2) => new RegExp(`^[0-9]{${min},${max}}$`);
export const DECIMAL_REG_EXP = /^\d+\.?\d*$/;

export const MAX_INT = 2147483647;
export const MAX_NUMBER_LENGTH = 50;

export const LOCAL_SEARCH_KEY = 'localSearch';

export const SMALL_SCREEN_WIDTH = 1730;

export const baseThemeValues = {
  inherit: 'inherit',
};

export const DATE_TIME_MASK = 'hh:mm:ss a, MMM d, yyyy';
export const DATE_MASK = 'MMM d, yyyy';
export const TIMEZONE_MASK = "yyyy-MM-dd'T'HH:mm:ssXXX";
export const LOCAL_DATE_MASK = 'yyyy-MM-dd';

export const CREDIT_CARD = 'CREDIT_CARD';

export const BINARY_OPTIONS = [
  { label: 'common.on', value: 'true' },
  { label: 'common.off', value: 'false' },
];

export const BINARY_REVERSE_MAPPING = {
  true: true,
  false: false,
};

export const MAX_MSEC = 31556952000; // max msec from DB
export const MAX_HOURS = Math.floor(MAX_MSEC / (1000 * 60 * 60)); // one year
export const MAX_PERIOD_MINUTES = 49;
export const MAX_MINUTES = 59;
export const ZERO_MINUTES = '00';
export const MINUTE_MSEC = 1000 * 60; // milliseconds in one minute
export const HOUR_MSEC = MINUTE_MSEC * 60; // milliseconds in one hour
