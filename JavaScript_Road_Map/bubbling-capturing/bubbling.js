// Если кликнуть на <p>, то мы увидим три оповещения: ⁡⁣⁢⁣p → div → form⁡.
// Этот процесс называется «⁡⁢⁣⁣всплытием»(bubbling)⁡ , потому что ⁡⁣⁣⁢события «всплывают» от внутреннего элемента вверх⁡ через родителей подобно тому, как всплывает пузырёк воздуха в воде.


// Событие ⁡⁢⁣⁣focus⁡ ⁡⁢⁣⁢не всплывает⁡.


// Самый глубокий элемент, который вызывает событие, называется ⁡⁢⁣⁣целевым элементом⁡, и он доступен через ⁡⁣⁣⁢event.target⁡.
// Отличия от this (=event.currentTarget):
// ⁡⁢⁣⁣event.currentTarget⁡ - показывает на текущий элемент где происходит событие
// ⁡⁢⁣⁣event.target⁡ – это «целевой» элемент, где изначально произошло событие.
// ⁡⁢⁣⁣this⁡ – это «текущий» элемент, до которого дошло всплытие, на нём сейчас выполняется обработчик.
let form = document.getElementById('form')
form.onclick = function(event) {
    event.target.style.backgroundColor = 'yellow';
  
    // браузеру нужно некоторое время, чтобы зарисовать всё жёлтым
    console.log(event.target) //  будет отображать клик внутри самой форм где могу быть и другие div, p и т.д.
    console.log(this) //this будет равносильно если бы мы вызвали event.currentTarget
    setTimeout(() => {
      alert("target = " + event.target.tagName + ", this=" + this.tagName);
      event.target.style.backgroundColor = ''
    }, 0);
  };

{/* 
<body onclick="alert(`сюда всплытие не дойдёт`)">
  <button onclick="event.stopPropagation()">Кликни меня</button> // event.stopPropagation() - останавливает клик и по кнопке он не будет происходить в отличии от всего body
</body>  
*/}
// ⁡⁢⁣⁣event.stopPropagation()⁡ - ⁡⁢⁣⁢останавливает⁡ тукщий обработчик события
//⁡⁢⁣⁣ event.stopImmediatePropagation()⁡. ⁡⁢⁣⁢останавливает⁡ все обработчики текущего события.


// Метод ⁡⁢⁣⁣addEventListener⁡ позволяет добавлять несколько обработчиков на одно событие одного элемента , например:
function handler1() {
    alert('Спасибо!');
  };

  function handler2() {
    alert('Спасибо ещё раз!');
  }
elem.addEventListener("click", handler1); // Спасибо!
elem.addEventListener("click", handler2); // Спасибо ещё раз!

document.addEventListener('click', function (e) {  // выводим эелемент в консоле на который был клик
    console.log(e.target)
})