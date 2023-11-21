import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { About } from "./pages/about"
import { Contact } from "./pages/contact"
import { CustomLink } from "./CastomLink_UseMatch"


// ⁡⁢⁣⁣useMatch⁡ — это хук, предоставляемый библиотекой React Router (начиная ⁡⁣⁣⁢с версии 6⁡), который используется для определения, 
// совпадает ли текущий URL с определенным шаблоном маршрута. Это полезно для реализации логики, 
// зависящей от текущего местоположения пользователя в приложении, например, ⁡⁢⁣⁣для выделения активной ссылки⁡ в навигационном меню.

// Как работает useMatch
// ⁡⁢⁣⁣useMatch ⁡принимает один аргумент — шаблон маршрута, и возвращает объект, если ⁡⁣⁣⁢текущий URL⁡ ⁡⁢⁣⁣соответствует⁡ ⁡⁣⁣⁢этому шаблону⁡, или null, 
// если не соответствует.

// Этот хук ⁡⁢⁣⁣упрощает работу с маршрутами⁡ и помогает избежать множественных проверок соответствия URL в компонентах.

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