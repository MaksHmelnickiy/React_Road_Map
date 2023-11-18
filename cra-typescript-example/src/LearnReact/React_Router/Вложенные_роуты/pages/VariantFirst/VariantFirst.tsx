import { Link, Outlet, Route, Routes } from "react-router-dom"
import { Zero } from "./pages/Zero"
import { Todo } from "./pages/Todo"

export const VariantFirst = () => {
  return <div>
    <h1>VariantFirst</h1>
    <Link to='/variantFirst'>VariantFirst page</Link><br />{/* В данном моменте "⁡⁣⁣⁢/about⁡" будет возвращать на нашу ⁡⁢⁣⁣корневую страницу⁡ в данном случае это ⁡⁢⁣⁣about⁡. */}
    <Link to='todo'>Todo Page</Link> <br />{/* В новой версии ⁡⁣⁣⁢React Router v6⁡ достаточно в ⁡⁢⁣⁣to⁡ указать ⁡⁣⁣⁢конечный аддрес⁡ '⁡⁣⁢⁣todo⁡', а ⁡⁢⁣⁢не⁡ '⁡⁣⁢⁣/about/todo⁡' . */}
    <Link to='zero'>Zero Page</Link>
    <Routes>
      <Route path='todo' element={<Todo />} />
      <Route path='zero' element={<Zero />} />
    </Routes>
  </div>
}