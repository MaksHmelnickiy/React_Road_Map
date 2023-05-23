// Одним из самых важных подходов в ⁡⁢⁣⁣классах⁡ является ⁡⁣⁣⁢создание новых классов с помощью ⁡⁢⁣⁣наследования⁡⁡.

// Kлючевое слово ⁡⁢⁣⁣extends⁡, используется ⁡⁣⁣⁢для создания подкласса⁡/

// Kлючевое слово ⁡⁢⁣⁣super⁡ используется для ⁡⁣⁣⁢вызова конструктора родительского класса⁡ и доступа к его ⁡⁣⁣⁢свойствам и методам⁡ /

class Animal {
    nameAnimal: string;
    constructor(animal:string){
        this.nameAnimal = animal;
    }
    move(distance: number = 0){
        return this.nameAnimal + ' moved ' + distance + ' m.'
    }
}

class Snake extends Animal {
    constructor(name:string){
        super(name);
    }
    move(distance= 45) {
        return super.move(distance);
    }
}

class Horse extends Animal {
    constructor(name: string){
        super(name);
    }
    move(distance = 50){
        return super.move(distance - 5);
    }
}

let first = new Snake('My move').move(35)
let second = new Horse('Hello Horse').move()
console.log(first)
console.log(second)
// Классы ⁡⁢⁣⁣Horse⁡ и ⁡⁢⁣⁣Snake⁡ ⁡⁣⁣⁢основаны⁡ на классе ⁡⁣⁢⁣Animal⁡ и они получают ⁡⁣⁣⁢доступ к его возможностям⁡. Классы Snake и Horse ⁡⁣⁣⁢создают метод move⁡, 
// который ⁡⁢⁣⁣переопределяет метод⁡ ⁡⁣⁣⁢move⁡ из класса ⁡⁣⁢⁣Animal⁡, ⁡⁣⁣⁢придавая⁡ ему функциональность, специфичную для каждого из классов.