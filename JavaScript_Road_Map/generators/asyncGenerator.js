// Как мы уже знаем, в JavaScript есть ⁡⁢⁣⁣генераторы⁡, и они являются ⁡⁣⁣⁢перебираемыми⁡.
// Давайте вспомним ⁡⁢⁣⁣генератор⁡ последовательности ⁡⁣⁣⁢из главы Генераторы⁡. Он генерирует последовательность значений от ⁡⁣⁢⁣start⁡ до ⁡⁣⁢⁣end⁡:
function* gen(start, end){
    for(let i = start; i<= end; i++){
        yield i
    }
}
for(let i of gen(1,5)){
    console.log(i) // 1, потом 2, потом 3, потом 4, потом 5
}
// В ⁡⁢⁣⁣обычных генераторах⁡ мы ⁡⁢⁣⁢не можем использовать⁡ ⁡⁢⁣⁣await⁡. Все значения должны поступать ⁡⁣⁣⁢синхронно⁡: 
// в ⁡⁢⁣⁣for..of⁡ нет места для задержки, это ⁡⁣⁣⁢синхронная конструкция⁡.


// Но что если нам нужно использовать ⁡⁢⁣⁣await⁡ в теле ⁡⁣⁣⁢генератора⁡? Для выполнения ⁡⁣⁣⁢сетевых запросов⁡, например.
// Нет проблем, просто добавьте в начале ⁡⁢⁣⁣async⁡, например, вот так:

async function* genAsync(start,end){
    for (let i = start; i <= end; i++){
        await new Promise(resolve => setTimeout(resolve,1000))
        yield i
    }
};

(async () => {
    for await(let i of genAsync(1,5)){
        console.log(i)
    }
})()

// Теперь у нас есть ⁡⁣⁣⁢асинхронный генератор⁡, который можно перебирать с помощью ⁡⁢⁣⁣for await ... of⁡ 
// С технической точки зрения,⁡⁣⁣⁢ ещё одно отличие асинхронного генератора⁡ заключается в том, что его метод ⁡⁢⁣⁣generator.next()⁡ теперь тоже ⁡⁣⁣⁢асинхронный и возвращает промисы⁡.

// ​‌‍‌⁡⁣⁣⁢Асинхронно перебираемые объекты⁡​ /
// Если хотим ⁡⁣⁣⁢добавить асинхронные действия в ⁡⁢⁣⁣генератор⁡⁡, нужно заменить ⁡⁢⁣⁣Symbol.iterator⁡⁣⁢⁣ на⁡ ⁡⁢⁣⁣асинхронный Symbol.asyncIterator⁡:
let range = {
    from: 1,
    to: 5,
  
    async *[Symbol.asyncIterator]() { // то же, что и [Symbol.asyncIterator]: async function*()
      for(let value = this.from; value <= this.to; value++) {
  
        // пауза между значениями, ожидание
        await new Promise(resolve => setTimeout(resolve, 1000));
  
        yield value;
      }
    }
  };
  
  (async () => {
  
    for await (let value of range) {
      console.log(value); // 1, потом 2, потом 3, потом 4, потом 5
    }
  
  })();
// ​‌‍‌⁡⁣⁣⁢Пример из реальной практики⁡​ /
// В веб-разработке мы часто встречаемся с ⁡⁢⁣⁣потоками данных⁡, когда они поступают по частям. ⁡⁣⁣⁢Например, загрузка или выгрузка большого файла⁡.

// Мы бы хотели сделать функцию ⁡⁢⁣⁣fetchCommits(repo)⁡, которая будет ⁡⁣⁣⁢получать коммиты⁡, ⁡⁣⁣⁢делая запросы⁡ всякий раз, когда это необходимо. 
// И пусть она сама ⁡⁣⁣⁢разбирается со всем, что касается нумерации страниц⁡, для нас это будет просто⁡⁢⁣⁣ for await..of⁡.

async function* fetchCommits(repo) {
    let url = `https://api.github.com/repos/${repo}/commits`;
  
    while (url) {
      const response = await fetch(url, { // (1)
        headers: {'User-Agent': 'Our script'}, // ⁡⁣⁣⁢GitHub⁡ ⁡⁢⁣⁣требует заголовок⁡ ⁡⁣⁣⁢user-agent⁡ /
      });
      console.log('responce', response)
      
      const body = await response.json(); // (2) ответ в формате JSON (⁡⁢⁣⁣массив коммитов⁡)
  
      // (3)⁡⁣⁣⁢ Ссылка на следующую страницу находится в заголовках⁡, извлекаем её
      let nextPage = response.headers.get('Link').match(/<(.*?)>; rel="next"/);
      nextPage = nextPage && nextPage[1];
  
      url = nextPage;
  
      for(let commit of body) { // (4) ⁡⁣⁣⁢вернуть коммиты один за другим⁡, до окончания страницы
        yield commit;
      }
    }
  }

  (async () => {

    let count = 0;
  
    for await (const commit of fetchCommits('javascript-tutorial/en.javascript.info')) {
  
      console.log(commit.author.login);
  
      if (++count == 100) { // остановимся на 100 коммитах
        break;
      }
    }
  
  })();


 //  ​‌‌‍⁡⁢⁣⁣метод match()⁡​ производит поиск по ⁡⁣⁣⁢заданной строке⁡ с использованием регулярного выражения (глобальный объект RegExp) и ⁡⁣⁣⁢возвращает массив⁡, содержащий результаты этого поиска.