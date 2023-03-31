"use strict";
// В TypeScript можно определить ⁡⁢⁣⁣тип функции⁡, используя следующий ⁡⁣⁣⁢синтаксис⁡:
var typeFunc = function (a, b) { return "".concat(a, " + ").concat(b); }; // Здесь функция ⁡⁢⁣⁣typeFunc⁡ принимает два аргумента ⁡⁣⁣⁢типа number⁡ и ⁡⁣⁣⁢string⁡ возвращает значение типа ⁡⁢⁣⁣string⁡⁡.
console.log(typeFunc('2', 3));
// Либо мы можем опредить ⁡⁢⁣⁣функцию как переменную⁡ и затем через переменной вызывать данную функцию:
var typeFunc2 = function (a, b) {
    return a + b;
};
console.log(typeFunc2(3, 4));
