// для того что бы один объект мог ⁡⁣⁣⁢взять методы другого объекта ⁡
// существуют методы ⁡⁢⁣⁣call(), apply() и bind()⁡ для привязки функции к объекту и ее вызова, 
// как если бы она принадлежала этому объекту.

// При использовании функций ⁡⁢⁣⁣call⁡ и ⁡⁢⁣⁣apply⁡ можно задать значение ⁡⁢⁣⁡⁣⁢⁣this⁡⁡ напрямую, передав его первым параметром.
// Вызов ⁡⁢⁣⁣func.call(context, a, b...)⁡ – то же, что обычный вызов ⁡⁣⁣⁢func(a, b...)⁡, но с явно указанным ⁡⁢⁣⁣this(=context)⁡.

function getPrice(currency = '$', cur = 2) { // функция  принимает в себее параметры currency , cur 
    console.log('getPrice', currency + this.price + cur)
    
}

const prod2 = {
    name: 'Amd',
    price: 50,
}

getPrice.call(prod2, '*', 3) // ⁡⁣⁢⁣getPrice *503⁡ // здесь мы задали контекст в котором хотим вызвать функцию getPrice 
// первый параметр это наш объект
// второй и третий - это параметр функции на строке (3) которым мы можем менять значения 
getPrice.apply(prod2, ['/']) // getPrice /502
// Вызов функции при помощи ⁡⁢⁣⁣func.apply⁡ работает аналогично ⁡⁣⁣⁢func.call⁡, но принимает ⁡⁣⁣⁢массив⁡ аргументов вместо списка.
let test = 'test'
function set() {
    console.log('x', this)
}
set(test)

// Ключевое слово ​‌‍‌⁡⁢⁣⁣this⁡​ оно всегда динамичное, оно указывает на тот объект в контексте которого оно было вызвано.

// Основное ⁡⁢⁣⁢отличие⁡ между ⁡⁢⁣⁣bind⁡ и ⁡⁢⁣⁣call,apply ⁡
// Это то что ⁡⁢⁣⁣bind⁡ нужно вызывать с помощью ⁡⁣⁣⁢() и его можно отложить⁡, а ⁡⁢⁣⁣call & apply⁡ вызываются мгновенно/
// ⁡⁢⁣⁣bind, ⁡⁡ должен возвращать ⁡⁣⁣⁢новую функцию⁡: function name() { ⁡⁣⁢⁣return function(){} ⁡} /
function getName () {
    console.log(this.name)
}
const user = {
    name: 'Maks'
}
getName.apply(user) // Maks
getName.bind(user)() // Maks, но добавляется в конце ⁡⁢⁣⁢()⁡ /

// Работа call,apply,bind с параметрами / 

function getData(name, email, phone){
    console.log(`${this.name}, tel: ${this.phone}, email: ${this.email}` + Array.prototype)
}
let data = {
    name: 'Stepan'
}
getData.call(data, '3809711...', 'te@gmail.com') // Stepan, tel: undefined, email: undefined


