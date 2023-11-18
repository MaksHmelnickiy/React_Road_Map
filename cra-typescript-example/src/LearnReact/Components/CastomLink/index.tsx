import { Link, useMatch } from "react-router-dom"

interface ICustomLink {
  children: React.ReactNode,
  to: string
}

export const CustomLink = ({children, to}: ICustomLink) => {
  const match = useMatch({
    path: to,
    end: to.length === 1
  })
  console.log(to.length)
  return <div><Link to={to} style={{color: match ? 'red' : 'green'}}>{children}</Link></div>
}