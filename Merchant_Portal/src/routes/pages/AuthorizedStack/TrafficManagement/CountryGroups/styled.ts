import { getBorderBase, getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

import CountryFlag from 'components/CountryFlag';
import Tag from 'components/Tags/Tag';

const prefix = ['countryGroups', 'grid'];

export const Flag = styled(CountryFlag)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 16px;
  width: 16px;
  overflow: hidden;
  ${getBorderBase([...prefix, 'img'])}
`;

export const TagContainer = styled(Tag)`
  min-height: 24px;
  padding: 0px 6px;
  border-style: solid;
  ${getBorderBase([...prefix, 'tag'])}
  background: ${getPrefixedVar([...prefix, 'tag', 'bg'])};
`;
