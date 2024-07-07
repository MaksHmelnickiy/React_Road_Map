// reducers.ts
import { ADD_BOOK, REMOVE_BOOK, UPDATE_BOOK, GET_BOOKS, Book } from './action';

const initialState: Book[] = [];

function booksReducer(state = initialState, action: any): Book[] {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.payload);
    case UPDATE_BOOK:
      return state.map(book => 
        book.id === action.payload.id ? action.payload : book
      );
    case GET_BOOKS:
      return state;
    default:
      return state;
  }
}

export default booksReducer;
