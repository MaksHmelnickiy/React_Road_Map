// Задача: Реализация скроллинга с бесконечной загрузкой данных
// Вам нужно создать компонент, который будет отображать большой объем данных и поддерживать бесконечную загрузку при прокрутке страницы вниз.

import React, { useEffect } from "react";

interface Item {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const UseRefTask4 = () => {
  const [posts, setPosts] = React.useState<Item[]>([]);
  const [count, setCount] = React.useState<number>(15);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const myRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollHandler = () => {
      if (myRef.current && !isLoading) {
        const { offsetHeight, scrollTop, scrollHeight } = myRef.current;
        if (offsetHeight + scrollTop === scrollHeight) {
          setIsLoading(true);
          setTimeout(() => {
            setCount((prevCount) => prevCount + 10);
            setIsLoading(false);
          }, 1000);
        }
      }
    };

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=${count}`
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    window.addEventListener("scroll", scrollHandler);
    fetchData();

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [count, isLoading]);

  return (
    <div
      ref={myRef}
      style={{
        minHeight: "100vh",
        overflow: "auto",
      }}
    >
      {posts.map((item: Item, key: number) => (
        <div style={{ height: "150px" }} key={key}>
          <div>
            <b>ID: {item.id}</b>
          </div>
          <div>userId: {item.userId}</div>
        </div>
      ))}
      {isLoading && <div>Loading...</div>}
    </div>
  );
};
