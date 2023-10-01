import { useParams } from "react-router-dom"
import { initialUsers } from "./users"

export const SingleUsers = () => {
  const {id} = useParams()
  console.log(window.history)
  return <div>ID:{id} 
    <div>{initialUsers.map((item,index) => {
      if(item.id === Number(id)){
        return (<div key={index}>Name: {item.name} <br /> <b>Email: {item.email}</b></div>)
      }
      return false
    })}</div>
  </div>
}