import React from "react"
import { Link, useSearchParams } from "react-router-dom";

interface IBlog {
  title: string;
  body: string;
  id: number;
}

interface IBlogs {
  pages: IBlog[]
}

interface IPostQuery {
  post: string;
}

export const Blogs = () => {
  const [data, setData] = React.useState<IBlogs | null>(null)
  const [isLoading, setIsLoading] = React.useState(false)
  const [searchPararms, setSearchParams] = useSearchParams();
  const postQuery = searchPararms.get('post') || '';

  const onChange = React.useCallback((e:React.ChangeEvent<HTMLInputElement>) => {

    console.log(e)

    setSearchParams({post: e.target.value})
  },[postQuery])

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(resp => resp.json())
      .then(data => setData({pages:data}))
      .catch(error => console.log(error))
    setIsLoading(true)
  },[isLoading])
  
  return <div>
      <h1>Blogs</h1>
      <form>
        <input type="text" name="search" onChange={onChange} />
        <input type="submit" value='Search' />
      </form>
      <ul>{data?.pages.filter(items => items.title.includes(postQuery)).map((item, index) => (<li key={index}><Link to={`/blogs/${item.id}`}>{item.title}</Link></li>))}</ul>
    </div>
}