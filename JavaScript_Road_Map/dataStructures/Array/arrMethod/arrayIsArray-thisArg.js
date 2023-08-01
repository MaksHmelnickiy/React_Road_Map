
//⁡⁣⁣⁡⁢⁣⁣Array.isArray(arr)⁡⁡ проверяет, является ли ⁡⁣⁣⁢arr⁡ массивом.

let a = ''
let arr =['d','d','2']
console.log(Array.isArray(a)) // вернет ⁡⁣⁢⁢false⁡ так как это строка
console.log(Array.isArray(arr)); // вернет ⁡⁣⁢⁢true⁡ так как это массив

arr.forEach(function(item, i , arre){
    console.log(`${item} + ${i} + ${arre}`)
    return item = '2'
})

//⁡⁢⁣⁣thisArg⁡  Значение параметра ⁡⁢⁣⁣thisArg⁡ становится ⁡⁣⁣⁢this⁡ для ⁡⁣⁣⁢func⁡.
//Почти все методы массива, которые вызывают функции – такие как ⁡⁣⁣⁢find, filter, map⁡, 
//за исключением метода ⁡⁣⁣⁢sort⁡, принимают необязательный параметр ⁡⁢⁣⁣thisArg⁡.
// ⁡⁢⁣⁣arr.find(func, thisArg)⁡;
// ⁡⁢⁣⁣arr.filter(func, thisArg)⁡;
// ⁡⁢⁣⁣arr.map(func, thisArg)⁡;
