// ⁡⁢⁣⁣this⁡ — это текущий ⁡⁣⁣⁢контекст исполнения функции⁡. Поскольку функцию можно вызвать четырьмя способами:

// Потеря контекста происходит в цепочке вызовов (prod1.getPrice.getName) что бы этого избежать нужно в тело функции добавить (return this) строка (17), (21)

// ********* 4 метода вызова функции **********
// * вызов функции: alert('Hello World!'),
// * вызов метода: console.log('Hello World!'),
// * вызов конструктора: new RegExp('\\d'),
// * непрямой вызов: alert.call(undefined, 'Hello World!'),
// и каждый из них определяет свой контекст, поведение this слегка не соответствует ожиданиям начинающих разработчиков. Кроме того, strict mode также влияет на контекст исполнения.
// strict mode (строгий режим) и семантика отличается от обычного режима который называют грязным - sloppy mode

function getThis () {
    console.log('this', this)
}
getThis() // в данном случае оно будет ссылаться на область видимости в Window

function getPrice() {
    console.log('getPrice', this.price); return this
}
function getName() {
    console.log('getName', this.price); return this
}

const prod1 = {
    name: 'Maks',
    price: 100,
    // getPrice: function() {
    //     console.log('getPrice', this.price)   //  Это вариант функции внутри области prod1
    // },
    getPrice,  // Когда мы вынесли функцию (строка 16) мы можем её записать так, и результат будет тот же что и на строчку выше (26). 
               // Таким образом мы можем использовать одну функцию во многих объектах
    getName,
    info: {
        information: ['2.3ggs'],
        getInfo: function() {
            console.log(this)
        }
    }
}
prod1.getName().getPrice() // цепочка вызовов где в тело функции нужно добавить return this иначе будет потеря контекста
prod1.getPrice() // Область видимости будет prod1

prod1.info.getInfo() // Область видимости будет info

// итого где была объявленна функция будет меняться наш this 

const prod2 = {
    name: 'Amd',
    price: 50,
}

prod2.getName = prod1.getName // Эта запись позволяет нам взять функцию которой нету в prod2  из prod1 (31) getName

prod2.getName()   // Здесь мы уже вызываем функцию которую добавили на строке (51) и результат будет 'Amd' (47)
