// Используйте localStorage, чтобы хранить пользовательские настройки на стороне клиента. Вот как это может работать:
// Создайте страницу настроек, где пользователь может выбрать цветовую схему
// При выборе настроек, сохраняйте их в localStorage. Например, вы можете использовать ключи theme 
// для хранения соответствующих значений.
// При загрузке вашего приложения проверяйте localStorage на наличие сохраненных настроек. Если они есть, применяйте их к приложению.
// Позвольте пользователю изменять настройки в любое время, обновляя их в localStorage и внутри приложения.

const changeColors = (item) => {
  localStorage.clear()
  localStorage.setItem('key', item)
  document.body.style.backgroundColor = item;
  console.log(localStorage.getItem('key'))
}
changeColors(localStorage.getItem('key'));
