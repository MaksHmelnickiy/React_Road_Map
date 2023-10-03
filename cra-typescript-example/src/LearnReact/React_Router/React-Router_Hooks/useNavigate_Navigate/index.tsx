// Хук ⁡⁢⁣⁣useNavigate⁡ позволяет программно ⁡⁣⁣⁢навигироваться⁡ между маршрутами вашего приложения.
// С помощью ⁡⁢⁣⁣useNavigate⁡ вы можете получить ⁡⁣⁣⁢функцию для навигации⁡ и использовать ее для ⁡⁣⁣⁢перехода⁡ ⁡⁢⁣⁣на другие страницы или маршруты⁡. 
// Это особенно полезно, когда вам нужно перейти на другую страницу ⁡⁣⁣⁢после определенных событий⁡ или в ответ на пользовательские действия.
// В прошлых версиях ⁡⁢⁣⁢вместо⁡ ⁡⁢⁣⁣useNavigate⁡ ⁡⁣⁣⁢использовался⁡ ⁡⁢⁣⁣useHistory⁡ /

import React, { useEffect } from "react";
import { BrowserRouter, Link, Navigate, RelativeRoutingType, Route, Routes, useNavigate } from "react-router-dom";
import { Pages } from "./pages";
import { SinglePage } from "./singlePage";

export const MyUseNavigate = () => {

  return <div>
    <BrowserRouter>
      <div><Link to='/'>Home</Link></div>
      <div><Link to='/pages'>Pages</Link></div>
      <Routes>
        <Route path='/' element={<div>Home</div>} />
        <Route path="/pages" element={<Pages />} />

        {/* Существует компонент ⁡⁢⁣⁣Navigate⁡ в основном его используют для ⁡⁢⁣⁣переадресации⁡, когда например страница ⁡⁣⁣⁢pages-test⁡ уже ⁡⁢⁣⁢не актуальная⁡
        а ⁡⁢⁢⁢актуальная⁡ ⁡⁣⁣⁢pages⁡ и с помощью ⁡⁢⁣⁣Navigate⁡ мы ⁡⁣⁣⁢делаем переадресацию⁡ где задаем еще аттрибут ⁡⁣⁢⁣replace: true⁡ , чтобы данный маршрут ⁡⁢⁣⁢не сохранялся⁡ ⁡⁣⁣⁢в истории⁡.  */}
        {/* Пример ниже */}
        <Route path='/pages-test' element={<Navigate to={'/pages'} replace={true} />} /> 
        
        <Route path="/pages/:id" element= {<SinglePage />} />
      </Routes>
    </BrowserRouter>
  </div>
}