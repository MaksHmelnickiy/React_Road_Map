
//⁡⁣⁣⁡⁢⁣⁣Array.isArray(arr)⁡⁡ проверяет, является ли ⁡⁣⁣⁢arr⁡ массивом.

let a = {maks: 'klass', rita: 'fa'}
let arr =['d','d','2']
console.log(Array.isArray(a)) // вернет ⁡⁣⁢⁢false⁡ так как это строка
console.log(Array.isArray(arr)); // вернет ⁡⁣⁢⁢true⁡ так как это массив

arr.forEach((item, i , arre) => {
    console.log(`${item} + ${i} + ${arre}`)
    return item = '2'
})

//⁡⁢⁣⁣thisArg⁡  Значение параметра ⁡⁢⁣⁣thisArg⁡ становится ⁡⁣⁣⁢this⁡ для ⁡⁣⁣⁢func⁡.
//Почти все методы массива, которые вызывают функции – такие как ⁡⁣⁣⁢find, filter, map⁡, 
//за исключением метода ⁡⁣⁣⁢sort⁡, принимают необязательный параметр ⁡⁢⁣⁣thisArg⁡.
// Необязательный параметр, который указывает значение, которое будет использоваться в качестве ⁡⁢⁣⁣this⁡ при выполнении функции обратного вызова.
// ⁡⁢⁣⁣arr.find(func, thisArg)⁡;
// ⁡⁢⁣⁣arr.filter(func, thisArg)⁡;
// ⁡⁢⁣⁣arr.map(func, thisArg)⁡;

const numbers = [1, 2, 3];

function logElement(element) {
  console.log(element + this.offset);
}

const context = { offset: 10 };

numbers.forEach(logElement, context);
// Output: 11, 12, 13
