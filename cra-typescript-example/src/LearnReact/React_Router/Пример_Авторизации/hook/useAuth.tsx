import React from "react"
import { AuthContext } from "../hoc/AuthProvider"

export const useAuth = () => {
  return React.useContext(AuthContext)
}