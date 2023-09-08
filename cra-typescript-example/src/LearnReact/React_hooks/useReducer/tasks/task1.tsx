// ⁡⁣⁣⁢Задача⁡: Создайте простое приложение "Список покупок" (Shopping List), в котором пользователь может добавлять и удалять товары из списка покупок.

import React from "react";

// Определение интерфейсов для типизации
interface Product {
  text: string;
}

interface State {
  basket: Product[];
}

// Определение типов действий
type Action = { type: 'add'; text: string } | { type: 'delete'; index: number };

// Начальное состояние
const initialState: State = {
  basket: [],
};

// Редюсер для обработки действий
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'add':
      // Добавление товара в корзину
      return { basket: [...state.basket, { text: action.text }] };
    case 'delete':
      // Удаление товара из корзины
      return { basket: state.basket.filter((item, index) => action.index !== index) };
    default:
      return state;
  }
};

export const UseReducerBasketTask1 = () => {
  // Использование useReducer для управления состоянием
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [text, setText] = React.useState('');

  // Обработчик изменения текстового ввода
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      <div style={{ background: 'lightGray', width: '300px', padding: '20px', margin: '50px auto' }}>
        <h4 style={{ margin: 0 }}>Basket</h4>
        <ul>
          {state.basket.map((item, key) => (
            <li key={key} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px' }}>
              {item.text}
              <button
                style={{ background: 'red', border: 'none', color: '#fff', padding: '10px 40px', borderRadius: '7px', cursor: 'pointer', marginRight: '10px' }}
                onClick={() => dispatch({ type: 'delete', index: key })}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {/* Поле ввода для добавления новых товаров */}
        <input
          type="text" style={{ width: '300px', height: '35px', borderRadius: '10px', padding: '0 20px', fontSize: '20px' }}
          onChange={handleTextChange}
        />
        <div style={{ paddingTop: '20px' }}>
          {/* Кнопка для добавления товара */}
          <button
            style={{ background: 'green', border: 'none', color: '#fff', padding: '10px 40px', borderRadius: '7px', cursor: 'pointer' }}
            onClick={() => {
              // Проверка на пустой текст и добавление товара
              if (text.trim() !== '') {
                dispatch({ type: 'add', text: text });
                setText('');
              }
            }}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};
