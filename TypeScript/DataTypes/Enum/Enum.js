"use strict";
// ⁡⁢⁣⁣Enum⁡ (⁡⁢⁣⁣перечисление⁡) /
// тип ⁡⁢⁣⁣enum⁡ (enumeration) используется для определения набора именованных констант, ⁡⁣⁣⁢которые могут быть присвоены переменной этого типа⁡. 
// В отличие от JavaScript, в TypeScript ⁡⁢⁣⁣enum⁡ - это реальный тип, ⁡⁣⁣⁢который компилируется в объекты JavaScript⁡.
var isString = 'str1';
var isEnumAnimal;
(function (isEnumAnimal) {
    isEnumAnimal[isEnumAnimal["cat"] = 0] = "cat";
    isEnumAnimal[isEnumAnimal["rabbit"] = 1] = "rabbit";
    isEnumAnimal[isEnumAnimal["horse"] = 2] = "horse";
})(isEnumAnimal || (isEnumAnimal = {}));
;
console.log('isString - ' + typeof isString);
console.log('isEnumAnimal - ' + typeof isEnumAnimal);
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c); // выведет 2
var colorName = Color[4];
console.log(colorName); // выведет 'Blue'
