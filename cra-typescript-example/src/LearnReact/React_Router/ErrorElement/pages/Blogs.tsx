import { Suspense } from "react"
import { Await, Link, useAsyncValue, useLoaderData } from "react-router-dom"

export interface IPost {
  title: string;
  id: number;
  body: string;
}

interface IPosts {
  posts: IPost[]
}

const Posts = () => {
  const  posts  = useAsyncValue() as IPost[]; // ⁡⁢⁣⁢Всегда выводи в консоль и смотри что там⁡! Здесь возвращается ⁡⁣⁣⁢массив⁡.
  console.log('bl', posts)
  return (
    <div>
      {posts && posts.map((post: IPost, index: number) => (
        <li key={index}><Link to={`${post.id}`}>{post.title}</Link></li>
      ))}
    </div>
  );
};

export const Blog = () => {
  const { posts } = useLoaderData() as IPosts; // ⁡⁢⁣⁡⁢⁣⁢Всегда выводи в консоль⁡ и смотри что там⁡⁡! А здесь возвращается ⁡⁣⁣⁢проммис⁡.
  console.log('bleee', posts)
  // console.log([] + null + 1)
  return (
    <div>
      <ul>
        <Suspense fallback={<div>Loader...</div>}>
          <Await resolve={posts}>
            <Posts />
            {/* {resolvePosts => (
              resolvePosts.map((post: IPost, index: number) => (
                <li key={index}><Link to={`${post.id}`}>{post.title}</Link></li>
              ))
            )} */}
          </Await>
        </Suspense>
      </ul>
    </div>
  );
};