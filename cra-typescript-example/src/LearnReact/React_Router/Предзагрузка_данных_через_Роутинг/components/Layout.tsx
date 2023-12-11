import { Outlet } from "react-router-dom"
import { CustomLink } from "../../../Components/CastomLink"

export const Layout = () => {
  return <>
    <header>
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="blog">Blog</CustomLink>
      <CustomLink to="contact">Contact</CustomLink>
    </header>
    <main>
      <Outlet />
    </main>
    <footer>Footer</footer>
  </>
}