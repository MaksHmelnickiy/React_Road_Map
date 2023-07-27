"use strict";
// TypeScript реализует ⁡⁣⁣⁢объектно-ориентированный подход⁡, в нем есть полноценная поддержка ⁡⁢⁣⁣классов⁡ /
// ⁡⁢⁣⁣Класс⁡ в TypeScript - это ⁡⁣⁢⁣шаблон⁡ для создания ⁡⁢⁣⁣объектов⁡ и ⁡⁣⁣⁢инкапсулирует функциональность⁡, которую должен иметь объект. 
// Класс определяет ⁡⁣⁣⁢состояние⁡ и ⁡⁣⁣⁢поведение⁡, которыми обладает ⁡⁢⁣⁣объект⁡. 
// В классах можно ⁡⁣⁣⁢определять типы⁡ для любых данных, которые будут в классе1.
var Gretter = /** @class */ (function () {
    function Gretter(message) {
        // ⁡⁢⁣⁣Конструктор⁡ класса Greete
        this.greeting = message;
    }
    Gretter.prototype.greet = function () {
        return 'Hello' + this.greeting;
    };
    return Gretter;
}());
var greeter = new Gretter(' world');
console.log(greeter.greet());
// ​‌‍‌⁡⁣⁣⁢Описание действия кода выше⁡​. 
// Объявлен новый класс ⁡⁢⁣⁣Greeter⁡. Этот класс имеет три пункта: ⁡⁣⁣⁢свойство greeting⁡, ⁡⁣⁣⁢конструктор⁡, и ⁡⁣⁣⁢метод greet⁡. 
// В последней строке создается экземпляр класса ⁡⁢⁣⁣Greeter⁡, используя ⁡⁢⁣⁣new⁡. Он ⁡⁣⁣⁢вызывает конструктор⁡, 
// что определен ранее, ⁡⁣⁣⁢создает новый объект⁡, и ⁡⁣⁣⁢запускает конструктор⁡ для его инициализации.
