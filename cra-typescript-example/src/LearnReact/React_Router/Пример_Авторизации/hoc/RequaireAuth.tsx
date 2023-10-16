import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface ChildProps {
  children: ReactNode
}

export const RequireAuth = ({children}: ChildProps) => { // или можно так (⁡⁣⁢⁣children⁡: ⁡⁢⁢⁢ReactNode⁡) /
  const location = useLocation();
  const auth = false;
  if(!auth){
    return <Navigate to='/login' state={{from: location}} />
  }
  return <>{children}</>
}