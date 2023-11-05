import React from "react"
import { Link, useSearchParams } from "react-router-dom";
import { BlogsFilter, IPostQuery } from "./Components/BlogsFilter";

// ⁡⁢⁣⁣useSearchParams⁡ - этоt хук позволяет ⁡⁣⁣⁢читать⁡ и ⁡⁣⁣⁢изменять⁡ ⁡⁢⁣⁣строку запроса в URL⁡ текущего маршрута. 
// Как и в случае с собственным хуком ⁡⁣⁣⁢useState⁡ в React, ⁡⁢⁣⁣useSearchParams⁡ ⁡⁣⁣⁢возвращает⁡ массив ⁡⁣⁢⁣из двух значений⁡: 
// ⁡⁣⁣⁢параметров поиска⁡ текущего местоположения и ⁡⁣⁣⁢функции⁡, которую можно использовать для их ⁡⁢⁣⁣обновления⁡.

// Если вам нужно получить доступ к параметрам поиска текущего URL, 
// используйте ⁡⁢⁣⁣useSearchParams⁡. Например, если ⁡⁣⁣⁢текущий URL⁡ имеет следующую строку запроса: ⁡⁣⁢⁣?name=John&age=25⁡, 
// то вызов ⁡⁢⁣⁣useSearchParams()⁡ вернет массив из двух элементов: ⁡⁣⁢⁣{name: "John", age: "25"}⁡ и ⁡⁣⁢⁣функцию⁡, 
// которую можно использовать для ⁡⁢⁣⁣обновления⁡ параметров поиска

// Чтобы получить доступ к параметрам поиска, вы можете использовать следующие методы:

// ⁡⁢⁣⁣append(name, value)⁡: ⁡⁣⁣⁢добавляет⁡ указанную пару ключ/значение в качестве нового параметра поиска.
// ⁡⁢⁣⁣delete(name)⁡: ⁡⁣⁣⁢удаляет⁡ указанный параметр поиска и связанное с ним значение из списка всех параметров поиска.
// ⁡⁢⁣⁣entries()⁡: ⁡⁣⁣⁢возвращает итератор⁡, позволяющий пройти через все пары ключ/значение, содержащиеся в этом объекте.
// ⁡⁢⁣⁣get(name)⁡: ⁡⁣⁣⁢возвращает первое значение⁡, связанное с указанным параметром поиска.
// ⁡⁢⁣⁣getAll(name)⁡: ⁡⁣⁣⁢возвращает все⁡ значения ассоциированные с указанным параметром поиска.
//⁡⁢⁣⁣ has(name)⁡: ⁡⁣⁣⁢возвращает логическое значение⁡, указывающее, существует ли такой параметр поиска.
// ⁡⁢⁣⁣keys()⁡: возвращает итератор, позволяющий пройти все ключи пары ключ/значение, содержащиеся в этом объекте.
// ⁡⁢⁣⁣set(name, value)⁡: ⁡⁣⁣⁢устанавливает значение⁡, связанное с указанным параметром поиска, на заданное значение. 
// Если было несколько значений, остальные удаляются.
// ⁡⁢⁣⁣toString()⁡: ⁡⁣⁣⁢возвращает строку⁡, содержащую строку запроса, подходящую для использования в URL.

// В ⁡⁢⁣⁣чистом JS⁡ эти методы используються в ⁡⁢⁣⁣URLSearchParams⁡ /

interface IBlog {
  title: string;
  body: string;
  id: number;
}

interface IBlogs {
  pages: IBlog[]
}

export const Blogs = () => {
  const [data, setData] = React.useState<IBlogs | null>(null)

  const [searchPararms, setSearchParams] = useSearchParams();
  const postQuery = searchPararms.get('post') || '';
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(resp => resp.json())
      .then(data => setData({pages:data}))
      .catch(error => console.log(error))
  },[])

  const updateSearchParams = React.useCallback((postQuery: IPostQuery) => {
    const params = new URLSearchParams();
    params.set("post", postQuery.post);
    setSearchParams(params);
  }, [setSearchParams]);
  
  return <div>
      <h1>Blogs</h1>
      <BlogsFilter postQuery={postQuery} setSearchParams={updateSearchParams} />
      <ul>
        {data?.pages
          .filter(items => items.title.includes(postQuery))
          .map((item, index) => (<li key={index}><Link to={`/blogs/${item.id}`}>{item.title}</Link></li>))}
      </ul>
    </div>
}