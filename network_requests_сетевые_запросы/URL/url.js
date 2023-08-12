// Класс ⁡⁢⁣⁣URL⁡ предоставляет удобные методы ⁡⁣⁣⁢для работы с ⁡⁢⁣⁣URL-адресами⁡⁡ (Uniform Resource Locator), то есть ⁡⁣⁣⁢с адресами⁡ веб-ресурсов. 
// Этот класс предоставляет возможности для ⁡⁣⁣⁢разбора⁡, ⁡⁣⁣⁢создания⁡ и ⁡⁣⁣⁢изменения⁡ ⁡⁢⁣⁣URL-адресов⁡.
// Синтаксис: new URL(url, [base])

const url = new URL('https://google.com/search?query=JavaScript#hash');
console.log(url);

// Мы можем ⁡⁢⁣⁣разобрать данный url⁡ по частям используя ⁡⁣⁣⁢его свойства⁡.
console.log(url.protocol) // https:
console.log(url.host) // google.com
console.log(url.search) // ?query=JavaScript
console.log(url.hash) // #hash

// также есть свойства ⁡⁢⁣⁣user ⁡и ⁡⁢⁣⁣password⁡, если используется ⁡⁣⁣⁢HTTP-аутентификация⁡: ⁡⁣⁢⁣http://login:password@site.com⁡ (но они ⁡⁢⁣⁢редко⁡ используются).

// Можно легко создать ⁡⁢⁣⁣новый URL⁡ по пути относительно ⁡⁢⁣⁣существующего⁡ ⁡⁣⁣⁢URL-адреса⁡:
const url2 = new URL('https://javascript.info/profile/admin')
const newUrl2 = new URL('tester', 'https://javascript.info/profile/admin')
console.log(newUrl2.href) // https://javascript.info/profile/tester

// ⁡⁢⁣⁣объекты URL автоматически кодируют не латинские символы⁡. Ниже пример и результат.
const urlCode = new URL('https://ru.wikipedia.org/wiki/Тест');  
console.log(url.href) // Result: // https://ru.wikipedia.org/wiki/%D0%A2%D0%B5%D1%81%D1%82 /


// Для ⁡⁢⁣⁣кодирования⁡ также существуют ⁡⁣⁣⁢встроенные функции⁡ .

// 1) ⁡⁢⁣⁣encodeURI⁡ – кодирует URL-адрес целиком.
// 2) ⁡⁢⁣⁣decodeURI⁡ – декодирует URL-адрес целиком.
// 3) ⁡⁢⁣⁣encodeURIComponent⁡ – кодирует компонент URL, например, параметр, хеш, имя пути и т.п.
// 4) ⁡⁢⁣⁣decodeURIComponent ⁡– декодирует компонент URL.

// пример 
let urlEncode = encodeURI('http://site.com/привет');
alert(url); // http://site.com/%D0%BF%D1%80%D0%B8%D0%B2%D0%B5%D1%82