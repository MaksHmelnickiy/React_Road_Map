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

// Что бы превратить массив в объект используйте оператор ⁡⁢⁣⁣Spread - {...arr}⁡ или  ⁡⁢⁣⁣Object.assign({}, array)⁡;
const array = ['foo', 'boo', 'zoo'];
const obj = Object.assign({}, array);   // ⁡⁢⁣⁡⁢⁣⁣Object.assign({}, array)⁡ /

const arrSp = ["foo", "boo", "zoo"];
const obj2 = {...arr};                  // ⁡⁢⁣⁡⁢⁣⁣Spread - {...arr}⁡ /