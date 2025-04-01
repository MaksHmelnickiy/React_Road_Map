const num = 5
console.log(`Num: ${num}`);
// чтобы запустить даный файл индекс.джс  в терминале. Достаточно просто прописать ⁡⁢⁣⁣node index.js⁡  /
// // также когда мы добавим в файл ⁡⁣⁣⁢package.json⁡ в скрипты данный файл и  если прописать в терминале ⁡⁢⁣⁣npm run start⁡ . У нас выполнится данный файл.


// Подключим библиотеку из папки node_modules - ⁡⁢⁣⁣currency-converter⁡  - данная либа конвертирует валюту. 

const CC = require('currency-converter-lt') // ⁡⁢⁣⁣require⁡ в ⁡⁣⁣⁢Node.js⁡ — это встроенная функция, предназначенная для ⁡⁢⁣⁣импортирования модулей⁡. С ее помощью можно загрузить объекты 
const currencyConverter = new CC({from: 'USD', to: 'EUR', amount: 100}) // Создаем обьект на основе этого класса ⁡⁣⁣⁢currency-converter⁡ .

currencyConverter.convert().then((response) => {  // здесь мы используем Промис как указанно в либе, и с помощью комнады ⁡⁢⁣⁣node index.js⁡⁡ ⁡⁣⁣⁢выводим в терминал⁡ данный скрипт .
  console.log(Number(response))
})