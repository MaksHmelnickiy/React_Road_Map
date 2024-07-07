export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const REFRESH_NOTE = 'REFRESH_NOTE';
export const FILTER_NOTE = 'FILTER_NOTE';

export interface INote {
  id: number;
  title: string;
  content: string;
  tag: string;
}

export interface INotes {
  notes: INote[];
  filter: string;
}

export const addNote = (title: string, content: string, tag: string) => ({type: ADD_NOTE, payload: {title, content, tag}});
export const deleteNote = (id: number) => ({type: DELETE_NOTE, payload: id});
export const refreshNote = (id: number, content: string, title: string) => ({type: REFRESH_NOTE, payload: {id, content, title}});
export const filterNote = (filter: string) => ({type: FILTER_NOTE, payload: filter});
