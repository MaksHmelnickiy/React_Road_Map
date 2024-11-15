export {};
// ⁡⁢⁣⁣Reducers⁡⁡ определяют, как ⁡⁣⁣⁢состояние⁡ приложения изменяется в ⁡⁣⁣⁢ответ на экшены⁡, отправленные в ⁡⁣⁣⁢стор⁡. 
// Помните, что ⁡⁢⁣⁣экшены⁡ только ⁡⁣⁣⁢описывают⁡, что произошло, но ⁡⁢⁣⁢не⁡ ⁡⁣⁣⁢описывают⁡, как изменяется ⁡⁣⁣⁢состояние⁡ приложения.

// ⁡⁢⁣⁣Редьюсер (reducer)⁡ — это ⁡⁣⁣⁢чистая⁡ функция, которая принимает ⁡⁣⁣⁢предыдущее состояние⁡ и ⁡⁣⁣⁢экшен⁡ (⁡⁣⁢⁣state⁡ и ⁡⁣⁢⁣action⁡) 
// и ⁡⁣⁣⁢возвращает⁡ следующее состояние (⁡⁣⁣⁢новую версию⁡ предыдущего). (previousState, action) => newState;


// ⁡⁢⁣⁢Очень важно⁡, чтобы редьюсеры ⁡⁣⁣⁢оставались чистыми функциями.⁡ Вот список того, чего никогда ⁡⁢⁣⁢нельзя делать⁡ в ⁡⁢⁣⁣редьюсере⁡:
// 1) Непосредственно изменять то, что ⁡⁣⁣⁢пришло в аргументах функции⁡;
// 2) Выполнять какие-либо ⁡⁣⁣⁢сайд-эффекты⁡: обращаться к API или осуществлять переход по роутам;
// 3) Вызывать ⁡⁢⁣⁢не⁡ ⁡⁣⁣⁢чистые функции⁡, например ⁡⁣⁢⁣Date.now()⁡ или ⁡⁣⁢⁣Math.random()⁡.

// пример 
const initialState = {
    todos: [],
    counter: 0,
  };
  
  const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };
      case 'INCREMENT_COUNTER':
        return {
          ...state,
          counter: state.counter + 1,
        };
      // Другие case для других действий
      default:
        return state;
    }
  };
  //   ⁡⁣⁣⁢В этом примере⁡ ⁡⁢⁣⁣rootReducer⁡ обрабатывает два типа действий: ⁡⁣⁣⁢добавление задачи⁡ (ADD_TODO) и ⁡⁣⁣⁢инкремент счетчика⁡ (INCREMENT_COUNTER). 
  //   Он возвращает новый объект состояния, сохраняя при этом неизмененные поля.
  import { createStore } from 'redux';

const initialState2 = { count: 0 };

function counterReducer(state = initialState2, action: any) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
// ⁡⁢⁣⁢Неизменяемость состояния⁡:
// ⁡⁢⁣⁣Редьюсеры⁡ должны возвращать ⁡⁣⁣⁢новое состояние⁡, ⁡⁢⁣⁡⁢⁣⁢а не изменять⁡ ⁡⁣⁣⁢существующее⁡. Это достигается с помощью методов, 
// которые создают копии объектов и массивов (например, ⁡⁣⁢⁣Object.assign⁡, 
// ⁡⁣⁢⁣спред-оператор⁡ для объектов, методы ⁡⁣⁢⁣concat⁡,⁡⁣⁢⁣ slice⁡ и т.д. для массивов).


// ⁡⁣⁣⁢Пример простого редьюсера⁡:
const initialState = {
  count: 0
};

function counterReducer(state = initialState, action: { type: any; }) {
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

const store = createStore(counterReducer);

store.dispatch({ type: 'INCREMENT' });
console.log(store.getState()); // { count: 1 }
