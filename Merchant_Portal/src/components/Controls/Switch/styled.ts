import {
  ISwitchProps as IBaseSwitchProps,
  Switch,
  switchClasses,
} from '@private/components';
import {
  getBorderBase,
  getFontBase,
  getPrefixedVar,
  ThemedElement,
} from '@private/payment';
import styled, { css } from 'styled-components';

export interface ISwitchProps extends IBaseSwitchProps {
  readonly?: boolean;
}

const getThumbTheme = (prefix: string[]) => {
  return css`
    ${getBorderBase([...prefix, 'thumb'])};
    background: ${getPrefixedVar(prefix, 'thumb', 'bg')};
    box-shadow: 0px 1px 3px ${getPrefixedVar(prefix, 'thumb', 'boxShadow')},
      0px 1px 2px ${getPrefixedVar(prefix, 'thumb', 'boxShadow')};
  `;
};

const getTrackTheme = (prefix: string[]) => {
  return css`
    ${getBorderBase([...prefix, 'track'])};
    background: ${getPrefixedVar(prefix, 'track', 'bg')};
    box-shadow: 0 0 0 ${getPrefixedVar(prefix, 'track', 'outlineWidth')}
      ${getPrefixedVar(prefix, 'track', 'outlineColor')};
  `;
};

export const IconContainer = styled.span`
  display: inline-flex;

  svg {
    width: 7px;
    height: 7px;
  }
`;

export const getSwitchTheme = (themePrefix = ['components', 'switch']) => css`
  margin-left: 0;
  vertical-align: middle;
  column-gap: 10px;

  ${switchClasses.root} {
    flex: 0 0 36px;
    min-width: 36px;
    height: 20px;
    padding: 0;
    overflow: visible;
    z-index: 0;
  }

  ${switchClasses.label} {
    line-height: 100%;
    transition: all 0.3s ease;
  }

  ${switchClasses.switchBase} {
    padding: 0;
    margin: 2px;
    transition-duration: 0.3s;
  }

  ${switchClasses.thumb} {
    width: 16px;
    height: 16px;
  }

  ${switchClasses.track} {
    height: 100%;
    margin: 0;
    border-style: solid;
    transition: all 0.3s ease;
  }

  ${switchClasses.label} {
    ${getFontBase([...themePrefix, 'notChecked', 'base', 'label'])}
  }

  ${switchClasses.track} {
    ${getTrackTheme([...themePrefix, 'notChecked', 'base'])}
  }

  ${switchClasses.thumb} {
    ${getThumbTheme([...themePrefix, 'notChecked', 'base'])}
  }

  ${IconContainer} {
    color: ${getPrefixedVar(themePrefix, 'notChecked', 'base', 'icon')};
  }

  &[data-ischecked='true'] {
    ${switchClasses.label} {
      ${getFontBase([...themePrefix, 'checked', 'base', 'label'])}
    }

    ${switchClasses.switchBase} {
      transform: translateX(16px);
    }

    ${switchClasses.track} {
      ${getTrackTheme([...themePrefix, 'checked', 'base'])}
      transition: background 0.3s ease;
    }

    ${switchClasses.thumb} {
      ${getThumbTheme([...themePrefix, 'checked', 'base'])}
    }

    ${IconContainer} {
      color: ${getPrefixedVar(themePrefix, 'checked', 'base', 'icon')};
    }
  }

  &:active {
    ${switchClasses.label} {
      ${getFontBase([...themePrefix, 'notChecked', 'pressed', 'label'])}
    }

    ${switchClasses.track} {
      ${getTrackTheme([...themePrefix, 'notChecked', 'pressed'])}
      transition: box-shadow 0.3s ease;
    }

    ${switchClasses.thumb} {
      ${getThumbTheme([...themePrefix, 'notChecked', 'pressed'])}
    }

    ${IconContainer} {
      color: ${getPrefixedVar(themePrefix, 'notChecked', 'pressed', 'icon')};
    }

    &[data-ischecked='true'] {
      ${switchClasses.label} {
        ${getFontBase([...themePrefix, 'checked', 'pressed', 'label'])}
      }

      ${switchClasses.track} {
        ${getTrackTheme([...themePrefix, 'checked', 'pressed'])}
      }

      ${switchClasses.thumb} {
        ${getThumbTheme([...themePrefix, 'checked', 'pressed'])}
      }

      ${IconContainer} {
        color: ${getPrefixedVar(themePrefix, 'checked', 'pressed', 'icon')};
      }
    }
  }

  &:hover:not(:active):not([data-isdisabled='true']) {
    ${switchClasses.label} {
      ${getFontBase([...themePrefix, 'notChecked', 'hover', 'label'])}
    }

    ${switchClasses.track} {
      ${getTrackTheme([...themePrefix, 'notChecked', 'hover'])}
      transition: background 0.3s ease;
    }

    ${switchClasses.thumb} {
      ${getThumbTheme([...themePrefix, 'notChecked', 'hover'])}
    }

    ${IconContainer} {
      color: ${getPrefixedVar(themePrefix, 'notChecked', 'hover', 'icon')};
    }

    &[data-ischecked='true'] {
      ${switchClasses.label} {
        ${getFontBase([...themePrefix, 'checked', 'hover', 'label'])}
      }

      ${switchClasses.track} {
        ${getTrackTheme([...themePrefix, 'checked', 'hover'])}
        transition: background 0.3s ease;
      }

      ${switchClasses.thumb} {
        ${getThumbTheme([...themePrefix, 'checked', 'hover'])}
      }

      ${IconContainer} {
        color: ${getPrefixedVar(themePrefix, 'checked', 'hover', 'icon')};
      }
    }
  }

  &[data-isdisabled='true'] {
    opacity: 1;

    &[data-ischecked='true'] {
      ${switchClasses.label} {
        ${getFontBase([...themePrefix, 'checked', 'disabled', 'label'])}
      }

      ${switchClasses.track} {
        ${getTrackTheme([...themePrefix, 'checked', 'disabled'])}
        opacity: 1;
      }

      ${switchClasses.thumb} {
        ${getThumbTheme([...themePrefix, 'checked', 'disabled'])}
      }

      ${IconContainer} {
        color: ${getPrefixedVar(themePrefix, 'checked', 'disabled', 'icon')};
      }
    }

    &[data-ischecked='false'] {
      ${switchClasses.label} {
        ${getFontBase([...themePrefix, 'notChecked', 'disabled', 'label'])}
      }

      ${switchClasses.track} {
        ${getTrackTheme([...themePrefix, 'notChecked', 'disabled'])};
        opacity: 1;
      }

      ${switchClasses.thumb} {
        ${getThumbTheme([...themePrefix, 'notChecked', 'disabled'])};
      }

      ${IconContainer} {
        color: ${getPrefixedVar(themePrefix, 'notChecked', 'disabled', 'icon')};
      }
    }
  }
`;

export const StyledSwitch = styled(Switch)<ThemedElement<ISwitchProps>>`
  ${({ themePrefix = ['components', 'switch'] }) => getSwitchTheme(themePrefix)};

  ${({ readonly }) =>
    readonly &&
    css`
      pointer-events: none;
    `}
`;
