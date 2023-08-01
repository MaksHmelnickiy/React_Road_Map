// Когда мы пишем наш код, используя объекты для представления сущностей реального мира, 
// – это называется ⁡⁢⁣⁣объектно-ориентированное программирование⁡ или сокращённо: ⁡⁢⁣⁣«ООП»⁡.

// ⁡⁣⁣⁢Функции⁡, которые ⁡⁢⁣⁣находятся в объекте⁡ в качестве его свойств, называются ⁡⁢⁣⁣«методами»⁡.
// Методы позволяют объектам ⁡⁣⁣⁢«действовать»⁡: object.doSomething().
// Методы могут ссылаться на объект через ⁡⁢⁣​‌‍‌⁣this​⁡.
// Значение ​‌‍‌⁡⁢⁣⁣this​⁡ определяется во время исполнения кода.

// ⁡⁣⁣⁢При объявлении любой функции⁡ в ней можно использовать ⁡⁢⁣⁣this⁡, но этот ⁡⁢⁣⁣this⁡ не имеет значения до тех пор, 
// пока функция не будет ⁡⁣⁢⁣вызвана⁡.
// Эта функция может быть ⁡⁢⁣⁡⁣⁢⁣скопирована⁡⁡ ⁡⁣⁣⁢между объектами⁡ (из одного объекта в другой).
// Когда функция вызывается синтаксисом «метода» – object.method(), ⁡⁢⁣⁣значением this⁡ во время вызова является 
// ⁡⁣⁣⁢объект перед точкой⁡.
// Также ещё раз заметим, что ⁡⁢⁣⁡⁣⁣⁡⁢⁣⁣стрелочные функции⁡⁡ являются особенными – ⁡⁢⁣⁢​‌‍‌у них нет this⁡​. 
// Когда внутри стрелочной функции обращаются к ⁡⁢⁣⁣this⁡, то его значение ⁡⁣⁢⁣берётся снаружи⁡.

let user = {
    name: "Джон",
    age: 30,
  
    sayHi() {
      alert( user.name ); // приведёт к ⁡⁢⁣⁢ошибке⁡ /
    }
  
  };
  
  
  let admin = user;
  user = null; // обнулим переменную для наглядности, теперь она не хранит ссылку на объект.
  // admin.sayHi() // ⁡⁢⁣⁢Ошибка!⁡ Внутри sayHi() используется user, которая больше не ссылается на объект!


//   Для работы вызовов типа user.hi(), JavaScript использует трюк – точка '.' возвращает не саму функцию,
//  а специальное значение «ссылочного типа», называемого ⁡⁢⁣⁣Reference Type⁡.

  console.log('<<<<<<<Задачи>>>>>>>')
// num 1
  let obj, method ;

  obj = {
    go: function() { console.log('Num1', this); }
  };
  obj.go();
  (obj.go)();
  (method = obj.go)();
  (obj.go || obj.stop)();
// num 2
  let calc = {
    num1: 0,
    num2: 0,
    read(){
       let first = prompt()
       let second = prompt()
       this.num1 = first
       this.num2 = second
    },
    sum(){
      return Number(this.num1) + Number(this.num2)
    },
    mul(){
      return Number(this.num1) * Number(this.num2)
    }
  }
  calc.read()
  console.log('Num2', calc.sum() )
  console.log('Num2', calc.mul() )
// num 3

let ladder = {
    result: 0,
    plus(){
       this.result++;
       return this
    },
    minus(){
        this.result--
        return this
    },
    show(){
        console.log('num3',this.result)
    }
}
ladder.plus();
console.log('num3', ladder.result);
ladder.plus();
console.log('num3',ladder.result);
ladder.minus()
console.log('num3',ladder.result)
ladder.minus()
console.log('num3',ladder.result)
ladder.plus().plus().plus().plus().plus().plus().minus();
console.log('num3',ladder.result)