import { Link, useMatch } from "react-router-dom"

interface ICustomLink {
  children: React.ReactNode,
  to: string
}

export const CustomLink = ({children, to}: ICustomLink) => {
  const match = useMatch({
    path: to,  // url
    end: to.length === 1 //  означает, что соответствие будет проверяться только в том случае, если ⁡⁢⁣⁣to⁡ — это ⁡⁣⁣⁢корневой путь⁡ (например, /).
                         //  Это условие гарантирует, что для корневого пути соответствие будет определено строго, без учета подпутей.
  })
  console.log(to.length)
  return <div><Link to={to} style={{color: match ? 'red' : 'green'}}>{children}</Link></div>
  // Стиль ссылки изменяется в зависимости от ⁡⁣⁣⁢результата⁡ ⁡⁢⁣⁣useMatch⁡. Если текущий путь соответствует ⁡⁢⁣⁣to⁡ (т.е., match истинен), цвет ⁡⁣⁣⁢активной⁡ ссылки будет красным. 
  // В противном случае — зеленым. ⁡⁢⁣⁣children⁡ передается в Link как содержимое ссылки.
}