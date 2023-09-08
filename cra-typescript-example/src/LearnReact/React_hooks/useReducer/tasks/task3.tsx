// Создайте приложение для управления списком задач (To-Do List) с использованием useReducer. 
// Пользователь должен иметь возможность добавлять, удалять и отмечать задачи как выполненные.

import React from "react";

// interface Task {
//   task: string
// }

// interface State {
//   tasks: Task[]
// }

// const initialState:State = {
//   tasks: []
// }

// type Action = {type: 'add', text: string} | {type: 'delete', index: number} | {type: 'toggle', completed: boolean}

// const reduce = (state: State, action: Action): State => {
//   switch (action.type) {
//     case 'add': return {tasks: [...state.tasks, {task: {text: action.text}}]}
//   }
// }

// export const UseReducerTodoListTask3 = () =>{
//   const [state, dispatch] = React.useReducer();
//   return <>
//           <ul>
//           {state.dates.map((item, key) => (
//             <li key={key} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px' }}>
//               {item.date}
//             </li>
//           ))}
//         </ul>
//   </>
// }