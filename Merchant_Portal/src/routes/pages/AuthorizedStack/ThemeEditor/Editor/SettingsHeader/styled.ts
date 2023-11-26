import { getBorderBase, getFontBase, getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import AutocompleteSelect from 'components/Controls/AutocompleteSelect';

const prefix = ['themeEditor', 'settingsHeader'];

export const Container = styled.header`
  min-height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 50px;
  border-style: solid;
  border-top: none;

  background: ${getPrefixedVar(prefix, 'bg')};
  ${getBorderBase(prefix)};
`;

export const Setting = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

export const SettingName = styled.div`
  ${getFontBase([...prefix, 'settingName'])}
`;

export const StyledAutocompleteSelect = styled(AutocompleteSelect)`
  min-width: 250px;
`;
