// actions.js
export const registerUser = (username: any, password: any) => (dispatch: any, getState: any) => {
  const users = [...getState().users, { username, password }];
  localStorage.setItem('users', JSON.stringify(users));

  dispatch({
    type: 'REGISTER_SUCCESS',
    payload: { users, username },
  });
};

export const loginUser = (username: any, password:any) => (dispatch: any, getState: any) => {
  const users = getState().users;
  const user = users.find((user: { username: any; password: any; }) => user.username === username && user.password === password);

  if (user) {
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: { username },
    });
  } else {
    alert('Invalid credentials');
  }
};

export const logoutUser = () => (dispatch: any) => {
  dispatch({ type: 'LOGOUT' });
};
