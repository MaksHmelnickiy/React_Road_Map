// ⁡⁣⁣⁢Задача N1⁡ . // Что выведет следующий код?
let fruits = ["Яблоко", "Ананас ", "Вишня"]
let cart = fruits;
cart.push('Банан');
console.log('Задача 1', fruits) // выведет fruits вместе с ⁡⁢⁣⁣"Банан"⁡-Потому, что массивы – это объекты. Обе переменные сart и fruits являются ссылками на один и тот же массив.

// ⁡⁣⁣⁢Задача N2⁡⁡ . // 
// Создайте массив styles с элементами «Джаз» и «Блюз».
let styles = ['Jaz', 'Bluz'];
// Добавьте «Рок-н-ролл» в конец.
styles.push('Rok');
// Замените значение в середине на «Классика». 
// Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
let fix = Math.floor(styles.length / 2)
styles[fix] = 'Classik';
console.log('Задача 2' , styles)
// Удалите первый элемент массива и покажите его.
let first = styles.shift()
console.log(first)
// Вставьте Рэп и Регги в начало массива.
styles.unshift('Pop','Reggi')
console.log(styles)

// ⁡⁣⁣⁢Задача №3⁡   /

let arrS = ['a' , 'b', 'c'];
arrS.push(function(){
    console.log('Задача 3' , this)
})

arrS[3](); // ​‌‌‍‍⁡⁢⁢⁡⁣⁢⁡⁣⁣⁢Спросить Почему именно 𝟯⁡ ​⁡⁡. // результат  a,b,function(){...}

// ⁡⁣⁣⁢Задача №4⁡ /
// Напишите функцию sumInput(), которая:
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
function sumInp(){
    let sumArr = [];
    let first = 0;
    for(i=0; isNaN(first) === false; i++) {
     first = prompt('Num', 0);
     if(first === null || first === '') break;
     sumArr.push(Number(first));
    }
    console.log('Задача 4. Сумма: ',sumArr.reduce((sum, current) => sum + current))
    console.log('Задача 4. Массив: ',sumArr)
}
// sumInp()

// ⁡⁣⁣⁢Задача №⁡⁣⁣⁢5⁡ /
let statArr = [1, -2, 3, 4, -9, 6]
let emptyArr = [-1,-2,-3]
function getMaxSubSum(a){
    let sum = 0
    for(let i = 0; i<a.length; i++){
        if(Number(a[i]) > 0){
            sum +=  Number(a[i]); 
        }

    }
    console.log('Задача N5: ', sum)
}
getMaxSubSum(statArr)