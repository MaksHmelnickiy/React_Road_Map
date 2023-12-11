import { defer } from "react-router-dom";

async function getPost(id: number){
  return await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(resp => resp.json())
}

export const singleBlogLoader = async ({request, params}: any) => {
  const id = await params.id; // Получаем id нашей страницы.
  return defer({post: getPost(id), id})
}