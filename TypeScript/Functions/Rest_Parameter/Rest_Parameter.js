"use strict";
// Oпределить функцию с ⁡⁣⁣⁢неопределенным набором параметров⁡ с помощью синтаксиса ⁡⁢⁣⁣...Rest⁡. Этот синтаксис называется "⁡⁢⁣⁣rest parameter⁡" 
// и позволяет ⁡⁣⁣⁢передавать переменное количество аргументов⁡ в функцию. 
// Параметр ⁡⁢⁣⁣Rest⁡ должен иметь ⁡⁢⁣⁣тип массива []⁡ . Вот пример:
function logValues() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    values.forEach(function (value) { return console.log(value); });
}
logValues("Hello", 42); // output: "Hello", 42 // Если мы например передадим сюда ⁡⁢⁣⁣true⁡ то выдаст ⁡⁢⁣⁢ошибку⁡ компиляции. 
