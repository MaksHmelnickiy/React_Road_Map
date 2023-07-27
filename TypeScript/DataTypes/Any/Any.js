"use strict";
// Тип ⁡⁢⁣⁣any⁡ используется, когда мы не знаем какой тип должна иметь ⁡⁣⁣⁢та или иная переменная⁡. 
// Эта ⁡⁢⁣⁣переменная⁡ может быть ⁡⁣⁣⁢получена из некоего динамического содержимого⁡, как например, если бы использовалась некая сторонняя библиотека. 
// В таких случаях нужно ⁡⁢⁣⁢отказаться от проверки типов⁡ и позволить таким переменным проходить проверку во время компиляции. 
var isAny = 'text';
console.log(isAny + ', Тип: ' + typeof isAny); // ⁡⁢⁢⁡⁣⁢⁣string⁡ 
isAny = 4;
console.log(isAny + ', Тип: ' + typeof isAny); // ⁡⁣⁢⁣number⁡ 
isAny = Object();
console.log(isAny + ', Тип: ' + typeof isAny); // ⁡⁣⁢⁣object⁡
isAny = true;
console.log(isAny + ', Тип: ' + typeof isAny); // ⁡⁣⁢⁣boolean⁡
