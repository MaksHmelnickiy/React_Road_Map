import React from 'react';
import { useTranslation } from 'react-i18next';

import Tooltip from 'components/Tooltip';
import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';
import { ThemedElement } from 'utils/types';

import Loader from '../Loader';

import { IButtonProps, StyledButton } from './styled';

const Button = React.forwardRef<HTMLButtonElement, ThemedElement<IButtonProps>>(
  (
    {
      isLoading,
      children,
      loaderSize = 40,
      tooltipText,
      isActive,
      enableShowFocus,
      enableCopyToClipboard,
      copyText = '',
      onClick,
      startIcon,
      ...props
    },
    ref
  ) => {
    const { t } = useTranslation();

    const onCopy = React.useCallback(() => {
      navigator.clipboard.writeText(copyText);
    }, [copyText]);

    const button = (
      <StyledButton
        {...props}
        ref={ref}
        $isActive={isActive}
        $isLoading={isLoading}
        $enableShowFocus={enableShowFocus}
        onClick={enableCopyToClipboard ? onCopy : onClick}
        startIcon={enableCopyToClipboard ? <ICONS_MAP.Copy /> : startIcon}
      >
        {isLoading ? <Loader size={loaderSize} /> : children}
      </StyledButton>
    );

    if (enableCopyToClipboard) {
      return (
        <Tooltip component={t('common.copied')} showOnClick closeIn={300}>
          {button}
        </Tooltip>
      );
    }

    if (tooltipText) {
      return (
        <Tooltip component={tooltipText} showOnClick closeIn={300}>
          {button}
        </Tooltip>
      );
    }

    return button;
  }
);

export default appReactMemo(Button);
