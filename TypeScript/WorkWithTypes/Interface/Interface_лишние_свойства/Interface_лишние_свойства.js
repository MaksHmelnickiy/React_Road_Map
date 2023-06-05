"use strict";
// В ⁡⁢⁣⁣TypeScript⁡, ⁡⁣⁣⁢если объект содержит дополнительные свойства⁡, которые ⁡⁣⁣⁢не были определены⁡ в ⁡⁢⁣⁣интерфейсе⁡, это приводит к ⁡⁢⁣⁢ошибке⁡. 
var obj = {
    name: 'Max',
    age: 33,
};
var obj2 = {
    name: 'Max',
    age: 34,
    lastName: 'Hmel'
};
console.log(obj2);
var obj3 = {
    name: 'Max',
    age: 35,
    lastName: 'Hmel'
};
var msa = obj3;
console.log(obj3);
var obj4 = {
    name: 'Max',
    age: 72,
    lastName: 'Hmel'
};
console.log(obj4);
