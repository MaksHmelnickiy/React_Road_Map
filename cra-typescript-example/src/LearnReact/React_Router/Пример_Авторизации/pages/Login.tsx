import { useLocation, useNavigate } from "react-router-dom"

export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state.from.pathname || '/'
  return <div>Page Login;  
           <div>You come from page: {fromPage}
           </div>
         </div>
}