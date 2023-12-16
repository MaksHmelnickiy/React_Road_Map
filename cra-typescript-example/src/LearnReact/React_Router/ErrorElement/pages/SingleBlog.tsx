import { Await, useAsyncValue, useLoaderData } from "react-router-dom"
import { IPost } from "./Blogs"
import { Suspense } from "react";

interface ISingleBlog {
  id: number;
  post: IPost;
}

const Post = () => {
 const post = useAsyncValue() as IPost;
 return <>
  <div>{post.id}</div>
  <div>{post.title}</div>
  <p>{post.body}</p>
 </>
}

export const SingleBlog = () => {
  const {post} = useLoaderData() as ISingleBlog
  return <div>
    <Suspense fallback={<h2>Loader...</h2>}>
      <Await resolve={post}>
        <Post />
      </Await>
    </Suspense>
  </div>
}