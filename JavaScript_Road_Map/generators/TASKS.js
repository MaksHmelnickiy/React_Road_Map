// Задачей является создать функцию-генератор pseudoRandom(seed), которая получает seed и создаёт генератор с указанной формулой.
// ⁡⁣⁣⁢Task N1⁡ /

function* pseudoRandom(seed){
    for(;seed;){
        seed = seed * 16807 % 2147483647
        yield seed
    }
}
let gen = pseudoRandom(1)
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log((Math.random() * 100).toFixed())
