// Для перебора ⁡⁣⁣⁢всех свойств объекта⁡ используется цикл ⁡⁢⁣⁣for..in⁡ /

let userFor = {
    name: "John",
    age: 30,
    isAdmin: true
};
  
  for (let key in userFor) {
    // ключи
    console.log( key );  // name, age, isAdmin
    // значения ключей
    console.log( userFor[key] ); // John, 30, true
  }