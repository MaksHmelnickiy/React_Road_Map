import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { AuthTrue } from "./pages/AuthTrue"
import { RequireAuth } from "./hoc/RequaireAuth"
import { AuthProvider } from "./hoc/AuthProvider"

export const ExampleAuth = () => {
  return <BrowserRouter>
  <AuthProvider>
  <div><Link to='/'>Home</Link></div>
  <div><Link to='authTrue'>AuthTrue</Link></div>
    <Routes>
      <Route path='/' element={<Home />} />
       <Route path="authTrue" element={/* В этом маршруте, ⁡⁣⁣⁢сначала проверяется⁡, ⁡⁢⁣⁣аутентифицирован ли пользователь⁡. 
        Если пользователь ⁡⁢⁣⁢не⁡ ⁡⁢⁣⁣аутентифицирован⁡, он будет ⁡⁣⁣⁢перенаправлен⁡ на страницу входа ('⁡⁣⁢⁣/login⁡'). 
        Если пользователь ⁡⁢⁣⁣аутентифицирован⁡, то отображается компонент ⁡⁣⁢⁣<AuthTrue></AuthTrue>⁡ */
        <RequireAuth>
          <AuthTrue />
        </RequireAuth>
      } />
      <Route path='login' element={<Login /> } />
    </Routes>
    </AuthProvider>
  </BrowserRouter>
}