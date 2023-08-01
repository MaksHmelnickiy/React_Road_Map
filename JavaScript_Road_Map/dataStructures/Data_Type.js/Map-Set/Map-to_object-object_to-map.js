// Если у нас уже есть ⁡⁣⁢⁣обычный объект⁡, и мы хотели бы создать ⁡⁢⁣⁣Map⁡ из него, то поможет встроенный метод ⁡⁢⁣⁣Object.entries(obj)⁡⁡, 
// который получает объект и ⁡⁣⁣⁢возвращает массив пар ключ-значение⁡ для него, как раз в этом формате.

// массив пар ⁡⁢⁣⁣[͟к͟л͟ю͟ч, з͟н͟а͟ч͟е͟н͟и͟е͟]⁡ /
// ⁡⁢⁣⁣Object⁡ превращаем в ⁡⁢⁣⁣Map⁡. /
let map = new Map([
    ['1',  'str1'],
    [1,    'num1'],
    [true, 'bool1']
  ]);

let mapToObj2 = Object.fromEntries(map.entries())
console.log(mapToObj2) // ⁡⁣⁢⁣1: 'num1', true: 'bool1'⁡ ; ⁡⁢⁣⁢Удалит⁡ первый элемент массива ⁡⁣⁣⁢'1',  'str1'⁡ / /

let obje = {
    name: "John",
    age: 30
};

let toMap = new Map(Object.entries(obje));  // ⁡⁢⁣⁣Object⁡ превращаем в ⁡⁢⁣⁣Map⁡. Будет так ⁡⁢⁣⁢[ ["name","John"], ["age", 30] ]⁡ /

console.log('toMap',toMap)

// Есть метод ⁡⁢⁣⁣Object.fromEntries⁡, который делает противоположное: 
// получив массив пар вида ⁡⁣⁣⁢[ключ, значение]⁡, он создаёт из них ⁡⁢⁣⁣объект⁡:

// ⁡⁢⁣⁣Map⁡ превращаем в ⁡⁢⁣⁣Object⁡.

let toObject = Object.fromEntries(toMap.entries()) // ⁡⁢⁣⁣Map⁡ превращаем в ⁡⁢⁣⁣Object⁡. Будет так ⁡⁢⁣⁢{banana: 1, orange: 2, meat: 4}⁡/
console.log('toObject', toObject)

let maptoObj = new Map();
maptoObj.set('banana', 1);
maptoObj.set('orange', 2);
maptoObj.set('meat', 4);

let toObj = Object.fromEntries(maptoObj.entries()); // ⁡⁢⁣⁣Map⁡ превращаем в Object. Будет так ⁡⁢⁣⁢{banana: 1, orange: 2, meat: 4}⁡/

// готово!
// obj = { banana: 1, orange: 2, meat: 4 }

console.log(toObj); // 2
