// store.js
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from "@redux-devtools/extension";

// Загрузить состояние из localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Сохранить состояние в localStorage
const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {
    // игнорируем ошибки записи в localStorage
  }
};

const persistedState = loadState();

const initialState = {
  isLoggedIn: false,
  currentUser: '',
  users: JSON.parse(localStorage.getItem('users') as any) || [],
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        users: action.payload.users,
        isLoggedIn: true,
        currentUser: action.payload.username,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
        currentUser: action.payload.username,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        currentUser: '',
      };
    default:
      return state;
  }
};

const store = createStore(
  authReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
);

// Слушаем изменения состояния и сохраняем их в localStorage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
