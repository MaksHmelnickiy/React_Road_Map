import { Provider } from "react-redux"
import { store } from "./store"
import { ComponentTask2 } from "./TaskComponent"

export const MyReactReduxTask2 = () => {
  return (
    <Provider store={store}>
    <ComponentTask2 />
  </Provider>
  )
}