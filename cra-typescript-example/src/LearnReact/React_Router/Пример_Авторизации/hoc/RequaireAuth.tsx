import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

interface ChildProps {
  children: ReactNode
}

export const RequireAuth = ({children}: ChildProps) => { // или можно так (⁡⁣⁢⁣children⁡: ⁡⁢⁢⁢ReactNode⁡) /
  const location = useLocation();
  
  const auth = useAuth()

  if(!auth || !auth.user){
    return <Navigate to='/login' state={{from: location}} />
  }
  
  return <>{children}</>
}