import React from 'react';

import { INotificationProps, NOTIF_TYPES } from '@private/notifications';

import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';

import {
  BackCircularProgress,
  CloseButton,
  Container,
  Content,
  FrontCircularProgress,
  IconContainer,
  LoaderBox,
  Message,
  Row,
  Title,
} from './styled';

const Notification = ({
  type = NOTIF_TYPES.INFO,
  icon,
  message = '',
  title = '',
  onClose,
}: INotificationProps) => {
  const renderIcon = () => {
    if (icon) {
      return <IconContainer>{icon}</IconContainer>;
    }

    switch (type) {
      case NOTIF_TYPES.INFO:
        return <ICONS_MAP.NotificationInfo />;
      case NOTIF_TYPES.SUCCESS:
        return <ICONS_MAP.NotificationSuccess />;
      case NOTIF_TYPES.WARNING:
        return <ICONS_MAP.NotificationWarning />;
      case NOTIF_TYPES.ERROR:
        return <ICONS_MAP.NotificationError />;
      case NOTIF_TYPES.LOADING:
        return (
          <IconContainer>
            <LoaderBox>
              <BackCircularProgress />
              <FrontCircularProgress />
            </LoaderBox>
          </IconContainer>
        );
      default:
        return <IconContainer />;
    }
  };

  return (
    <Container type={type}>
      <Row>
        <IconContainer>{renderIcon()}</IconContainer>
        <Content>
          <Title>{title}</Title>
          {!!message && (
            <Message variant='regular' size='xs'>
              {message}
            </Message>
          )}
        </Content>
        <CloseButton
          variant='icon'
          startIcon={<ICONS_MAP.Close />}
          iconSize={10}
          onClick={onClose}
        />
      </Row>
    </Container>
  );
};

export default appReactMemo(Notification);
