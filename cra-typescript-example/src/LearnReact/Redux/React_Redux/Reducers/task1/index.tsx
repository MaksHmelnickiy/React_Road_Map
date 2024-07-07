import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import {MyReduxComponentTask1} from './Component';

export const MyReduxTask1 = () => {
  return (
    <Provider store={store}>
      <MyReduxComponentTask1 />
    </Provider>
  )
}

