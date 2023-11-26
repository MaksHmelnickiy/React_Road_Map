export const columnsFilterTheme = {
  activeSettingButton: {
    text: 'palette.secondary.80',
    bg: 'palette.tertiary.5',
  },
  popover: {
    borderRadius: '12px',
    borderWidth: '0px',
    borderColor: 'palette.transparent',
    title: 'palette.primary.99',
    header: 'palette.primary.99',
    settingItem: {
      text: 'palette.primary.99',
      bg: 'palette.surface.5',
      borderRadius: '8px',
      borderWidth: '0px',
      borderColor: 'palette.transparent',
      dragController: {
        bg: 'palette.surface.4',
        icon: 'palette.primary.99',
      },
      dragArea: {
        base: {
          borderWidth: '2px',
          borderColor: 'palette.transparent',
          borderRadius: '8px',
        },
        active: {
          borderWidth: '2px',
          borderColor: 'palette.primary.20',
          borderRadius: '8px',
          bg: 'palette.primary.20:0.25',
        },
      },
    },
  },
};
