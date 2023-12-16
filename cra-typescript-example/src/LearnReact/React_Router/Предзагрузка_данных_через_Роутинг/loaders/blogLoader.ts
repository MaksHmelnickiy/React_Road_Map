import { defer } from "react-router-dom"

async function getPosts(){
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await response.json()
  console.log(posts)
  return posts
}

// ⁡⁢⁣⁣defer⁡ — это функция, предоставляемая React Router v6, используемая для загрузки данных ⁡⁣⁣⁢асинхронно⁡. 
// Она позволяет компонентам ⁡⁣⁣⁢начать рендеринг⁡, даже если некоторые данные ⁡⁣⁣⁢еще загружаются⁡.
// В кратце: происходит переход на страницу сразу и показывается прелоадер
export const blogLoader = async ({request, params}: any) => {
  console.log('request: ', request);
  console.log('params: ', params)

  return defer({posts: getPosts()}) // ⁡⁢⁣⁣defer⁡ работает в связке с ⁡⁣⁣⁢<Suspense> <Await>⁡ , что на странице ⁡⁣⁣⁢Blog⁡,⁡⁣⁣⁢ SingleBlog⁡. 
}