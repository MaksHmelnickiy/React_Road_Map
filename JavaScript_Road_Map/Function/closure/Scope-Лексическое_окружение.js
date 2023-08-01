// В JavaScript у каждой выполняемой функции, блока кода и скрипта есть связанный с ними внутренний (скрытый) объект,
// называемый ⁡⁢⁣⁣лексическим окружением LexicalEnvironment⁡.

// Объект ⁡⁢⁣⁣лексического окружения⁡ состоит ⁡⁣⁣⁢из двух частей⁡:
// ⁡⁣⁢⁣1.⁡ ⁡⁢⁣⁣Environment Record⁡⁡ – объект, в котором как свойства хранятся все локальные переменные (а также некоторая другая информация, такая как значение ⁡⁢⁣⁣this⁡).
// ⁡⁣⁢⁣2.⁡ ⁡⁢⁣⁣Ссылка на внешнее лексическое окружение⁡ – то есть то, которое соответствует коду снаружи (снаружи от текущих фигурных скобок)


// При запуске функции для неё автоматически создаётся ⁡⁣⁣⁢новое лексическое окружение⁡, для хранения ⁡⁢⁣⁣локальных переменных⁡ и ⁡⁢⁣⁣параметров вызова⁡.
let phrase = "Hello";
function say(name){
    console.log(`${name} + ${phrase}`)
}
say('Maks')

// Итак, в процессе вызова функции у нас есть ⁡⁣⁣⁢два лексических окружения⁡: ⁡⁢⁣⁣внутреннее⁡ (для вызываемой функции) и ⁡⁢⁣⁣внешнее⁡ (глобальное):
// ⁡⁣⁢⁣*⁡ Внутреннее лексическое окружение соответствует текущему выполнению ⁡⁢⁣⁣say⁡.
// ⁡⁣⁢⁣*⁡ В нём находится одна переменная ⁡⁢⁣⁣name⁡, ⁡⁣⁣⁢аргумент функции⁡. Мы вызываем⁡⁢⁣⁣ say("Maks")⁡, так что значение переменной ⁡⁣⁢⁣name равно "Maks"⁡.
// ⁡⁣⁢⁣*⁡ ⁡⁢⁣⁣Внешнее лексическое окружение⁡ – это глобальное лексическое окружение.
// ⁡⁣⁢⁣*⁡ В нём находятся переменная ⁡⁢⁣⁣phrase⁡ и ⁡⁢⁣⁣сама функция⁡.

// ​‌‍‌Когда код хочет получить ⁡⁣⁣⁢доступ к переменной⁡ ​– сначала происходит поиск во 
// ⁡⁢⁣⁢внутреннем лексическом окружении⁡, затем ⁡⁢⁣⁢во внешнем⁡⁡, затем в следующем и так далее, до ⁡⁢⁣⁣глобального⁡.

// Функция получает текущее значение внешних переменных, то есть их ⁡⁢⁣⁣последнее значение⁡ /

let names = "John";

function sayHi() {
  console.log("Hi, " + names);
}

names = "Pete"; // (*)
sayHi(); // Pete

// «⁡⁢⁣⁣Лексическое окружение⁡» – это специальный внутренний объект. Мы не можем получить его в нашем коде и изменять напрямую. 
// Сам движок JavaScript может ⁡⁣⁣⁢оптимизировать⁡⁡ его, ⁡⁣⁣⁢уничтожать⁡ неиспользуемые переменные для освобождения памяти
