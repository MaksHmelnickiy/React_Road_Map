// ⁡⁢⁣⁣POST-запрос⁡ - это один из ⁡⁣⁣⁢основных методов HTTP-протокола⁡, который используется для ⁡⁢⁣⁣отправки данных⁡ на сервер. 
//⁡⁣⁣⁢ В отличие от⁡ ⁡⁢⁣⁣GET-запроса⁡, который используется для ⁡⁣⁣⁢получения данных⁡ с сервера, 
// ⁡⁢⁣⁣POST-запрос⁡ позволяет клиентскому приложению отправлять данные на сервер для обработки или сохранения.

// ⁡⁣⁣⁢Основные характеристики⁡ ⁡⁢⁣⁣POST-запроса⁡:

//⁡⁣⁢⁣ 1)⁡ ⁡⁢⁣⁣Создание ресурсов⁡⁡: POST-запрос обычно используется для создания новых ресурсов на сервере.
// Например, при ⁡⁣⁣⁢отправке данных регистрации нового пользователя⁡ на сервер.

// ⁡⁣⁢⁣2)⁡ ⁡⁢⁣⁣Отправка данных:⁡ POST-запрос позволяет клиентскому приложению отправлять данные в ⁡⁣⁣⁢теле запроса⁡. 
// Эти данные могут быть в различных форматах, таких как ⁡⁣⁣⁢JSON, URL-encoded форма, XML⁡ и другие.

// ⁡⁢⁡⁣⁢⁣3)⁡ ⁡⁢⁣⁣Защита данных:⁡ При отправке данных с помощью ⁡⁣⁣⁢POST-запроса⁡ они ⁡⁣⁢⁣не отображаются⁡ в адресной строке браузера, 
// что делает этот метод более безопасным для передачи чувствительных или больших объемов данных.

// пример 

const objSend = {
  name: 'Maks Hmel',
  username: 'makshmel',
  email: 'john.doe@example.com'
}

const sendData = (async(obj) => {
  const fetchData = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(obj) // ⁡⁢⁣⁣преобразовываем⁡ будь то ⁡⁣⁣⁢объект, массив, строка и т.д⁡. ⁡⁢⁣⁣в JSON⁡ строку⁡ /
  }).then(response => response.json()) // ⁡⁢⁣⁣json()⁡ - ⁡⁣⁢⁣преобразовываем⁡ тело ответа в формате ⁡⁣⁣⁢JSON⁡ ⁡⁢⁣⁣в JavaScript-объект⁡  /
  console.log(fetchData);
})

sendData(objSend)