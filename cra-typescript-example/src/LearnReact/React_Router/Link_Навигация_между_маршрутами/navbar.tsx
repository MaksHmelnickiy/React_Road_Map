import { Link } from "react-router-dom"

export const NavBar = () => {
  return <nav>
    <ul>
    <li>
      <Link to='/'>Домой</Link>
    </li>
    <li>
      <Link to='/about'>О нас</Link>
    </li>
  </ul>
  </nav>
}