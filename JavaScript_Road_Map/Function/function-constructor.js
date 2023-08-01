// ⁡⁢⁣⁣функцию-конструктор⁡ можно создать с помощью оператора ⁡⁢⁣⁣"new"⁡ .

// ⁡⁢⁣⁣Функции-конструкторы⁡ являются обычными функциями. Но есть ⁡⁣⁣⁢два соглашения⁡:

// ⁡⁣⁢⁣Имя⁡ функции-конструктора должно начинаться с ⁡⁣⁣⁢большой буквы⁡.
// ⁡⁢⁣⁣Функция-конструктор⁡ должна вызываться при помощи оператора "new".


// мы можем ⁡⁣⁢⁣не ставить скобки после⁡ ⁡⁢⁣⁣new⁡, если вызов конструктора идёт ⁡⁣⁣⁢без аргументов⁡.
// >>>> ⁡⁢⁣⁢let user = new User⁡; // <-- без скобок
// >>>> ⁡⁣⁣⁢то же, что и⁡ /
// >>>> ⁡⁢⁣⁢let user = new User()⁡;

console.log('Задача №1')
//Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

function Calc() {
    this.num = 0;
    this.num2 = 0;
    this.sum = function(){
        return Number(this.num) + Number(this.num2)
    };
    this.mul = function(){
        return Number(this.num) * Number(this.num2)
    };
    this.read = function(){
        this.num = prompt('First num', '')
        this.num2 = prompt('Second num', '')
    };
}
let calc = new Calc()
calc.read()
console.log(calc.sum())
console.log(calc.mul())


console.log('Задача №2')
//Напишите функцию-конструктор Accumulator(startingValue)

function Accum(value){
    this.val = value
    this.read = function(){
       let a = prompt()
       let b = Number(a)
       return this.val += b
    }
}
let accum = new Accum(1)
accum.read()
accum.read()
console.log(accum.val)