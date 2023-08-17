// Когда new ⁡⁢⁣⁣WebSocket(url)⁡ создан, он ⁡⁣⁣⁢тут же сам начинает устанавливать соединение⁡.

// Запрос ⁡⁢⁣⁣WebSocket⁡ ⁡⁢⁣⁢нельзя⁡ эмулировать
// Мы ⁡⁢⁣⁢не можем использовать⁡ ⁡⁣⁣⁢XMLHttpRequest⁡ или ⁡⁣⁣⁢fetch⁡ для создания такого HTTP-запроса, потому что JavaScript не позволяет устанавливать такие заголовки.

const socket = new WebSocket('wss://echo.websocket.org');

socket.onopen = () => {
  console.log('WebSocket connection opened');
  socket.send('Hello, WebSocket!');
};

socket.onmessage = (event) => {
  console.log('Received:', event.data);
};