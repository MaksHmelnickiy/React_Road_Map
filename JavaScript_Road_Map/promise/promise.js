// ⁡⁢⁣⁣Promise⁡ – это специальный объект, который содержит своё состояние. 
// У ⁡⁢⁣⁣Promise⁡ есть ⁡⁣⁣⁢три состояния⁡ Вначале ⁡⁢⁣⁡⁣⁢⁣pending⁡⁡ («ожидание»),  затем – одно из: 
// ⁡⁣⁢⁣fulfilled⁡ («выполнено успешно») или ⁡⁣⁢⁣rejected⁡ («выполнено с ошибкой»).

// Объект ⁡⁢⁣⁣Promise⁡ используется для отложенных и асинхронных вычислений.
// На ⁡⁢⁣⁣promise⁡ можно навешивать ⁡⁣⁣⁢колбэки двух типов⁡:

// ⁡⁢⁣⁣onFulfilled⁡ – срабатывают, когда promise в состоянии «⁡⁣⁣⁢выполнен успешно⁡».
// ⁡⁢⁣⁣onRejected⁡ – срабатывают, когда promise в состоянии «⁡⁣⁣⁢выполнен с ошибкой⁡».

// Объект ⁡⁣⁣⁢Promise⁡ создаётся при помощи ключевого слова ⁡⁢⁣⁣new⁡ /

// методы ⁡⁢⁣⁣then()⁡ и ⁡⁢⁣⁣catch()⁡ сами возвращают промис, их можно вызывать цепочкой, создавая соединения.

const promise1 = new Promise((resolve, reject) => { // ⁡⁣⁣⁡⁢⁣⁣resolve⁡⁡ - выполнен успешно
    setTimeout(() => {  // Функция, переданная в конструкцию ⁡⁢⁣⁡⁣⁢⁣new⁡ ⁡⁢⁣⁣Promise⁡⁡, называется ⁡⁢⁣⁣исполнитель⁡ (⁡⁢⁣⁣executor⁡)
      resolve('foo');
    }, 300);

  });

const promise2 = new Promise((resolve, reject) => { // ⁡⁣⁣⁡⁢⁣⁢reject⁡⁡ - выполнен с ошибкой
    setTimeout(() => {
      reject('Error: myErr');
    }, 300);
  });
  
  promise1.then((value) => {
    console.log(value);

  });
  
  console.log(promise1);


// ************ ​‌‍‌⁡⁣⁣⁢Promise Пример констуктора Promise⁡​⁡ ************
// Мы можем наблюдать две вещи, запустив код ниже:

let promise = new Promise(function(resolve, reject) {
  // эта функция выполнится автоматически, при вызове ⁡⁢⁣⁣new Promise⁡ /

  // через 1 секунду сигнализировать, что задача выполнена с результатом "⁡⁣⁢⁣done⁡"
  setTimeout(() => resolve("done"), 1000);
});

// Функция-исполнитель запускается сразу же при вызове ⁡⁢⁣⁣new Promise⁡.
// Исполнитель получает два аргумента: ⁡⁢⁣⁣resolve⁡ и ⁡⁢⁣⁢reject⁡ — это функции, встроенные в JavaScript, поэтому нам не нужно их писать. 
// Нам нужно лишь позаботиться, чтобы исполнитель вызвал одну из них по готовности.

let promiseError = new Promise(function(resolve, reject) {
  resolve("done");

  reject(new Error("…")); // Вызывайте ⁡⁢⁣⁢reject⁡ с объектом ⁡⁣⁢⁣new Error()⁡ /
  setTimeout(() => resolve("…")); // игнорируется
});

// Исполнитель должен вызвать что-то одно:⁡⁢⁣⁣ resolve⁡ или ⁡⁢⁣⁢reject⁡. Состояние промиса может быть изменено только ⁡⁣⁣⁢один раз⁡.
// Все ⁡⁣⁣⁢последующие вызовы⁡ ⁡⁢⁣⁣resolve⁡ и ⁡⁢⁣⁢reject⁡ будут ⁡⁣⁣⁡⁢⁣⁢проигнорированы⁡⁡:

// ​‌‍‌⁡⁣⁣⁢then(responce,reject)⁡​ вызывается так :
let variantPromise = 0 // 0 - error ; 1 - complited /
new Promise(function(resolve,reject){
  if(variantPromise === 0){
    reject(new Error('error on second argument'))
  }
  else if (variantPromise === 1) {
    resolve('Complited!')
  }
})
.finally(console.log('finaly')) // ​‌‍‌⁡⁢⁣⁣finally⁡​ пропускает ⁡⁢⁣⁢reject⁡ или ⁡⁣⁣⁢resolve⁡. Сюда можно вписывать левые функции /
.then(
  resultResolve => console.log('result:', resultResolve), // если ⁡⁢⁣⁣успешно⁡ то обрабатываем ⁡⁣⁢⁣resolve⁡ /
  error => console.log('my test error', error) // если⁡⁢⁣⁢ ошибка⁡ то обрабатываем ⁡⁣⁢⁣reject⁡ / 
)


