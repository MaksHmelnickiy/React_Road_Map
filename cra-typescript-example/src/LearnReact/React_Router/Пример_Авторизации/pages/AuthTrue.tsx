import { useNavigate } from "react-router-dom"
import { useAuth } from "../hook/useAuth"

export const AuthTrue = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  if(!auth){
    return null
  }
  return <div>  AuthTrue  <div><button onClick={() => auth.signOut(() => navigate('/', {replace: true}))}>Sign Out</button></div></div>
}