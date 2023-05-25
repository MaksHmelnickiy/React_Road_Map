// Ключевое слово ⁡⁢⁣⁣type⁡ используется для ⁡⁣⁣⁢создания псевдонимов типов⁡, которые позволяют определить ⁡⁣⁣⁢новый тип⁡ данных на основе уже ⁡⁣⁣⁢существующего⁡.

// ⁡⁣⁣⁢​‌‍‌Обычный пример ​⁡
type MyNumType = number;
// Выше строкой мы ⁡⁢⁣создали⁡ ⁡⁢⁣⁣псевдоним⁡ ⁡⁢⁣⁣типа MyNumType⁡ для ⁡⁢⁣⁣number⁡, чтобы его можно было ⁡⁣⁣⁢использовать повторно⁡ в коде.
let myNum: MyNumType = 2;

console.log('myNum', myNum)

// ⁡⁣⁣⁡⁣⁣⁢​‌‍‌Для Объектов пример​⁡⁡ .

type MyNumTypeObj = {
    name: string;
    age: number;
}
//Выше мы создали ⁡⁢⁣⁣псевдоним типа MyNumTypeObj⁡ для ⁡⁢⁣⁣объекта⁡ с определенными свойствами ⁡⁣⁢⁣name⁡, ⁡⁣⁢⁣age⁡ .

let myNumObj: MyNumTypeObj = {
    name: 'Maks',
    age: 32
}
console.log('myNumObj', myNumObj);

// ⁡⁣⁣⁢​‌‍‌Для функций пример​⁡ .

type MyNumTypeFunc = (name: string, age: number) => string;

let myNumFunc:MyNumTypeFunc = (name: string, age: number) => {
    return `${name} ${age}`
};

console.log(myNumFunc('Bob', 32));

// Здесь мы определили ⁡⁢⁣⁣тип⁡ ⁡⁢⁣⁣MyNumTypeFunc⁡ как функцию, ⁡⁣⁣⁢принимающую два аргумента типов string и number и возвращающую строку⁡. 
// Затем мы определили переменную ⁡⁢⁣⁣myNumFunc⁡ как функцию, соответствующую определенному типу, 
// и использовали ее для объединения ⁡⁣⁣⁢строкового значения name⁡ и ⁡⁣⁣⁢числового значения age⁡.