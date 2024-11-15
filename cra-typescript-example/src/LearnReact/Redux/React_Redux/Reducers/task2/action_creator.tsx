import { ADD_TASK, DELETE_TASK, SET_FILTER, TOGGLE_TASK } from "./action"

export const addTaskAction = (task:any) => ({type: ADD_TASK, payload: task})
export const toggleTaskAction = (task:any) => ({type: TOGGLE_TASK, payload: task})
export const deleteTaskAction = (id:any) => ({type: DELETE_TASK, payload: id})
export const setFilterAction = (filter: any) => ({type: SET_FILTER, payload: filter})