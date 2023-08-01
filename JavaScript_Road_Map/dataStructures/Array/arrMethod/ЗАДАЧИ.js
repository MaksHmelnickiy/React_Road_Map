// ⁡⁣⁣⁢ЗАДАЧИ⁡ //

// ⁡⁣⁣⁢Task⁡ ⁡⁣⁣⁢N1⁡⁡ /
// Напишите функцию ⁡⁣⁢⁣camelize(str)⁡⁡, которая преобразует строки вида «⁡⁣⁣⁢my-short-string⁡» в «⁡⁣⁣⁢myShortString⁡».
// ⁡⁢⁢⁢Методы в задаче:⁡⁡ ⁡⁢⁣⁢split , map , join⁡⁡ /
function camelize(str) {
    let a = str.split('-')
    let b = a.map(function(item, index){
        if(index > 0){
            return item[0].toUpperCase() + item.slice(1) // Делаем первую букву ⁡⁣⁣⁢заглавной⁡, 
                                            // и добавляем остальную часть слова через ⁡⁢⁣⁣slice(1)⁡ где ⁡⁣⁢⁣1⁡ это индекс старта.
        }
        return item
    })
  return b.join('')
}
console.log('Task N1: ', camelize('list-style-type'))

// ⁡⁣⁣⁢Task N2⁡ /
// ⁡⁢⁢⁢Методы в задаче:⁡⁡ ⁡⁢⁣⁢filter , find , push⁡⁡ /
// Напишите функцию ⁡⁣⁢⁡⁣⁢⁣filterRange(arr, a, b)⁡⁡, которая принимает массив arr, 
// ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
// Функция должна возвращать новый массив и не изменять исходный.
let array = [14,6,11,22,5]
function filter(a,b, arr) {
    let c = arr.find(item => item >=a);
    let d = arr.find(item => item <= b);
    let newArr = [];
    newArr.push(c,d)
    return newArr
}
console.log(filter(15, 12, array))

// ⁡⁣⁣⁢Task N3⁡ /
// ⁡⁢⁢⁢Методы в задаче:⁡ ⁡⁢⁣⁢splice⁡ /
// Напишите функцию ⁡⁣⁢⁣filterRange(arr, a, b)⁡, которая принимает массив arr, 
// ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
// Функция должна возвращать новый массив и не изменять исходный.
let arrRange = [5,3,8,1];

function filterRange(arr,a,b){
    for(let i = 0; i < arr.length; i++){

        if(arr[i] < a || arr[i] > b){
            arr.splice(i,1)
        }
    }
}
filterRange(arrRange,1,4)
console.log('Task 3', arrRange)


// ⁡⁣⁣⁢Task N4⁡ /
// ⁡⁢⁢⁢Методы в задаче:⁡ ⁡⁢⁣⁢sort⁡ /
// Сортировать в порядке по убыванию
let arrDimination = [3,11,4,-11,15];

arrDimination.sort(function(a,b){
    console.log(a + '===' + b)
    return b-a;
});
console.log('Task N4', arrDimination)


// ⁡⁣⁣⁢Task N5⁡ /
// ⁡⁢⁢⁢Методы в задаче:⁡ ⁡⁢⁣⁢slice , sort⁡ /
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию ⁡⁣⁢⁣copySorted(arr)⁡, которая будет возвращать такую копию.

let arrSort = ["HTML", "JavaScript", "CSS"];
function arrSortFunc(arr){
   return arr.slice().sort()
}
let sorted = arrSortFunc(arrSort)

console.log('Task N5', arrSort)


// ⁡⁣⁣⁢Task N6 ⁡/
// ⁡⁢⁢⁢Методы в задаче:⁡ ⁡⁢⁣⁢split⁡ / 
// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

function Calculator(){
    this.calculate = function(str){
        this.a = String(str).split(" ");
        console.log(this.a);
        if(this.a[1] == '+'){
            return Number(this.a[0]) + Number(this.a[2]);
        }
        else if(this.a[1] == '-' ){
            return Number(this.a[0]) - Number(this.a[2]);
        }
        return 'Не верный ввод:'
    }
}

let calc = new Calculator();
console.log('Task N6: ', calc.calculate('3 - 2'));

// ⁡⁣⁣⁢Task N7⁡ /
// ⁡⁢⁢⁢Методы в задаче:⁡ ⁡⁢⁣⁢map⁡ /
// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];
let names = users.map(item => item.name)
console.log('Task N7', names)

// ⁡⁣⁣⁢Task N8⁡ /
// ⁡⁢⁢⁢Методы в задачае:⁡ ⁡⁢⁣⁢map⁡⁡ /
// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, 
// где fullName – состоит из name и surname.

let vasya2 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya2 = { name: "Петя", surname: "Иванов", id: 2 };
let masha2 = { name: "Маша", surname: "Петрова", id: 3 };

let users2 = [ vasya2, petya2, masha2 ];

let usersMapped = users2.map(function(item, i){
    let a = {
        fullName: item.name + ' ' + item.surname, 
        id: item.id,
    }
    console.log('Task N8: ' , a)
    return a
})
console.log('Task N8: ' , usersMapped[0].fullName);

// ⁡⁣⁣⁢Task N9⁡ /
// ⁡⁢⁢⁢Методы в задаче:⁡ ⁡⁢⁣⁢sort ⁡/
// Напишите функцию ⁡⁢⁣⁣sortByAge(users)⁡⁡, которая принимает массив объектов со свойством age и сортирует их по нему.
let vasya3 = { name: "Вася", age: 25 };
let petya3 = { name: "Петя", age: 30 };
let masha3 = { name: "Маша", age: 28 };

let arrAge = [ vasya3, petya3, masha3 ];
function sortByAge (arr){
    return arr.sort((item, prev) => item.age - prev.age )
}
sortByAge(arrAge)
console.log('Task N9: ', arrAge);

// ⁡⁣⁣⁢Task N10⁡ /
// ⁡⁢⁢⁢Методы в задаче:⁡ ⁡⁢⁣⁢sort⁡ /
// Напишите функцию ⁡⁢⁣⁣shuffle(array)⁡, которая перемешивает (переупорядочивает случайным образом) элементы массива.

let arrShuffle = [2,3,4,5];
function shuffle(arr){
    return arr.sort((a,b) => a - (Math.random() * 10).toFixed(0))
}
shuffle(arrShuffle)
console.log('Task N10: ' ,arrShuffle)

// ⁡⁣⁣⁢Task N11⁡ /
// ⁡⁢⁢⁢Методы в задаче:⁡ ⁡⁢⁣⁢forEach⁡ /
// Напишите функцию ⁡⁢⁣⁣getAverageAge(users)⁡⁡, которая принимает массив объектов со свойством age и возвращает средний возраст.
let vasya4 = { name: "Вася", age: 25 };
let petya4 = { name: "Петя", age: 30 };
let masha4 = { name: "Маша", age: 29 };

let arrAverage = [ vasya4, petya4, masha4 ];

function getAverageAge(arr){
    let a = 0
    arr.forEach(element => {
        a += element.age
    })
    return a / arr.length
}
console.log('Task N11: ',getAverageAge(arrAverage))

// ⁡⁣⁣⁢Task N12⁡ /
// ⁡⁢⁢⁢Методы в задаче:⁡ ⁡⁢⁣⁢for...of, ⁡⁢⁣⁢includes⁡⁡ /
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

function uni(arr){
    let a = []
    for(let item of arr){
        if(!a.includes(item)){
            a.push(item);
        }
    }
    return a
}
console.log('Task N12: ',uni(strings))

// ⁡⁣⁣⁢Task N13⁡ /
// ⁡⁢⁢⁢Методы в задаче:⁡ ⁡⁢⁣⁢reduce⁡ /
// Создайте функцию ⁡⁢⁣⁣groupById(arr)⁡, которая создаст из него объект с id 
// в качестве ключа и элементами массива в качестве значений.

let usersId = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];

function getUsers (arr) {
    return arr.reduce((a,b) => {
        a[b.id] = b
        return a
    },{})
}

console.log('Task N13', getUsers(usersId))