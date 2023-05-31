"use strict";
// ⁡⁢⁣⁣Interface⁡ в TypeScript представляет собой способ ⁡⁣⁣⁢определения формы объекта⁡. 
// Он ⁡⁣⁣⁢определяет структуру объекта⁡, ⁡⁣⁣⁢задавая типы для его свойств и методов⁡, 
// но не предоставляет реализацию для этих свойств и методов.
function getPerson(person) {
    return person.greet + ' ' + person.firstName + ' ' + person.lastName + ' ' + person.age;
}
var max = {
    firstName: "Max",
    lastName: "Hmel",
    age: 33,
    greet: function () {
        return 'Hello';
    }
};
console.log(getPerson(max)); // '⁡⁣⁢⁣Hello Max Hmel 33⁡'
// ⁡⁣⁣⁢Необязательные свойства⁡ указываются через ⁡⁢⁣⁣?⁡ . ⁡⁣⁣⁢Например⁡ ⁡⁣⁢⁣color?: string⁡;
// ⁡⁣⁣⁢Свойства только для чтения⁡ указываются через ⁡⁢⁣⁣readonly .  Например  ⁡⁣⁢⁣readonly ⁡⁣⁢⁣size: number⁡⁡⁡;⁡
