import React, { Suspense } from "react";
import { Await, useLoaderData, useNavigate } from "react-router-dom"
import { IBlog } from "./Blog";

interface ISingleBlog {
  id: number;
  post: IBlog
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
          {resolvedPost => {
            return <>
                  <h1>ID: {id} <br /> Title: {resolvedPost.title}</h1>
                  <p>{resolvedPost.body}</p>
                  <button onClick={onBack}>Back</button>
            </>
          }}
        </Await>
      </Suspense>
    </div>
  </>
}