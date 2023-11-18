import React from "react"
import { Breadcrumbs } from "../BreadCrumpsComponent/BreadCrumpsComponent"
import { useParams } from "react-router-dom"

interface IPage {
  title: string
  id: number
  body: string
}

export const Posts = () => {
  const [data, setData] = React.useState<IPage[] | null>(null)
  React.useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts').then(resp => resp.json()).then(data => setData(data))
  },[])
  console.log(data)
  return <div>
    <h1>Posts</h1>
    <Breadcrumbs pages={data} />
  </div>
}