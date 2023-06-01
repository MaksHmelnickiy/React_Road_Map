"use strict";
// Для описания ⁡⁢⁣⁣типа функции⁡ в интерфейсе, в нем нужно определить ⁡⁣⁣⁢сигнатуру вызова⁡. 
// Это похоже на объявление функции только со ⁡⁣⁣⁢списком параметров и типом возвращаемого значения⁡. 
// Каждый ⁡⁣⁣⁢параметр⁡ в списке должен иметь ⁡⁢⁣⁣имя⁡ и ⁡⁢⁣⁣тип⁡.
var objFunc = {
    myFunc: function (name) { return console.log('hello ', name); },
    callback: function (message, callbackFn) {
        console.log('Received message:', message);
        callbackFn();
    },
};
objFunc.myFunc('Maks'); // Hello Maks
objFunc.callback('Callback', function () { return console.log('Callback func Started'); }); // Пример с ⁡⁢⁣⁣функцией⁡ обратного вызова (⁡⁢⁣⁣callback⁡):
