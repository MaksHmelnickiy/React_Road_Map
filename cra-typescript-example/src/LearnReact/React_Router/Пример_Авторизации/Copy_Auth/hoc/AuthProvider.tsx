import React from "react";

interface IAuth {
  user: string;
  signIn: (newUser: string, cb: () => void) => void;
  signOut: (cb: () => void) => void;
}

export const AuthContext = React.createContext<IAuth | null>(null)

export const AuthProvider = ({children}: {children: React.ReactNode}) => {

  const [user, setUser] = React.useState('')

  const signIn = React.useCallback((newUser: string, cb: () => void) => {
    setUser(newUser)
    cb()
  },[user])

  const signOut = React.useCallback((cb: () => void) => {
    setUser('')
    cb()
  },[user])

  const value = {user, signIn, signOut}
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}