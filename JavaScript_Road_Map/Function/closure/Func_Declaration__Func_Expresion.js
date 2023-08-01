// ⁡⁢⁣⁣Function Declaration⁡ - функция, объявленная в основном потоке кода.
// ⁡⁢⁣⁣Function Expression ⁡- объявление функции в контексте какого-либо выражения, например присваивания.

// Основное ⁡⁢⁣⁢их отличие⁡ в тоm что ⁡⁢⁣⁣Function Declaration⁡ мы можем вызвать ⁡⁣⁣⁢раньше⁡ объявленной функции, 
// a ⁡⁢⁣⁣Function Expression⁡ только ⁡⁣⁣⁡⁣⁣⁢после ее объявления⁡ в контексте кого либо выражения например ⁡⁣⁢⁣var sumExt = func⁡...

// Function Declaration
console.log(sumDecl(3,4)) // ⁡⁢⁣⁢Result: 7⁡ /
function sumDecl(a, b) {
    return a + b;
}
  
// Function Expression
console.log(sumExp(3,5)) // ⁡⁢⁣⁢Ошибка⁡ /
let sumExp = function(a, b) {
    return a + b;
}

// Это из-за того, что ⁡⁣⁣⁢JavaScript⁡ перед запуском кода ⁡⁣⁣⁢ищет⁡ в нём 
// ⁡⁢⁣⁣Function Declaration⁡ (их легко найти: они не являются частью выражений и ⁡⁣⁣⁢начинаются со слова ⁡⁢⁣⁣function⁡⁡) 
// и обрабатывает их. А ⁡⁢⁣⁣Function Expression⁡ создаются ⁡⁣⁣⁢в процессе⁡ выполнения выражения, в котором созданы, 
// в данном случае – функция ⁡⁣⁣⁢будет создана⁡⁡ при операции присваивания ⁡⁣⁢⁣let sumExp = function⁡...