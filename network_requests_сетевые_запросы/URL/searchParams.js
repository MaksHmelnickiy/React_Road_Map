// ⁡⁢⁣⁣searchParams⁡ - это свойство класса URL, которое предоставляет ⁡⁣⁣⁢доступ к параметрам строки запроса⁡ (query string) URL-адреса. 
// Строка запроса - это часть URL, следующая за ⁡⁣⁣⁢знаком вопроса⁡ ⁡⁢⁣⁣?⁡, и содержит параметры в виде пар "⁡⁣⁢⁣имя=значение⁡", разделенных ⁡⁣⁣⁢амперсандом⁡ ⁡⁢⁣⁣&⁡⁡.

// Свойство ⁡⁢⁣⁣searchParams⁡ ⁡⁣⁣⁢возвращает⁡ объект ⁡⁢⁣⁣URLSearchParams⁡, который предоставляет методы для работы с параметрами запроса.
// Это удобно, когда вам нужно ⁡⁣⁣⁢извлекать⁡, ⁡⁣⁣⁢добавлять⁡ или ⁡⁣⁣⁢изменять⁡ параметры URL.

const myURL = new URL('https://www.example.com/page?name=John&age=30');

const params = myURL.searchParams;

//⁡⁣⁣⁢ Методы⁡ для работы с ⁡⁢⁣⁣searchParams⁡ /

console.log(params.get('name')); // "John" / get - ⁡⁢⁣⁣получить⁡ параметр по ключу
console.log(params.get('age'));  // "30"

// ⁡⁢⁣⁣getAll(name)⁡ – ⁡⁢⁣⁣получить все параметры⁡ с одинаковым именем name (такое возможно, например: ⁡⁣⁢⁣?user=John&user=Pete⁡),

params.append('gender', 'female'); // append - ⁡⁢⁣⁣добавить⁡ параметр по ключу.
console.log(myURL.href); // "https://www.example.com/page?name=Alice&age=30&gender=female"

params.set('name', 'Alice');  // тоже что и append но может еще ⁡⁢⁣⁣заменять⁡ параметр / 
console.log(myURL.href); // "https://www.example.com/page?name=Alice&age=30"

params.delete('age'); // ⁡⁢⁣⁣удаляет⁡ параметр по ключу/  
console.log(myURL.href); // "https://www.example.com/page?name=Alice&gender=female"

console.log(params.has('name')) // true / ⁡⁢⁣⁣проверяет⁡ наличие по ключу

// ⁡⁢⁣⁣sort()⁡ – ⁡⁢⁣⁣отсортировать⁡ параметры по ключу, используется редко,
// …и является перебираемым, аналогично Map.
