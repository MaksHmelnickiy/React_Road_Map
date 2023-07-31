// ⁡⁢⁣⁣response.text()⁡ – читает ответ и возвращает как обычный текст,
// ⁡⁢⁣⁣response.json()⁡ – декодирует ответ в формате JSON,
// ⁡⁢⁣⁣response.formData()⁡ – возвращает ответ как объект FormData (разберём его в следующей главе),
// ⁡⁢⁣⁣response.blob()⁡ – возвращает объект как Blob (бинарные данные с типом),
// ⁡⁢⁣⁣response.arrayBuffer()⁡ – возвращает ответ как ArrayBuffer (низкоуровневое представление бинарных данных),
// помимо этого, 
// ⁡⁢⁣⁣response.body⁡ – это объект ReadableStream, с помощью которого можно считывать тело запроса по частям.
// Мы рассмотрим и такой пример несколько позже.

// Мы можем ⁡⁢⁣⁣выбрат⁡⁢⁣⁣ь⁡ ⁡⁣⁣⁢только один метод чтения ответа⁡.
// Если мы уже получили ответ с ⁡⁢⁣⁣response.text()⁡, тогда ⁡⁢⁣⁣response.json()⁡ ⁡⁢⁣⁢не сработает⁡, так как данные уже были обработаны.

// пример ⁡⁣⁣⁢json()⁡ /                                                                       
let response = (async() => {
  let url = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');
  let commits = await url.json(); // читаем ответ в формате JSON
  console.log('commits', commits)
})();

// ⁡⁣⁣⁢То же самое⁡ ⁡⁢⁣⁢без⁡ ⁡⁢⁣⁣await⁡, с использованием ⁡⁢⁣⁣промисов⁡:
const fetchData = fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
  .then(response => response.json())
  .then(commits => console.log('fetchData', commits));
// ⁡⁢⁣⁣end⁡ пример ⁡⁣⁣⁢json()⁡

// пример ⁡⁣⁣⁢text()⁡ /
let responseText = (async() => {
  let url = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');
  let text = await url.text();
  console.log('text', text);
})()

// пример ⁡⁣⁣⁢blob()⁡ /
let responseBlobSvg = (async() => {
  let url = await fetch('https://upload.wikimedia.org/wikipedia/commons/1/12/Black_Paw.svg')
  let svg = await url.blob()
  console.log('svg', svg)
})()

// ⁡⁢⁣⁣Заголовки ответа⁡ (⁡⁣⁣⁢response headers⁡) - это часть ⁡⁣⁣⁢HTTP-ответа⁡, которая содержит ⁡⁣⁣⁢метаданные⁡ о самом ответе или о ресурсе, 
// который был ⁡⁣⁣⁢запрошен с сервера⁡.
// Заголовки ответа представляют собой пары "⁡⁢⁣⁣ключ-значение⁡" и отправляются сервером вместе с содержимым ответа.
// пример:

const getResponseHeaders = (async() => {
  let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');
  // получить один заголовок
  console.log('response.headers', response.headers.get('Content-Type')); // в результате получим - application/json; charset=utf-8 
})()

// ⁡⁢⁣⁣Заголовки запроса⁡
// Для установки заголовка запроса в fetch мы можем использовать опцию ⁡⁣⁣⁢headers⁡. Она содержит объект с исходящими заголовками, например
let getResponseHeaders2 = fetch(protectedUrl, {
  headers: {
    Authentication: 'secret'
  }
});