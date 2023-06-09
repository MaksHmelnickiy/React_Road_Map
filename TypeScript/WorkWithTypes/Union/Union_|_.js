"use strict";
// ⁡⁣⁣⁢Объединение⁡ ⁡⁢⁣⁣Union⁡ - это мощный механизм, позволяющий создавать из множества существующих типов ⁡⁣⁣⁢логическое условие⁡, 
// по которому данные могут принадлежать только к одному ⁡⁣⁣⁢из указанных типов⁡. 
// Объединение указывается с помощью оператора прямой черты ⁡⁢⁣⁣|⁡, 
// по ⁡⁣⁣⁢обе стороны⁡ которой располагаются ⁡⁣⁣⁢типы данных⁡.
var isUnion;
// ⁡⁢⁣⁣Переменной⁡, которой был присвоен ⁡⁢⁣⁣объединенный тип⁡, 
// может быть присвоено значение, ⁡⁣⁣⁢принадлежащие к одному⁡ из объединенных типов.
isUnion = 1;
console.log('Type: ', typeof isUnion); // number
isUnion = false;
console.log('Type: ', typeof isUnion); // boolean
