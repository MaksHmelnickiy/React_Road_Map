import React from 'react';
import { useTranslation } from 'react-i18next';

import { TButtonTypes } from '@private/components';

import Button from 'components/Button';
import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';

import {
  Container,
  Content,
  FooterStyled,
  HeaderStyled,
  StyledAbsoluteLoader,
  Title,
} from './styled';

export interface IModalContainerProps {
  title?: string;
  leftBtnText?: string;
  leftBtnVariant?: TButtonTypes | 'outlined';
  rightBtnText?: string;
  rightBtnVariant?: TButtonTypes | 'outlined';
  rightBtnType?: React.ComponentProps<'button'>['type'];
  disableLeftBtn?: boolean;
  disableRightBtn?: boolean;
  onLeftAction?: () => void;
  onRightAction?: () => void;
  onDismiss?: () => void;
  enableLoadingIndicator?: boolean;
  isLoading?: boolean;
  className?: string;
  footer?: React.ReactElement;
  children?: React.ReactNode;
  rightBtnLoading?: boolean;
}

const ModalContainer = ({
  title,
  onLeftAction,
  onRightAction,
  onDismiss,
  disableLeftBtn,
  disableRightBtn,
  rightBtnText,
  rightBtnVariant = 'primary',
  rightBtnType = 'submit',
  leftBtnText,
  leftBtnVariant = 'outlined',
  children,
  enableLoadingIndicator = false,
  isLoading = false,
  className,
  footer,
  rightBtnLoading,
}: IModalContainerProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'modals' });

  return (
    <Container className={className}>
      {enableLoadingIndicator && <StyledAbsoluteLoader show={isLoading} height={4} />}
      <HeaderStyled>
        <Title as='h3'>{title}</Title>
        <Button
          variant='icon'
          iconSize={12}
          startIcon={<ICONS_MAP.Close />}
          onClick={onDismiss}
        />
      </HeaderStyled>
      <Content>{children}</Content>
      {footer || (
        <FooterStyled>
          <Button
            variant={leftBtnVariant}
            onClick={onLeftAction}
            disabled={disableLeftBtn}
          >
            {leftBtnText || t('close')}
          </Button>
          <Button
            type={rightBtnType}
            variant={rightBtnVariant}
            disabled={disableRightBtn}
            onClick={onRightAction}
            isLoading={rightBtnLoading}
          >
            {rightBtnText || t('confirm')}
          </Button>
        </FooterStyled>
      )}
    </Container>
  );
};

export default appReactMemo(ModalContainer);
