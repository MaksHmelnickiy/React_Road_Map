// Задача: Счетчик с историей

import React from "react"

// Создайте счетчик, который позволяет пользователю увеличивать, уменьшать и сбрасывать значение счетчика. Также отображайте историю всех событий счетчика, 
// включая действия (увеличение, уменьшение, сброс) и время, когда они произошли.

// Требования:

// Начальное значение счетчика - 0.
// Пользователь может нажать кнопки "Увеличить", "Уменьшить" и "Сбросить" для изменения значения счетчика.
// История событий должна отображаться в виде списка с указанием времени события и его типа (например, "Увеличено на 1", "Уменьшено на 1", "Сброшено до 0").
// Каждое событие в истории должно иметь уникальный идентификатор.
// События в истории должны отображаться в порядке их добавления (сверху вниз).
// Используйте useReducer для управления состоянием счетчика и историей событий.
// Вы можете начать с определения начального состояния, редюсера и создания компонента React для реализации этой задачи.

interface DateHistory {
  date: string
}

interface State {
  counter: number,
  dates: DateHistory[]
}

const initialState:State = {
  counter: 0,
  dates: []
}

interface Action {
  type: 'increment' | 'decrement' | 'refresh'
}

const reducer = (state: State, action: Action):State => {
  switch(action.type){
    case 'increment': return {counter: state.counter + 1, dates: [...state.dates, { date: `increment: ${new Date().toString()}` }]};
    case 'decrement': return {counter: state.counter - 1, dates: [...state.dates, { date: `decrement: ${new Date().toString()}` }]};
    case 'refresh': return {counter: 0, dates: [...state.dates, { date: `refresh: ${new Date().toString()}` }]};
    default: return state
  }
}

export const UseReducerHistoryTask2 = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return <div>
            <ul>
          {state.dates.map((item, key) => (
            <li key={key} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px' }}>
              {item.date}
            </li>
          ))}
        </ul>
        <div><h4>{state.counter}</h4></div>
        <div>
          <button
            style={{ background: 'red', border: 'none', color: '#fff', padding: '10px 40px', borderRadius: '7px', cursor: 'pointer', marginRight: '10px' }}
            onClick={() => dispatch({ type: 'decrement' })}
          >
            Minus
          </button>
          <button
            style={{ background: 'green', border: 'none', color: '#fff', padding: '10px 40px', borderRadius: '7px', cursor: 'pointer', marginRight: '10px' }}
            onClick={() => { dispatch({ type: 'increment'});}}
          >
            Plus
          </button>
          <button
            style={{ background: 'gray', border: 'none', color: '#fff', padding: '10px 40px', borderRadius: '7px', cursor: 'pointer' }}
            onClick={() => { dispatch({ type: 'refresh'});}}
          >
            Refresh
          </button>
        </div>
  </div>
}
