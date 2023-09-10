// ⁡⁢⁣⁣useReducer⁡ - это хук (hook) в библиотеке React, который ⁡⁣⁣⁢используется для управления состоянием⁡ ⁡⁢⁣⁣компонента⁡ 
// с использованием подхода "⁡⁣⁣⁢управление состоянием через события⁡". 
// Этот хук предоставляет ⁡⁣⁣⁢более мощный способ⁡ управления сложным состоянием компонента, ⁡⁣⁣⁢чем useState⁡.

// С помощью ⁡⁢⁣⁣useReducer⁡ вы можете определить пользовательскую ⁡⁣⁣⁢функцию-редюсер (reducer function)⁡, 
// которая будет обрабатывать ⁡⁣⁣⁢действия (actions)⁡,
// и использовать этот редюсер вместе ⁡⁣⁣⁢с текущим состоянием компонента⁡. Когда происходит действие, редюсер ⁡⁢⁣⁣применяет⁡ 
// его к текущему состоянию и ⁡⁢⁣⁣возвращает⁡ новое состояние. 
// Это делает управление сложными состояниями более явным и предсказуемым.
import React from 'react';

interface Action {
  type: 'increment' | 'decrement'
}

interface State {
  count: number
}

const initialState:State = {
  count: 0,
}

const reducer = (state: State, action: Action): State => {
  switch(action.type){
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1};
    default: return state;
  }
}

// ⁡⁢⁣⁣initialState⁡ и ⁡⁢⁣⁣reducer⁡ определяють лучше ⁡⁢⁣⁢вне⁡ ⁡⁣⁣⁢функционального компонента⁡, 
// так как мы сможем: его повторно использовать, чистота кода, лучше для тестирования⁡, и это хорошая практика.

export const MyUseReducer:React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer,initialState)
  return <div>
    <div>{state.count}</div>
    <button onClick={() => dispatch({type: 'increment'})}>+</button>
    <button onClick={() => dispatch({type: 'decrement'})}>-</button>
  </div>
}

// Здесь мы определили начальное состояние ⁡⁢⁣⁣initialState⁡ и ⁡⁢⁣⁣редюсер reducer⁡, который обрабатывает действия "⁡⁣⁣⁢increment⁡" и "⁡⁣⁣⁢decrement⁡". 
// Затем мы используем ⁡⁢⁣⁣useReducer⁡ для создания ⁡⁣⁣⁢состояния⁡ и функции ⁡⁣⁣⁢dispatch⁡, которую мы используем для ⁡⁣⁣⁢отправки⁡ действий в редюсер.