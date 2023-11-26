// Есть универсальный метод ⁡⁢⁣⁣Array.from⁡, который принимает ⁡⁣⁣⁢итерируемый объект⁡ или ⁡⁣⁣⁢псевдомассив ⁡
// и делает из него «настоящий» ⁡⁢⁣⁣Array⁡. 
// После этого мы уже можем ⁡⁣⁢⁣использовать методы массивов⁡.

let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
  };
  
  let arr = Array.from(arrayLike); // (*)
  for(item of arr){
    console.log(item)
  }
  console.log(arr); // World (метод работает)

  const obj3 = {
    first: 'maks',
    second: 'hmel',
    age: 33
  }

  const arr3 = Array.from(obj3)
  console.log(arr3)

// Что бы превратить массив в объект используйте оператор ⁡⁢⁣⁣Spread - {...arr}⁡ или  ⁡⁢⁣⁣Object.assign({}, array)⁡;

// ⁡⁢⁣⁣Object.assign()⁡ — это метод в JavaScript, используемый для ⁡⁣⁣⁢копирования значений⁡ всех собственных перечисляемых свойств 
// из одного или нескольких исходных объектов в целевой объект. После копирования он возвращает этот целевой объект. 
// Этот метод часто используется для создания копий объектов ⁡⁣⁣⁢и⁡⁡⁣⁣⁢ли для слияния нескольких объектов в один⁡.

const array = ['foo', 'boo', 'zoo'];
const obj = Object.assign({}, array);   // ⁡⁢⁣⁡⁢⁣⁣Object.assign({}, array)⁡ /
console.log(obj)

const arrSp = ["foo", "boo", "zoo"];
const obj2 = {...arr};                  // ⁡⁢⁣⁡⁢⁣⁣Spread - {...arr}⁡ /