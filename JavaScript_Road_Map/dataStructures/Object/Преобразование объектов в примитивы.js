// ⁡⁢⁣⁣Symbol.toPrimitive⁡, который следует использовать для обозначения ⁡⁣⁣⁢метода преобразования⁡, вот так:
let user = {
    name: "John",
    money: 1000,
  
    [Symbol.toPrimitive](hint) {
      alert(`hint: ${hint}`);
      return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
  };
  
  // демонстрация результатов преобразований:
  alert(user); // hint: string -> {name: "John"}
  alert(+user); // hint: number -> 1000
  alert(user + 500); // hint: default -> 1500

// По умолчанию обычный объект имеет следующие методы toString и valueOf:
// Метод toString возвращает строку "[object Object]".
// Метод valueOf возвращает сам объект.
let user2 = {name: "John"};

alert(user2); // [object Object]
alert(user2.valueOf() === user2); // true

//Преобразование объекта в примитив вызывается автоматически многими встроенными функциями и операторами,
// которые ожидают примитив в качестве значения.

// Существует всего ⁡⁣⁣⁢3 типа (хинта)⁡ для этого:
// "⁡⁢⁣⁣string⁡" (для alert и других операций, которым нужна строка)
// "⁡⁢⁣⁣number⁡" (для математических операций)
// "⁡⁢⁣⁣default⁡" (для некоторых других операторов, обычно объекты реализуют его как "number")