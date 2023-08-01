//Первое его ⁡⁣⁣⁢отличие от Map⁡ в том, что ключи в ⁡⁢⁣⁣WeakMap⁡ должны ⁡⁢⁣⁣быть объектами⁡, а не примитивными значениями:
//В основном,⁡⁢⁣⁣ WeakMap⁡ используется в качестве ⁡⁣⁣⁢дополнительного хранилища данных⁡.
// ⁡⁢⁣⁣WeakMap⁡ и ⁡⁢⁣⁣WeakSet⁡ ⁡⁣⁢⁡⁢⁣⁢самоочищаються⁡⁡ например после выполнения функции куда добавили новые значения для WeakMap и WeakSet

// Теперь, если мы ⁡⁣⁣⁢используем объект в качестве ключа⁡ и если больше нет ссылок на этот объект, 
// то он будет удалён из памяти (⁡⁣⁣⁢и из объекта⁡ ⁡⁢⁣⁣WeakMap⁡) автоматически.
let john = { name: "John" };
let weakMapSl = new WeakMap();
weakMapSl.set(john, "...");

john = null; // ⁡⁢⁣⁢перезаписываем⁡ ссылку на объект
// объект ⁡⁣⁣⁢john⁡ ⁡⁢⁣⁢удалён ⁡⁢⁢⁢из памяти⁡⁡!
console.log('WeekMap: ',weakMapSl)

// ⁡⁢⁣⁣WeakMap⁡ ⁡⁣⁣⁢не поддерживает перебор типа ⁡⁢⁣⁣for...of⁡ ⁡⁣⁣⁢и методы⁡ ⁡⁢⁣⁣keys(), values(), entries()⁡,⁡ 
// так что нет способа взять все ключи или значения из неё.

let newWeakMap = new WeakMap(); // ⁡⁣⁢⁣Создаем⁡ ⁡⁢⁢⁢WeakMap⁡ /
let a = {serg: 'min'}
let b = {andr: 'yes'}
newWeakMap.set(a, 'test')       // ⁡⁣⁢⁣Добавляем⁡ ⁡⁢⁢⁢Объект⁡ /
newWeakMap.set(b, 'fast')       // ⁡⁣⁢⁣Добавляем⁡ ⁡⁢⁢⁢Объект⁡ /
console.log(newWeakMap.get(b))  // ⁡⁣⁢⁣Получаем⁡ ⁡⁢⁢⁢Объект по ключу⁡ /

// В ⁡⁢⁣⁣WeakMap⁡ присутствуют только ⁡⁣⁣⁢следующие методы⁡:

// ⁡⁢⁣⁣weakMap.get(key)⁡ /
// ⁡⁢⁣⁣weakMap.set(key, value)⁡ /
// ⁡⁢⁣⁣weakMap.delete(key)⁡ /
// ⁡⁢⁣⁣weakMap.has(key)⁡ /

// ​‌‍‌⁡⁣⁣⁢Применение для кеширования​⁡. Если мы будем использовать ⁡⁢⁣⁣WeakMap⁡ вместо ⁡⁣⁣⁢Map⁡, то 
// закешированные результаты будут ⁡⁢⁣⁢автоматически удалены⁡ из памяти сборщиком мусора.
// Нет информации, в какой момент произойдёт эта ⁡⁢⁣⁢очистка, ⁡⁢⁣⁣движок Javascript⁡ сам решает когда нужно ⁡⁢⁣⁢очиститься⁡⁡.


// ⁡⁢⁣​‌‍‌⁡⁢⁣⁣WeakMap⁡​⁡ и ​‌‍‌⁡⁢⁣⁣WeakSet⁡​ используются как вспомогательные структуры данных ⁡⁣⁣⁢в дополнение к «основному» месту хранения объекта⁡. 
// Если объект ⁡⁣⁢⁣удаляется из основного хранилища⁡ ⁡⁣⁢⁣и нигде не используется⁡, кроме как в качестве ⁡⁢⁣⁣ключа⁡ в WeakMap или в WeakSet, 
// то он будет ⁡⁣⁣⁢удалён автоматически⁡.