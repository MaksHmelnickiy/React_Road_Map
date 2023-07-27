// В TypeScript можно определить ⁡⁢⁣⁣тип функции⁡, используя следующий ⁡⁣⁣⁢синтаксис⁡:

let typeFunc = (a: string, b: number):string => `${a} + ${b}`; // Здесь функция ⁡⁢⁣⁣typeFunc⁡ принимает два аргумента ⁡⁣⁣⁢типа number⁡ и ⁡⁣⁣⁢string⁡ возвращает значение типа ⁡⁢⁣⁣string⁡⁡.
console.log(typeFunc('2',3))

// Либо мы можем опредить ⁡⁢⁣⁣функцию как переменную⁡ и затем через переменной вызывать данную функцию:
let typeFunc2 = function (a: number, b: number):number { // Здесь функция ⁡⁢⁣⁣typeFunc2⁡ принимает два аргумента ⁡⁣⁣⁢типа number⁡ и возвращает значение типа ⁡⁢⁣⁣number⁡.
    return a + b;
}
console.log(typeFunc2(3,4))
