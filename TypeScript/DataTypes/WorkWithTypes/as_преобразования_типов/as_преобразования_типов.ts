// ⁡⁢⁣⁣Тип-утверждения (Type Assertion) ⁡⁢⁢или⁡ (⁡⁢⁣⁣as⁡⁢⁣)⁡⁡ - это способ ⁡⁣⁣⁢сообщить⁡ компилятору ⁡⁣⁣⁢о типе переменной⁡, когда он ⁡⁢⁣⁢не может⁡ ⁡⁣⁣⁢самостоятельно определить ее тип⁡.

// ​‌‍‌⁡⁣⁣⁢Есть два вида тип-утверждений⁡​:

// ⁡⁣⁢⁣1⁡. ⁡⁢⁣⁣Угловые скобки (< >)⁡ - более ⁡⁣⁣⁢старый способ⁡. Пример:
let someValue: string = "hello world";
let strLength: number = (<string>someValue).length;
console.log('someValue', typeof someValue) // string
console.log('strLength', typeof strLength) // number

// ⁡⁣⁢⁣2⁡. Синтаксис "⁡⁢⁣⁣as⁡" - более ⁡⁣⁣⁢новый способ⁡. Пример:
let someValueAs: string = "hello world";
let strLengthAs: number = (someValue as string).length;
console.log('someValueAs', typeof someValueAs) // string
console.log('strLengthAs', typeof strLengthAs) // number

// ⁡⁣⁣⁢В обоих случаях⁡ мы ⁡⁢⁣⁣утверждаем⁡, что переменная ⁡⁢⁣⁣someValue⁡ имеет тип ⁡⁣⁣⁢string⁡, 
// и затем мы можем использовать свойство ⁡⁣⁣⁢length⁡, которое доступно только для ⁡⁣⁣⁢строк⁡.