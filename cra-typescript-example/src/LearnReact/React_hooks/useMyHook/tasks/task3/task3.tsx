// Задача: Создание хука для работы с таймером

import React from "react"
import { useHookTimer } from "./hook"

// Вы должны создать хук useMyHook, который упростит работу с таймером в ваших компонентах. 
// Этот хук должен предоставлять функциональность для запуска, остановки и сброса таймера.

// Требования:

// Хук должен предоставлять функции для запуска, остановки и сброса таймера.
// Хук должен поддерживать настройку начального времени для таймера.
// Хук должен предоставлять текущее значение времени таймера.
// Хук должен обеспечивать возможность задавать интервал обновления времени таймера (например, каждую секунду).
// Хук должен предоставлять возможность задавать действие, которое выполняется при завершении таймера.

export const UseMyHookTask3 = () => {

  const handleTimerFinish = React.useCallback(() => {
    console.log('Finish timer!')
  },[])

  const {time, startTimer, stopTimer, refreshTimer} = useHookTimer(20, 100, handleTimerFinish)

  return <>
  <h3>Time: {time}</h3>
  <button onClick={startTimer}>Start</button>
  <button onClick={stopTimer}>Stop</button>
  <button onClick={refreshTimer}>Refresh</button>
  </>
}