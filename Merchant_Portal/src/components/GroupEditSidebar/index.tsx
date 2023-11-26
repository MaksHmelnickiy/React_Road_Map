import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from 'components/Button';
import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';

import { Actions, Container, Header, HeaderTitle, Title } from './styled';

interface IGroupEditSidebar {
  children: React.ReactNode;
  isOpen: boolean;
  onCancel: () => void;
  onSave: () => void;
  closeBar: () => void;
  isSaving: boolean;
  saveDisabled?: boolean;
}

const GroupEditSidebar = ({
  children,
  isOpen,
  closeBar,
  onCancel,
  onSave,
  isSaving,
  saveDisabled,
}: IGroupEditSidebar) => {
  const { t } = useTranslation();

  return (
    <Container $isOpen={isOpen}>
      <Header>
        <HeaderTitle>
          <Title size='lg'>{t('groupEdit.title')}</Title>
        </HeaderTitle>
        <Button
          variant='icon'
          size='xs'
          onClick={closeBar}
          startIcon={<ICONS_MAP.Close />}
          iconSize={10}
          disabled={isSaving}
        />
      </Header>
      {children}
      <Actions>
        <Button variant='outlined' onClick={onCancel} disabled={isSaving}>
          {t('common.cancel')}
        </Button>
        <Button
          variant='primary'
          onClick={onSave}
          isLoading={isSaving}
          disabled={isSaving || saveDisabled}
        >
          {t('common.save')}
        </Button>
      </Actions>
    </Container>
  );
};

export default appReactMemo(GroupEditSidebar);
