"use strict";
// В TypeScript ⁡⁢⁣⁣индексируемые типы⁡ позволяют определить типы для доступа к элементам объекта через ⁡⁣⁣⁢индекс⁡, 
// который может быть ⁡⁣⁣⁢строкой⁡ или ⁡⁣⁣⁢числом⁡. Это удобно, когда вы работаете с ⁡⁢⁣⁣объектами⁡, 
// которые имеют ⁡⁣⁣⁢динамические свойства⁡, и вы не знаете их точное ⁡⁣⁣⁢количество⁡ или ⁡⁣⁣⁢имена⁡ заранее.
var object = {
    prop1: 1,
    prop2: 2,
};
console.log(object.prop1); // Выводит 1 // 
console.log(object['prop2']); // Выводит 2
var object2 = {
    prop1: 1,
    prop2: 'Hello',
};
var getProperty = function (obj, key) {
    return obj[key];
};
console.log(getProperty(object2, 'prop1')); // Выводит 1
console.log(getProperty(object2, 'prop2')); // Выводит 'Hello'
