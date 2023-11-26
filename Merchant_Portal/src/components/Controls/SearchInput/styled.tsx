import { inputClasses, ISearchInputProps, SearchInput } from '@private/components';
import styled from 'styled-components';

import { ICONS_MAP } from 'constants/icons';
import { ThemedElement } from 'utils/types';

import { getInputTheme } from '../Input/styled';

export const StyledSearchInput = styled(SearchInput).attrs((props) => ({
  isAnimatedLabel: true,
  iconMargin: 16,
  endIconSize: 30,
  endIcon: <ICONS_MAP.Clear />,
  ...props,
}))<ThemedElement<ISearchInputProps>>`
  ${getInputTheme()};

  ${inputClasses.input} {
    padding-top: 16px;
  }
`;
