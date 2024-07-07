import { ADD_NOTE, DELETE_NOTE, FILTER_NOTE, REFRESH_NOTE } from "./action";
import { INotes } from "./actionCreator";

const initialNotes: INotes = {
  notes: [
    { title: 'Sample Note 1', content: 'This is a sample note', tag: 'work', id: 1 },
    { title: 'Sample Note 2', content: 'This is another sample note', tag: 'personal', id: 2 },
    { title: 'Sample Note 3', content: 'This is a sample note Third', tag: 'wether', id: 3 },
    { title: 'Sample Note 4', content: 'This is another sample note Fourth', tag: 'wether', id: 4 }
  ],
  filter: 'ALL' // возможные значения: 'ALL', 'work', 'personal'
};

export const reducer = (state: INotes = initialNotes, action: any) => {
  switch (action.type) {
    case ADD_NOTE:
      const newId = state.notes.length ? state.notes[state.notes.length - 1].id + 1 : 1;
      return {
        ...state,
        notes: [...state.notes, { ...action.payload, id: newId }]
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(item => item.id !== action.payload)
      };
    case REFRESH_NOTE:
      return {
        ...state,
        notes: state.notes.map(item =>
          item.id === action.payload.id ? { ...item, title: action.payload.title, content: action.payload.content } : item
        )
      };
    case FILTER_NOTE:
      return {
        ...state,
        filter: action.payload
      };
    default:
      return state;
  }
};
