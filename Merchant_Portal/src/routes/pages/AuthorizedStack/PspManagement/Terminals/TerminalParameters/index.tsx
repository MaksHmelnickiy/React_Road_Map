import React from 'react';
import { useTranslation } from 'react-i18next';

import { IPspTerminalParameter } from 'api/terminals/types';
import Button from 'components/Button';
import { ICONS_MAP } from 'constants/icons';

import {
  ActionsPopover,
  List,
  ListItem,
  ListItemKey,
  ListItemValue,
  PopoverTitle,
} from './styled';

interface ITerminalParameters {
  params: IPspTerminalParameter[];
}

const TerminalParamContent = ({ params }: ITerminalParameters) => {
  const { t } = useTranslation();

  return (
    <>
      <PopoverTitle variant='bold' size='xl'>
        {t('terminals.paramTitle')}
      </PopoverTitle>
      {!!params.length && (
        <List>
          {params.map((parameter, index) => (
            <ListItem key={index}>
              <ListItemKey variant='regular' size='sm'>
                {parameter.name}
              </ListItemKey>
              <ListItemValue variant='regular' size='sm'>
                {parameter.value}
              </ListItemValue>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

const TerminalParameters = (props: ITerminalParameters) => {
  return (
    <ActionsPopover
      placement='bottom-end'
      component={<TerminalParamContent {...props} />}
    >
      <Button variant='icon' startIcon={<ICONS_MAP.MoreInfo />} iconSize={18} />
    </ActionsPopover>
  );
};

export default TerminalParameters;
