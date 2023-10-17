import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../hook.tsx/useAuth"

export const RequaireAuth = ({children} : {children: React.ReactNode}) => {
  const auth = useAuth()
  const location = useLocation()
  if(!auth || !auth.user){
    return <Navigate to='/login' state={{from: location}} /> // Важно указывать ⁡⁢⁣⁣from⁡ при данной ⁡⁣⁢⁣переадрисации⁡ на страницу ⁡⁣⁣⁢login⁡ /
  }
  return <>{children}</>
}