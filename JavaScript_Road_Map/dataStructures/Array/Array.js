// Для хранения упорядоченных коллекций существует особая структура данных, которая называется ⁡⁢⁣⁣массив⁡, ⁡⁢⁣⁣Array⁡.

// Следует помнить, что в JavaScript существует ⁡⁣⁢⁣8⁡ основных типов данных. ⁡⁣⁣⁢Массив является ⁡⁢⁣⁣объектом⁡⁡ и, следовательно, ведёт себя как объект.

// Существует ⁡⁢⁣⁣два варианта⁡ синтаксиса для создания пустого ⁡⁢⁣⁣массива⁡:
let arr = new Array();
let arr2 = [];

// В массиве могут храниться элементы ⁡⁢⁣⁣любого типа⁡.
let arr3 = ['Test', true , function(){console.log(this)}, 3] // ⁡⁢⁣⁣this⁡ в функции будет выводить сам массив
arr3[2]();

// Получение ⁡⁢⁣⁣последнего элемента⁡ массива
let arr4 = ["Apple", "Orange", "Plum"];
console.log(arr4[arr4.length - 1]) 
console.log(arr4.at(-1)) // ⁡⁢⁣⁣arr4.at(-1)⁡⁡ равносильно что и ⁡⁣⁢⁡⁢⁣⁣arr4[arr4.length - 1]⁡⁡.


// В массиве мы можем сделать следующее чем увеличим его длину 
arr4[12] = 'hello'
console.log(arr4) // так как у нас ⁡⁣⁢⁣3⁡ элемента в массиве ⁡⁢⁣⁣все остальные⁡ вплоть до ⁡⁣⁢⁣12⁡ будут записанны как ⁡⁣⁢⁣empty х 9⁡ - (пустые)

// ⁡⁣⁣⁢Перебор элементов массива⁡ - есть два способа.
let arr5 = ['apple', 'mango', 'cherry']
 
for(let i = 0; i < arr5.length; i++){  // ⁡⁢⁣⁣Старый вариант⁡ перебора элементов массива в цикле
    console.log('Старый подход в цикле:', arr5[i]) 
}

for(let item of arr5){ // ⁡⁢⁣⁣Новый вариант⁡ перебора элементов массива в цикле через ⁡⁢⁣⁣for...of⁡
    console.log('Новый подход с помощью for...of:', item) 
}
