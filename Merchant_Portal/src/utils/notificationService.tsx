import { NotificationService } from '@private/notifications';

import Notification from 'components/Notification';

export const notificationService = new NotificationService({
  component: Notification,
});
