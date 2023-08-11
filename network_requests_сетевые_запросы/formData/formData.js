// ⁡⁢⁣⁣FormData⁡ позволяет легко ⁡⁣⁣⁢собрать данные из формы⁡, включая ⁡⁣⁣⁢значения полей⁡ формы, ⁡⁣⁣⁢загруженные файлы⁡ и т.д., и ⁡⁢⁣⁣отправить их на сервер⁡. 
// Это удобно, когда вы хотите отправить данные формы с помощью ⁡⁣⁣⁢fetch, XMLHttpRequest⁡ или других технологий.

// ⁡⁣⁣⁢Cоздание формы⁡ /
const createEl = document.createElement('form')
createEl.id = 'form'
createEl.innerHTML = '<input type="text" name="name" /> <input type="text" name="id" /> <button type="submit">Send</button>'
document.body.append(createEl);

// реализация отправки с помощью ⁡⁢⁣⁣new FormData(...)⁡ и ⁡⁢⁣⁣fetch()⁡ /
//⁡⁢⁣⁣ посмореть поля⁡ которые мы отправляем, можно в ⁡⁣⁢⁣браузер⁡ ⁡⁣⁢⁡⁣⁣⁢=>⁡⁡ ⁡⁣⁢⁣network⁡ ⁡⁣⁣⁢=>⁡ ⁡⁣⁢⁣payload⁡ /
createEl.onsubmit = (async(e) => {
  e.preventDefault()
  
  const formData = new FormData(createEl);

  //⁡⁣⁣⁢​‌‍‌ Методы ⁡⁢⁣⁣𝐅𝐨𝐫𝐦𝐃𝐚𝐭𝐚​⁡⁡ /
  // ⁡⁣⁢⁡⁣⁣⁢1)⁡⁡ ⁡⁢⁣⁣formData.append⁡(⁡⁣⁢⁣name, value⁡) – добавляет к объекту поле с именем name и значением value,

  //⁡⁣⁣⁢ 2)⁡ ⁡⁢⁣⁣formData.append⁡(⁡⁣⁢⁣name, blob, fileName⁡) – добавляет поле, как будто в форме имеется элемент <input type="file">, 
  // третий аргумент fileName устанавливает имя файла (не имя поля формы)

  // ⁡⁣⁣⁢3)⁡ ⁡⁢⁣⁣formData.set⁡(⁡⁣⁢⁣name, value⁡), ⁡⁢⁣⁣formData.set⁡(⁡⁣⁢⁣name, blob, fileName⁡) - удаляет предыдущие поля с таким же именем, а append – нет. В этом их отличие.

  // ⁡⁣⁣⁢4)⁡ ⁡⁢⁣⁣formData.delete⁡⁡(⁡⁣⁢⁣name⁡) – удаляет поле с заданным именем name,

  // ⁡⁣⁣⁢5)⁡ ⁡⁢⁣⁣formData.get⁡(⁡⁣⁢⁣name⁡) – получает значение поля с именем name,

  // ⁡⁢⁡⁣⁣⁢6)⁡ ⁡⁢⁣⁣formData.has⁡⁡(⁡⁣⁢⁣name⁡) – если существует поле с именем name, то возвращает true, иначе false
  // ⁡⁢⁣⁢END⁡ ⁡⁣⁣⁢​‌‍‌Методы ⁡⁢⁣⁣𝐅𝐨𝐫𝐦𝐃𝐚𝐭𝐚​⁡⁡ /

  await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: formData
  })
  .then(resp => resp.json())
  .then(data => console.log(data));
})


