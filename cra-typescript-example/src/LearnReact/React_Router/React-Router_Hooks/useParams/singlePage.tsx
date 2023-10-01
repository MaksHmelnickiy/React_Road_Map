import React from "react";
import { useParams } from "react-router-dom"

// ⁡⁢⁣⁣useParams⁡ предоставляет доступ к параметрам маршрута, определенным в ⁡⁣⁣⁢URL⁡. 
// Этот хук позволяет вам ⁡⁣⁣⁢извлекать⁡ значения параметров и использовать их в вашем компоненте.

export const UseParamsSinglePage = () => {
  const {testId} = useParams(); // Извлекаем значение параметра '⁡⁣⁣⁢id⁡' из ⁡⁢⁣⁣URL ⁡⁢⁢⁢которое мы указали в⁡ ⁡⁣⁣⁢файле index⁡ ⁡⁢⁢⁢этой папки⁡ ⁡ /

  return <div>
    <h1>ID: {testId}</h1>
  </div>
}