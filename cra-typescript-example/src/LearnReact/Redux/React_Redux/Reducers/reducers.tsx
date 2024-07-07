// reducers.js
import { combineReducers } from 'redux';

const initialStateCounter = {
  count: 0
};

function counterReducer(state = initialStateCounter, action: { type: any; }) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
}

const initialStateUser = {
  name: '',
  age: 0
};

function userReducer(state = initialStateUser, action: { type: any; payload: any; }) {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.payload
      };
    case 'SET_AGE':
      return {
        ...state,
        age: action.payload
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer
});

export default rootReducer;
