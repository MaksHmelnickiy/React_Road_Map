import { defer } from "react-router-dom"

async function getPosts() {
  return await fetch('https://jsonplaceholder.typicode.com/posts').then(resp => resp.json())
}

export const blogLoader = async () => {
  return defer({posts: getPosts()})
}
