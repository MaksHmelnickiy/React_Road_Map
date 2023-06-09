// Функция может возвращать значение ⁡⁢⁣⁣определенного типа⁡, который еще называется ⁡⁢⁣⁣типом функции⁡. Возвращаемый тип функции ставится после списка параметров ⁡⁣⁣⁢через двоеточие⁡: 

let func = (a: number, b: number):number => a + b;// В данном случае функция будет ⁡⁢⁣⁣возвращать⁡ значение типа ⁡⁢⁣⁣number⁡.
console.log(func(3,5)) // 8


// Если функция ⁡⁣⁣⁢ничего не возвращает⁡, то указывается тип ⁡⁢⁣⁣void⁡:
let func2 = (a:number, b: number):void => console.log(a + b);
func2(10,20) // 30

// В принципе мы можем и ⁡⁣⁣⁢не указывать тип⁡, тогда он будет выводиться ⁡⁢⁣⁣неявно⁡ ⁡⁣⁣⁢на основе возвращаемого значения⁡:
let func3 = (a: number, b: number) => a + b
func3(10, 30) // 40