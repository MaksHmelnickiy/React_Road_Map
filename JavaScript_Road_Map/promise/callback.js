// ⁡⁢⁣⁣Callback⁡ это функция, которая должна быть выполнена после того, ⁡⁣⁣⁢как другая функция завершила выполнение⁡ 
// (отсюда и название: ⁡⁢⁣⁣callback⁡ — функция обратного вызова)


function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script); // ⁡⁢⁢⁣Узнать как работает данная функция onload⁡ / 
    console.log(script.onload) // лежит  ⁡⁣⁢⁣() => callback(script)⁡ / 
    document.head.append(script);
  }
  
loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', callback => { // ⁡⁣⁢⁣Передаем ⁡⁢⁣⁣callback⁡ ⁡⁣⁢функцию⁡⁡ /
    console.log(`Здорово, скрипт ${callback.src} загрузился`);
});

function func (){
    console.log('Загрузится первым')
}
func()

// Для того ⁡⁣⁣⁢чтобы сделать последовательность колбеков⁡ нужно:
// Ниже улучшенная версия loadScript, которая умеет отслеживать ошибки загрузки:
function moreCallbackAndError(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script); // в случае ⁡⁢⁣⁣успешной⁡ загрузки /
    script.onerror = () => callback(new Error(`Не удалось загрузить скрипт ${src}`)); // если загрузить скрипт н⁡⁢⁣⁣е удалось⁡ /

    document.head.append(script);
  }

  moreCallbackAndError('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', step2)

function step2(error){
    if(error){
        console.log('FATAL')
    }
    else {
        console.log('Вызовется 2')
        moreCallbackAndError('https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js', step3)
    }
}

function step3(error){
    if(error){
        console.log('FATAL')
    }
    else {
        console.log('Вызовется 3')
        moreCallbackAndError('https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js', )
    }
}