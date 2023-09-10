// Задача: Счетчик нажатий кнопки
// Создайте компонент React, который отображает кнопку "Увеличить счетчик" и отображает количество нажатий на эту кнопку. 
// Используйте useRef для отслеживания количества нажатий без необходимости вызывать повторный рендеринг компонента.

import React from "react"

export const useRefTask2 = () =>{
  const myRef = React.useRef(null)
  const [count, setCounter] = React.useState(0)

  return <div>
    <button ></button>
  </div>
}