// Задача: Создание "нажми и удерживай" кнопки
// Вы хотите создать интерфейс с кнопкой, которую пользователь должен нажать и удерживать в течение определенного времени (например, 3 секунды), прежде чем срабатывает событие.
// Вам нужно использовать useRef, чтобы отслеживать, сколько времени пользователь удерживает кнопку, и когда время достигает установленного значения, сделать определенное действие.

import React from "react";

export const UseRefTask1 = () => {
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);
  const [isPress, setIsPress] = React.useState(false);

  const startTimer = () => {
    timerRef.current = setTimeout(() => {
      setIsPress(true);
    }, 3000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setIsPress(false);
  };

  const handleClick = () => {
    if (isPress) {
      console.log('Прошло 3 сек');
    } else {
      console.log('Рано отпустили кнопку мыши');
    }
  };

  return (
    <div>
      <button
        style={{
          border: 'none',
          width: '200px',
          height: '50px',
          background: 'green',
          borderRadius: '10px',
          color: 'white',
          cursor: 'pointer',
        }}
        onClick={handleClick}
        onMouseDown={startTimer}
        onMouseUp={stopTimer}
        onMouseLeave={stopTimer}
      >
        Click
      </button>
    </div>
  );
};