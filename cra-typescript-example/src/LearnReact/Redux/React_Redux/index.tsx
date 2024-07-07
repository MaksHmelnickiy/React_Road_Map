import { Provider } from "react-redux"
import store from "./Reducers/store"
import { MyReactReduxApp } from "./Reducers"

export const MyReactRedux = () => {
  return (
  <Provider store={store}>
    <MyReactReduxApp />
  </Provider>
  )
}