import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { Home } from "./pages/VariantFirst/pages/Home"
import { VariantFirst } from "./pages/VariantFirst/VariantFirst"
import { VariantTwo } from "./pages/VariantTwo/VariantTwo"
import { Blog } from "./pages/VariantTwo/pages/blog"
import { Contact } from './pages/VariantTwo/pages/contact'

export const MyNestedRoutes = () => {
  return <div>
    <BrowserRouter>
      {/* ⁡⁣⁣⁢1 вариант⁡ вложенных роутов ⁡⁢⁣⁢без⁡ использования ⁡⁢⁣⁣<Outlet />⁡ Где внутри ⁡⁢⁣⁣about⁡ лежат внутренние страницы (роуты) */}
      <div><Link to='/'>Home</Link></div>
      <div><Link to='variantFirst'>VariantFirst</Link></div>
      <div><Link to='variantTwo'>variantTwo</Link></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="variantFirst/*" element={<VariantFirst />} />{/* При ⁡⁢⁣⁣создании вложенных роутов⁡ на конкретной странице важно указывать ⁡⁣⁣⁢в конце⁡ ⁡⁢⁣⁣(/*⁡)  */}
      </Routes>
      {/* ⁡⁢⁣⁢Конец⁡ ⁡⁣⁣⁢1 варианта⁡ */}

      {/* ⁡⁣⁣⁢2 вариант⁡ с использованием ⁡⁢⁣⁣<Outlet />⁡  */}
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path='variantTwo' element={<VariantTwo />}>
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
}