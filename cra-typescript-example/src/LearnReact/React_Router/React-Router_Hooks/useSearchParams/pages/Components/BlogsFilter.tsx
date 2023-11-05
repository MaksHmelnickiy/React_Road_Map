import React from "react"

interface IBlogsFilter {
  setSearchParams: (post: IPostQuery) => void
  postQuery: string
}

export interface IPostQuery {
  post: string
}

export const BlogsFilter = ({setSearchParams, postQuery}:IBlogsFilter) => {
  const [search, setSearch] = React.useState(postQuery)
  const onChange = React.useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    const params = {} as IPostQuery
    params.post = e.target.value
    console.log(params)
    setSearchParams(params)
  },[setSearchParams])
  return <form>
  <input type="text" name="search" value={search} onChange={onChange} />
  <input type="submit" value='Search' />
</form>
}