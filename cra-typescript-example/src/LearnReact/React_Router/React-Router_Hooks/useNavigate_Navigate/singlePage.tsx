import React from "react"
import { RelativeRoutingType, useNavigate, useParams } from "react-router"
import { Link, NavLink } from "react-router-dom"

// Хук ⁡⁢⁣⁣useNavigate⁡ позволяет программно ⁡⁣⁣⁢навигироваться⁡ между маршрутами вашего приложения.
// С помощью ⁡⁢⁣⁣useNavigate⁡ вы можете получить ⁡⁣⁣⁢функцию для навигации⁡ и использовать ее для ⁡⁣⁣⁢перехода⁡ ⁡⁢⁣⁣на другие страницы или маршруты⁡. 
// Это особенно полезно, когда вам нужно перейти на другую страницу ⁡⁣⁣⁢после определенных событий⁡ или в ответ на пользовательские действия.
// В прошлых версиях ⁡⁢⁣⁢вместо⁡ ⁡⁢⁣⁣useNavigate⁡ ⁡⁣⁣⁢использовался⁡ ⁡⁢⁣⁣useHistory⁡ /

// Функция⁡⁢⁣⁣ useNavigate⁡ которую он возвращает, принимает ⁡⁣⁣⁢следующие параметры⁡: ⁡⁢⁣⁣useNavigate⁡⁣⁣⁢(⁡⁣⁢⁣to⁡⁣⁣⁢:⁡ ⁡⁢⁢⁢string⁡ ⁡⁣⁣⁢|⁡ ⁡⁢⁢⁢number⁡, ⁡⁣⁢⁣options⁡⁡⁣⁣⁢?:⁡ ⁡⁢⁢⁢NavigateOptions⁡⁡⁣⁣⁢) ⁡/

// ⁡⁢⁣⁣to⁡ (обязательный): Это строка, которая представляет собой ⁡⁣⁣⁢путь к маршруту⁡, на который вы хотите перейти. 
// Этот путь может быть как ⁡⁣⁣⁢относительным⁡, так и ⁡⁣⁣⁢абсолютным⁡. А если ⁡⁣⁣⁡⁢⁣⁣принимая число⁡⁡ например ⁡⁣⁢⁣-1⁡ это как ⁡⁣⁣⁢кликнуть стрелочку назад⁡ или ⁡⁣⁣⁢кнопку Back⁡.
// Оно как бы ⁡⁢⁣⁣возвращает по истории⁡ на предыдущую страницу шаг назад соответственно ⁡⁣⁢⁣1⁡ ⁡⁣⁣⁢будет шаг вперед⁡ и т.д.

//⁡⁢⁣⁣ NavigateOptions⁡ состоит из ⁡⁣⁣⁢следующих свойств⁡: этот интерфейс мы можем увидеть 

export interface NavigateOptionsTest {
  replace?: boolean; // (⁡⁣⁣⁢boolean⁡): Если true, то текущая ⁡⁣⁣⁢запись в истории⁡ браузера будет ⁡⁢⁣⁢заменена⁡ ⁡⁣⁣⁢новой записью⁡, а ⁡⁢⁣⁢не⁡ ⁡⁣⁣⁢добавлена⁡. 
  // То есть, если пользователь совершает переход на маршрут с ⁡⁢⁣⁣replace={true}⁡, и затем попытается ⁡⁣⁣⁢вернуться назад⁡ в истории браузера, 
  // то предыдущая запись (маршрут) будет ⁡⁢⁣⁢удалена из истории⁡, и пользователь сразу перейдет к предыдущему маршруту перед этим удаленным.

  state?: any; // Пользовательский объект состояния, который можно передать для ⁡⁢⁣⁣сохранения в истории⁡ браузера. Этот объект будет доступен в свойстве 

  preventScrollReset?: boolean;
  relative?: RelativeRoutingType;
}

interface IPage {
  id: number,
  title: string,
  body: string
}

export const SinglePage = () => {
  const {id} = useParams()
  const [page, setPage] = React.useState<IPage | null>(null)
  const navigate = useNavigate();
  const onBack = React.useCallback(() => {
    navigate(-1);
  },[])
  const onHome = React.useCallback(() => {
    navigate('/', {replace: true}) // В данном примере ⁡⁢⁣⁣replace: true⁡ - ⁡⁢⁣⁢не сохраняет⁡ в истории маршрут что мы сделаем.
  },[])
  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(resp => resp.json()).then(data => setPage(data))
  },[page])
  return <div>
    <h3>ID: {page?.id}</h3>
    <h3>Title: {page?.title}</h3>
    <p>Body: {page?.body}</p>
    <button onClick={onBack}>Back</button>
    <button onClick={onHome}>Home</button>{/* Для данного подхода когда мы например хотим ⁡⁣⁣⁢вернуться на главную⁡ сами разработчики ⁡⁢⁣⁣рекомендуют⁡ использовать ⁡⁢⁣⁣Link⁡ . */}
    <br /> <br />
    <NavLink /* ⁡⁢⁣⁣Лучше делать так⁡ для перехода ⁡⁣⁣⁢на главную⁡ через ⁡⁢⁣⁣Link⁡ */
      to='/' 
      style={{background: 'green', display: 'flex', textDecoration: 'none', height: '30px', width: '100px'}}
    >
      Home
    </NavLink> 
  </div>
}