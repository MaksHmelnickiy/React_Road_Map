//⁡⁢⁣⁣arr.indexOf(item, from)⁡ ищет ⁡⁣⁣⁢item⁡, начиная с индекса ⁡⁣⁣⁢from⁡, и возвращает индекс, на котором был найден искомый элемент, в противном случае ⁡⁣⁢⁣-1⁡.
//⁡⁢⁣⁣arr.lastIndexOf(item, from)⁡ – то же самое, но ищет ⁡⁣⁣⁢справа налево⁡.
//⁡⁢⁣⁣arr.includes(item, from)⁡ – ищет ⁡⁣⁣⁢item⁡, начиная с индекса ⁡⁣⁣⁢from⁡, и возвращает ⁡⁣⁣⁢true⁡, если поиск успешен.

let arr = ['first', 'second', 'third', 'fourth']
console.log('indexOf', arr.indexOf('fourth', 1)) // Возвращает ⁡⁣⁣⁢индекс⁡ элемента в данном случае будет ⁡⁣⁢⁣3⁡,

console.log('includes', arr.includes('third')); // Вернет ⁡⁣⁣⁢true⁡,

// также методы ⁡⁢⁣⁣include, indexOf,⁡ ⁡⁢⁣⁣lastIndexOf⁡  можно использовать для ⁡⁣⁣⁢строк⁡.
let str = 'lorem ipsum for my cat';
console.log('includes string', str.includes('for')); // вернет ⁡⁣⁣⁢true⁡ .
console.log('indexOf string', str.indexOf('cat')) // Вернет индекс ⁡⁣⁢⁣19⁡ /


let str2 = 'hello my friend'

console.log('str2', str2.includes('my'))


// преобразовать строку в массив.

let a = 'hello my friend';
let arr2 = []
for(let i of a){
  arr2.push(i)
}
console.log('arr2', arr2)