// Методы

// ⁡⁢⁣⁣Promise.all⁡(iterable)
// Ожидает исполнения всех промисов или отклонения любого из них.
// Возвращает промис, который исполнится после исполнения всех промисов в iterable. В случае, если любой из промисов будет ⁡⁢⁣⁢отклонён⁡, ⁡⁢⁣⁣Promise.all⁡ будет также ⁡⁢⁣⁢отклонён⁡.

// Порядок элементов массива ⁡⁢⁣⁣в точности соответствует⁡ порядку исходных промисов .
Promise.all([
    new Promise(resolve => setTimeout((resolve(1)), 1000)),
    new Promise(resolve => resolve(2)),
    new Promise(resolve => setTimeout((resolve(3)), 500)),
]).then(a => console.log(a)) // Result: ⁡⁣⁢⁣1,2,3⁡ / Возвращается массив.

// ⁡⁢⁣⁣Promise.allSettled⁡(iterable)
// Ожидает завершения всех полученных промисов (как исполнения так и отклонения).
// Возвращает промис, который исполняется когда все полученные промисы завершены (исполнены или отклонены), содержащий массив результатов исполнения полученных промисов.

// ⁡⁢⁣⁣Promise.race⁡(iterable)
// Ожидает исполнения или отклонения любого из полученных промисов.
// Возвращает промис, который будет исполнен или отклонён с результатом исполнения первого исполненного или отклонённого промиса из .iterable.

Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).then(alert); // 1

// ⁡⁢⁣⁣Promise.any⁡ - Метод очень похож на Promise.race, но ждёт только первый успешно выполненный промис, из которого берёт результат.

Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).then(alert); // 1

// ⁡⁢⁣⁣Promise.reject⁡(reason)
// Возвращает промис, выполнен с ошибкой.

// ⁡⁢⁣⁣Promise.resolve⁡(value)
// Возвращает промис, выполнен успешно.