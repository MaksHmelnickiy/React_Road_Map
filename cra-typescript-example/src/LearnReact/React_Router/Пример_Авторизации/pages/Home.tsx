import React from "react"
import { AuthContext } from "../hoc/AuthProvider"
import { useAuth } from "../hook/useAuth"

export const Home = () => {
  const auth = useAuth();

  if (!auth) {
    // Обработка ситуации, когда ⁡⁢⁣⁣auth⁡ равно ⁡⁣⁢⁣null⁡ .
    return null;
  }

  const { user, signIn, signOut } = auth;
  // В этом коде мы сначала ⁡⁢⁢⁢проверяем⁡, что ⁡⁢⁣⁣auth⁡ ⁡⁢⁣⁢не равно⁡ ⁡⁣⁢⁣null⁡, и только затем ⁡⁢⁣⁣деструктурируем⁡ свойства ⁡⁣⁣⁢user⁡, ⁡⁣⁣⁢signIn⁡ и ⁡⁣⁣⁢signOut⁡. 
  // Таким образом, ⁡⁢⁢⁢мы избегаем⁡ ⁡⁢⁣⁢ошибки⁡, когда ⁡⁢⁣⁣auth⁡ равно ⁡⁣⁢⁣null⁡.

  return <div><h3>Home</h3></div>
}