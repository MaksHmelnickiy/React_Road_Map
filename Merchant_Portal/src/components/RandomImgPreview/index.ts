import { RandomImgPreview } from '@private/components';
import { getPrefixedVar } from '@private/payment';
import styled from 'styled-components';

export default styled(RandomImgPreview)`
  height: 100%;
  color: ${getPrefixedVar(['components', 'randomImagePreview'])};

  & > * {
    height: 100%;
  }

  img {
    max-width: 100%;
    display: inline-block;
    margin: 0;
    border-radius: 0px;
    overflow: hidden;
  }
`;
