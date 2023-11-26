import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userSessionSlice } from './session';
import { userConfigurationSlice } from './userConfiguration';

export const rootReducer = combineReducers({
  [userConfigurationSlice.name]: userConfigurationSlice.reducer,
  [userSessionSlice.name]: userSessionSlice.reducer,
});

const persistedReducer = persistReducer(
  {
    key: '@merchant-portal',
    version: 1,
    storage,
  },
  rootReducer
);

export const createStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    devTools: process.env.NODE_ENV !== 'production',
  });

  return store;
};

const store = createStore();

export const persistor = persistStore(store);

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export default store;
