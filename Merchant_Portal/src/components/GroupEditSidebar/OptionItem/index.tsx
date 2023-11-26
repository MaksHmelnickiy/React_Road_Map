import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { TSelectValue } from '@private/components';
import { format } from 'date-fns';

import {
  BINARY_OPTIONS,
  BINARY_REVERSE_MAPPING,
  FILTRATION_TYPES,
  LOCAL_DATE_MASK,
  MAX_INT,
  MAX_NUMBER_LENGTH,
} from 'constants/common';
import { appReactMemo } from 'hocs';
import { useGetOptionsList } from 'hooks/useGetOptionsList';

import AutocompleteSelect from '../../Controls/AutocompleteSelect';
import DatePickerInput from '../../Controls/DatePickerInput';
import ListItem from '../ListItem';

import { StyledInput, StyledRadioSelect } from './styled';

interface IOptionItemProps {
  name: string;
  type?: string;
  intlKey: string;
  groupState: Record<string, unknown>;
  activateItemHandler: (itemKey: string, type?: string) => void;
  changeItemState: (itemKey: string, value: unknown) => void;
  customComponent?: ReactElement;
}

const OptionItem = ({
  name,
  type,
  intlKey,
  groupState,
  activateItemHandler,
  changeItemState,
  customComponent,
}: IOptionItemProps) => {
  const { t } = useTranslation();

  const onChangeAutocomplete = React.useCallback(
    (value: unknown) => {
      changeItemState(name, value);
    },
    [changeItemState]
  );

  const onChangeBoolean = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
      changeItemState(
        name,
        BINARY_REVERSE_MAPPING[value as keyof typeof BINARY_REVERSE_MAPPING]
      );
    },
    [changeItemState]
  );

  const onChangeInput = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => changeItemState(name, e.target.value),
    [changeItemState]
  );

  const onChangeDate = React.useCallback(
    (to: string) => {
      changeItemState(name, format(new Date(to), LOCAL_DATE_MASK));
    },
    [changeItemState]
  );

  const renderContent = () => {
    const isDictionary = type?.startsWith('Dictionary');

    if (isDictionary) {
      const optionsList = useGetOptionsList({ name, type });

      return (
        <AutocompleteSelect
          options={optionsList}
          value={groupState[name] as TSelectValue}
          onChange={onChangeAutocomplete}
          placeholder={t(`${intlKey}.${name}` as never)}
          enablePortal
        />
      );
    }

    switch (type) {
      case FILTRATION_TYPES.BOOLEAN:
        return (
          <StyledRadioSelect
            data={BINARY_OPTIONS}
            value={(!!groupState[name]).toString()}
            onChange={onChangeBoolean}
          />
        );
      case FILTRATION_TYPES.STRING:
      case FILTRATION_TYPES.INTEGER:
      case FILTRATION_TYPES.LONG:
      case FILTRATION_TYPES.BIG_DECIMAL:
        return (
          <StyledInput
            placeholder={t(`${intlKey}.${name}` as never)}
            sizeVariant='lg'
            maxNumber={type === FILTRATION_TYPES.INTEGER ? MAX_INT : undefined}
            maxLength={
              type === FILTRATION_TYPES.LONG || type === FILTRATION_TYPES.BIG_DECIMAL
                ? MAX_NUMBER_LENGTH
                : undefined
            }
            onChange={onChangeInput}
            value={groupState[name] as string}
          />
        );
      case FILTRATION_TYPES.LOCAL_DATE:
        return (
          <DatePickerInput
            variant='datepicker'
            onChange={onChangeDate}
            value={groupState[name] as string}
            settingsConfig={{ hideTime: true }}
          />
        );
      default:
        return customComponent;
    }
  };

  return (
    <ListItem
      titleKey={name}
      intlKey={intlKey}
      type={type}
      isActive={groupState[name] !== undefined}
      onChange={activateItemHandler}
    >
      {renderContent()}
    </ListItem>
  );
};

export default appReactMemo(OptionItem);
