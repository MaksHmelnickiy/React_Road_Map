//------------------ ‍⁡⁣⁣⁡⁣⁣⁢​‌‍‌Set and Map​⁡⁡​ -----------------

// ⁡⁣⁣⁢Task N1⁡ /
// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

function uniq(arr){
    let a = new Set();
    for(item of arr){
        a.add(item)
    };
    return Array.from(a)
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log('Task N1', uniq(values))


// ⁡⁣⁣⁢Task N2⁡ /
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// ​‌‍‌⁡⁣⁢⁣Вариант решения ⁡⁣⁣⁢N1⁡​:
function clear(arr){
    let a = new Set();
    let b = []
    for(item of arr){
        let c = item.toLowerCase().split('').sort().join('')
        if(!b.includes(c)){
            b.push(c)
            a.add(item)
        }
    }
    return Array.from(a);
}
console.log('Task N2: variant 2: ', clear(arr))

// ​‌‍‌⁡⁣⁢⁣Вариант решения ⁡⁣⁣⁢N2⁡​:
function clearSecond(arr){
    let a = new Map();
    for(item of arr){
        let c = item.toLowerCase().split('').sort().join('')
        a.set(c, item)
    }
    return Array.from(a.values());
}
console.log('Task N2: variant 1: ', clearSecond(arr))

// ⁡⁣⁣⁢Task N3⁡ /
// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.
let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");

console.log('Task N3:', keys);

//-------------------​‌‌‍⁡⁣⁣⁢ weakSet and weakMap⁡​ ------------------
// ⁡⁣⁣⁢Task N4⁡ /
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

let weakSet = new WeakSet()
weakSet.add(messages[0]);
weakSet.add(messages[0]);
weakSet.add(messages[1]);
console.log('Task N4: ', `Прочитали ли собщение? ${weakSet.has(messages[0])}`)
messages.splice(0,1);
console.log('Task N4: ', weakSet) // Будет содержать ⁡⁣⁣⁢один элемент⁡ и ⁡⁢⁣⁢удалиться⁡ когда посчитает нужным ⁡⁢⁣⁣движок JS⁡ /

// ⁡⁣⁣⁢Task N⁡⁣⁣⁢5⁡⁡ /
let messages2 = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];
let weakMap = new WeakMap();
weakMap.set(messages2[2], Date.now())
messages2.pop(); // delete messages[2]
console.log('Task N5:', weakMap)

