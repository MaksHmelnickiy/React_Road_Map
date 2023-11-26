import React from 'react';
import { useTranslation } from 'react-i18next';

import Switch from 'components/Controls/Switch';
import GroupEditSidebar from 'components/GroupEditSidebar';
import ListItem from 'components/GroupEditSidebar/ListItem';
import { BINARY_OPTIONS, BINARY_REVERSE_MAPPING } from 'constants/common';
import { appReactMemo } from 'hocs';

import { AllTitle, EnableAll, ItemsList, StyledRadioSelect } from './styled';

interface IOptionItem {
  name: string;
  groupState: Record<string, boolean | undefined>;
  activateItemHandler: (itemKey: string) => void;
  changeItemState: (itemKey: string, value: boolean) => void;
}

const OptionItem = ({
  name,
  groupState,
  activateItemHandler,
  changeItemState,
}: IOptionItem) => {
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
      changeItemState(
        name,
        BINARY_REVERSE_MAPPING[value as keyof typeof BINARY_REVERSE_MAPPING]
      );
    },
    []
  );

  return (
    <ListItem
      titleKey={name}
      intlKey='terminalsLinks.columns'
      isActive={groupState[name] !== undefined}
      onChange={activateItemHandler}
    >
      <StyledRadioSelect
        data={BINARY_OPTIONS}
        value={(!!groupState[name]).toString()}
        onChange={onChange}
      />
    </ListItem>
  );
};

interface IGroupEditSidebar {
  isOpen: boolean;
  onCancel: () => void;
  onSave: () => void;
  closeBar: () => void;
  enableAll: () => void;
  isAllEnabled: boolean;
  isSaving: boolean;
  propertiesList: { name: string; type: string }[];
  groupState: Record<string, boolean | undefined>;
  activateItemHandler: (itemKey: string) => void;
  changeItemState: (itemKey: string, value: boolean) => void;
}

const GroupEdit = ({
  enableAll,
  isAllEnabled,
  propertiesList,
  groupState,
  activateItemHandler,
  changeItemState,
  ...props
}: IGroupEditSidebar) => {
  const { t } = useTranslation('translation', { keyPrefix: 'terminalsLinks.groupEdit' });

  const isEdited = Object.keys(groupState).length;
  return (
    <GroupEditSidebar {...props} saveDisabled={!isEdited}>
      <EnableAll>
        <AllTitle size='xs'>{t('enableAll')}</AllTitle>
        <Switch checked={isAllEnabled} onChange={enableAll} />
      </EnableAll>
      <ItemsList>
        {propertiesList.map(({ name }, index) => (
          <OptionItem
            key={index}
            name={name}
            groupState={groupState}
            activateItemHandler={activateItemHandler}
            changeItemState={changeItemState}
          />
        ))}
      </ItemsList>
    </GroupEditSidebar>
  );
};

export default appReactMemo(GroupEdit);
