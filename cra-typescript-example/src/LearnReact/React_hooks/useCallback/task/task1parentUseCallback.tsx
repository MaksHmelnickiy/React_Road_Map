// Задача 1: Оптимизация производительности
// Ваша задача - создать простое приложение, которое содержит родительский компонент, в котором определен счетчик и функция для его увеличения. 
// Эта функция передается в дочерний компонент в качестве пропса.
//  Сейчас при каждом рендере родительского компонента дочерний компонент также перерисовывается, 
// даже если его пропсы не изменились. Используйте useCallback для оптимизации.

import React from "react"
import ChildUseCallback from "./childUseCallback";

export const Task1ParentUseCallback = () => {
  const [count, setCount] = React.useState(0);
  
  const useCount = React.useCallback(() => {

      setCount(count => count + 1)
    
  },[])
  return <div>
    <div style={{marginTop: '40px'}}>{count}</div>
    <ChildUseCallback counter={useCount} />  
  </div>
}