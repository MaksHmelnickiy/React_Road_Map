import React from 'react';

import { ITooltipProps } from '@private/components';

import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';

import { CloseButton, MessageContainer, StyledPopover } from './styled';

interface IControlledPopover extends Omit<ITooltipProps, 'children'> {
  children: React.ReactElement | ((props: { isOpen: boolean }) => React.ReactElement);
  component: React.ReactElement;
}

const ControlledPopover = ({
  children,
  component,
  onChange,
  ...rest
}: IControlledPopover) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const openHandler = (open: boolean) => () => {
    setIsOpen(open);
    onChange?.(open);
  };

  return (
    <StyledPopover
      {...rest}
      component={
        <MessageContainer>
          <CloseButton
            variant='icon'
            size='xs'
            startIcon={<ICONS_MAP.Close />}
            onClick={openHandler(false)}
            iconSize={10}
          />
          {component}
        </MessageContainer>
      }
      open={isOpen}
      onOpen={openHandler(true)}
      onClose={openHandler(false)}
    >
      {typeof children === 'function' ? children({ isOpen }) : children}
    </StyledPopover>
  );
};

export default appReactMemo(ControlledPopover);
