// ⁡⁢⁣⁣Map⁡ – это коллекция ключ/значение, как и Object. Но основное отличие в том, 
// что ⁡⁢⁣⁣Map⁡ позволяет использовать ключи любого типа.

// ⁡⁣⁣⁢Методы и свойства:⁡

// ⁡⁢⁣⁣new Map()⁡ – создаёт коллекцию.
// ⁡⁢⁣⁣map.set(key, value)⁡ – записывает по ключу key значение value.
// ⁡⁢⁣⁣map.get(key)⁡ – возвращает значение по ключу или undefined, если ключ key отсутствует.
// ⁡⁢⁣⁣map.has(key)⁡ – возвращает true, если ключ key присутствует в коллекции, иначе false.
// ⁡⁢⁣⁣map.delete(key)⁡ – удаляет элемент по ключу key.
// ⁡⁢⁣⁣map.clear()⁡ – очищает коллекцию от всех элементов.
// ⁡⁢⁣⁣map.size⁡ – возвращает текущее количество элементов.

let map = new Map();

map.set("1", "str1");    // ⁡⁢⁣⁢строка⁡ в качестве ключа
map.set(1, "num1");      // ⁡⁢⁣⁢цифра⁡ как ключ
map.set(true, "bool1");  // ⁡⁢⁣⁢булево значение⁡ как ключ

// помните, обычный объект ⁡⁢⁣⁣Object⁡ приводит ключи к строкам?
// ⁡⁢⁣⁣Map⁡ сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:
console.log('full map: ', map)
console.log(map.get(1)); // "num1"
console.log(map.get("1")); // "str1"
console.log(map.has("1"));
console.log(map.size); // 3 

// ⁡⁣⁣⁢И͟с͟п͟о͟л͟ь͟з͟о͟в͟а͟н͟и͟е о͟б͟ъ͟е͟к͟т͟о͟в ͟в к͟а͟ч͟е͟с͟т͟в͟е к͟л͟ю͟ч͟е͟й⁡ – одна из наиболее заметных и важных функций ⁡⁢⁣⁣Map⁡. 
// Это то что ⁡⁣⁢⁣невозможно⁡ для ⁡⁢⁣⁣Object⁡.

// ⁡⁢⁣⁣NaN⁡ считается ⁡⁣⁢⁣равным⁡ ⁡⁢⁣⁣NaN⁡. Так что ⁡⁢⁣⁣NaN⁡ также может ⁡⁣⁣⁢использоваться в качестве ключа⁡.
let objKey = 'key'
let a ={
    objKey: 'maks'
}
console.log(a) // objKey: 'maks' // Вернет свой ключ а не внешний

let mapObj = new Map();
mapObj.set(objKey, 'set')
console.log(mapObj) // 'key' => 'set' вернет внешний ключ