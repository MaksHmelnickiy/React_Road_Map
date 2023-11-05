import React from "react"
import { useParams } from "react-router-dom"

interface ISingleBlog {
  title: string
  body: string
  id: number
}

export const SingleBlog = () => {
  const {id} = useParams()
  const [data, setData] = React.useState<ISingleBlog>()
  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(resp => resp.json())
    .then(data => setData(data))
    .catch(error => console.log(error))
  },[id])
  return <div>
    <h1>{data?.title}</h1>
    {data?.body}
  </div>
}