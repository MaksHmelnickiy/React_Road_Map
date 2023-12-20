import { ErrorResponse, isRouteErrorResponse, useRouteError } from "react-router-dom"

export const ErrorPage = () => {
  const error = useRouteError() as ErrorResponse;
  console.log(isRouteErrorResponse(error))
  return <h2>{error.status} <br /> {error.statusText}</h2>
}