import React from "react";
import { Link } from "react-router-dom";

interface IPage {
  id: number,
  title: string,
  body: string
}

interface IPAges {
  pages: IPage[]
}

export const Pages = () => {
  const [pages, setPages] = React.useState<IPAges | null>(null);
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(resp => resp.json()).then(data => setPages({pages: data}))
  },[])
  return <ul>
    {pages?.pages.map((item, index) => (
      <li key={index}>
        <Link to={`${item.id}`}>{item.title}</Link>
      </li>
    ))}
  </ul>
}