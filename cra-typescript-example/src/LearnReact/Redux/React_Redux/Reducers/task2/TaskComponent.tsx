import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTaskAction, deleteTaskAction, setFilterAction, toggleTaskAction } from "./action_creator"

export const ComponentTask2 = () => {
  const [name, setName] = React.useState('')
  const tasks = useSelector((state: any) => state.tasks)
  const filter = useSelector((state: any) => state.filter)
  const dispatch = useDispatch()

  const onSubmit = (e:any) => {
    e.preventDefault();
    console.log(e)
    if(name.trim()){
      dispatch(addTaskAction(name))
      setName('')
    }
  }

  // eslint-disable-next-line array-callback-return
  const filteredTasks = tasks.filter((task: any) => {
    if (filter === 'ALL') return true;
    if (filter === 'COMPLETED') return task.completed;
    if (filter === 'INCOMPLETE') return !task.completed;
  });

  return <>
    <h3>Add new Task</h3>
    <form onSubmit={onSubmit}>
      <input type="text" onChange={(e: any) => setName(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
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
    <ul>{filteredTasks.map((task:any) => {
      return (
        <li key={task.id}>
          <div style={{textDecoration: task.completed ? 'line-through' : 'none'}}>{task.id}</div>
          <div style={{textDecoration: task.completed ? 'line-through' : 'none'}}>{task.text}</div>
          <button type="button" onClick={() => dispatch(deleteTaskAction(task.id))}>Delete</button>
          <input type="checkbox" value='Your Value' onChange={() => dispatch(toggleTaskAction(task.id))}/>
        </li> 
      )
    })}</ul>
  </>
}