// Вызов ⁡⁢⁣⁣arr.sort()⁡ / ⁡⁢⁣⁣arr.sort(fn)⁡ сортирует массив на месте, меняя в нём порядок элементов. 
// По умолчанию элементы сортируются как строки.

// На самом деле от ⁡⁢⁣⁣функции сравнения⁡ требуется любое ⁡⁣⁣⁡⁣⁢⁣положительное число⁡⁡, 
// чтобы сказать ⁡⁣⁣⁢«больше»⁡, и ⁡⁣⁢⁣отрицательное число⁡, чтобы сказать ⁡⁣⁣⁢«меньше»⁡.

let arrSort = [ 1, 2, 5, 3, 4, 7, 6, 33 ];

arrSort.sort();
console.log('sort', arrSort);

// Функция должна ⁡⁢⁣⁣для пары значений⁡ возвращать:
function compare(a, b) {
    if (a > b) return 1; // если первое значение больше второго
    if (a == b) return 0; // если равны
    if (a < b) return -1; // если первое значение меньше второго
  }

//Метод ⁡⁢⁣⁣arr.reverse()⁡ меняет порядок элементов в arr на обратный.
let arrReverse = [1, 2, 3, 4, 5];
arrReverse.reverse();

console.log('reverse', arrReverse);