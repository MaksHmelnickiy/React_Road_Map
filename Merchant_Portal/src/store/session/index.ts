import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserState {
  isAuthenticated: boolean;
}

const initialState: IUserState = {
  isAuthenticated: false,
};

export const userSessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setIsAuthenticated } = userSessionSlice.actions;
