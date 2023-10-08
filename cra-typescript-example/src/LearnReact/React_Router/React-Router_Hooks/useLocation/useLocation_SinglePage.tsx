import React from "react"
import { RelativeRoutingType, useLocation, useNavigate, useParams } from "react-router"
import { Link, NavLink } from "react-router-dom"

interface IPage {
  id: number,
  title: string,
  body: string
}

// ⁡⁢⁣⁣useLocation⁡  Хук возвращает объект ⁡⁢⁣⁣location⁡, представляющий ⁡⁣⁣⁢текущий URL⁡. 
// Его можно рассматривать как useState, который ⁡⁣⁣⁢возвращает новое местоположение⁡ при каждом ⁡⁢⁣⁢изменении⁡ ⁡⁢⁣⁣URL⁡. 
// Этот хук можно использовать, например, чтобы вызвать событие просмотра новой страницы для инструмента ⁡⁣⁣⁢веб-аналитики⁡.

// Объект ⁡⁢⁣⁣location⁡, возвращаемый ⁡⁢⁣⁣useLocation⁡, имеет ⁡⁣⁣⁢следующие свойства⁡:
// ⁡⁢⁣⁣pathname⁡: строка, представляющая текущий URL-путь.
// ⁡⁢⁣⁣search⁡: строка, представляющая параметры запроса текущего URL.
// ⁡⁢⁣⁣hash⁡: строка, представляющая якорную часть текущего URL.
// ⁡⁢⁣⁣state⁡: объект, содержащий любое состояние, которое было передано этому местоположению. Часто сюда ⁡⁣⁣⁢передают маршрут⁡ с которого ⁡⁢⁣⁣мы пришли⁡ .

export const SinglePage = () => {
  const {id} = useParams()
  const [page, setPage] = React.useState<IPage | null>(null)
  const [isLoading, setIsLoading] = React.useState(false)

  const location = useLocation();
  console.log(location);

  const navigate = useNavigate();

  const onBack = React.useCallback(() => {
    navigate(-1);
  },[])

  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(resp => resp.json()).then(data => setPage(data))
    setIsLoading(true)
  },[])

  return <div>
    <h3>Title: {page?.title}</h3>
    <button onClick={onBack}>Back</button>
    <br /> <br />
    <NavLink
      to='/'
      style={{background: 'green', display: 'flex', textDecoration: 'none', height: '30px', width: '100px'}}
    >
      Home
    </NavLink>
  </div>
}