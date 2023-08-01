// У слова ⁡⁢⁣⁣​‌‌‍async​⁡⁡ один простой смысл: эта функция всегда ​‌‍‌⁡⁢⁣⁣возвращает промис⁡​. 
// Значения других типов оборачиваются в завершившийся ⁡⁢⁣⁣успешно промис⁡ автоматически.

// При работе с ⁡⁢⁣⁣async/await⁡ можно ⁡⁢⁣⁢обходиться без⁡ ⁡⁢⁣⁣promise.then/catch⁡, иногда всё-таки приходится использовать эти методы (на верхнем уровне вложенности, например). 

async function f() { // ⁡⁣⁣⁢оборачивает⁡ его ⁡⁢⁣⁣в Promise⁡ /
  return new Error('hello');
}
f().then(console.log); // 1 // .


// ​‌‌‍⁡⁢⁣⁣await​⁡ - работает только ⁡⁣⁣⁢внутри async–функций⁡ /
// ⁡⁢⁣⁣await⁡ ⁡⁢⁣⁢нельзя⁡ использовать в⁡⁣⁣⁢ обычных функциях⁡ /
// ⁡⁢⁣⁣await⁡ ⁡⁢⁣⁢нельзя⁡ использовать ⁡⁣⁣⁢на верхнем уровне вложенности⁡ /

// Ключевое слово⁡⁢⁣⁣ await⁡ заставляет ⁡⁣⁣⁢интерпретатор JavaScript ждать⁡ до тех пор, пока ⁡⁢⁣⁣промис⁡ ⁡⁣⁣⁢справа от⁡⁢⁣⁣ await⁡ ⁡⁣⁣⁢не выполнится⁡ .

async function f(){
  let promise = new Promise((resolve, reject) => setTimeout(() => resolve('Done'), 1000))
  let result = await promise // будет ждать, пока промис не выполнится (*)
  console.log(result) // консоль будет ждать пока не выполнится промис на строку выше .
}
f()

// Давайте перепишем пример ⁡⁢⁣⁣showAvatar()⁡ из раздела Цепочка промисов с помощью ⁡⁢⁣⁣async/await⁡:
// Нам нужно заменить вызовы ⁡⁢⁣⁣.then⁡ на ⁡⁢⁣⁣await⁡.
// И добавить ключевое слово ⁡⁢⁣⁣async⁡ перед объявлением функции.

async function showAwatar(){
  let a = await fetch('./userTest.json')
  console.log('a', a)
  let b = await a.json() // аналог then
  console.log('b', b)
  let c = await fetch(`https://api.github.com/users/${b.name}`)
  console.log('c', c)
  let d = await c.json()
  console.log('d', d)

  let img = document.createElement('img')
  img.setAttribute('src', d.avatar_url)
  document.body.append(img)
  return d
}
showAwatar().then(item => console.log('then after func: ', item)) // так же после вызова ⁡⁢⁣⁣асунк функции⁡ мы можем добавить ⁡⁢⁣⁣then⁡ ;

// ⁡⁣⁣⁢​‌‌‍Обработка⁡ ⁡⁢⁣⁢ошибок⁡​ /

// ​‌‍‌⁡⁣⁣⁢async/await и promise.then/catch 
// При работе с ⁡⁢⁣⁣async/await⁡, ⁡⁢⁣⁣.then⁡ используется ⁡⁣⁣⁢нечасто⁡, так как ⁡⁢⁣⁣await⁡ ⁡⁣⁣⁢автоматически⁡ ожидает завершения выполнения промиса. 
// В этом случае обычно (но не всегда) гораздо удобнее перехватывать ошибки,⁡⁣⁣⁢ используя ⁡⁢⁣⁣try..catch⁡⁡, нежели чем ⁡⁢⁣⁣.catch⁡.

// Но на верхнем уровне вложенности (⁡⁣⁣⁢вне async–функций⁡) ⁡⁢⁣⁣await⁡ использовать ⁡⁢⁣⁢нельзя⁡, поэтому ⁡⁢⁣⁣.then/catch⁡ для обработки ⁡⁣⁣⁢финального результата⁡ или ⁡⁢⁣⁢ошибок⁡ – обычная практика.

// В ⁡⁢⁣⁣асунки функциях⁡ лучше всего перехватывать ⁡⁢⁣⁢ошибки⁡ с помощью ⁡⁢⁣⁣try, catch⁡ .
async function f2() {
  try {
    let response = await fetch('/no-user-here');
    let user = await response.json();
  } catch(err) {
    // ⁡⁣⁣⁢перехватит⁡ ⁡⁢⁣⁢любую ошибку⁡ в блоке try: и в fetch, и в response.json /
    console.log('Error: ', err);
  }
}
f2()

// перехватить ⁡⁢⁣⁣без try, catch⁡: можно способом ниже.
async function f3() {
  let responce = fetch('/no-user-here')
}

f3().catch((err) => console.log('error wtich only .catch()',  err))