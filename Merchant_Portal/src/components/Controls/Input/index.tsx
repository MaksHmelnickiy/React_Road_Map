import React, { ChangeEvent } from 'react';

import { ICONS_MAP } from 'constants/icons';
import { appReactMemo } from 'hocs';

import { IInputProps, LgInput, SmInput } from './styled';

const Input: React.FC<IInputProps> = ({
  type,
  endIcon,
  disablePasswordIcon,
  regExp,
  onChange,
  isAnimatedLabel = false,
  maxNumber,
  sizeVariant = 'lg',
  ...rest
}) => {
  const [currentType, setCurrentType] = React.useState(type);

  const icon = React.useMemo(() => {
    if (type === 'password' && !disablePasswordIcon) {
      if (currentType === 'password') {
        return <ICONS_MAP.Eye />;
      }
      return <ICONS_MAP.EyeClosed />;
    }

    return endIcon;
  }, [currentType, endIcon, type, disablePasswordIcon]);

  const handleTypeChange = React.useCallback(() => {
    setCurrentType((state) => (state === 'password' ? 'text' : 'password'));
  }, []);

  const onEndIconClick = React.useMemo(() => {
    if (type !== 'password') {
      return rest.onEndIconClick;
    }
    return handleTypeChange || rest.onIconClick;
  }, [rest.onEndIconClick, rest.onIconClick]);

  const endIconSize = React.useMemo(() => {
    if (type === 'password') {
      return 21;
    }
    return rest.endIconSize;
  }, [type, rest.endIconSize]);

  const onChangeHandler = React.useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (regExp && value && !value.match(regExp)) {
        return;
      }
      const numberValue = Number(value);
      if (maxNumber && Number.isFinite(numberValue) && numberValue > maxNumber) {
        return;
      }
      onChange?.(e);
    },
    [onChange]
  );

  const Component = sizeVariant === 'lg' ? LgInput : SmInput;

  return (
    <Component
      {...rest}
      isAnimatedLabel={isAnimatedLabel}
      onChange={onChangeHandler}
      type={currentType}
      endIcon={icon}
      onEndIconClick={onEndIconClick}
      endIconSize={endIconSize}
    />
  );
};

export default appReactMemo(Input);
