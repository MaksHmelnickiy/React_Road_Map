import React from 'react';
import { useTranslation } from 'react-i18next';

import { useUpdateEffect } from '@private/hooks';

import Switch from 'components/Controls/Switch';
import { appReactMemo } from 'hocs';

import { Body, Header, Item, Name } from './styled';

export interface IListItem {
  titleKey: string;
  intlKey: string;
  type?: string;
  isActive: boolean;
  onChange: (key: string, type?: string) => void;
  children: React.ReactNode;
}

const ListItem = ({
  titleKey,
  intlKey,
  type,
  isActive,
  onChange,
  children,
}: IListItem) => {
  const { t } = useTranslation();

  const hasOpen = React.useRef(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [contentHeight, setContentHeight] = React.useState<number | null>(0);

  const changeState = React.useCallback(() => {
    const newState = !isOpen;

    if (newState) {
      setIsOpen(true);
      if (!hasOpen.current) {
        hasOpen.current = true;
      }
    } else {
      setContentHeight(0);
      setTimeout(() => setIsOpen(false), 300);
    }
  }, [isOpen]);

  const openHandler = React.useCallback(() => {
    changeState();

    onChange(titleKey, type);
  }, [changeState, onChange, titleKey, type]);

  useUpdateEffect(() => {
    if (isActive !== isOpen) {
      changeState();
    }
  }, [isActive]);

  const onMountContent = React.useCallback(
    (node: HTMLDivElement) => {
      if (!node || !isOpen) {
        return;
      }

      setContentHeight(node.scrollHeight);
    },
    [isOpen]
  );

  return (
    <Item>
      <Header>
        <Name size='sm'>{t(`${intlKey}.${titleKey}` as never)}</Name>
        <Switch checked={isActive} onChange={openHandler} />
      </Header>
      {hasOpen.current && (
        <Body height={contentHeight}>
          <div ref={onMountContent}>{children}</div>
        </Body>
      )}
    </Item>
  );
};

export default appReactMemo(ListItem);
