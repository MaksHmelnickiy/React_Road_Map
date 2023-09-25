// Компонент ⁡⁢⁣⁣Outlet⁡ в React Router 6 является частью новой системы маршрутизации и служит для ⁡⁣⁣⁢отображения вложенных маршрутов⁡ в приложении.

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/home"
import { About } from "./pages/about"
import { Posts } from "./pages/posts"
import { Layout } from "./components/layout"

export const MyOutlet = () => {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element ={<Home />} />
          <Route path="/about" element ={<About />} />
          <Route path="/posts" element ={<Posts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
}