// ⁡⁣⁣⁢​‌‍‌Задачи⁡⁡ ⁡⁢⁣⁣Рекурсия и стек​⁡ /

// ⁡⁣⁣⁢Задача 1⁡ /
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// 1. С использованием цикла.
// 2. Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
function sumTo1(n){
    let a = 0;
    for(var i = 0; i<=n; i++){
        a+=i
    }
    return a
}
console.log('Task N1, variant 1: ', sumTo1(33)) // 561

function sumTo2(n){
    return n===1 ? n : n + sumTo2(n-1)
}

console.log('Task N1, variant 2: ', sumTo2(33)) // 561

// ⁡⁣⁣⁢Задача 2⁡ /
// Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.

function factorial(n){
    return n === 1 ? n : n * factorial( n - 1 ) 
}
console.log('Task N2: ', factorial(5)) // 720

// ⁡⁣⁣⁢Задача 3⁡ /
// Напишите функцию printList(list), которая выводит элементы списка по одному.
// Variant 1
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};

function printList(el){
  let item = el;
  for(;item !== null; item){
    console.log('Task N3: ', item.value)
    item = item.next
  }
}
printList(list)

// Variant 2
function printList2(el){
  console.log('Task N3: ',el.value);
  if(!!el.next === true){  // ​‌‍‌⁡⁢⁣⁢!!⁡ -​ ⁡⁢⁣⁣Преобразовывает выражение в логическое значение⁡ / 
    printList2(el.next)
  }
}
printList2(list)

// ⁡⁣⁣⁢​‌‍‌Context , call , apply, Decorators​⁡ /
// ⁡⁣⁣⁢задача 4⁡ /
// Создайте декоратор spy(func), который должен возвращать обёртку, 
// которая сохраняет все вызовы функции в своём свойстве calls.
// Каждый вызов должен сохраняться как массив аргументов.
function work(a, b) {
  console.log('Task 4:',  a + b ); // произвольная функция или метод
}
function spy(func) {
  function wrap(...args){
    wrap.calls.push(args) 
    return func.apply(this, args)
  }
  wrap.calls = []
  return wrap
}
work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log( 'Task 4:' + args.join() ); // "call:1,2", "call:4,5"
}

// ⁡⁣⁣⁢задача 5⁡ /
// Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд. Например:

function f(x) {
  console.log('Task 5:', x);
}
function delay (func, a){
  return function(...rest){setTimeout(() => func.call(this, rest), a)}
}
// создаём обёртки
delay(f,1000)('sota')
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test", 'sets', 'ket'); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс
