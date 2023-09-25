import React, { useEffect } from "react"

export const useHookTimer = (timer:number, timerInterval: number = 1000, onFinish: () => void) => {

  const [time, setTime] = React.useState(timer)
  const [isStart, setStart] = React.useState(false)

  React.useEffect(()=>{
    let interval: NodeJS.Timeout | undefined;
    if(isStart && time > 0){
      interval = setInterval(() => setTime(prev => prev -1), timerInterval)
    } else if(isStart && time === 0){
      onFinish()
    } else if (interval !== undefined){
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  },[isStart, onFinish, time, timerInterval])

  const startTimer = () => {
    setStart(true)
  }
  const stopTimer = () => {
    setStart(false)
  }
  const refreshTimer = () => {
    setTime(0)
  }

  return {
    stopTimer,
    startTimer,
    refreshTimer,
    time
  }
}