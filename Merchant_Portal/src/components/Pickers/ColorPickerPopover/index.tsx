import React from 'react';

import { ILightnessItem } from 'api/merchantTerminalThemes/types';
import ControlledPopover from 'components/ControlledPopover';
import { appReactMemo } from 'hocs';

import ColorPicker from './ColorPicker';

export type TColorPickerHandler = (props: { hue: number; saturation: number }) => void;

export interface IColorPickerPopover {
  children: React.ReactElement | ((props: { isOpen: boolean }) => React.ReactElement);
  hue: number;
  saturation: number;
  lightness?: number;
  lightnessConfig: ILightnessItem[];
  onChange: TColorPickerHandler;
  className?: string;
}

const ColorPickerPopover = ({ children, ...props }: IColorPickerPopover) => {
  return (
    <ControlledPopover
      placement='right-start'
      verticalShift={-50}
      component={<ColorPicker {...props} />}
    >
      {({ isOpen }) => (typeof children === 'function' ? children({ isOpen }) : children)}
    </ControlledPopover>
  );
};

export default appReactMemo(ColorPickerPopover);
