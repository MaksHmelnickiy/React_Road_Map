import React from 'react';
import { useTranslation } from 'react-i18next';

import { TSelectValue } from '@private/components';

import AutocompleteSelect from 'components/Controls/AutocompleteSelect';
import { appReactMemo } from 'hocs';
import { useGetOptionsList } from 'hooks/useGetOptionsList';

import { useGroupEditContext } from '../../groupEditContext';

const NAME = 'cardNetwork';

const CardNetwork = () => {
  const { t } = useTranslation();
  const { changeItemState, groupState } = useGroupEditContext();

  const optionsList = useGetOptionsList({ name: NAME, type: 'Dictionary.cardBrand' });

  const onChangeAutocomplete = React.useCallback((value: unknown) => {
    changeItemState(NAME, value);
  }, []);

  return (
    <AutocompleteSelect
      options={optionsList}
      value={groupState[NAME] as TSelectValue}
      onChange={onChangeAutocomplete}
      placeholder={t(`routingRuleset.columns.${NAME}` as never)}
      enablePortal
      multiselect
      disableCloseOnSelect
      maxVisibleMultiselectItems={2}
    />
  );
};

export default appReactMemo(CardNetwork);
