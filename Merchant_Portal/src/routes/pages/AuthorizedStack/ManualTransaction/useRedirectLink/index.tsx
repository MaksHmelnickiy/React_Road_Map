import React from 'react';
import { useTranslation } from 'react-i18next';

import { useModal } from '@private/modals';

import Button from 'components/Button';
import Link from 'components/Link';
import ModalContainer from 'components/ModalContainer';
import { ICONS_MAP } from 'constants/icons';
import { copyToClipBoard } from 'utils/common';

import { Content, Footer, Message } from './styled';

export interface IConfirmModalConfig {
  onClose?: () => void;
  link: string;
}

const RedirectLinkModal = ({ onClose, link }: IConfirmModalConfig) => {
  const { t } = useTranslation();

  const onCopy = React.useCallback(async () => {
    await copyToClipBoard(link);
  }, [link]);

  return (
    <ModalContainer
      title={t('manualTransaction.modal.title')}
      rightBtnText={t('modals.close')}
      onDismiss={onClose}
      footer={
        <Footer>
          <Button variant='primary' onClick={onClose}>
            {t('modals.close')}
          </Button>
        </Footer>
      }
    >
      <Message variant='bold' size='lg'>
        {t('manualTransaction.modal.message')}
      </Message>
      <Content>
        <Button
          size='sm'
          variant='icon'
          startIcon={<ICONS_MAP.Copy />}
          iconSize={14}
          onClick={onCopy}
          tooltipText={t('common.copied')}
        />
        <Link href={link} target='_blank'>
          {t('manualTransaction.modal.linkText')}
        </Link>
      </Content>
    </ModalContainer>
  );
};

type TUseRedirectLinkModal = [(config: IConfirmModalConfig) => void, () => void];

export const useRedirectLinkModal = (): TUseRedirectLinkModal => {
  const { closeModal, showModal } = useModal();

  const showLinkModal = React.useCallback((config: IConfirmModalConfig) => {
    showModal(<RedirectLinkModal {...config} onClose={closeModal} />);
  }, []);

  return [showLinkModal, closeModal];
};
