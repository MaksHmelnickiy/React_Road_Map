"use strict";
// Одним из самых важных подходов в ⁡⁢⁣⁣классах⁡ является ⁡⁣⁣⁢создание новых классов с помощью ⁡⁢⁣⁣наследования⁡⁡.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Kлючевое слово ⁡⁢⁣⁣extends⁡, используется ⁡⁣⁣⁢для создания подкласса⁡/
// Kлючевое слово ⁡⁢⁣⁣super⁡ используется для ⁡⁣⁣⁢вызова конструктора родительского класса⁡ и доступа к его ⁡⁣⁣⁢свойствам и методам⁡ /
var Animal = /** @class */ (function () {
    function Animal(animal) {
        this.nameAnimal = animal;
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        return this.nameAnimal + ' moved ' + distance + ' m.';
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distance) {
        if (distance === void 0) { distance = 45; }
        return _super.prototype.move.call(this, distance);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distance) {
        if (distance === void 0) { distance = 50; }
        return _super.prototype.move.call(this, distance - 5);
    };
    return Horse;
}(Animal));
var first = new Snake('My move').move(35);
var second = new Horse('Hello Horse').move();
console.log(first);
console.log(second);
// Классы ⁡⁢⁣⁣Horse⁡ и ⁡⁢⁣⁣Snake⁡ ⁡⁣⁣⁢основаны⁡ на классе ⁡⁣⁢⁣Animal⁡ и они получают ⁡⁣⁣⁢доступ к его возможностям⁡. Классы Snake и Horse ⁡⁣⁣⁢создают метод move⁡, 
// который ⁡⁢⁣⁣переопределяет метод⁡ ⁡⁣⁣⁢move⁡ из класса ⁡⁣⁢⁣Animal⁡, ⁡⁣⁣⁢придавая⁡ ему функциональность, специфичную для каждого из классов.
