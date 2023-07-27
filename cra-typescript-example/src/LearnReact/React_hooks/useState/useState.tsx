// Хук ⁡⁢⁣⁣useState⁡ в React позволяет ⁡⁣⁣⁢управлять состоянием⁡ в функциональных компонентах. 
// Он возвращает пару значений: ⁡⁣⁣⁢текущее состояние⁡ и ⁡⁣⁣⁢функцию для его обновления⁡

import React, { useState } from 'react';
export const MyUseState: React.FC = () => {

  //⁡⁢⁣⁡⁢⁣⁣​‌‍‌Простое​⁡ ⁡обновление состояния ⁡⁢⁣⁣setState(state - 1)⁡⁡;

  // Обновления состояния с использованием ⁡⁣⁣⁢setCount(count - 1)⁡ могут привести к ⁡⁢⁣⁢проблемам⁡ 
  // ⁡⁢⁣⁣с асинхронностью⁡, особенно при быстром и последовательном обновлении состояния.
  // ⁡⁣⁣⁢Например⁡ если ⁡⁣⁣⁢быстро нажимать⁡ ⁡⁢⁣⁣button⁡ раза ⁡⁣⁢⁣4⁡ то реакт может ⁡⁢⁣⁢не успеть⁡ отработать и выведет ⁡⁣⁢⁣3⁡.

  const [state, setState] = useState<number>(0); // ⁡⁢⁣⁣<number>⁡ даем обобщенный тип (⁡⁣⁣⁢generic⁡) - значение должны быть ⁡⁣⁣⁢только типа⁡ ⁡⁢⁣⁣number⁡. 
                                                 // Так же можно вставлять туда ⁡⁣⁣⁢сложные⁡ комбинации типа ⁡⁢⁣⁣интерфейсов⁡.
  const plus = () => {
    return setState(state + 1)
  }
  const minus = () => {
    return setState(state - 1)
  }

  // ⁡⁢⁣⁣​‌‍‌Функциональное обновление​⁡, с получением доступа к ⁡⁣⁣⁢предыдущему⁡ ⁡⁢⁣⁣setState(prev => prev - 1)⁡/

  // данный подход ⁡⁣⁣⁢решает проблему⁡ ⁡⁢⁣⁣с асинхронностью⁡, которая встречается в примере выше.
  const [statePrev, setStatePrev] = useState<number>(0); // ⁡⁢⁣⁣<number>⁡ даем обобщенный тип (⁡⁣⁣⁢generic⁡) - значение должны быть ⁡⁣⁣⁢только типа⁡ ⁡⁢⁣⁣number⁡. 
                                                         // Так же можно вставлять туда ⁡⁣⁣⁢сложные⁡ комбинации типа ⁡⁢⁣⁣интерфейсов⁡.
  const plusPrev = () => {
    return setStatePrev(prev => prev + 1);
  }
  const plusMinus = () => {
    return setStatePrev(prev => prev - 1);
  }

  return (
    <div>
      <div>
        <h2>Простое обновление состояния</h2>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <div>useState: {state}</div>
      </div>
      <hr></hr>
      <div>
        <h2>Функциональное обновление, с получением доступа к предыдущему <b>prev</b></h2>
        <button onClick={plusPrev}>+</button>
        <button onClick={plusMinus}>-</button>
        <div>useState: {statePrev}</div>
      </div>
    </div>
  )
}