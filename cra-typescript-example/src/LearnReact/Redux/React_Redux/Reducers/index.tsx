import { useDispatch, useSelector } from "react-redux";

export const MyReactReduxApp = () =>{
  // Получаем состояние из хранилища Redux
  const count = useSelector((state:any) => state.counter.count);
  const name = useSelector((state:any) => state.user.name);
  const age = useSelector((state:any) => state.user.age);

  // Получаем функцию dispatch для отправки действий
  const dispatch = useDispatch();

  // Функции для обработки действий
  const increment = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({ type: 'DECREMENT' });
  const setName = (name:string) => dispatch({ type: 'SET_NAME', payload: name });
  const setAge = (age:number) => dispatch({ type: 'SET_AGE', payload: age });

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h1>User Info</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter age"
        onChange={(e) => setAge(Number(e.target.value))}
      />
    </div>
  )
}