// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.
// ⁡⁣⁣⁢Задача N1⁡:
let user = {
    name: "Василий Иванович",
    age: 35
  };
let toJson = JSON.stringify(user);
console.log('Task N1:', toJson);

let toObj = JSON.parse(toJson);
console.log('Task N1:', toObj)


// Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:
// ⁡⁣⁣⁢Задача N2⁡:
let room = {
    number: 23
  };
  
  let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
  };
  
  // цикличные ссылки
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  console.log( JSON.stringify(meetup, function replacer(key, value) {
    if(key == self){}
  }));