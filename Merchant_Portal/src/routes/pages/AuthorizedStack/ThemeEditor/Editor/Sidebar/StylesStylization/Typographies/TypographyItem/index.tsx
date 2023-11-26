import React from 'react';

import Typography from 'components/Typography';
import { appReactMemo } from 'hocs';

import { ITypographyBase } from '../types';

import MainFontSetting from './MainFontSetting';
import {
  Container,
  Divider,
  Main,
  Name,
  PreviewTypography,
  StyledControlledPopover,
} from './styled';
import TypographySettings from './TypographySettings';

interface ITypographySetting {
  typography?: ITypographyBase;
  name: string;
  mainFontFamily: string;
  onFontChange?: (key: string, typography: ITypographyBase) => void;
  onMainFontChange?: (fontFamily: string) => void;
}

const TypographyItem = ({
  typography,
  name,
  mainFontFamily,
  onFontChange,
  onMainFontChange,
}: ITypographySetting) => {
  const [isSelected, setIsSelected] = React.useState(false);

  return (
    <StyledControlledPopover
      component={
        typography ? (
          <TypographySettings
            typography={typography}
            mainFontFamily={mainFontFamily}
            onChange={onFontChange}
            keyPath={name.toLocaleLowerCase().replace(/\s/g, '.')}
          />
        ) : (
          <MainFontSetting fontFamily={mainFontFamily} onChange={onMainFontChange} />
        )
      }
      placement='right-start'
      verticalShift={-50}
      onChange={setIsSelected}
    >
      <div>
        <Container $isActive={isSelected}>
          <Main>
            <PreviewTypography
              fontFamily={typography?.fontFamily}
              fontWeight={typography?.fontWeight}
            >
              Aa
            </PreviewTypography>
            <Name size='sm'>{name}</Name>
          </Main>
          {typography && <Typography size='sm'>{typography?.fontSize}</Typography>}
        </Container>
        <Divider />
      </div>
    </StyledControlledPopover>
  );
};

export default appReactMemo(TypographyItem);
