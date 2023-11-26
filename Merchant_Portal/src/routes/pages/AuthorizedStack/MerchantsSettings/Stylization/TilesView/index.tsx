import { ITheme } from 'api/merchantTerminalThemes/types';
import { appReactMemo } from 'hocs';

import { Container } from './styled';
import Tile from './Tile';

interface ITiles {
  themes?: ITheme[];
  activeTheme?: string;
  maxThemesReached: boolean;
  merchantId: string;
}

const Tiles = ({
  themes = [],
  activeTheme = '',
  maxThemesReached,
  merchantId,
}: ITiles) => {
  return (
    <Container>
      {themes.map((theme) => (
        <Tile
          key={theme.id}
          theme={theme}
          isActive={theme.id === activeTheme}
          maxThemesReached={maxThemesReached}
          merchantId={merchantId}
        />
      ))}
    </Container>
  );
};

export default appReactMemo(Tiles);
