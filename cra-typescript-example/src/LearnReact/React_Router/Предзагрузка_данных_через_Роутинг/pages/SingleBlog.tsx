import React, { Suspense } from "react";
import { Await, useAsyncValue, useLoaderData, useNavigate } from "react-router-dom"
import { IBlog } from "./Blog";

interface ISingleBlog {
  id: number;
  post: IBlog
}

// Здесь мы будем использовать немного ⁡⁣⁢⁣другой подход⁡ , где будем использовать хук useAsyncValue() в файле ⁡⁣⁣⁢Blog.tsx⁡ у нас его не было. 
// И соответственно ⁡⁢⁣⁣resolvedPosts => ()⁡ как на ⁡⁣⁣⁢Blog.tsx⁡ так же не будет. 

const Post = () => {
  const post = useAsyncValue() as IBlog // ⁡⁢⁣⁣useAsyncValue()⁡ является хуком для работы с асинхронными данными в ⁡⁣⁣⁢контексте навигации⁡. 
                                        // Этот хук используется для доступа к ⁡⁣⁣⁢асинхронным данным⁡, которые были загружены с помощью функции ⁡⁢⁣⁣loader⁡ в компоненте маршрута.
  return <>
  <h1>ID: {post.id} <br /> Title: {post.title}</h1>
  <p>{post.body}</p>
</>
}

export const SingleBlog = () => {
  const {id, post} = useLoaderData() as ISingleBlog;
  const navigate = useNavigate()
  const onBack = React.useCallback(()=>{
    navigate(-1)
  },[])
  return <>
    <div>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={post}>
           <Post /> {/* вместо  ⁡⁢⁣⁣resolvedPosts => ()⁡ как на странице ⁡⁣⁣⁢Blog.tsx⁡ */}
        </Await>
      </Suspense>
      <button onClick={onBack}>Back</button>
    </div>
  </>
}