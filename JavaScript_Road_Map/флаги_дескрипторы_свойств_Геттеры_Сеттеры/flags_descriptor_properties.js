// ⁡⁢⁣⁣Флаги и дескрипторы свойств⁡ - это концепции, ⁡⁣⁣⁢связанные с объектами⁡ JavaScript, которые позволяют ⁡⁣⁣⁢управлять поведением⁡
// ⁡⁣⁣⁢и атрибутами свойств объекта⁡. Они используются для определения, все это еще называется ⁡⁢⁣⁣data properties⁡
// какие операции могут быть выполнены с данным свойством, а также как оно будет видимо и доступно в коде.

// ⁡⁢⁣⁣Флаги свойств⁡ представляют собой битовые маски, которые ⁡⁣⁣⁢определяют⁡ различные ⁡⁣⁣⁢атрибуты свойства объекта⁡. 
// Каждое свойство имеет набор флагов, которые управляют его поведением. Основные флаги включают:

// ⁡⁢⁣⁣writable⁡: Определяет, может ли быть свойство изменено путем присваивания (true или false).
// ⁡⁢⁣⁣enumerable⁡: Определяет, будет ли свойство перечисляемым в циклах (true или false).
// ⁡⁢⁣⁣configurable⁡: Определяет, может ли быть изменен тип свойства и его флаги (true или false).

// ​‌‍‌⁡⁣⁣⁢Метод⁡​ ⁡⁢⁣⁣Object.getOwnPropertyDescriptor(⁡⁣⁢⁡⁣⁢⁣obj⁡, ⁡⁣⁢⁣propertyName⁡⁢⁣⁣)⁡⁡ позволяет получить полную информацию о свойстве. Где ⁡⁣⁣⁢obj⁡ - это сам объект, 
// а ⁡⁣⁣⁢properyName⁡ - это ключ .
// а ⁡⁣⁣⁢метод⁡ ⁡⁢⁣⁣Object.getOwnPropertyDescriptors(⁡⁣⁢⁣obj⁡⁢⁣⁣) ⁡⁢⁢⁢получает информацию о всех свойствах объекта где указывается только⁡ ⁡⁣⁣⁢obj⁡ - имя объекта⁡

const user = {
  name: 'Max'
}
const descriptor = Object.getOwnPropertyDescriptor(user, 'name')

console.log(descriptor) // Result {⁡⁢⁢⁢configurable⁡: ⁡⁣⁢⁣true⁡, ⁡⁢⁢⁢enumerable⁡: ⁡⁣⁢⁣true⁡, ⁡⁢⁢⁢value⁡: ⁡⁣⁢⁣"Max"⁡, ⁡⁢⁢⁢writable⁡: ⁡⁣⁢⁣true⁡}

// Чтобы изменить флаги, есть метод ⁡⁢⁣⁣Object.defineProperty(⁡⁣⁢⁣obj⁡⁡, ⁡⁣⁢⁣propertyName, ⁡⁣⁢⁣descriptor⁡⁡⁢⁣⁣)⁡. Где ⁡⁣⁣⁢obj⁡ - это сам объект, 
// ⁡⁣⁣⁢properyName⁡⁡ - это ключ, ⁡⁣⁣⁢descriptor⁡ - новые значения (⁡⁢⁢⁢value⁡⁡: ⁡⁣⁢⁣"Serg"⁡) где можно так же указать⁡⁢⁣⁣ writable, enumerable, configurable⁡.

const definePropertyDescriptor = 
  Object.defineProperty(user, 'name', {value: "Serg", writable: false, enumerable: false,  configurable: true});

console.log(Object.getOwnPropertyDescriptor(user, 'name')) // Result {⁡⁢⁢⁢value⁡: ⁡⁣⁢⁣'Serg'⁡, ⁡⁢⁢⁢writable⁡: ⁡⁣⁢⁣false⁡, ⁡⁢⁢⁢enumerable⁡: ⁡⁣⁢⁣false⁡, ⁡⁢⁢⁢configurable⁡: ⁡⁣⁢⁣true⁡}

// Если мы захотим перезаписать значение ⁡⁢⁣⁣name⁡ в ⁡⁣⁣⁢переменной definePropertyDescriptor⁡ - ничего ⁡⁢⁣⁢не получится⁡ так как значение ⁡⁢⁢⁢writable⁡: ​‌‍‌⁡⁣⁢⁣false⁡​ /
// пример ниже /

definePropertyDescriptor.name = "Jane" // ⁡⁢⁣⁢ошибка⁡ , и ничего не перезапишет. если только не ⁡⁣⁣⁢обновить флаг ⁡⁢⁣⁣writable⁡⁡ новым вызовом⁡⁢⁣⁣ ⁡⁢⁣⁣defineProperty⁡⁡. 
console.log(definePropertyDescriptor.name)

// ⁡⁢⁣⁢Ошибки⁡ появляются только в ⁡⁢⁣⁣строгом режиме⁡
// В нестрогом режиме, ⁡⁢⁣⁢без⁡ ⁡⁢⁣⁣use strict⁡, мы не увидим никаких ошибок при записи в свойства
// Но эти операции всё равно ⁡⁣⁣⁡⁢⁣⁢не будут⁡ ⁡⁣⁣⁢выполнены успешно⁡⁡. 
// Действия, нарушающие ограничения флагов, в нестрогом режиме просто молча ⁡⁢⁣⁣игнорируются⁡.