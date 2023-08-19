// ​‌‍‌⁡⁣⁣⁢Неперечислимое свойство⁡​
// ⁡⁢⁣⁣Неперечислимое свойство⁡ (non-enumerable property) - это свойство объекта, которое ⁡⁢⁣⁢не будет видимым⁡ при перечислении свойств объекта в ⁡⁢⁣⁣циклах⁡, 
// таких как ⁡⁣⁣⁢for...in⁡ или методах ⁡⁣⁣⁢Object.keys(), Object.values(), Object.entries()⁡ /

// Для ⁡⁣⁣⁢установки свойства как неперечислимого⁡ в JavaScript используется флаг ⁡⁢⁣⁣enumerable⁡
//  при использовании метода ⁡⁢⁣⁣Object.defineProperty()⁡ или его аналогов, таких как ⁡⁢⁣⁣Object.defineProperties()⁡.

const obj = {
  name: 'Koks',
  age: 32,
  male: 'female'
}
Object.defineProperty(obj, 'name', {enumerable: false})

for(let key in obj){
  console.log(key) // выведит только ⁡⁢⁣⁣(age⁡, ⁡⁢⁣⁣male)⁡. А вот ⁡⁢⁣⁣name⁡ ⁡⁢⁣⁢не выведит⁡ так как стоит ⁡⁢⁢⁢enumerable⁡: ⁡⁣⁢⁣false⁡ /
}

// ⁡⁢⁣⁡⁢⁣⁣Object.defineProperties()⁡ работает похожим образом только там можно ⁡⁣⁣⁢оприделить⁡ сразу ⁡⁢⁣⁣несколько свойств⁡: 

const user = {
  name: "Rita",
  surname: "Hmelnickaya",
  age: 26
}
Object.defineProperties(user, {
  name: { value: 'New Rita',  enumerable: false },
  surname: { writable: false },
});

for(let key in user){
  console.log(key) // выведит только ⁡⁢⁣⁣age⁡, ⁡⁢⁣⁣surname⁡ /
}

// ​‌‍‌⁡⁣⁣⁢Неконфигурируемое свойство / // 
// ⁡⁢⁣⁣Неконфигурируемое свойство⁡ (non-configurable property) - это свойство объекта, 
// которое ⁡⁢⁣⁢не может быть⁡ ⁡⁢⁣⁣удалено и его атрибуты⁡, такие как ⁡⁣⁣⁢writable⁡ и ⁡⁣⁣⁢enumerable⁡, не могут быть изменены ⁡⁢⁣⁣после его создания⁡.
// И мы ничего не сможем сделать со свойством объекта⁡⁣⁣⁢ перезаписать⁡ или ⁡⁣⁣⁢удалит⁡ь, если было установленно значение ⁡⁢⁢⁢configurable⁡: ⁡⁣⁢⁣false⁡,
// и так же само ⁡⁢⁣⁣configurable⁡ мы уже ⁡⁢⁣⁢не сможем изменить⁡ на значение ⁡⁣⁢⁣true⁡ . 
const person = {
  name: "Arina",
  surname: "Hmelnickaya",
  age: 2
}

Object.defineProperty(person, "age", {
  configurable: false,
})

delete person.age;
console.log('non-configurable propery', person.age); //2

Object.defineProperty(person, "age", { // вызовет⁡⁢⁣⁢ ошибку⁡, так как ⁡⁢⁣⁣configurable⁡ изначально было нами записано как ⁡⁣⁢⁣false ⁡/
  configurable: true,
  value: 3
})
console.log('non-configurable propery', person)