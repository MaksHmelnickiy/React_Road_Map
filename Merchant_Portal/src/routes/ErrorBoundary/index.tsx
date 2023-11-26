/* eslint-disable */
import React from 'react';

import { queryClient } from 'queries';
import SomethingWrong from 'routes/pages/UnauthorizedStack/SomethingWrongPages/SomethingWrong';
import PermissionDenied from 'routes/pages/UnauthorizedStack/SomethingWrongPages/PermissionDenied';
import { withRouter } from 'routes/ErrorBoundary/withRouter';
import { Location } from 'react-router-dom';
import { notificationService } from 'utils/notificationService';
import { NOTIF_TYPES } from '@private/notifications';
import { WithTranslation, withTranslation } from 'react-i18next';

import AccessForbidden from 'routes/pages/UnauthorizedStack/SomethingWrongPages/AccessForbidden';
import { STATUSES } from 'constants/common';

interface Props extends WithTranslation {
  children: React.ReactNode;
  router?: {
    location: Location;
  };
}

interface State {
  hasError: boolean;
  error: any;
}

class ErrorBoundary extends React.PureComponent<Props, State> {
  state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  resetError = () => {
    if (this.state.hasError) {
      this.setState({
        hasError: false,
        error: null,
      });
      queryClient.resetQueries({
        predicate: (query) => {
          return query.state.status !== 'success';
        },
      });
    }
  };

  componentDidCatch(error: any, errorInfo: React.ErrorInfo) {
    const { t, i18n } = this.props;

    let message = t('notifications.requestFailed');

    if (error.code === 'ECONNABORTED') {
      this.resetError();

      if (i18n.exists(error.message)) {
        message = t(error.message as never);
      } else {
        message = error.message;
      }

      notificationService.show({
        type: NOTIF_TYPES.ERROR,
        title: t('notifications.errorTitle'),
        message: error?.response?.data?.message || message,
      });
    }
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>) {
    if (prevState.hasError) {
      this.resetError();
    }
  }

  componentWillUnmount() {
    this.resetError();
  }

  render() {
    const { children } = this.props;
    const { error, hasError } = this.state;

    const permissionError = error?.response?.data?.exception?.includes(
      'AuthorizationException'
    );

    if (permissionError) {
      return <PermissionDenied onReset={this.resetError} />;
    }

    const accessDenied = error?.response?.status === STATUSES.AUTHORIZATION;

    if (accessDenied) {
      return <AccessForbidden onReset={this.resetError} />;
    }

    if (hasError && !permissionError) {
      return <SomethingWrong onReset={this.resetError} />;
    }

    return children;
  }
}

export default withTranslation()(withRouter(ErrorBoundary));
