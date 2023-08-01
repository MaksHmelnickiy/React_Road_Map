//⁡⁢⁣⁣find(func)⁡ – фильтрует элементы через функцию и отдаёт первое, при прохождении которых через функцию возвращается true.
//⁡⁢⁣⁣findIndex⁡ похож на ⁡⁢⁣⁣find⁡, но возвращает ⁡⁣⁣⁢индекс⁡ вместо значения.


let arr = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
];

let result = arr.find(function(item, index, array) {
    // если ⁡⁣⁣⁢true⁡ - возвращается текущий элемент и перебор прерывается
    // если все итерации оказались ⁡⁣⁣⁢ложными⁡, возвращается ⁡⁣⁣⁢undefined⁡/
    
    return item.id == 2

});

console.log('find', result)

// Функция вызывается по очереди для каждого элемента массива:

// ⁡⁢⁣⁣item⁡ – очередной элемент.
// ⁡⁢⁣⁣index⁡ – его индекс.
// ⁡⁢⁣⁣array⁡ – сам массив.

let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
];
  
let userId = users.find(function(item){
    return item.id == 2
});

let userName = users.find(function(item){
    return item.name == "Петя"
});


//findIndex похож на find, но возвращает индекс вместо значения.
let userIndex = users.findIndex(item => item.name === "Маша")

console.log('findIndex', userIndex)