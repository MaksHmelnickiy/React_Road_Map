import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { About } from "./pages/about"
import { Contact } from "./pages/contact"
import { CustomLink } from "./CastomLink_UseMatch"

export const MyUseMatch = () => {
  return <BrowserRouter>
  <div><CustomLink to='/'>Home</CustomLink></div>
  <div><CustomLink to='about'>About</CustomLink></div>
  <div><CustomLink to='contact'>Contact</CustomLink></div>
    <Routes>
      <Route path='/' element={<h1>Home</h1>} />
      <Route path='about/*' element={<About />} >
        <Route path="test" element={<div>Test</div>} />
      </Route>
      <Route path='contact' element={<Contact />} />
    </Routes>
  </BrowserRouter>
}