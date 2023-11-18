import { Link, useParams } from "react-router-dom"

export const Breadcrumbs = ({pages}: any) => {
  const {id} = useParams()
  return <div>
    {pages.map((item: any, index: number) => (
      <div key={index}>{item.title}</div>
    ))}
  </div>
}