import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom"
import { Home } from "./home"
import { About } from "./about"

// ⁡⁢⁣⁣<Link>⁡ и ⁡⁢⁣⁣<NavLink>⁡ - это два компонента из библиотеки React Router, которые используются для создания ⁡⁣⁣⁢ссылок⁡ на маршруты в вашем приложении. 
// Они оба позволяют пользователям переходить между разными страницами вашего приложения, ⁡⁣⁣⁢но есть некоторые различи⁡я:

// ⁡⁢⁣⁣<Link>⁡ ⁡⁣⁣⁢просто создает ссылку⁡ на указанный маршрут. Он предоставляет ⁡⁣⁣⁢базовый функционал⁡ для навигации между страницами

// ⁡⁢⁣⁣<NavLink>⁡ является ⁡⁣⁣⁢расширением⁡ <Link> и предоставляет дополнительную функциональность. 
// Он ⁡⁣⁣⁢автоматически добавляет⁡ ⁡⁣⁢⁣класс⁡ активности (по умолчанию "⁡⁢⁣⁣active⁡") к ссылке, соответствующей текущему активному маршруту. 
// Это делает легче стилизовать активные ссылки. 
// Так же у него есть встроенные параметры один из них это ⁡⁢⁣⁣isActive⁡ который позволяет применять стили или классы при активности. ⁡⁣⁣⁢Пример ниже⁡.
// ⁡⁢⁣⁣<NavLink>⁡ также позволяет ⁡⁣⁣⁢настраивать классы⁡ для ссылок (<NavLink to="/" ⁡⁢⁣⁣activeClassName="active"⁡>) где аттрибут ⁡⁢⁣⁣activeClassName⁡ позволяет 
// назначить любой другой класс
// а также добавлять пользовательские стили или классы.


export const MyLinkAndNavLink = () => {
  return <div>
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink style={({isActive}) => isActive ? {color: 'red'} : {color: 'gray'}} to='/'>Домой</NavLink> {/* ⁡⁣⁣⁢Пример isActive⁡ */}
          </li>
          <li>
            <Link to='/about'>О нас</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </div>
}