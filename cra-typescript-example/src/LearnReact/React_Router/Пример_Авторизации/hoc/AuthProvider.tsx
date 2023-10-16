import React, { useState } from "react";

interface AuthContextType {
  user: string;
  signIn: (newUsr: string, callBack: () => void) => void;
  signOut: (callBack: () => void) => void;
}

export const AuthContext = React.createContext<AuthContextType | null>(null)

 export const AuthProvider = ({ children }: { children: React.ReactNode }) => { //  ⁡⁣⁢⁣({ children }: { children: React.ReactNode })⁡ - это объявление ⁡⁢⁣⁣параметра⁡ ⁡⁣⁣⁢children⁡ 
// в виде ⁡⁢⁣⁣деструктурированного объекта⁡.
// Он говорит TypeScript, что функция ⁡⁣⁣⁢ожидает ⁡⁢⁣⁣объект⁡⁡, ⁡⁣⁣⁢содержащий⁡ ⁡⁢⁣⁣свойство children⁡ с ⁡⁣⁣⁢типом⁡ ⁡⁢⁣⁣React.ReactNode⁡. Этот синтаксис может быть полезен, 
// когда вы ожидаете более сложную структуру объекта с несколькими свойствами, но вы хотите явно указать тип children.

  const [user, setUser] = useState<string>('')
  const signIn = (newUsr: string, callBack: () => void) => {
    setUser(newUsr)
    callBack()
  }
  const signOut = (callBack: () => void) => {
    setUser('')
    callBack()
  }
  const value = {user, signIn, signOut};
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}