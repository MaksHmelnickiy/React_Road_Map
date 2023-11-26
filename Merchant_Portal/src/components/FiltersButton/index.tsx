import React from 'react';
import { useTranslation } from 'react-i18next';

import { ISelectOption, TAG_VARIANTS, TSelectValue } from '@private/components';
import { IDateBlockerChecker } from '@private/datepicker';
import { useUpdateEffect } from '@private/hooks';
import { format, isAfter } from 'date-fns';

import { IDictionariesKeys, IPaymentMethod, IResultCode } from 'api/data/types';
import AutocompleteSelect from 'components/Controls/AutocompleteSelect';
import DatePickerInput from 'components/Controls/DatePickerInput';
import { isFilterNumberRange } from 'components/FiltersButton/helpers';
import {
  IUseGridDataFiltration,
  useFiltration,
} from 'components/FiltersButton/useFiltration';
import {
  BINARY_OPTIONS,
  DECIMAL_REG_EXP,
  FILTRATION_TYPES,
  INTEGER_REG_EXP,
  MAX_INT,
  MAX_MSEC,
  MAX_NUMBER_LENGTH,
} from 'constants/common';
import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';
import { useGetDictionaries } from 'queries/data';
import { getFormattedCountry, getNormalName } from 'utils/common';

import Button from '../Button';
import Input from '../Controls/Input';
import PeriodInputs, { ITimeChange } from '../Controls/PeriodInputs';

import {
  AddButton,
  ColumnFilter,
  ColumnSelect,
  ColumnStrategy,
  Filter,
  FilterDetails,
  FilterRow,
  FiltersList,
  FiltersPopover,
  RangeContainer,
  RemoveButton,
  StyledSwitchInput,
  StyledTag,
} from './styled';
import {
  DICTIONARY_PREFIX,
  FILTER_OPERATIONS,
  IAppliedFilter,
  IFallbackValues,
  INTL_MAPPING,
  INumberRange,
  TColumnFilters,
} from './types';

const PAYMENT_METHOD_KEY = 'paymentMethod';

export interface IFiltersButtonProps extends IUseGridDataFiltration {
  columnsFilters?: TColumnFilters;
  fallbackValues?: IFallbackValues;
  availableDaysChecker?: IDateBlockerChecker;
  config?: {
    betweenList?: Set<string>;
    hoursList?: Set<string>;
  };
}

const FiltersButton = ({
  columnsFilters,
  fallbackValues,
  availableDaysChecker,
  config = {},
  ...rest
}: IFiltersButtonProps) => {
  const { t, i18n } = useTranslation();

  const { data: appData } = useGetDictionaries();

  const filtersListRef = React.useRef<HTMLUListElement>(null);
  const [dropDownIsOpen, setDropdownIsOpen] = React.useState(false);
  const [scrollBarSize, setScrollBarSize] = React.useState(0);

  const { betweenList, hoursList } = config;

  const {
    appliedFilters,
    columnsOptions,
    lastAction,
    onSelectColumn,
    onSelectFilter,
    onSelectOperation,
    addNewFilter,
    removeFilter,
  } = useFiltration({
    ...rest,
    columnsFilters,
    fallbackValues,
  });

  const maxFiltersCount = columnsOptions.length;

  React.useLayoutEffect(() => {
    if (filtersListRef.current) {
      const { offsetWidth, clientWidth } = filtersListRef.current;
      setScrollBarSize(offsetWidth - clientWidth);
    }
  }, [appliedFilters]);

  const setDropdownsIsClose = React.useCallback((isOpen: boolean) => {
    if (!isOpen) {
      setDropdownIsOpen(false);
    }
  }, []);

  const onDropDownChange = React.useCallback(() => {
    setDropdownIsOpen((state) => !state);
  }, []);

  useUpdateEffect(() => {
    if (lastAction === 'add') {
      filtersListRef.current?.scrollTo({
        top: filtersListRef.current?.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [appliedFilters.length]);

  const appliedLength = React.useMemo(
    () =>
      appliedFilters.filter((item) => item.value !== undefined && item.value !== '')
        .length,
    [appliedFilters]
  );

  const getDateOperationsOptions = (options: string[], columnType: string) => {
    const includeRange =
      options.includes(FILTER_OPERATIONS.LESS_OR_EQUALS) &&
      options.includes(FILTER_OPERATIONS.MORE_OR_EQUALS) &&
      !options.includes(FILTER_OPERATIONS.RANGE);

    const strategyOptionsList: ISelectOption[] = [];

    if (includeRange) {
      strategyOptionsList.push({
        label: t(INTL_MAPPING[FILTER_OPERATIONS.RANGE] as never),
        value: FILTER_OPERATIONS.RANGE,
      });
    }

    if (columnType === FILTRATION_TYPES.LOCAL_DATE) {
      options.forEach((strategy) => {
        strategyOptionsList.push({
          label: t(INTL_MAPPING[strategy as keyof typeof INTL_MAPPING] as never),
          value: strategy,
        });
      });
    }

    return strategyOptionsList;
  };

  const getStrategiesOptions = (columnKey?: string | null) => {
    if (!columnKey || !columnsFilters) {
      return [];
    }
    const column = columnsFilters[columnKey];

    if (!column) {
      return [];
    }

    if (
      column.type === FILTRATION_TYPES.ZONED_DATE_TIME ||
      column.type === FILTRATION_TYPES.LOCAL_DATE
    ) {
      return getDateOperationsOptions(column.listOperations, column.type);
    }

    const operationsList = column.listOperations.map((strategy) => ({
      label: t(INTL_MAPPING[strategy as keyof typeof INTL_MAPPING] as never),
      value: strategy,
    }));

    const needIncludeRange = columnKey && betweenList?.has(columnKey);

    if (needIncludeRange) {
      const withoutRange =
        column.listOperations.includes(FILTER_OPERATIONS.LESS_OR_EQUALS) &&
        column.listOperations.includes(FILTER_OPERATIONS.MORE_OR_EQUALS) &&
        !column.listOperations.includes(FILTER_OPERATIONS.RANGE);

      if (withoutRange) {
        operationsList.push({
          label: t(INTL_MAPPING[FILTER_OPERATIONS.RANGE] as never),
          value: FILTER_OPERATIONS.RANGE,
        });
      }
    }

    return operationsList;
  };

  const getOptionsList = ({
    appliedFilter,
    columnType,
  }: {
    appliedFilter?: IAppliedFilter;
    columnType?: FILTRATION_TYPES | null;
  }) => {
    if (!columnType) {
      return [];
    }
    const isDictionary = columnType.startsWith(DICTIONARY_PREFIX);

    if (isDictionary) {
      if (!appData) {
        return [];
      }

      const [_, dictionaryName] = columnType.split('.');

      const optionMapVariants = {
        countryCode: (option: string) => ({
          label:
            appliedFilter?.columnKey === 'binCountryCode'
              ? option
              : getFormattedCountry(option),
          value: option,
        }),
        currency: (option: string) => ({
          label: option,
          value: option,
        }),
        paymentMethod: ({ name, description }: IPaymentMethod) => ({
          label: description,
          value: name,
        }),
        resultCode: ({ code, message, description }: IResultCode) => ({
          label: `${code} - ${message}${description ? ` (${description})` : ''}`,
          value: code,
        }),
      };

      const baseOptionMapping = (option: string) => {
        const intlKey =
          dictionaryName === 'transactionType' || dictionaryName === 'transactionTypes'
            ? `dictionaries.transactionType.${option}`
            : `dictionaries.${dictionaryName}.${option}`;

        return {
          label: i18n.exists(intlKey) ? t(intlKey as never) : getNormalName(option),
          value: option,
        };
      };

      return appData[dictionaryName as IDictionariesKeys].map(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        optionMapVariants[dictionaryName as keyof typeof optionMapVariants] ||
          baseOptionMapping
      );
    }

    return BINARY_OPTIONS;
  };

  const getRegExp = (columnType?: FILTRATION_TYPES | null) => {
    switch (columnType) {
      case FILTRATION_TYPES.BIG_DECIMAL:
        return DECIMAL_REG_EXP;
      case FILTRATION_TYPES.INTEGER:
      case FILTRATION_TYPES.LONG:
        return INTEGER_REG_EXP;
      default:
    }
  };

  const calendarDateChecker: IDateBlockerChecker = React.useCallback(
    (props) => {
      const isDayAfterToday = isAfter(props.date, Date.now());
      if (isDayAfterToday) {
        return true;
      }

      return !!availableDaysChecker?.(props);
    },
    [availableDaysChecker]
  );

  const renderSecondFilter = (appliedFilter: IAppliedFilter, index: number) => {
    const { columnKey, operation, value } = appliedFilter;
    const column = columnsFilters?.[columnKey || ''];
    const columnType = column?.type || FILTRATION_TYPES.STRING;

    const onSelectFilterOption = (option: unknown) => {
      if (option !== undefined) {
        onSelectFilter(option as string, index);
      }
    };

    const onSelectSearch = (text: string) => {
      if (text !== value) {
        onSelectFilter(text, index);
      }
    };

    const onInputFilterChange = (e: React.ChangeEvent<HTMLInputElement>) =>
      onSelectFilter(e.target.value, index);

    const onMinInputFilterChange = (e: React.ChangeEvent<HTMLInputElement>) =>
      onSelectFilter({ max: (value as INumberRange)?.max, min: e.target.value }, index);

    const onMaxInputFilterChange = (e: React.ChangeEvent<HTMLInputElement>) =>
      onSelectFilter({ min: (value as INumberRange)?.min, max: e.target.value }, index);

    const onDateSelect = (from: string, to: string) => {
      if (!to && !from) {
        return onSelectFilter(undefined, index);
      }

      const formattedFrom =
        columnType === FILTRATION_TYPES.LOCAL_DATE && from
          ? format(new Date(from), 'yyyy-MM-dd')
          : from;

      if (
        operation !== FILTER_OPERATIONS.RANGE &&
        formattedFrom !== (value as INumberRange)?.min
      ) {
        return onSelectFilter(formattedFrom, index);
      }

      const formattedTo =
        columnType === FILTRATION_TYPES.LOCAL_DATE && to
          ? format(new Date(to), 'yyyy-MM-dd')
          : to;

      if (
        formattedFrom !== (value as INumberRange)?.min ||
        formattedTo !== (value as INumberRange)?.max
      ) {
        return onSelectFilter({ min: formattedFrom, max: formattedTo }, index);
      }
    };

    const isDictionary = columnType?.startsWith(DICTIONARY_PREFIX);

    const isPaymentMethod = columnKey === PAYMENT_METHOD_KEY;

    if (columnType === FILTRATION_TYPES.BOOLEAN || isDictionary) {
      return (
        <AutocompleteSelect
          options={getOptionsList({ appliedFilter, columnType })}
          value={value as TSelectValue}
          onChange={onSelectFilterOption}
          label={t('common.filters.filterLabel')}
          placeholder={t('common.filters.selectFilterPlaceholder')}
          onOpen={onDropDownChange}
          onClose={onDropDownChange}
          enablePortal
          disabled={!columnKey || !operation}
          onInputValueChange={isPaymentMethod ? onSelectSearch : undefined}
          defaultInputValue={value as string}
          enableRemoveButton={false}
          inputReadOnly={false}
        />
      );
    }

    const commonInputProps = {
      isAnimatedLabel: false,
      disabled: !columnKey || !operation,
      regExp: getRegExp(columnType),
      maxNumber: columnType === FILTRATION_TYPES.INTEGER ? MAX_INT : undefined,
      maxLength:
        columnType === FILTRATION_TYPES.LONG ||
        columnType === FILTRATION_TYPES.BIG_DECIMAL
          ? MAX_NUMBER_LENGTH
          : undefined,
    };

    const getDatePickerValue = () => {
      if (!value) {
        return;
      }

      if (isFilterNumberRange(value)) {
        return {
          startDate: value.min,
          endDate: value.max,
        };
      }

      return value as string;
    };

    switch (columnType) {
      case FILTRATION_TYPES.ZONED_DATE_TIME:
        return (
          <DatePickerInput
            onChange={onDateSelect}
            value={getDatePickerValue()}
            config={{ returnTimeZonedDate: true }}
            disabled={!columnKey || !operation}
            isDateBlockedChecker={calendarDateChecker}
          />
        );
      case FILTRATION_TYPES.LOCAL_DATE:
        return (
          <DatePickerInput
            variant={
              operation === FILTER_OPERATIONS.RANGE ? 'double-range-picker' : 'datepicker'
            }
            onChange={onDateSelect}
            value={getDatePickerValue()}
            settingsConfig={{ hideTime: true }}
            disabled={!columnKey || !operation}
            isDateBlockedChecker={calendarDateChecker}
          />
        );
      case FILTRATION_TYPES.STRING:
      case FILTRATION_TYPES.INTEGER:
      case FILTRATION_TYPES.LONG:
      case FILTRATION_TYPES.BIG_DECIMAL:
      default:
        if (appliedFilter.operation === FILTER_OPERATIONS.RANGE) {
          return (
            <RangeContainer>
              <Input
                {...commonInputProps}
                value={(value as INumberRange)?.min || ''}
                onChange={onMinInputFilterChange}
                placeholder='0'
                label={t('common.filters.minFilter')}
              />
              <Input
                {...commonInputProps}
                value={(value as INumberRange)?.max || ''}
                onChange={onMaxInputFilterChange}
                placeholder='0'
                label={t('common.filters.maxFilter')}
              />
            </RangeContainer>
          );
        }
        return (
          <Input
            value={typeof value === 'string' ? value : ''}
            onChange={onInputFilterChange}
            label={t('common.filters.filterLabel')}
            placeholder={t('common.filters.inputSearchPlaceholder')}
            {...commonInputProps}
          />
        );
    }
  };

  const getPopoverBody = () => {
    return (
      <>
        <FiltersList
          ref={filtersListRef}
          $isScrollable={!dropDownIsOpen}
          $scrollBarSize={scrollBarSize}
        >
          {appliedFilters.map((filterItem, index) => {
            const { columnKey, operation, value } = filterItem;
            const onSelectColumnOption = (option: TSelectValue) => {
              onSelectColumn((option as string) || null, index);
            };

            const onSelectColumnOperation = (option: TSelectValue) => {
              onSelectOperation((option as string) || null, index);
            };

            const onPeriodChange: ITimeChange = ({ msecs }) =>
              onSelectFilter(msecs, index);

            const unlimitedHandler = (
              _e: React.ChangeEvent<HTMLInputElement>,
              checked: boolean
            ) => {
              onSelectFilter(checked ? MAX_MSEC : undefined, index);
            };

            const onRemove = () => removeFilter(index);

            const currentColumns = columnsOptions.filter(
              (columnFilter) =>
                !appliedFilters.some(
                  (filter, filterIndex) =>
                    filter.columnKey === columnFilter.value && filterIndex !== index
                )
            );

            const isHoursFilter = columnKey && hoursList?.has(columnKey);

            const strategy = (
              <ColumnStrategy>
                <AutocompleteSelect
                  options={getStrategiesOptions(columnKey)}
                  value={operation}
                  label={t('common.filters.filtrationStrategy')}
                  onChange={onSelectColumnOperation}
                  placeholder={t('common.filters.selectPlaceholder')}
                  onOpen={onDropDownChange}
                  onClose={onDropDownChange}
                  enablePortal
                  disabled={!columnKey || !!fallbackValues?.[columnKey]}
                  fullVisibleOption={false}
                  enableRemoveButton={false}
                  inputReadOnly={false}
                />
              </ColumnStrategy>
            );

            const detailsContent = isHoursFilter ? (
              strategy
            ) : (
              <FilterDetails>
                {strategy}
                <ColumnFilter>{renderSecondFilter(filterItem, index)}</ColumnFilter>
              </FilterDetails>
            );

            return (
              <Filter key={index}>
                <FilterRow>
                  <ColumnSelect>
                    <AutocompleteSelect
                      options={currentColumns}
                      value={columnKey}
                      label={t('common.filters.selectLabel')}
                      onChange={onSelectColumnOption}
                      placeholder={t('common.filters.selectPlaceholder')}
                      onOpen={onDropDownChange}
                      onClose={onDropDownChange}
                      enablePortal
                      fullVisibleOption={false}
                      disabled={!!columnKey && !!fallbackValues?.[columnKey]}
                      enableRemoveButton={false}
                      inputReadOnly={false}
                    />
                  </ColumnSelect>
                  {detailsContent}
                  {isHoursFilter && operation && (
                    <>
                      <StyledSwitchInput
                        onChange={unlimitedHandler}
                        size='lg'
                        label={t('common.filters.unlimited')}
                        checked={value === MAX_MSEC}
                      />
                      {value !== MAX_MSEC && (
                        <PeriodInputs
                          label={t('common.filters.period')}
                          onTimeChange={onPeriodChange}
                          sizeVariant='lg'
                          initialValue={(value as number) ?? undefined}
                        />
                      )}
                    </>
                  )}
                </FilterRow>
                <RemoveButton
                  variant='icon'
                  iconSize={18}
                  startIcon={<ICONS_MAP.Delete />}
                  disabled={appliedFilters[index]?.columnKey === undefined}
                  onClick={onRemove}
                />
              </Filter>
            );
          })}
        </FiltersList>
        <AddButton
          variant='outlined'
          iconSize={18}
          startIcon={<ICONS_MAP.Plus />}
          disabled={
            appliedFilters.length === maxFiltersCount ||
            appliedFilters[appliedFilters.length - 1]?.value === undefined ||
            appliedFilters[appliedFilters.length - 1]?.value === ''
          }
          onClick={addNewFilter}
        >
          {t('common.filters.addButton')}
        </AddButton>
      </>
    );
  };

  if (!columnsOptions) {
    return null;
  }

  return (
    <FiltersPopover
      placement='bottom-start'
      horizontalShift={-80}
      component={getPopoverBody()}
      onChange={setDropdownsIsClose}
    >
      <Button variant='outlined' iconSize={15} startIcon={<ICONS_MAP.Filters />}>
        {t('common.filters.button')}
        {!!appliedLength && (
          <StyledTag label={appliedLength.toString()} variant={TAG_VARIANTS.PRIMARY} />
        )}
      </Button>
    </FiltersPopover>
  );
};

export default appReactMemo(FiltersButton);
