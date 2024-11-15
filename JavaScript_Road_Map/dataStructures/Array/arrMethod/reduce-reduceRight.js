// ⁡⁢⁣⁣reduce/reduceRight(func, initial)⁡ – вычисляет одно значение на основе ⁡⁣⁣⁢всего массива⁡, 
// вызывая ⁡⁣⁣⁢func⁡ для каждого элемента и передавая промежуточный результат между вызовами.

//Синтаксис:
// let value = arr⁡⁢⁢⁢.reduce⁡⁡(function(⁡⁢⁣⁣accumulator, item, index, array⁡⁡⁡) {
//     // ...
// }, [⁡⁣⁢⁣initial⁡]);
// Функция применяется ⁡⁣⁣⁢по очереди⁡ ко всем элементам массива и «⁡⁣⁣⁢переносит⁡» свой ⁡⁣⁣⁢результат⁡ на ⁡⁣⁣⁢следующий⁡ вызов.
// ⁡⁣⁣⁢Аргументы:⁡ /
// ⁡⁢⁣⁣accumulator⁡ – результат предыдущего вызова этой функции, равен initial при первом вызове (если передан initial),
// ⁡⁢⁣⁣item⁡ – очередной элемент массива,
// ⁡⁢⁣⁣index⁡ – его индекс,
// ⁡⁢⁣⁣array⁡ – сам массив.

let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current, index) => sum + current + index, 0);  // где 0 это ⁡⁢⁣⁣начальное значение ⁡⁣⁣⁢акумулятора⁡⁡.
// Если ⁡⁢⁣⁢не указано⁡ ⁡⁢⁣⁣начальное значение⁡, reduce использует ⁡⁣⁣⁢первый элемент⁡ массива в качестве начального значения, 
// а итерация ⁡⁣⁣⁢начнётся со второго элемента⁡. 

console.log(result); // 15

// reduceRight 
// Метод ⁡⁢⁣⁣arr.reduceRight⁡ работает аналогично, но проходит по массиву ⁡⁢⁣⁣справа налево⁡.




// ⁡⁣⁣⁢Задача ⁡⁣⁢⁣№1⁡⁡ /
// У вас есть массив объектов, каждый из которых представляет одну покупку. Каждый объект имеет свойства item (название товара), 
// quantity (количество) и price (цена за единицу). Вам нужно с помощью метода reduce посчитать общую сумму всех покупок.
const purchases = [
  { item: 'Apple', quantity: 2, price: 3 },
  { item: 'Banana', quantity: 5, price: 1 },
  { item: 'Orange', quantity: 3, price: 2 },
  { item: 'Mango', quantity: 4, price: 2.5 },
];

const resultPrice = purchases.reduce((acumulator, el) => acumulator + (el.quantity * el.price), 0)
console.log('result Task 1: ', resultPrice) // 27

//⁡⁣⁣⁢Задача⁡⁣⁢⁣ №2⁡⁡ /
// У вас есть массив объектов, каждый из которых представляет книгу с определёнными свойствами: title (название книги), 
// author (автор книги) и year (год издания). Вам нужно с помощью метода reduce сгруппировать книги по авторам.
const books = [
  { title: 'Book 1', author: 'Author A', year: 1999 },
  { title: 'Book 2', author: 'Author B', year: 2005 },
  { title: 'Book 3', author: 'Author A', year: 2010 },
  { title: 'Book 4', author: 'Author C', year: 2020 },
  { title: 'Book 5', author: 'Author B', year: 2000 },
];
const authors = books.reduce((acum, item) => {
  const author = item.author
  if(!acum[author]){
    acum[author] = []
  }
  acum[author].push(item)
  return acum
},{})

console.log('books', authors);

// ⁡⁣⁣⁢Задача⁡ ⁡⁣⁢⁣№3 ⁡/
// У вас есть массив объектов, каждый из которых представляет человека с определёнными свойствами: name (имя), age (возраст) и group (группа). 
// Вам нужно с помощью метода reduce подсчитать средний возраст людей в каждой группе.

const people = [
  { name: 'Alice', age: 25, group: 'A' },
  { name: 'Bob', age: 30, group: 'B' },
  { name: 'Charlie', age: 35, group: 'A' },
  { name: 'David', age: 40, group: 'B' },
  { name: 'Eve', age: 45, group: 'A' }
];
const averageAge = people.reduce((acum, item) => {
  const group = item.group
  if(!acum[group]){
    acum[item.group] = {}
  }
  acum[item.group] =  + item.age;
  console.log(acum)
  return acum
},{})
console.log('age', averageAge)