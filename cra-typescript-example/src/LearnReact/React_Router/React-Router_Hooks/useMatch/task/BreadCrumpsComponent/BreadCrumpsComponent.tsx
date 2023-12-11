import React from "react"
import { Link, useLocation, useMatch, useParams } from "react-router-dom"
import { IPage } from "../pages/Posts"

interface IPages {
  pages: IPage[]
}

export const Breadcrumbs = ({pages}: IPages) => {

  const {id} = useParams()
  return <div style={{justifyContent: 'space-between', display: 'flex', flexWrap:'wrap', paddingLeft:'10px', paddingRight:'10px'}}>
    {pages && pages.map((item: IPage, index: number ) => {
        console.log(typeof item.id, typeof id)
      return (
        <Link 
          style={{
            paddingLeft:'10px', 
            paddingRight:'10px', 
            color: Number(id) === item.id ? 'darkOrange': 'gray',
            textShadow: Number(id) === item.id ? '0 0' : 'none',
            textDecoration: Number(id) === item.id ? 'none' : 'underline',
          }} 
          to={`${item.id}`}
          key={item.id}>
            {index + 1}
        </Link>
      )
    })}
  </div>
}