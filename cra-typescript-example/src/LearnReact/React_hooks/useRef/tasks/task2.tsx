// Задача: Счетчик нажатий кнопки
// Создайте компонент React, который отображает кнопку "Увеличить счетчик" и отображает количество нажатий на эту кнопку. 
// Используйте useRef для отслеживания количества нажатий без необходимости вызывать повторный рендеринг компонента.

import React from "react"

export const UseRefTask2 = () =>{
  const [count, setCount] = React.useState(0)
  const myRef = React.useRef(0)

  const useClick = React.useCallback(() => {
    console.log(myRef)
    myRef.current +=1
    setCount(myRef.current)
  },[])
  return <div>
    {count}
    <button onClick={useClick}>Click</button>
  </div>
}