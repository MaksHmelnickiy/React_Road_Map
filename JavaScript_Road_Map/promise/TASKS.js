// Promise  ⁡⁣⁣⁢then,catch, finaly⁡
// Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.
// Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, 
// так чтобы мы могли добавить к нему .then:

function delay(ms) {
  return new Promise(function(resolve, reject){
      return setTimeout(() => resolve()  , ms)
  })
}

delay(3000).then(() => console.log('выполнилось через 3 секунды')).then(() => console.log('last'))

console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log(1)
  resolve(2)
})

promise1.then(res => {
  console.log(res)
})

console.log('end');

// Task ⁡⁣⁣⁢​‌‍‌Async, Await​⁡ ; 

// Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch: /
//⁡⁣⁣⁢ Task N2⁡ :
async function loadJsonRes(url) {
  // return fetch(url)
  //   .then(response => {
  //     if (response.status == 200) {
  //       return response.json();
  //     } else {
  //       throw new Error(response.status);
  //     }
  //   })

  let response = fetch(url)
  if(await response.status == 200){
    return await response.json()
  }
  else {
    throw new Error(response.status);
  }
}

loadJsonRes('no-such-user.json').catch(err => console.log('Task 2: ', err)) // (3) // Выброшенная из ⁡⁢⁣⁣loadJson⁡ ⁡⁢⁣⁢ошибка⁡ перехватывается с помощью ⁡⁢⁣⁣.catch⁡.

// Есть «обычная» функция. Как можно внутри неё получить результат выполнения async–функции?
// ⁡⁣⁣⁢Task N3⁡: 
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  wait().then(item => console.log('Task 3: ',item)) // 10 / Здесь нужно думать о вызове ⁡⁢⁣⁣функции async⁡, как о ⁡⁣⁣⁢промисе⁡. И просто воспользоваться ⁡⁢⁣⁣.then⁡:
}
f();
