//  ⁡⁢⁣⁣Стрелочные функции⁡ позволяют заменить анонимные функции в виде более короткого написания.

let arr = [1,2,3,4,5,6];

let res0 = arr.map((a) => {
    return a**2
})
console.log(res0)

// Сокращенный синтаксис 
// Есои одна строка убрать {} return , если две и более то нужно применять ()
// Если один аргумент то убрать ()

let res = arr.map(a => a**2)  // результат
console.log(res)


// стрелочная функция ⁡⁢⁣⁣не имеет свойства ⁡⁢⁣⁢this⁡⁡ в отличии от обычной функции, она будет возвращать window лезя в глобальную область видимости