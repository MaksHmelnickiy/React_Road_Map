import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { AuthProvider } from "./hoc/AuthProvider"
import { Home } from "./pages/Home"
import { AuthTrue } from "./pages/AuthTrue"
import { Blog } from "./pages/Blog"
import { About } from "./pages/About"
import { RequaireAuth } from "./hoc/RequaireAuth"
import { Login } from "./pages/Login"


export const CopyAuth = () => {
  return <>
    <BrowserRouter>
      <AuthProvider>
        <div style={{display: 'flex', justifyContent: 'space-between', padding: '30px'}}>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/authTrue'>authTrue</Link>
          <Link to='/blog'>Blog</Link>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='blog' element={<Blog />} />
          <Route path="login" element={<Login />} />
          <Route path="authTrue" element={<RequaireAuth>
            <AuthTrue />
          </RequaireAuth>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </>
}