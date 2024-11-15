// Метод ⁡⁢⁣⁣concat⁡ создаёт новый массив, в который ⁡⁣⁣⁢копирует⁡ данные из других массивов и дополнительные значения.
// Его синтаксис: ⁡⁢⁣⁣arr.concat(arg1, arg2...)⁡

let arr = [1, 2];
let arr2 = [3,4,5,6, 7, 8]

let newArr = ['string']
let result = newArr.concat(arr, arr2)
console.log('Concat', result)

// создать массив из: ⁡⁣⁣⁢arr⁡ и ⁡⁣⁢⁣[3,4]⁡, потом добавить значения ⁡⁣⁢⁣5⁡ и ⁡⁣⁢⁣6⁡/
console.log( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

// ⁡⁢⁣⁣concat⁡ так же позволяет добавлять обычные ⁡⁣⁣⁢объекты⁡.
let obj = {key1: 'cool', key2: 'cool2'}
let arrObj = arr.concat(obj)
console.log('concat: ', arrObj)

// Метод ⁡⁢⁣⁣arr.forEach⁡ позволяет запускать функцию для каждого элемента массива.
// Результат функции (если она вообще что-то возвращает) ⁡⁣⁣⁢отбрасывается⁡ и ⁡⁣⁣⁢игнорируется⁡.

// ⁡⁣⁣⁢Его синтасис:⁡ 
arr.forEach(function(item, index, array) {
    // ... делать что-то с item
});

const numbers = [1,2,3,4]
numbers.forEach((item) => {item * 2})
console.log('numbers' , numbers)

// Важно отметить, что ⁡⁢⁣⁣forEach⁡ ⁡⁢⁣⁢не создает⁡ новый массив, и любые изменения, внесенные внутри функции обратного вызова, ⁡⁢⁣⁢не изменяют⁡ ⁡⁣⁣⁢оригинальный массив⁡. 
// Если вы хотите создать новый массив на основе измененных значений, вы можете вместо этого использовать ⁡⁢⁣⁣map⁡.

// Если уж нужно его изменить , можно воспользоваться третим значением ⁡⁢⁣⁣thisArg⁡ например :

const changeArrWithforEach = [1,2,3,4,5]
changeArrWithforEach.forEach((num,index,thisArg) => {
    console.log('thisArg', index, thisArg)
    thisArg[index] = num * 2
})

console.log('changeArrWithforEach', changeArrWithforEach)