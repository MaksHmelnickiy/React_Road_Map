import { Provider } from "react-redux"
import { store } from "./store"
import { Task3Redux } from "./component"


export const MyTask3Redux = () =>{
  return <Provider store={store}>
    <Task3Redux />
  </Provider>
}