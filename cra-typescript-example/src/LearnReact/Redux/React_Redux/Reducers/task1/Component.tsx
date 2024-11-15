import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { addBook, removeBook, updateBook, Book } from './action';

export const MyReduxComponentTask1 = () => {
  const books = useSelector((state: RootState) => state.books);
  const dispatch = useDispatch();

  const [newBook, setNewBook] = useState<Book>({ id: '', title: '', author: '', year: 0 });

  const handleAddBook = () => {
    if (newBook.id && newBook.title && newBook.author && newBook.year) {
      dispatch(addBook(newBook));
      setNewBook({ id: '', title: '', author: '', year: 0 });
    }
  };

  const handleRemoveBook = (id: string) => {
    dispatch(removeBook(id));
  };

  const handleUpdateBook = (book: Book) => {
    dispatch(updateBook(book));
  };

  return (
    <div>
      <h1>Library</h1>
      <div>
        <input
          type="text"
          placeholder="ID"
          value={newBook.id}
          onChange={(e) => setNewBook({ ...newBook, id: e.target.value })}
        />
        <input
          type="text"
          placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <input
          type="number"
          placeholder="Year"
          value={newBook.year}
          onChange={(e) => setNewBook({ ...newBook, year: Number(e.target.value) })}
        />
        <button onClick={handleAddBook}>Add Book</button>
      </div>
      <h2>Books List</h2>
      <ul>
        {books.length > 0 ? (
          books.map(book => (
            <li key={book.id}>
              {book.title} by {book.author} ({book.year})
              <button onClick={() => handleRemoveBook(book.id)}>Remove</button>
              <button onClick={() => handleUpdateBook({ ...book, title: book.title + ' Updated' })}>Update</button>
            </li>
          ))
        ) : (
          <li>No books available</li>
        )}
      </ul>
    </div>
  );
}

