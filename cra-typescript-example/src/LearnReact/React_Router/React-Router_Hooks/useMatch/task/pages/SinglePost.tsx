import React from "react";
import { useParams } from "react-router-dom"
import { IPage } from "./Posts";

export const SinglePost = () => {
  const {id} = useParams();
  const [post, setPost] = React.useState<IPage | null>(null)
  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(resp => resp.json()).then(data => setPost(data))
  },[id])
  return <div>
    <h3 style={{textAlign: 'center'}}>{post?.title}</h3>
    <p style={{textAlign: 'center'}}>{post?.body}</p>
  </div>
}