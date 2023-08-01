// ⁡⁣⁣⁢Задача 1⁡ /
// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
// Да, именно таким образом, используя двойные круглые скобки (не опечатка).

function sum(a){
    return (b) => b + a
}
console.log('Taks N1: ', sum(3)(5))

// ⁡⁣⁣⁢Задача 2 ⁡/
// У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. 
// Если она возвращает true, то элемент добавится в возвращаемый массив.
// Сделайте набор «готовых к употреблению» фильтров:
// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.

let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a,b){
    return function(item){
        if(item >= a && item <=b) return item
    }
}
function inArr(arr){
    return item => arr[item]
}
console.log('Task N2: ',arr.filter(inBetween(3,6)))
console.log('Task N2: ',arr.filter(inArr([1,2,10])))

// ⁡⁣⁣⁢Задача 3 ⁡/
// У нас есть массив объектов, который нужно отсортировать по полям:
let users2 = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

  function byField(el) {
    return (first, second) => first[el] > second[el] ? 1 : -1;
  }
  
// По возрасту
users2.sort(byField('age'))
let age = users2.slice(0)
console.log('Task N3 (age): ', age);

// По имени
users2.sort(byField('name'))
let namer = users2.slice(0)
console.log('Task N3 (namer): ', namer);

// ⁡⁣⁣⁢Задача 4⁡ /
// Следующий код создаёт массив из стрелков (shooters).
// Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…
function makeArmy() {
    let shooters = [];
  
    for(let i =0; i<10; i++){
        let shooter = function() { 
            console.log( i ); 
        };
        shooters.push(shooter);
    }
    return shooters;
  }
  
  let army = makeArmy();
  console.log(army)
  army[0](); // 0
  army[5](); // 5

// ​‌‍‌⁡⁣⁣⁢NFE​ ⁡/

// ⁡⁣⁣⁢Задача N4⁡ /
// Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:
// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.

function makeCounter() {
    let count = 0
    function counter(){
      return count++
    }
  
    counter.set = function(val){
      return count = val
    }
  
    counter.decrease = function() {
      return count -= 1
    }
  
    return counter
  }
  
  let counter = makeCounter()
  console.log('Task N4: counter plus: ', counter())
  console.log('Task N4: counter plus: ', counter())
  console.log('Task N4: counter set:', counter.set(11))
  console.log('Task N4: counter minus:', counter.decrease())
  
  // ⁡⁣⁣⁢Задача N5 /
  
  function plus(a) {
    let c = a
    function rest(b){
      c+=b
      return rest
    }
    rest.toString = function() {
      return c;
    };
    return rest
  }
  // ⁡⁣⁢⁣1⁡. В общем, чтобы это хоть как-нибудь заработало, результат, возвращаемый sum, должен быть функцией.
  // ⁡⁣⁢⁣2⁡. Между вызовами эта функция должна удерживать в памяти текущее значение счётчика.
  // ⁡⁣⁢⁣3⁡. Согласно заданию, функция должна преобразовываться в число, когда она используется с оператором ==. 
  // Функции – объекты, так что преобразование происходит, как описано в главе Преобразование объектов в примитивы, 
  // поэтому можно создать наш собственный метод, возвращающий число.
  alert(plus(5)(4)(11))