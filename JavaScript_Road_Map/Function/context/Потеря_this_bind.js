// метод⁡⁢⁣⁣ bind⁡ в отличии от ⁡⁣⁣⁢apply и call⁡ не вызывает функцию ⁡⁣⁣⁡⁣⁢⁣а возвращает её с привязанным контекстом⁡⁡.

// Обычно ⁡⁢⁣⁣bind⁡ применяется для ⁡⁣⁣⁢фиксации⁡ ⁡⁢⁣⁣this⁡ в методе объекта, чтобы передать его в качестве ⁡⁣⁣⁢колбэка⁡. Например, для ⁡⁣⁢⁣setTimeout⁡.

let prod2 = {
    name: 'Amd',
    price: 50,
    getPrice(currency = '$') { 
        console.log('getPrice', currency + this.name +  this.price)
    }
}

let getBind = prod2.getPrice.bind(prod2) 

setTimeout(getBind, 1000) // result: getPrice $undefined //⁡⁢⁣⁢ ПРОИЗОШЛА ПОТЕРЯ КОНТЕКСТА⁡
// что бы решить эту проблему нужно использовать ⁡⁣⁣⁢либо обёртку⁡ ⁡⁣⁢⁣ setTimeout(function(){prod2.getPrice()},1000)⁡ либо метод ⁡⁢⁣⁣bind()⁡ строка 13
// Это сработает если в переменную prod2.getPrice

// ⁡⁣⁣⁢​‌‍‌Потеря⁡ «⁡⁢⁣⁣this⁡»​ /


let user = {
    firstName: "Вася",
    sayHi() {
      console.log(`Привет, ${this.firstName}!`);
    }
  };
  
  setTimeout(user.sayHi, 1000); // Привет, undefined! // ⁡⁢⁣⁢this утерян⁡, чтобы не утерять нужно использовать ⁡⁢⁣⁣bind⁡ /
  let forBind = user.sayHi.bind(user)
  setTimeout(forBind, 500)