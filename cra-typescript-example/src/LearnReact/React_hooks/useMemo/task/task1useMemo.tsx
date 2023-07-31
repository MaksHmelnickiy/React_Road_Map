// Задача: Оптимизация вызовов API

import axios from "axios";

// Создайте компонент, который отображает данные, полученные из удаленного API. 
// Используйте useMemo, чтобы кэшировать результат вызова API и избежать повторных запросов к серверу при каждом рендеринге компонента.

export const Task1UseMemo = () => {
  const fetchData = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts') // Преобразуем ответ в JSON
    const json = await response.json()
    console.log(json)

    // ⁡⁢⁣⁣Axios⁡ - это популярная библиотека для ⁡⁣⁣⁢выполнения HTTP-запросов⁡ из JavaScript-приложений, 
    // таких как веб-приложения, клиенты React и другие. 
    // Она обеспечивает простой и удобный интерфейс для ⁡⁢⁣⁣отправки запросов⁡ и ⁡⁢⁣⁣обработки ответов⁡.

  }
  fetchData()

  return <div><h1>UseMemo</h1></div>
}