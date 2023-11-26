import React from 'react';

import { ITooltipProps } from '@private/components';

import ControlledPopover from 'components/ControlledPopover';
import { appReactMemo } from 'hocs';

import VariableColorPicker, { IVariableColorPicker } from './VariableColorPicker';

interface IPicker
  extends Omit<ITooltipProps, 'onChange' | 'children'>,
    IVariableColorPicker {
  children: React.ReactElement | ((props: { isOpen: boolean }) => React.ReactElement);
}

const VariableColorPickerPopover = ({
  children,
  placement = 'right-start',
  verticalShift = -50,
  color,
  onChange,
  singleVariant,
  ...rest
}: IPicker) => {
  return (
    <ControlledPopover
      {...rest}
      placement={placement}
      verticalShift={verticalShift}
      component={
        <VariableColorPicker
          color={color}
          onChange={onChange}
          singleVariant={singleVariant}
        />
      }
    >
      {({ isOpen }) => (typeof children === 'function' ? children({ isOpen }) : children)}
    </ControlledPopover>
  );
};

export default appReactMemo(VariableColorPickerPopover);
