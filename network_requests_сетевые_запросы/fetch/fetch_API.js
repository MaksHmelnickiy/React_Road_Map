// Web ⁡⁢⁣⁣API⁡(Application Programming Interface - интерфейс программирования приложений) это набор ⁡⁣⁣⁢функций⁡,
// ⁡⁣⁣⁢методов⁡, ⁡⁣⁣⁢протолков⁡ для взаимодействия между сервером и приложением или другими программами через интернет/

// Когда вы используете ⁡⁢⁣⁣веб-API⁡, ваше приложение может ⁡⁣⁣⁢запрашивать⁡ информацию у сервера или ⁡⁣⁣⁢отправлять⁡ данные ⁡⁢⁣⁣на сервер⁡, 
// используя определенные ⁡⁣⁣⁢URL-адреса⁡ и ⁡⁣⁣⁢методы⁡ (например, ⁡⁣⁢⁣GET, POST, PUT, DELETE⁡). 
// Веб-API обычно предоставляют данные в формате ⁡⁢⁣⁣JSON⁡ или ⁡⁢⁣⁣XML⁡, чтобы приложения могли легко читать и обрабатывать эту информацию.


// Ниже список – ⁡⁣⁣⁢это все возможные опции для⁡ ⁡⁢⁣⁣fetch⁡ с соответствующими значениями по умолчанию (в комментах указаны альтернативные значения):
let promise = fetch(url, {
  method: "GET", // POST, PUT, DELETE, etc.
  headers: {
    // значение этого заголовка обычно ставится автоматически,
    // в зависимости от тела запроса
    "Content-Type": "text/plain;charset=UTF-8"
  },
  body: undefined, // string, FormData, Blob, BufferSource или URLSearchParams
  referrer: "about:client", // или "" для того, чтобы не послать заголовок Referer,
  // или URL с текущего источника
  referrerPolicy: "strict-origin-when-cross-origin", // no-referrer-when-downgrade, no-referrer, origin, same-origin...
  mode: "cors", // same-origin, no-cors
  credentials: "same-origin", // omit, include
  cache: "default", // no-store, reload, no-cache, force-cache или only-if-cached
  redirect: "follow", // manual, error
  integrity: "", // контрольная сумма, например "sha256-abcdef1234567890"
  keepalive: false, // true
  signal: undefined, // AbortController, чтобы прервать запрос
  window: window // null
});