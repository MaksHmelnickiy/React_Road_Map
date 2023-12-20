import { defer } from "react-router-dom"

async function getPosts() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
  if(!resp.ok){
    throw new Response('', {status: resp.status, statusText: 'Error comes!'})
  }
  return await resp.json()
}

export const blogLoader = async () => {
  return defer({posts: getPosts()})
}
