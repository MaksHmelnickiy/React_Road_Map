import { useMyHook } from "./useMyHook"

export const SetMyHookComponent = () =>{
  const {count, increment, decrement} = useMyHook(5)
  return <>
    <h4>{count}</h4>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </>
}