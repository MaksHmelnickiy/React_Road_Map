import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Blogs } from "./pages/Blogs_useSearchParams"
import { About } from "./pages/About"
import { SingleBlog } from "./pages/SingleBlog"

export const MyUseSearchParams = () => {
  return <div>
    <BrowserRouter>
      <div><Link to='/'>Home</Link></div>
      <div><Link to='blogs'>Blogs</Link></div>
      <div><Link to='about'>About</Link></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blogs/:id" element={<SingleBlog />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </div>
}