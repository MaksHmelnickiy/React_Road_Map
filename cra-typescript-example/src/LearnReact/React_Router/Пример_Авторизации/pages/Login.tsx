import React from "react";
import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../hook/useAuth";


export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state.from.pathname || '/';
  const auth = useAuth()
  const handleSubmit = React.useCallback((e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement;
    const value = (form.querySelector('input[name="username"]') as HTMLInputElement).value
    signIn(value, () => navigate('authTrue'))
  },[navigate])
  if(!auth){
    return null
  }
  const { signIn } = auth;

  return <div>Page Login;  
           <div>You come from page: {fromPage}
           </div>
           <form onSubmit={handleSubmit}>
            <input type="text" name="username" />
            <button type="submit">Login</button>
           </form>
         </div>
}