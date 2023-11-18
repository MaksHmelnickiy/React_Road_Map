import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Posts } from "./pages/Posts"
import { CustomLink } from "../CastomLink_UseMatch"

// Цель задачи: Разработать компонент "Breadcrumb" (хлебные крошки), который будет отображать иерархию навигации на сайте и выделять текущую страницу.
export const MyUseMatchTask = () => {
  return <BrowserRouter>
    <CustomLink to="/">Home</CustomLink>
    <CustomLink to="posts">Posts</CustomLink>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='posts' element={<Posts />} />
    </Routes>
  </BrowserRouter>
}