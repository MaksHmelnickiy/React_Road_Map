import React from "react";
import { MyContext } from "./useContext"; 

export const MyUseContextChild = () => {
  const contextValue = React.useContext(MyContext) // ⁡⁢⁣⁣Получаем⁡⁡ созданный ⁡⁣⁣⁢контекст⁡. 
  return (
    <div>
      Age: {contextValue.age} <br />
      Name: {contextValue.name} <br />
      Merried: {!!contextValue.merried ? 'Yes' : 'No'}
    </div>
  )
}