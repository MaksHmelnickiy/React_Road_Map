import { ADD_TASK, DELETE_TASK, SET_FILTER, TOGGLE_TASK } from "./action"

const initialState = {
  tasks: [{id: Date.now(), completed: false, text: 'lorem ipsum'}],
  filter: 'ALL',
};

export const reducers = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TASK: return {
      ...state,
      tasks: [...state.tasks, {id: Date.now(), completed: false, text: action.payload}]
    };
    case DELETE_TASK: return {
      ...state,
      tasks: state.tasks.filter((item: any) => item.id !== action.payload)
    };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task: any) =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default: return state
  }
}