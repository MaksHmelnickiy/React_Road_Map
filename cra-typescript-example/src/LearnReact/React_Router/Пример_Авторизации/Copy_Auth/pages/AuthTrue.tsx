import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../hook.tsx/useAuth"

export const AuthTrue = () => {
  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  if(!auth){
    return null
  }
  const {signOut} = auth;
  return <div>
    <h1>AuthTrue</h1>
     <button 
      onClick={() => signOut(() => navigate('/login', {replace: true, state:{from: location}}))}>{/* ⁡⁢⁣⁢Важно указывать⁡ откуда мы пришли ⁡⁣⁢⁣(state: {from: location})⁡ */}
        Log Out
    </button>  
  </div>
}