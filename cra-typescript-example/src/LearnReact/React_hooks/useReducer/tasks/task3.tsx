// Создайте приложение для управления списком задач (To-Do List) с использованием useReducer. 
// Пользователь должен иметь возможность добавлять, удалять и отмечать задачи как выполненные.

import React from "react";

interface Task {
  task?: string,
  completed?: boolean
}

interface State {
  tasks: Task[]
}

const initialState:State = {
  tasks: []
}

type Action = {type: 'add', text: string} | {type: 'delete', index: number} | {type: 'toggle', completed: boolean}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'add': return {tasks: [...state.tasks,  {task: action.text}]};
    case 'delete': return {tasks: state.tasks.filter(
      (item,index) => {
      if(index !== action.index){
        return item
      }
    })};
    case 'toggle': return {tasks: [...state.tasks, {completed: action.completed}]};
    default: return state
  }
}

export const UseReducerTodoListTask3 = () =>{
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [text, setText] = React.useState('')
  return <>
          <ul style={{ background: 'lightGray', width: '300px', padding: '20px', margin: '50px auto' }}>
          {state.tasks.map((item, key) => (
            <li key={key} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px' }}>
              {item.task}
              <button
                style={{ background: 'red', border: 'none', color: '#fff', padding: '10px 40px', borderRadius: '7px', cursor: 'pointer', marginRight: '10px' }}
                onClick={() => dispatch({ type: 'delete', index: key })}
              >
                Delete
              </button>
              <input type='checkbox' onChange={(e) => dispatch({type: 'toggle', completed: e.target.checked})} />
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