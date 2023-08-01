// Содержимое строки в JavaScript нельзя изменить. Нельзя ⁡⁢⁣⁣взять символ⁡ посередине и заменить его.
let str = 'Hi';

str[0] = 'h'; // ⁡⁢⁣⁢ошибка⁡

// ⁡⁢⁣⁣str.indexOf(substr,position)⁡ - ищет  слово или букву в строке, и показывает его позицию

let str2 = 'Hello my dier friend'
console.log('indexOf', str2.indexOf('friend'))

// Чтобы найти все вхождения подстроки, нужно запустить ⁡⁢⁣⁣indexOf⁡ в ⁡⁢⁣⁣цикле⁡.

// ⁡⁢⁣⁣for in⁡ циклах перечислимых имен свойств объекта.
// ⁡⁢⁣⁣for of⁡ (новинка в ES6) использует объектно-ориентированный итератор и перебирает значения, сгенерированные этим.
let substr = 'l';
let count = 0;
for(let i of str2){
    if(i.indexOf(substr) === 0){
        count+=1
    }
}
console.log(`Найденно: ${count} совпадений`);

// ⁡⁢⁣⁣str.includes(substr, pos)⁡ возвращает true, если в строке str есть подстрока substr, либо false, если нет.
// Методы ⁡⁢⁣⁣str.startsWith⁡ и ⁡⁢⁣⁣str.endsWith⁡ проверяют, соответственно, начинается ли и заканчивается ли строка определённой строкой:
console.log('includes: ', str2.includes('my')); // true
console.log('startWith', str2.startsWith('Hello')) // ⁡⁢⁢true⁡  так как в начале есть подстрокa ⁡⁣⁢⁣Hello⁡.⁡
console.log('endsWith', str2.endsWith('dier')) // false так как ⁡⁣⁢⁣str2⁡ не заканчивается на ⁡⁣⁢⁣dier⁡.

// В JavaScript есть 3 метода для получения подстроки: ⁡⁢⁣⁣substring⁡, ⁡⁢⁣⁣substr⁡ и ⁡⁢⁣⁣slice⁡.
console.log('slice:' , str2.slice(5, 13)) // результатом будет ⁡⁣⁢⁣my dier⁡⁡⁡ .
console.log('substring:', str2.substring(11, 5)) // Это — почти то же, что и ⁡⁢⁣⁣slice⁡, но можно задавать ⁡⁣⁢⁣start⁡ больше ⁡⁣⁢⁣end⁡.
console.log('substr:', str2.substr(6, 7)) // будет (⁡⁣⁢⁣my dier⁡) так как с позиции 6 мы говорим что бы вырезал следующие 7 символов Возвращает часть строки от ⁡⁣⁢⁣start⁡ длины ⁡⁣⁢⁣length⁡.

// ⁡⁣⁣⁢Задача 1⁡ .
console.log('Задача 1')
function checkSpam(string) {
    let a = string.toLowerCase()
    if(a.includes('xxx') === true || a.includes('viagra') === true){
        return true
    }
    else{
        return false
    }
}

console.log(checkSpam('buy ViAgRA now')) // true 
console.log(checkSpam('free xxxxx')) // true
console.log(checkSpam('innocent rabbit')) // false

// ⁡⁣⁣⁢Задача 2⁡ .
console.log('Задача 2')
function  truncate(str, maxLength) {
    if(str.length > maxLength){
        str = str.slice(0, maxLength)
        return str + '...'
    }
}
console.log('Задача 2')
console.log(truncate('sdfdsgrdg gfdg df dfg dfgf fgdfgdf', 17))

// ⁡⁣⁣⁢Задача 3⁡ .
console.log('Задача 3')
function cur(str) {
    let a = str.indexOf('120')

    if(str.includes('120') === true){
        return +str.slice(a)
    }
}
console.log(cur('$120'))