// Задача: Управление фокусом на элементах ввода
// Вам необходимо создать форму с несколькими элементами ввода, например, текстовыми полями и кнопками. 
// Один из текстовых элементов ввода будет активирован автоматически при загрузке страницы, и пользователь сможет начать вводить текст без необходимости щелкать мышью на поле ввода. 
// Когда пользователь завершает ввод в это поле и нажимает Enter, фокус должен автоматически переключиться на следующий элемент ввода, и так далее, пока не будут заполнены все поля.

import React, { useEffect } from "react"

export const UseRefTask3 = () => {
  const myRef = React.useRef<HTMLFormElement | null>(null)
  const [child, setChild] = React.useState(0)

  React.useEffect(() => {
    const firstEl = myRef.current?.children[child] as HTMLInputElement
    firstEl?.focus()
    setChild(1)
    console.log(firstEl)
  },[])

  const setVal = React.useCallback((e: React.KeyboardEvent<HTMLInputElement>)=>{
    if(e.key === 'Enter'){

      console.log(myRef.current?.children)
      const childs = myRef.current?.querySelectorAll('input')
      childs?.forEach((el, index) => {
        console.log(index)
        if(index === child){
          setChild(prev => prev + 1)
          el.focus()
          
        }
      });
    }
  },[child])

  return <form ref={myRef}>
    <div><input type="text" onKeyUp={setVal} /></div>
    <div><input type="text" onKeyUp={setVal} /></div>
    <div><input type="text" onKeyUp={setVal} /></div>
  </form>
}