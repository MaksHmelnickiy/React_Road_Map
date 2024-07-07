import { useDispatch, useSelector } from "react-redux"
import { setFilterAction } from "./action_creator";

export const Filter = () => {
  const filter = useSelector((task: any) => task.filter);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(setFilterAction('ALL'))} disabled={filter === 'ALL'}>
        All
      </button>
      <button onClick={() => dispatch(setFilterAction('COMPLETED'))} disabled={filter === 'COMPLETED'}>
        Completed
      </button>
      <button onClick={() => dispatch(setFilterAction('INCOMPLETE'))} disabled={filter === 'INCOMPLETE'}>
        Incomplete
      </button>
    </div>
  )
}