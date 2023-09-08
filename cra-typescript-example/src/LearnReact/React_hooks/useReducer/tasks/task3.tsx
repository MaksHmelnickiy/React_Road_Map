// Создайте приложение для управления списком задач (To-Do List) с использованием useReducer. 
// Пользователь должен иметь возможность добавлять, удалять и отмечать задачи как выполненные.

import React from "react";

interface Task {
  task?: string,
  completed?: boolean
}

interface State {
  tasks: Task[],
  completedTasksCount: number,
}

const initialState:State = {
  tasks: [],
  completedTasksCount: 0
}

type Action = {type: 'add', text: string} | {type: 'delete', index: number} | {type: 'toggle', completed: boolean, index: number}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'add': return {tasks: [...state.tasks,  {task: action.text, completed: false}], completedTasksCount: state.completedTasksCount};
    case 'delete': return {tasks: state.tasks.filter(
      (item,index) => {
      if(index !== action.index){
        return item
      }
    }), completedTasksCount: state.completedTasksCount};
    case 'toggle': console.log(state);
    const countTasks = state.tasks.map((item,index) => {
      if(index === action.index){
        return {...item, completed: action.completed}
      }
      return item
    })
    const countCompleted = countTasks.filter(item => item.completed === true).length
    return {tasks: countTasks, completedTasksCount: countCompleted}
    default: return state
  }
}

export const UseReducerTodoListTask3 = () =>{
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [text, setText] = React.useState('')

  return <>
          <ul style={{ background: 'lightGray', width: '300px', padding: '20px', margin: '50px auto' }}>
            <h4>Задач в списке: {state.tasks.length}</h4>
            <h4>Выполненных задач: {state.completedTasksCount}</h4>
          {state.tasks.map((item, key) => (
            <li key={key} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px' }}>
              {item.task}
              <button
                style={{ background: 'red', border: 'none', color: '#fff', padding: '10px 40px', borderRadius: '7px', cursor: 'pointer', marginRight: '10px' }}
                onClick={() => dispatch({ type: 'delete', index: key })}
              >
                Delete
              </button>
              <input type='checkbox' onChange={(e) => dispatch({type: 'toggle', completed: e.target.checked, index: key})} />
            </li>
          ))}
        </ul>
        
        <div>
            <input type="text" value={text} onChange={e => setText(e.target.value)} />
            <button
            style={{ background: 'green', border: 'none', color: '#fff', padding: '10px 40px', borderRadius: '7px', cursor: 'pointer' }}
            onClick={() => {
                dispatch({ type: 'add', text: text });
                setText('');
            }}
          >
            Add
          </button>
        </div>
  </>
}