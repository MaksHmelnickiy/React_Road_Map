// ⁡⁢⁣⁣Композиция генераторов⁡ – это особенная возможность генераторов, которая позволяет ⁡⁣⁣⁢прозрачно «встраивать» генераторы друг в друга⁡.
// Для генераторов есть особый синтаксис ⁡⁢⁣⁣yield*⁡, который позволяет ⁡⁣⁣⁢«вкладывать» генераторы один в другой⁡ (осуществлять их композицию).

// Вот генератор с композицией:
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {

  yield* generateSequence(1, 57);

  yield* generateSequence(65, 90);

  yield* generateSequence(97, 122);

}
// Директива ⁡⁢⁣⁣yield*⁡ ⁡⁣⁣⁢делегирует выполнение другому генератору ⁡⁣⁢⁣generateSequence()⁡⁡. Этот термин означает,
// что ⁡⁢⁣⁣yield*⁡ ⁡⁣⁢⁣generateSequence()⁡ перебирает генератор ⁡⁣⁢⁣generateSequence()⁡ и прозрачно направляет его вывод наружу.
// Как если бы значения были сгенерированы ⁡⁣⁣⁢внешним генератором⁡.

for(let item of generatePasswordCodes()){
  console.log(item)
}