import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { Layout } from "./pages/Layout"
import { Blog } from "./pages/Blogs"
import { blogLoader } from "./loaders/blogLoader"
import { SingleBlog } from "./pages/SingleBlog"
import { singleBlogLoader } from "./loaders/singleBlogLoader"
import { ErrorPage } from "./pages/ErrorPage"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
    <Route index element={<h1>Home</h1>} />
    <Route path="blog" element={<Blog />} loader={blogLoader} errorElement={<ErrorPage />}/>
    {/* Маршрут 404 */}
    <Route path="blog/:id" element={<SingleBlog />} loader={singleBlogLoader} />
  </Route>
))

export const MyErrorElement = () => {
  return <RouterProvider router={router} />
}