import { ErrorResponse, isRouteErrorResponse, useRouteError } from "react-router-dom"

export const ErrorPage = () => {
  const error = useRouteError() as ErrorResponse;
  console.log(isRouteErrorResponse(error)) // Возвращает ⁡⁢⁣⁣true⁡ или ⁡⁢⁣⁣false⁡ если ⁡⁢⁣⁢ошибка⁡ была в самом ⁡⁣⁣⁢роуте маршрута⁡. 
                                           // Например: ⁡⁣⁣⁢клик по линке⁡ с ⁡⁢⁣⁢несуществующем⁡ ⁡⁣⁣⁢маршрутом⁡ 
                                           // В данной папке у нас есть ⁡⁣⁣⁢ссылка⁡ на страницу ⁡⁢⁣⁣contact⁡, которой ⁡⁢⁣⁢не существует⁡ и тамм оно выведет ⁡⁣⁢⁣true⁡ /
                                           
  return <h2>{error.status} <br /> {error.statusText}</h2>
}