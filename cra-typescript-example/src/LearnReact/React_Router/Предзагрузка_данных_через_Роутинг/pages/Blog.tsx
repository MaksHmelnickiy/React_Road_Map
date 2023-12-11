import { Await, useLoaderData, useMatch } from "react-router-dom"
import { CustomLink } from "../../../Components/CastomLink"
import { Suspense } from "react";
// ⁡⁣⁣⁢variant first⁡ .
// interface IBlog {
//   title: string,
//   id: number,
//   body: string,
//   posts: IBlog[]
// }

//⁡⁣⁣⁢variant second⁡ .
export interface IBlog {
  title: string,
  id: number,
  body: string,
}

interface IBlogs {
  posts: IBlog[]
}

export const Blog = () => {
  const { posts } = useLoaderData() as IBlogs; // ⁡⁢⁣⁣useLoaderData⁡ является хуком, который используется ⁡⁣⁣⁢для доступа к данным⁡, загруженным асинхронной функцией ⁡⁢⁣⁣loader⁡ /

  return (
    <div>
      <h1>Blog</h1>
      <CustomLink to="test">Test</CustomLink>
      <ul>
         <Suspense fallback={<h2>Loading...</h2>}> {/* ⁡⁢⁣⁣Suspense⁡ используется для ⁡⁣⁣⁢обертывания асинхронных операций⁡, таких как загрузка данных или компонентов. 
         Он позволяет ⁡⁣⁣⁢отображать запасной контент⁡ (здесь ⁡⁢⁣⁣<h2>Loading...</h2>⁡), пока асинхронная операция выполняется. */}

           <Await resolve={posts}>{/*⁡⁢⁣⁣ Await⁡ компонент используется ⁡⁣⁣⁢вместе⁡ с ⁡⁣⁣⁢React Router⁡ и ⁡⁣⁣⁢React Suspense⁡. 
           Он "⁡⁢⁣⁣ожидает⁡" разрешения асинхронной операции (⁡⁢⁣⁣posts ⁡в данном случае), которая предположительно ⁡⁣⁣⁢возвращает⁡ массив постов. 
           Когда промис ⁡⁢⁣⁣posts⁡ ⁡⁣⁣⁢разрешается⁡, данные передаются в ⁡⁣⁣⁢дочерний коллбэк⁡ как ⁡⁢⁣⁣resolvedPosts⁡ */}
           
             {resolvedPosts => { {/* Это ⁡⁢⁣⁣функция-рендерер⁡, которая получает разрешенные данные (⁡⁣⁣⁢resolvedPosts⁡) и возвращает JSX */}
              return <>
                {resolvedPosts.map((post: IBlog) => (
                  <li key={post.id}><CustomLink to={`${post.id}`}>{post.title}</CustomLink></li>
                ))}
              </>
            }}
          </Await>
        </Suspense>
      </ul>
    </div>
  );
};
