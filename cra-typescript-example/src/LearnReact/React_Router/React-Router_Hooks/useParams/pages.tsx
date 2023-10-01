import React from "react"
import { Link } from "react-router-dom";

// https://jsonplaceholder.typicode.com/posts

interface Pages {
  pages: { title: string; body: string, id: number }[];
}

export const UseParamsPages = () => {
  const [pages, setPages] = React.useState<Pages | null>(null);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPages({ pages: data }));
  }, []);

  return (
    <div>
      <ul>
        {pages?.pages.map((item, index) => (
          <li key={index}>
            <Link to = {`/${item.id}`} >
              {item.title}
            </Link>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
