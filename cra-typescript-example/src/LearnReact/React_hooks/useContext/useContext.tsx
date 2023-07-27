import React from "react";
import { MyUseContextChild } from "./useContextChild";
// ⁡⁢⁣⁣useContext⁡ - позволяет вам получить доступ к ⁡⁣⁣⁢значению контекста⁡, определенному в компоненте выше 
// ⁡⁣⁣⁢в иерархии⁡ ⁡⁢⁣⁢без⁡ необходимости передавать ⁡⁣⁣⁢пропсы⁡ через каждый компонент.

// ⁡⁢⁣⁣Контекст⁡ в React - это способ ⁡⁣⁣⁢передачи данных⁡ глубоко внутрь дерева компонентов ⁡⁢⁣⁢без⁡ явной ⁡⁣⁣⁢передачи пропсов⁡ через каждый промежуточный компонент. 
// ⁡⁣⁣⁢Например⁡ (⁡⁢⁢⁢для обмена данными, состояниями или функциями между компонентами⁡) .

// ​‌‍‌⁡⁣⁣⁢Шаги реализации ⁡⁢⁣⁣useContext​⁡⁡ .
// 1. ⁡⁣⁢⁢const⁡ ⁡⁣⁢⁣MyContext⁡ = ⁡⁢⁢⁢React⁡.⁡⁢⁣⁣createContext⁡⁣⁣⁢<⁡⁢⁢⁢Interface⁡⁡⁣⁣⁢>⁡⁣⁣⁢(⁡⁡⁢⁣⁣''⁡⁣⁣⁢)⁡ - ⁡⁢⁣⁣создаем⁡, в данном случае пустая строка по ⁡⁣⁣⁢дефолту⁡.
// 2. ⁡⁣⁢⁢const⁡ <⁡⁢⁢⁢MyContext.Provider⁡ ⁡⁣⁢⁣value={value}⁡ /><⁡⁢⁢⁢ChildComp⁡/><⁡⁢⁢⁢MyContext.Provider⁡ />;В parent⁡ компоненте с приставкой ⁡⁣⁣⁢.Provider⁡ ⁡⁢⁣⁣даем value ⁡(типа ⁡⁣⁣⁢пропс⁡) и ⁡⁣⁣⁢оборачиваем⁡ им⁡ дочерн ⁡⁢⁣⁣ChildComp⁡
// 2. ⁡⁢⁣⁢import⁡ ⁡⁣⁢⁣MyContext⁡ from '..' ;  ⁡⁢⁣⁣Импортируем⁡ в дочерний компонент где будем использовать.
// 3. ⁡⁣⁢⁢const⁡ ⁡⁣⁢⁣contextValue⁡ = ⁡⁢⁢⁢React⁡.⁡⁢⁣⁣useContext⁡⁣⁣⁢(⁡⁡⁣⁢⁣MyContext⁡⁣⁣⁢)⁡; ⁡⁢⁣⁣Используем⁡ в ⁡⁣⁣⁢дочернем⁡ компоненте (⁡⁢⁣⁣ChildComp⁡) наш ⁡⁣⁣⁢контекст⁡, и потом вставляем где на нужно. 

interface IMyContext {
  name: string;
  age: number;
  merried: boolean;
  incrementAge: () => void;
}

export const MyContext = React.createContext<IMyContext>({ // ⁡⁢⁣⁡⁢⁣⁣⁡⁢⁣⁣Создаем контекст⁡⁡, и указываем значение по ⁡⁣⁣⁢дефолту⁡ /
  name: "",
  age: 0, // Значение в объекте которое будем⁡⁣⁣⁢ менять⁡.
  merried: false,
  incrementAge: () => {}  // ⁡⁣⁣⁢функция⁡ для смены ⁡⁣⁣⁢этого состояния⁡ .
});  

export const MyUseContextParent = () => {
  const [age, setAge] = React.useState(32);

  const onClick = React.useCallback(() => {
    setAge(prev => prev +1);
  },[])

  const newObjVal = { // даем нашем объекту ⁡⁢⁣⁣новые значения⁡, ⁡⁢⁣⁣age = ⁡⁣⁣⁢age⁡⁡, так же функцию ⁡⁢⁣⁣onClick⁡ для ⁡⁣⁣⁢incrementAge⁡ .
    name: 'Maks',
    age: age,
    merried: true,
    incrementAge: onClick
  }

  return (
    <>
      <div><b>useContext</b></div>
   {/* Если вы ⁡⁣⁣⁢изменили⁡ значение контекста в компоненте ⁡⁢⁣⁣MyContext.Provider⁡, то это новое значение будет отображаться в компоненте ⁡⁣⁢⁣MyUseContextChild⁡. */}
      <MyContext.Provider value={newObjVal}>
         Hello i am parent Component <br /> 
         <button onClick={onClick}>Click age +1</button> 
         <br /> 
        <MyUseContextChild />
      </MyContext.Provider>
    </>
  )
}
