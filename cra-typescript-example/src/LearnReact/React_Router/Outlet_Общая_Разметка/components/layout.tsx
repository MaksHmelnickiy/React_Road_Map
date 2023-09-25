import { Link, Outlet } from "react-router-dom"

export const Layout = () => {
  return <section>
    <div className="Header">
      <Link to='/' > Home </Link>
      <Link to='/about'> About </Link>
      <Link to='/posts'>Posts</Link>
    </div>
    <Outlet />
    <div className="Footer">Footer</div>
  </section>
}