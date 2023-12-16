import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { Blog } from "./pages/Blog"
import { Contact } from "./pages/Contact"
import { Layout } from "./components/Layout"
import { blogLoader } from "./loaders/blogLoader"
import { SingleBlog } from "./pages/SingleBlog"
import { singleBlogLoader } from "./loaders/singleBlogLoader"

const router = createBrowserRouter(createRoutesFromElements(// - ⁡⁢⁣⁣createRoutesFromElements⁡ — это помощник, создающий объекты маршрута из элементов ⁡⁣⁣⁢<Route>⁡.
  <Route path="/" element={<Layout />}>
    <Route index element={<h1>Home</h1>} /> {/* ⁡⁢⁣⁣index⁡ дает понять что эта ⁡⁣⁣⁢страница⁡ (⁡⁣⁣⁢Роут⁡) будeт ⁡⁢⁣⁣главной (по умолчанию)⁡. 
    Eсли у вас есть ⁡⁢⁣⁣⁡⁣⁣⁢вложенные маршруты⁡⁡, то ⁡⁢⁣⁣<Route index />⁡ будет использоваться для отображения ⁡⁣⁣⁢компонента по умолчанию⁡ */}

    <Route path='blog' element={<Blog />} loader={blogLoader} />
    <Route path="blog/:id" element={<SingleBlog />} loader={singleBlogLoader} />
    <Route path='contact' element={<Contact />} />
  </Route>))

export const MyRoute = () => {
  return <div>
    <RouterProvider router={router} /> 
    {/* ⁡⁢⁣⁣<RouterProvider router={router}/>⁡ это компонент для ⁡⁣⁣⁢обертывания⁡ и ⁡⁣⁣⁢интеграции системы маршрутизации⁡ в приложение. 
    Он служит в качестве ⁡⁣⁣⁢контейнера⁡ для маршрутов вашего приложения и обеспечивает ⁡⁣⁣⁢контекст маршрутизации⁡ всем вложенным компонентам. */}

{/* ⁡⁣⁣⁢Основные функции ⁡⁢⁣⁣<RouterProvider />⁡:⁡
    ⁡⁢⁣⁣Предоставление Контекста Маршрутизации⁡: <RouterProvider /> устанавливает контекст, который используют все маршрутизационные компоненты внутри приложения, 
    такие как <Route>, <Link>, <Switch> и другие.
    ⁡⁢⁣⁣Управление Историей Навигации⁡: Он управляет историей браузера, позволяя реализовать навигацию вперед и назад, а также обрабатывать текущее расположение.
    ⁡⁢⁣⁣Отрисовка Компонентов на Основе URL⁡: Основываясь на текущем URL, <RouterProvider /> решает, какие компоненты (или "страницы") должны быть отрисованы. */}
  </div>
}