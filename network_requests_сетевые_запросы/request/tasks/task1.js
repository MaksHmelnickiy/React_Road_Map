// Создайте асинхронную функцию ⁡⁢⁣⁣getUsers(names)⁡, которая получает на вход массив логинов пользователей GitHub, 
// запрашивает у GitHub информацию о них и возвращает массив объектов-пользователей.
// Информация о пользователе GitHub с логином USERNAME доступна по ссылке: ⁡⁢⁣⁣https://api.github.com/users/USERNAME⁡.
// ⁡⁣⁣⁢Важные детали⁡:
// На каждого пользователя должен приходиться один запрос fetch.
// Запросы не должны ожидать завершения друг друга. Надо, чтобы данные приходили как можно быстрее.
// Если какой-то запрос завершается ошибкой или оказалось, что данных о запрашиваемом пользователе нет,
//  то функция должна возвращать null в массиве результатов.

const getUsers = (async(names) => {

  const fetchData = [];
  for(let i of names){
    await fetch(`https://jsonplaceholder.typicode.com/users/${i}`)
    .then(response => response.status !== 200 ? null : response.json())
    .then(data => fetchData.push(data))
  }
  const result = await Promise.all(fetchData)
  return result;
})
const names = [1, 3, 1777, 5]
getUsers(names).then(response => console.log('response', response))
