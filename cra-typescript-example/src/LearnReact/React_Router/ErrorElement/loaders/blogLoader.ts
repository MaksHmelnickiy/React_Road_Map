import { defer, json } from "react-router-dom"

async function getPosts() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
  // - это ⁡⁣⁣⁢первый вариант для работы с ошибками⁡⁡. Мы выбрасываем ⁡⁢⁣⁣Reasponse⁡ и на странице ⁡⁣⁣⁢ErrorPage⁡ его получаем.
  if(!resp.ok){
    throw new Response('', {status: resp.status, statusText: 'Error comes!'}) 

    // ⁡⁣⁢⁣new⁡ ⁡⁢⁣⁣Response⁡ - это ⁡⁣⁣⁢конструктор⁡ ⁡⁣⁣⁢объекта⁡ ⁡⁢⁣⁣Response⁡ в JavaScript, который часто используется в контексте работы с ⁡⁣⁣⁢сетевыми запросами⁡, например, при использовании ⁡⁢⁣⁣API Fetch⁡.
    // представляет собой специальный способ ⁡⁣⁣⁢работы с ответами от сервера⁡, вы можете получать и обрабатывать информацию ⁡⁣⁣⁢после отправки запросов⁡ в интернете ⁡⁣⁣⁢HTTP-запроса⁡. 
  }
  return await resp.json()
}

export const blogLoader = async () => {
  // const posts = getPosts() as any
  // if(!posts.length){
  //   throw json({message: 'error page now'}, {status: 404}) // это ⁡⁣⁣⁢второй способ⁡ с использованием ⁡⁢⁣⁣json()⁡ из самой либы ⁡⁣⁢⁣React Router⁡ - он принимает два объекта. 
  //   // И получать их потом на странице ⁡⁢⁣⁣ErrorPage⁡  например {error.data.message} // За ⁡⁢⁣⁣json⁡ ⁡⁢⁢⁢лучше почитать⁡ еще где то. 
  // }
  return defer({posts: getPosts()})
}
