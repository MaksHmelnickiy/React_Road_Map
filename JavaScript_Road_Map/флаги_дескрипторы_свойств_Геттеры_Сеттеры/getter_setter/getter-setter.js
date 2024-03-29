// Есть ⁡⁣⁣⁢два типа свойств объекта⁡.

// ⁡⁣⁢⁣Первый тип⁡ это свойства-данные (⁡⁢⁣⁣data properties⁡) где идут ⁡⁣⁣⁢флаги и дескрипторы⁡. Мы уже знаем, как работать с ними. Все свойства, 
// которые мы использовали до текущего момента, были свойствами-данными.

// ⁡⁣⁢⁣Второй тип⁡ свойств мы ещё не рассматривали. Это свойства-аксессоры (⁡⁢⁣⁣accessor properties⁡). По своей сути это ⁡⁣⁣⁢функции⁡, 
// которые используются для ⁡⁣⁣⁢присвоения⁡ и ⁡⁣⁣⁢получения значения⁡, но во внешнем коде они выглядят как обычные свойства объекта.

// ⁡⁢⁣⁣Свойства-аксессоры⁡ представлены ⁡⁣⁣⁢методами⁡: «⁡⁢⁣⁣геттер⁡» – для чтения и «⁡⁢⁣⁣сеттер⁡» – для записи. 
// При литеральном объявлении объекта они обозначаются ⁡⁢⁣⁣get⁡ и ⁡⁢⁣⁣set⁡:

const user = {
  name: 'Maks',
  surname: 'Hmel',

  get fullName () { // ⁡⁢⁣⁣геттер⁡, срабатывает при чтении ⁡⁣⁣⁢obj.propName⁡ /
    return `${this.name} ${this.surname}`
  },

  set fullName(value) { // ⁡⁢⁣⁣сеттер⁡, срабатывает при ⁡⁢⁣⁣записи⁡ ⁡⁢⁣⁣obj.propName = value⁡ /
    return [this.name, this.surname] = value.split(' ')
  },

  // функция ⁡⁢⁣⁣get fullName⁡ и ⁡⁢⁣⁣fullName2⁡ будут выводить ⁡⁣⁣⁢один и тот же результат⁡ в консоле ниже за исключение что ⁡⁢⁣⁣fullName2()⁡ нужно вызывать ⁡⁢⁣⁣()⁡ /
  fullName2() {
    return `${this.name} ${this.surname}`
  }

}

console.log(user.fullName) // Maks Hmel
console.log(user.fullName2()) // Maks Hmel

// Давайте зададим ⁡⁢⁣⁣новое значение для ⁡⁣⁣⁢fullName⁡⁡ , мы можем так как у нас стоит внутри функция сеттер ⁡⁢⁣⁣set fullName(⁡)/
user.fullName = 'Arina Hmelnickaya'; // Значение в объекте так же ⁡⁣⁣⁢меняется для ключей⁡ ⁡⁢⁣⁣name⁡ и ⁡⁢⁣⁣surname⁡ ;
console.log(user.fullName) // Arina Hmelnickaya
console.log(Object.getOwnPropertyDescriptor(user, 'fullName'))

// ​‌‍‌⁡⁣⁣⁢Основные сферы применения ⁡​геттеров и сеттеров:

// ⁡⁢⁣⁣Инкапсуляция данных⁡: Геттеры и сеттеры позволяют скрыть сложность внутренней реализации объекта и предоставить упрощенный интерфейс 
// для взаимодействия с данными. Например, вы можете использовать геттер для получения значения, скрытого внутри объекта, 
// и сеттер для изменения этого значения, при этом скрывая детали реализации.

// ⁡⁢⁣⁣Валидация данных⁡: С помощью сеттеров можно проверять и валидировать данные перед их установкой в объекте. 
// Например, вы можете убедиться, что число, переданное в сеттер, находится в определенном диапазоне, и, если нет, 
// выполнить какие-то дополнительные действия.

// ⁡⁢⁣⁣Вычисляемые свойства⁡: Геттеры позволяют создавать вычисляемые свойства, которые не хранятся явно, 
// а вычисляются на лету при обращении. Это может быть полезно, например, для вычисления значения на основе других свойств объекта.

// ⁡⁢⁣⁣Логирование и отладка⁡: Геттеры и сеттеры могут использоваться для записи логов или отладочной информации при доступе к свойствам. 
// Это помогает отслеживать, когда и какие данные читаются или записываются.

// ⁡⁢⁣⁣Инкапсуляция интерфейса⁡: Геттеры и сеттеры могут быть использованы для создания более чистого и понятного интерфейса объекта, 
// скрывая сложные детали реализации и предоставляя только необходимые методы и свойства.

