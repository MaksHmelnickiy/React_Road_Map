// Для описания ⁡⁢⁣⁣типа функции⁡ в интерфейсе, в нем нужно определить ⁡⁣⁣⁢сигнатуру вызова⁡. 
// Это похоже на объявление функции только со ⁡⁣⁣⁢списком параметров и типом возвращаемого значения⁡. 
// Каждый ⁡⁣⁣⁢параметр⁡ в списке должен иметь ⁡⁢⁣⁣имя⁡ и ⁡⁢⁣⁣тип⁡.

interface IFunc {
    myFunc: (name?: string) => void; // Функция с типом ⁡⁢⁣⁣void⁡ ⁡⁣⁣⁢не возвращает никакого значения⁡ или возвращает только⁡⁢⁣⁢ ⁡⁣⁢⁢undefined⁡⁡.
    callback: (message: string, callbackFn: () => void) => void; // Пример с ⁡⁢⁣⁣функцией⁡ обратного вызова (⁡⁢⁣⁣callback⁡):
}

const objFunc:IFunc = {
    myFunc: (name) => console.log('hello ', name),
    callback: (message, callbackFn) => {
        console.log('Received message:', message);
        callbackFn();
    },
}

objFunc.myFunc('Maks') // Hello Maks
objFunc.callback('Callback', () => console.log('Callback func Started')) // Пример с ⁡⁢⁣⁣функцией⁡ обратного вызова (⁡⁢⁣⁣callback⁡):