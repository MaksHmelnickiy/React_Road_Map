// Если ⁡⁢⁣⁣промис⁡ завершается с ⁡⁢⁣⁡⁢⁣⁢ошибкой⁡⁡, то управление переходит в ⁡⁣⁣⁢ближайший обработчик ошибок (⁡⁢⁣⁣.catch()⁡⁣⁣⁢)⁡ ⁡/

// ⁡⁢⁣⁣.catch⁡ перехватывает все виды ошибок в промисах: будь то вызов ⁡⁣⁣⁡⁢⁣⁢reject()⁡⁡ или ⁡⁢⁣⁢ошибка⁡, брошенная в обработчике при помощи ⁡⁢⁣⁣throw⁡.
// ⁡⁢⁣⁣.then⁡ также перехватывает ошибки таким же образом, если ⁡⁢⁣⁣задан второй аргумент⁡ (который является обработчиком ошибок).

// В примере ниже в ⁡⁢⁣⁣fetch ⁡указана ⁡⁢⁣⁢неправильная⁡ ссылка, и ⁡⁢⁣⁣catch⁡ перехватит ошибку .

fetch('https://no-such-server.blabla')
.then(responce => responce.json())
.catch(error => console.log(error)) // ⁡⁢⁣⁢TypeError⁡: Failed to fetch at ⁡⁣⁢⁣Error_with_promises.js⁡ /

// ⁡⁢⁣⁣.catch⁡ не обязательно должен быть сразу после ⁡⁢⁣⁢ошибки⁡, он может даже после нескольких .then/
// А лучше всего ⁡⁣⁣⁢для перехвата всех ⁡⁢⁣⁢ошибок⁡⁡ ⁡⁢⁣⁣.catch⁡ вызывать в самом ⁡⁢⁣⁣конце, ⁡⁣⁢⁣если ошибок нету то⁡ ⁡⁢⁣⁣.catch не вызовется⁡⁡. 

fetch('./userTest.json')
  .then(response => response.json())
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  .then(response => response.json())
  .then(githubUser => new Promise((resolve, reject) => {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser);
    }, 3000);
  }))
  .catch(error => alert(error.message)); //  ⁡⁣⁢⁣если ошибок нету то⁡ ⁡⁢⁣⁣.catch не вызовется⁡⁡. 


  new Promise(function(resolve, reject) {
    setTimeout(() => {
      throw new Error("Whoops!"); // что бы ⁡⁢⁣⁣выполнился ​‌‍​‌‍‌⁡⁢⁣⁣catch⁡​​⁡ нужно выполнить так: ⁡⁣⁣⁢reject⁡⁣⁢⁣(new Error(⁡⁢⁣⁣"Whoops!"⁡⁣⁢⁣))⁡⁡⁡;
    }, 1000);
  }).catch(alert); // этот catch ⁡⁢⁣⁢не выполнится⁡ .

  // ⁡⁢⁣⁣Невидимый try..catch⁡" вокруг промиса автоматически перехватывает ошибку и превращает её в отклонённый промис.
  // ⁡⁢⁣⁣try-catch⁡ говорится о том, что если внутри блока try-catch находится ⁡⁢⁣⁣settimeout⁡, то ошибка останется не обработанной, ибо выполнение кода отложено/

  // ​‌‍‌Если мы в ⁡⁢⁣⁣then⁡ пробросим ⁡⁢⁣⁢ошибку⁡, то эта ⁡⁢⁣⁢ошибка⁡ ⁡⁣⁣⁢перейдет к ближайшему обработчику ошибок catch⁡​.
  new Promise((resolve, reject) => {
    resolve("ок");
  }).then((result) => {
    throw new Error("Ошибка!"); // генерируем ошибку / и эта ошибка перебрасывается к ⁡⁢⁣⁣.catch⁡ .
  }).catch(alert); // Error: Ошибка! / ⁡⁢⁣⁣Ошибка строкой выше⁡ выполняется здесь