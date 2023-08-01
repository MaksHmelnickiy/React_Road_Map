//⁡⁢⁣⁣ XMLHttpRequest⁡ (⁡⁢⁣⁣XHR⁡) - это ⁡⁢⁣⁢старый⁡, но все еще широко используемый метод для выполнения сетевых запросов в JavaScript. 
// Он предоставляет возможность ⁡⁣⁣⁢отправки HTTP-запросов⁡ на сервер и получения ответов.

// пример 
const xhr = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/posts';

xhr.open('GET', url, true);
console.log(xhr)
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log(data);
    } else {
      console.error('Ошибка:', xhr.status);
    }
  }
};

xhr.send();
console.log(xhr)
// ⁡⁢⁣⁣HTTP⁡ (⁡⁣⁣⁢HyperText Transfer Protocol⁡) - это протокол передачи данных, 
// используемый для ⁡⁣⁣⁢обмена информацией⁡ между клиентами (например, веб-браузерами) и веб-серверами в интернете.