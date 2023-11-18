import { Link, Outlet } from "react-router-dom"

export const VariantTwo = () => {
  return <div>
      <h1>VariantTwo</h1>
      <Link to='contact'>Contact</Link><div></div>
      <Link to='blog'>Blog</Link>
      <Outlet />
    </div>
}