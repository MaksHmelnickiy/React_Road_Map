import { baseThemeValues } from 'constants/common';
import { componentSidebarTheme } from 'routes/pages/AuthorizedStack/ThemeEditor/Editor/ComponentSidebar/theme';
import { editorHeaderTheme } from 'routes/pages/AuthorizedStack/ThemeEditor/Editor/Header/theme';
import { editorSidebarTheme } from 'routes/pages/AuthorizedStack/ThemeEditor/Editor/Sidebar/theme';

export const themeEditorTheme = {
  header: editorHeaderTheme,
  sidebar: editorSidebarTheme,
  componentSidebar: componentSidebarTheme,
  settingsHeader: {
    bg: 'palette.surface.3',
    borderWidth: '1px',
    borderColor: 'palette.neutral.5',
    settingName: {
      fontFamily: baseThemeValues.inherit,
      fontSize: '14px',
      fontWeight: 600,
      text: 'palette.neutral.90',
    },
    viewModeSwitcher: {
      bg: 'palette.surface.4',
      borderColor: 'palette.tertiary.10',
      borderRadius: '5px',
      borderWidth: '1px',
      modeItem: {
        base: {
          bg: 'palette.transparent',
          borderRadius: '5px',
          icon: 'palette.tertiary.20',
        },
        hover: {
          bg: 'palette.tertiary.5',
          borderRadius: '5px',
          icon: 'palette.tertiary.30',
        },
        pressed: {
          bg: 'palette.tertiary.10',
          borderRadius: '5px',
          icon: 'palette.tertiary.40',
        },
        active: {
          bg: 'palette.primary.20',
          borderRadius: '5px',
          icon: 'palette.primary.99',
        },
      },
    },
  },
};
