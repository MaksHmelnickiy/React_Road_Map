// ⁡⁣⁣⁢Метод fetch — это XMLHttpRequest нового поколения. ⁡
// Он предоставляет улучшенный интерфейс для осуществления ⁡⁢⁣⁣запросов к серверу⁡: как по части возможностей 
// и контроля над происходящим, 
// так и по синтаксису, так как построен на ⁡⁢⁣⁣промисах⁡.

let fetch_Req = fetch('./userTest.json')  // ⁡⁢⁣⁣.then⁡ в коде ниже выполняется, когда удалённый сервер ⁡⁣⁣⁢отвечает⁡ /
.then(function(response){
    // ⁡⁢⁣⁣response.text()⁡ возвращает ⁡⁣⁣⁢новый промис⁡,
    // который выполняется и возвращает полный ответ сервера,
    // когда он загрузится
    return response.json()
})
.then(function(text){
    // ...и здесь ⁡⁢⁣⁣содержимое⁡ полученного файла / 
    return console.log(JSON.stringify(text))
})
console.log('result', fetch_Req) // 


// ​‌‌‍Давайте попробуем с ⁡⁢⁣⁣гитхаба получить⁡ юзера которого мы записали в ⁡⁣⁣⁢userTest⁡.json​⁡ /

let fetch_user = fetch('./userTest.json')
.then(responce => responce.json())
.then(function (user) {
    // Ниже ⁡⁣⁣⁢получаем юзера из гитхаба⁡ из нашего запроса.
    return fetch(`https://api.github.com/users/${user.name}`)
})
.then(
    // Ниже ⁡⁣⁣⁢Загружаем ответ⁡ в формате json .
    getUser => getUser.json()
)
.then(function (user) {
    // Выводим полученную информацию о юзере , а именно его аватар;
    let img = document.createElement('img')
    img.setAttribute('src', user.avatar_url)
    document.body.append(img)
    function whereThis() {
        console.log(this.img)
    }

    return whereThis() // ⁡⁢⁣⁣Возвращаем user⁡ , что бы продолжить цепочку ⁡⁢⁣⁣.then()⁡ / 
})
// .then(a => console.log(a))

// ​‌‌‍Как ⁡⁢⁣⁢правило⁡, ⁡⁢⁣⁡⁣⁣⁢все асинхронные действия должны возвращать ⁡⁢⁣⁣промис​⁡⁡.


// Параметры ответа:

// ⁡⁢⁣⁣response.status⁡ – HTTP-код ответа,§§§§
// ⁡⁢⁣⁣response.ok⁡ – true, если статус ответа в диапазоне 200-299.
// ⁡⁢⁣⁣response.headers⁡ – похожий на Map объект с HTTP-заголовками.
// Методы для получения тела ответа:

// ⁡⁢⁣⁣response.text()⁡ – возвращает ответ как обычный текст,
// ⁡⁢⁣⁣response.json()⁡ – преобразовывает ответ в JSON-объект,
// ⁡⁢⁣⁣response.formData()⁡ – возвращает ответ как объект FormData (кодировка form/multipart, см. следующую главу),
// ⁡⁢⁣⁣response.blob()⁡ – возвращает объект как Blob (бинарные данные с типом),
// ⁡⁢⁣⁣response.arrayBuffer()⁡ – возвращает ответ как ArrayBuffer (низкоуровневые бинарные данные),
// Опции ⁡⁢⁣⁣fetch⁡, которые мы изучили на данный момент:

// ⁡⁢⁣⁣method⁡ – HTTP-метод,
// ⁡⁢⁣⁣headers⁡ – объект с запрашиваемыми заголовками (не все заголовки разрешены),
// ⁡⁢⁣⁣body⁡ – данные для отправки (тело запроса) в виде текста, FormData, BufferSource, Blob или UrlSearchParams.