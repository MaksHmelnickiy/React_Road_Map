import { Link } from "react-router-dom";

export const initialUsers = [
  { id: 1, name: 'Пользователь 1', email: 'test@.com.ua' },
  { id: 111, name: 'Пользователь 2', email: 'test@.com.ua' },
  { id: 3, name: 'Пользователь 3', email: 'test@.com.ua' },
  { id: 4, name: 'Пользователь 4', email: 'test@.com.ua' },
  { id: 5, name: 'Пользователь 5', email: 'test@.com.ua' },
  { id: 6, name: 'Пользователь 6',email: 'test@.com.ua' },
  { id: 7, name: 'Пользователь 7',email: 'test@.com.ua' },
  { id: 8, name: 'Пользователь 8',email: 'test@.com.ua' },
  { id: 9, name: 'Пользователь 9',email: 'test@.com.ua' },
  { id: 10, name: 'Пользователь 10',email: 'test@.com.ua' },
  { id: 11, name: 'Пользователь 11',email: 'test@.com.ua' },
  { id: 12, name: 'Пользователь 12',email: 'test@.com.ua' },
  { id: 13, name: 'Пользователь 13',email: 'test@.com.ua' },
  { id: 14, name: 'Пользователь 14',email: 'test@.com.ua' },
  { id: 15, name: 'Пользователь 15',email: 'test@.com.ua' },
  { id: 16, name: 'Пользователь 16',email: 'test@.com.ua' },
  { id: 17, name: 'Пользователь 17',email: 'test@.com.ua' },
  { id: 18, name: 'Пользователь 18',email: 'test@.com.ua' },
  { id: 19, name: 'Пользователь 19',email: 'test@.com.ua' },
  { id: 20, name: 'Пользователь 20',email: 'test@.com.ua' },
  { id: 21, name: 'Пользователь 21',email: 'test@.com.ua' },
  { id: 22, name: 'Пользователь 22',email: 'test@.com.ua' },
  { id: 23, name: 'Пользователь 23',email: 'test@.com.ua' },
  { id: 24, name: 'Пользователь 24',email: 'test@.com.ua' },
  { id: 25, name: 'Пользователь 25',email: 'test@.com.ua' },
  { id: 26, name: 'Пользователь 26',email: 'test@.com.ua' },
  { id: 27, name: 'Пользователь 27',email: 'test@.com.ua' },
  { id: 28, name: 'Пользователь 28',email: 'test@.com.ua' },
  { id: 29, name: 'Пользователь 29',email: 'test@.com.ua' },
  { id: 30, name: 'Пользователь 30',email: 'test@.com.ua' },
];


export const Users = () => {
  return <div>
    <ul>{initialUsers?.map((item, index) => (
      <li key={index}>
        <Link to={String(item.id)}>{ item.name }</Link>
        <div>{item.id}</div>
      </li>
    ))}</ul>
  </div>
}