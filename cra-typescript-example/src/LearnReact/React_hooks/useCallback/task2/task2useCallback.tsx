// Задача 2: Зависимости useCallback
// Создайте приложение, в котором есть два поля ввода и кнопка. Одно поле ввода для имени, другое для фамилии. 
// При нажатии на кнопку, приложение должно выводить полное имя. 
// Для этого вам нужно будет использовать useCallback для создания функции обработчика нажатия кнопки. 
// Ваша задача - правильно указать зависимости для useCallback, чтобы обеспечить корректную работу приложения.

import React from "react"

export const Task2UseCallback = () => {
  const [name, setName] = React.useState('');
  const [surname, setSurname] = React.useState('');

  const sendForm = React.useCallback(() => {
    console.log(name + ' ' + surname)
  },[name, surname])
  const onChangeName = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e?.target?.value)
  },[])
  const onChangeSurname = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSurname(e?.target?.value)
  }, [])
  return <div>
    <input type="text" value={name} onChange={onChangeName} />
    <input type="text" value={surname} onChange={onChangeSurname} />
    <button onClick={sendForm}>Send</button>
  </div>
}