import { autocompleteSelectClasses, inputClasses } from '@private/components';
import { getBorderBase, getFontBase } from '@private/payment';
import styled, { css } from 'styled-components';

import AutocompleteSelect from '../AutocompleteSelect';
import Input from '../Input';

import { CountryName, CountryPrefix, TSizes } from './CountryPhoneOption/styled';

const prefix = ['components', 'countryPhone'];

export const Label = styled.div<{ $size: TSizes; disabled?: boolean; $error?: boolean }>`
  margin-bottom: 7px;
  transition: all 0.3s ease;

  ${({ $error, $size, disabled }) => {
    let state = 'inactive';
    if ($error) {
      state = 'error';
    }
    if (disabled) {
      state = 'disabled';
    }
    return css`
      ${getFontBase([...prefix, $size, state, 'label'])};
    `;
  }};
`;

export const Container = styled.div<{ $size: TSizes }>`
  ${({ $size }) => css`
    &:hover ${Label} {
      ${getFontBase([...prefix, $size, 'hover', 'label'])};
    }
    &:focus-within ${Label} {
      ${getFontBase([...prefix, $size, 'focus', 'label'])};
    }
  `};
`;

export const PhoneInput = styled.div<{
  $error?: boolean;
  disabled?: boolean;
  $size: TSizes;
}>`
  display: flex;
  align-items: center;
  border-style: solid;
  min-width: 300px;

  ${({ $size, $error }) =>
    $error
      ? css`
          ${getBorderBase([...prefix, $size, 'error'])};
        `
      : css`
          ${getBorderBase([...prefix, $size, 'inactive'])};

          &:hover {
            ${getBorderBase([...prefix, $size, 'hover'])};
          }

          &:focus-within {
            ${getBorderBase([...prefix, $size, 'focus'])};
          }

          &:disabled {
            ${getBorderBase([...prefix, $size, 'disabled'])};
          }
        `}
`;

export const StyledAutocompleteSelect = styled(AutocompleteSelect)<{ size: TSizes }>`
  ${({ size }) => css`
    flex: 0 0 ${size === 'lg' ? 120 : 110}px;
    width: ${size === 'lg' ? 120 : 110}px;
  `}

  ${autocompleteSelectClasses.inputWrapper} {
    border-top-right-radius: 0px !important;
    border-bottom-right-radius: 0px !important;

    ${CountryPrefix}, ${CountryName} {
      display: none;
    }
  }

  ${autocompleteSelectClasses.optionsWrapper} {
    width: 350px;
    max-width: 350px;
  }

  ${autocompleteSelectClasses.option} {
    padding: 3px 35px 3px 16px;
  }

  ${autocompleteSelectClasses.checkIconWrapper} {
    right: 8px;
    transform: translateY(-70%);
  }
`;

export const StyledInput = styled(Input)`
  flex: 1 1 auto;

  ${inputClasses.input} {
    border-style: none none none solid;
    border-top-left-radius: 0px !important;
    border-bottom-left-radius: 0px !important;
  }
`;

export const ErrorMessage = styled.div<{ $size: TSizes }>`
  margin-top: 2px;
  min-height: 16px;
  line-height: 133%;

  ${({ $size }) => getFontBase([...prefix, $size, 'error', 'helpText'])};
`;
