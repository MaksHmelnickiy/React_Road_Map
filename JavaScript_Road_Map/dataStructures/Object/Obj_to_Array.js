// У объектов нет множества методов, которые есть в массивах, например ⁡⁣⁣⁢map, filter и других⁡.
// Если мы хотели бы их применить, то можно использовать ⁡⁢⁣⁣Object.entries⁡ с последующим вызовом ⁡⁢⁣⁣Object.fromEntries⁡:

// ⁡⁣⁢⁣1.⁡ Вызов ⁡⁢⁣⁣Object.entries(obj)⁡ возвращает массив пар ⁡⁣⁣⁢ключ/значение⁡ для obj.
// ⁡⁣⁢⁣2.⁡ На нём вызываем методы массива, например, ⁡⁢⁣⁣map⁡.
// ⁡⁣⁢⁣3.⁡ Используем ⁡⁢⁣⁣Object.fromEntries(array)⁡ на результате, чтобы преобразовать его обратно в объект.

let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
  };
let arr = Object.entries(prices);
console.log(arr)// Result: ⁡⁢⁣⁢[Array(2), Array(2), Array(2)]⁡/⁡⁣⁣⁢Превратили⁡ ⁡⁢⁣⁣Object⁡ в масив массивов, где ⁡⁣⁢⁣array[2]=['meat', 4]⁡/ 

let obj = Object.fromEntries(array);
console.log(obj)// Result: ⁡⁢⁣⁢{banana: 1, orange: 2, meat: 4}/⁡⁣⁣⁢Превратили⁡ ⁡⁢⁣⁣Array⁡ обратно в ⁡⁣⁢⁣массив⁡ /⁡