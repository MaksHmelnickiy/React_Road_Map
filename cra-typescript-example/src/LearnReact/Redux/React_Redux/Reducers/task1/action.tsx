// actions.ts

export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const UPDATE_BOOK = 'UPDATE_BOOK';
export const GET_BOOKS = 'GET_BOOKS';

export interface Book {
  id: string;
  title: string;
  author: string;
  year: number;
}

export interface AddBookAction {
  type: typeof ADD_BOOK;
  payload: Book;
}

export interface RemoveBookAction {
  type: typeof REMOVE_BOOK;
  payload: string;
}

export interface UpdateBookAction {
  type: typeof UPDATE_BOOK;
  payload: Book;
}

export interface GetBooksAction {
  type: typeof GET_BOOKS;
}

export type BookActionTypes = AddBookAction | RemoveBookAction | UpdateBookAction | GetBooksAction;

export const addBook = (book: Book): any => ({
  type: ADD_BOOK,
  payload: book
});

export const removeBook = (id: string): any => ({
  type: REMOVE_BOOK,
  payload: id
});

export const updateBook = (book: Book): any => ({
  type: UPDATE_BOOK,
  payload: book
});

export const getBooks = (): any => ({
  type: GET_BOOKS
});
