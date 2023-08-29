// Когда ⁡⁣⁣⁢обновляются⁡ данные в ⁡⁢⁣⁣localStorage⁡ или ⁡⁢⁣⁣sessionStorage⁡, генерируется событие ⁡⁢⁣⁣storage⁡ со следующими свойствами:

// ⁡⁢⁣⁣key⁡ – ключ, который обновился (null, если вызван .clear()).
// ⁡⁢⁣⁣oldValue⁡ – старое значение (null, если ключ добавлен впервые).
// ⁡⁢⁣⁣newValue⁡ – новое значение (null, если ключ был удалён).
// ⁡⁢⁣⁣url⁡ – url документа, где произошло обновление.
// ⁡⁢⁣⁣storageArea ⁡– объект localStorage или sessionStorage, где произошло обновление.
localStorage.setItem('name', 'Maks')

window.addEventListener('storage', function (e) {
  console.log('Событие storage произошло.');
  console.log('Ключ: ' + e.key);
  console.log('Старое значение: ' + e.oldValue);
  console.log('Новое значение: ' + e.newValue);
  console.log('Ссылка на объект хранилища: ' + e.storageArea);
});
localStorage.setItem('surname', 'Hmel')

// ​‌‍‌⁡⁣⁣⁢В реальной практике⁡​ /
// ⁡⁢⁣⁣Синхронизация данных между вкладками или окнами:⁡ Если ваше веб-приложение подразумевает одновременное использование в нескольких 
// вкладках или окнах браузера, 
// событие storage может помочь вам обеспечить синхронизацию данных между ними. Например, вы можете использовать его для обновления 
// интерфейса в одной вкладке, когда данные были изменены в другой.

// ⁡⁢⁣⁣Отслеживание изменений настройки пользователя⁡: Если пользователь изменяет настройки приложения (например, выбирает язык или тему), 
// вы можете использовать событие storage, чтобы автоматически применить эти изменения в реальном времени, даже если пользователь работает
//  в нескольких вкладках.

// ⁡⁢⁣⁣К⁡⁡⁢⁣⁣онтроль сеансов авторизации:⁡ Вы можете использовать событие storage, чтобы управлять сеансами авторизации. Например, 
// когда пользователь выходит из системы в одной вкладке, вы можете автоматически выйти из системы и в других вкладках.

// ⁡⁢⁣⁣Обмен данными между веб-приложением и внешними инструментами:⁡ Если ваше веб-приложение взаимодействует с внешними инструментами
//  (например, браузерными расширениями), событие storage может служить механизмом обмена данными.

// Получаем элементы DOM
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const resetButton = document.getElementById('reset');

// Функция для увеличения счетчика
const incrementCounter = () => {
    const currentValue = parseInt(localStorage.getItem('counter')) || 0;
    const newValue = currentValue + 1;
    localStorage.setItem('counter', newValue.toString());
    counterElement.textContent = newValue;
};

// Функция для сброса счетчика
const resetCounter = () => {
    localStorage.removeItem('counter');
    counterElement.textContent = '0';
};

// Обработчик события на кнопку "Увеличить"
incrementButton.addEventListener('click', incrementCounter);

// Обработчик события на кнопку "Сбросить"
resetButton.addEventListener('click', resetCounter);

// Функция для обработки события storage
const handleStorageChange = (e) => {
    if (e.key === 'counter') {
        counterElement.textContent = e.newValue || '0';
    }
};

// Прослушивание события storage
window.addEventListener('storage', handleStorageChange);

// Инициализация значения счетчика при загрузке страницы
const initialValue = localStorage.getItem('counter');
if (initialValue) {
    counterElement.textContent = initialValue;
}