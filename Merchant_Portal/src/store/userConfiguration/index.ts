import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { APP_THEMES } from 'theme/theme';

export interface IUserState {
  theme: APP_THEMES;
  isOpenBar?: boolean;
}

const initialState: IUserState = {
  theme: APP_THEMES.DEFAULT_DARK,
  isOpenBar: false,
};

export const userConfigurationSlice = createSlice({
  name: 'userConfiguration',
  initialState,
  reducers: {
    setTheme: (state: IUserState, action: PayloadAction<APP_THEMES>) => {
      state.theme = action.payload;
    },
    setSidebarState: (state: IUserState, action: PayloadAction<boolean>) => {
      state.isOpenBar = action.payload;
    },
  },
});

export const { setTheme, setSidebarState } = userConfigurationSlice.actions;
