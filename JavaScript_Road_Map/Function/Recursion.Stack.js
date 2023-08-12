// ⁡⁢⁣⁣Рекурсия⁡ - это когда функция вызывает ⁡⁢⁣⁢сама себя⁡. 
// Когда функция вызывает саму себя, это называется ⁡⁢⁣⁣шагом рекурсии⁡⁡. 
// ⁡⁢⁣⁣База рекурсии⁡ – это ⁡⁣⁣⁢конечная точка⁡ где больше не требуется что бы функция вызывала саму себя /

function pow (x, y){
    if(y == 1){
        return x // ⁡⁣⁣⁢База рекурсии ⁡/
    }
    else {
        return x * pow(x, y-1) // ⁡⁢⁣⁣Рекурсия⁡, ⁡⁣⁣⁢функция вызывает саму себя⁡ / шаг рекурсии /
    }
    
}
console.log(pow(2, 3)) // 8 // Вычисления вложеных вызовов имеет ⁡⁣⁣⁢ограниченое количество⁡ иначе будет ⁡⁢⁣⁣Infinity⁡ .

function tet(a){
  if(a == 1){
      return a
  }
  else {
      
      return a * tet(a - 1) // тоже что и ⁡⁣⁢⁣5 * 4 * 3 * 2 * 1⁡  /
  }
} 
console.log('Result: ', tet(5)) // 120

//⁣Контекст выполнения⁡ –специальная внутренняя структура данных, которая имеет информацию о вызове функции например (⁡⁢⁣⁢this⁡).

// Когда функция производит ⁡⁣⁣⁢вложенный вызов⁡, происходит ​‌‍‌⁡⁣⁣⁢следующее⁡​:

// ⁡⁣⁢⁣1.⁡ Выполнение текущей функции ⁡⁢⁣⁣приостанавливается⁡.
// ⁡⁣⁢⁣2.⁡ ⁡⁢⁣⁣Контекст выполнения⁡, связанный с ней, запоминается в специальной ⁡⁣⁣⁢структуре данных –⁡ ⁡⁢⁣⁢стеке⁡ контекстов выполнения.
// ⁡⁣⁢⁣3.⁡ Выполняются вложенные вызовы, ⁡⁢⁣⁣для каждого⁡ из которых создаётся свой контекст выполнения.
// ⁡⁣⁢⁣4.⁡ После их завершения старый контекст ⁡⁣⁣⁢достаётся из стека⁡, и выполнение внешней функции возобновляется с того места, 
//    где она была остановлена.

// ​‌‍‌⁡⁢⁣​‌‌‍⁡⁣⁢⁣Пример  ниже на подсчет зарплат⁡​⁡​ /

// ​‌‍‌⁡⁣⁣⁢Случай (1)⁡​, когда мы получили массив, является ⁡⁢⁣⁣базой рекурсии⁡, тривиальным случаем.
// ⁡⁣⁣⁡⁣⁣⁢​‌‍‌Случай (2)​⁡⁡, при получении объекта, является ⁡⁢⁣⁣шагом рекурсии⁡. Сложная задача разделяется на подзадачи для подотделов. 
// Они могут, в свою очередь, снова разделиться на подотделы, но рано или поздно это разделение закончится, 
// и решение сведётся к случаю (1).

let company = { // тот же самый объект, сжатый для краткости
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }], // подотдел sites /
      internals: [{name: 'Jack', salary: 1300}] // подотдел internals /
    }
  };
  
  // Функция для подсчёта суммы зарплат
  function sumSalaries(department) {
    if (Array.isArray(department)) { // ⁡⁣⁣⁢случай (1)⁡ /
      return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива /
    } else {                         // ⁡⁣⁣⁢случай (2)⁡ /
      let sum = 0;
      for (let subdep of Object.values(department)) {
        sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты /
      }
      return sum;
    }
  }
  
 console.log(sumSalaries(company)); // 6700

 // ​‌‌‍⁡⁣⁢⁣END⁡​ //