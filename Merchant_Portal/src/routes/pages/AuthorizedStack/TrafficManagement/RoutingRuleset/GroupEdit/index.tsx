import React from 'react';
import { useTranslation } from 'react-i18next';

import Accordion from 'components/Accordion';
import GroupEditSidebar from 'components/GroupEditSidebar';
import OptionItem from 'components/GroupEditSidebar/OptionItem';
import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';
import { useRoutingRulesetGroupEdit } from 'queries/routingRules';
import { IAllPageFilters } from 'utils/types';

import { useGroupEditActions } from './hooks/useGroupEditActions';

import { GroupEditProvider } from './groupEditContext';
import { GROUP } from './helpers';
import { GroupHeader, IconWrapper, ItemsList, Title } from './styled';

interface IGroupEditSideBarProps {
  isOpen: boolean;
  filters: IAllPageFilters;
  clearStates: () => void;
  itemsCount?: number;
  isAllSelected: boolean;
  propertiesList: {
    name: string;
    group?: string;
    type?: string;
    groupEdit?: boolean;
    customComponent?: React.ReactElement;
  }[];
  groupState: Record<string, unknown>;
  activateItemHandler: (itemKey: string, type?: string) => void;
  changeItemState: (itemKey: string, value: unknown) => void;
}

const GroupEdit = ({
  filters,
  clearStates,
  propertiesList,
  groupState,
  activateItemHandler,
  changeItemState,
  ...props
}: IGroupEditSideBarProps) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'routingRuleset.groupEdit.groups',
  });

  const { mutate: saveGroupSettings, isLoading: isSaving } = useRoutingRulesetGroupEdit();

  const { onSave, onCloseBar, onCancel } = useGroupEditActions({
    filters,
    saveGroupSettings,
    groupState,
    clearStates,
  });

  return (
    <GroupEditSidebar
      onSave={onSave}
      onCancel={onCancel}
      closeBar={onCloseBar}
      isSaving={isSaving}
      {...props}
    >
      <GroupEditProvider value={{ changeItemState, groupState }}>
        <ItemsList>
          {Object.keys(GROUP).map((key, index) => (
            <Accordion
              key={index}
              header={({ isOpen, openHandler }) => {
                return (
                  <Title $isOpen={isOpen} onClick={() => openHandler()}>
                    <IconWrapper $isOpen={isOpen}>
                      <ICONS_MAP.FillRightArrow />
                    </IconWrapper>
                    <GroupHeader variant='regular' size='sm'>
                      {t(GROUP[key as never])}
                    </GroupHeader>
                  </Title>
                );
              }}
            >
              <ItemsList>
                {propertiesList.map((item, index) => {
                  if (item.group !== GROUP[key as never]) {
                    return null;
                  }

                  return (
                    <OptionItem
                      key={index}
                      name={item.name}
                      type={item.type}
                      intlKey='routingRuleset.columns'
                      groupState={groupState}
                      activateItemHandler={activateItemHandler}
                      changeItemState={changeItemState}
                      customComponent={item.customComponent}
                    />
                  );
                })}
              </ItemsList>
            </Accordion>
          ))}
        </ItemsList>
      </GroupEditProvider>
    </GroupEditSidebar>
  );
};

export default appReactMemo(GroupEdit);
