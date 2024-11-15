import React from "react";

// Чтобы полностью понять, почему ⁡⁢⁣⁣useCallback⁡ и ⁡⁢⁣⁣React.memo⁡ ⁡⁣⁣⁢работают вместе⁡, вот ключевые моменты:

// ⁡⁢⁣⁣useCallback⁡ мемоизирует функцию и сохраняет ту же ссылку на функцию между рендерами, если зависимости не изменяются.
// ⁡⁢⁣⁣React.memo⁡ предотвращает рендер дочернего компонента, если его пропсы не изменились (по ссылке).
// ⁡⁣⁣⁢Использование⁡ ⁡⁢⁣⁣useCallback⁡ в родительском компоненте ⁡⁣⁢⁣гарантирует⁡, что ссылка на функцию ⁡⁣⁣⁢не изменится между рендерами⁡, 
// что ⁡⁣⁣⁢в свою очередь⁡ позволяет ⁡⁢⁣⁣React.memo⁡ эффективно ⁡⁣⁢⁣предотвращать⁡ ⁡⁢⁣⁢ненужные⁡ рендеры ⁡⁣⁣⁢дочернего компонента⁡.

export {}

// Родительский компонент
const ParentComponent = () => {
  // Состояния для хранения счетчика и текста
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState('');

  // Мемоизированная функция increment с помощью useCallback
  const increment = React.useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      {/* Дочерний компонент, обернутый в React.memo */}
      <ChildComponent onIncrement={increment} />
    </div>
  );
};

// Дочерний компонент
const ChildComponent = React.memo(( onIncrement: any ) => {
  // Компонент будет рендериться только при изменении пропсов
  console.log('ChildComponent rendered');

  return (
    <div>
      {/* Кнопка для вызова функции onIncrement */}
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
});

