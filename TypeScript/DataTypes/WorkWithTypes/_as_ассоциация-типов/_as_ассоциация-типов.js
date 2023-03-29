"use strict";
// ⁡⁢⁣⁣Тип-утверждения (Type Assertion) ⁡⁢⁢или⁡ (⁡⁢⁣⁣as⁡⁢⁣)⁡⁡ - это способ ⁡⁣⁣⁢сообщить⁡ компилятору ⁡⁣⁣⁢о типе переменной⁡, когда он ⁡⁢⁣⁢не может⁡ ⁡⁣⁣⁢самостоятельно определить ее тип⁡.
// ​‌‍‌⁡⁣⁣⁢Есть два вида тип-утверждений⁡​:
// ⁡⁣⁢⁣1⁡. ⁡⁢⁣⁣Угловые скобки (< >)⁡ - более ⁡⁣⁣⁢старый способ⁡. Пример:
var someValue = "hello world";
var strLength = someValue.length;
console.log('strLength', strLength);
// ⁡⁣⁢⁣2⁡. Синтаксис "⁡⁢⁣⁣as⁡" - более ⁡⁣⁣⁢новый способ⁡. Пример:
var someValueAs = "hello world";
var strLengthAs = someValue.length;
console.log('strLengthAs', strLengthAs);
// ⁡⁣⁣⁢В обоих случаях⁡ мы ⁡⁢⁣⁣утверждаем⁡, что переменная ⁡⁢⁣⁣someValue⁡ имеет тип ⁡⁣⁣⁢string⁡, 
// и затем мы можем использовать свойство ⁡⁣⁣⁢length⁡, которое доступно только для ⁡⁣⁣⁢строк⁡.
