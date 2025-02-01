// App.js
import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from '../store';
import Register from './register';
import Login from './login';
import { logoutUser } from './action';

const AppContent = () => {
  const isLoggedIn = useSelector((state: any) => state.isLoggedIn);
  const currentUser = useSelector((state: any) => state.currentUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser() as any);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {currentUser}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <Register />
          <Login />
        </div>
      )}
    </div>
  );
};

const ReduxThunkTask5 = () => (
  <Provider store={store}>
    <AppContent />
  </Provider>
);

export default ReduxThunkTask5;
